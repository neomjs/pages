/**
 * @summary Writes one folder per outside contributor, badges/<login>-<id>/, from GitHub's public merge record.
 *
 * A folder holds the account's record (index.html) and its badge in three forms. The address names the account by
 * GitHub's numeric id, so a badge cannot be shown at a rung its account does not hold, and a freed login cannot
 * inherit one. The rungs, the outside test, the folder name, the pasted line and the launch time (BADGES_SINCE)
 * come from neomjs/neo's buildScripts/util, never from a copy here.
 *
 *     node badges/generate.mjs --neo <engine checkout> [--full]
 *         The scheduled run. It reads GitHub (GITHUB_TOKEN raises the limits) and rewrites every folder under
 *         badges/ and the ledger. --full recounts every account, not only those with a new merge.
 *
 *     node badges/generate.mjs --neo <engine checkout> --dry --fixture badges/fixture.json [--out <dir>] [--sheet]
 *         Renders a fixture without the network into <dir>, a temporary folder by default. badges/ is not touched.
 *
 *     node badges/generate.mjs --neo <engine checkout> --dry --since <ISO time>
 *         A rehearsal against GitHub: what a run would write if BADGES_SINCE were that time.
 */
import crypto                         from 'node:crypto';
import fs                             from 'node:fs';
import os                             from 'node:os';
import path                           from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {FORMS, renderBadge, renderRecord, renderSheet} from './art.mjs';

const here          = path.dirname(fileURLToPath(import.meta.url)),
      args          = process.argv.slice(2),
      flag          = name => args.includes(name),
      option        = name => args.includes(name) ? args[args.indexOf(name) + 1] : undefined,
      RECORD        = 'org:neomjs is:public is:pr is:merged',
      SEARCH_GAP_MS = 2100,     // the search API allows 30 queries a minute
      OVERLAP_MS    = 3600000,  // search indexes a merge late, so a run re-reads the hour before the newest it knows
      LOGIN         = /^[a-z\d][a-z\d-]{0,38}$/i,
      FOLDER        = /^[a-z\d][a-z\d-]{0,38}-\d+$/,
      stamp         = time => `${new Date(time).toISOString().slice(0, 19)}Z`,
      warn          = text => console.warn(`${process.env.GITHUB_ACTIONS ? '::warning::' : 'warning: '}${text}`);

/**
 * @summary GitHub's public record. Searches are spaced so that a run stays under the search limit.
 * @param {String} [token] Raises the rate limits; the record itself is public
 * @returns {Object} `{account, mergedSince, mergesOf}`
 */
function githubSource(token) {
    const headers = {
        Accept                : 'application/vnd.github+json',
        'User-Agent'          : 'neomjs-contributor-badges',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(token && {Authorization: `Bearer ${token}`})
    };

    let lastSearch = 0;

    async function get(url) {
        const response = await fetch(`https://api.github.com${url}`, {headers});

        if (response.status === 404) {
            return null
        }

        if (!response.ok) {
            throw new Error(`GitHub answered ${response.status} to ${url}`)
        }

        return response.json()
    }

    async function search(query, extra = {}) {
        const wait = lastSearch + SEARCH_GAP_MS - Date.now();

        if (wait > 0) {
            await new Promise(resolve => setTimeout(resolve, wait))
        }

        lastSearch = Date.now();

        const result = await get(`/search/issues?${new URLSearchParams({q: query, per_page: '100', ...extra})}`);

        if (!result || result.incomplete_results) {
            throw new Error(`GitHub's search gave no complete answer to "${query}"`)
        }

        return result
    }

    // A search answers at most 1,000 results, so a window that holds more is read in two halves.
    async function mergedSince(from, to) {
        const query = `${RECORD} merged:${from}..${to}`,
              first = await search(query);

        if (first.total_count > 1000) {
            const middle = stamp((Date.parse(from) + Date.parse(to)) / 2);

            if (middle === from || middle === to) {
                throw new Error(`More than 1,000 merges between ${from} and ${to}`)
            }

            return [...await mergedSince(from, middle), ...await mergedSince(middle, to)]
        }

        const items = first.items;

        for (let page = 2; items.length < first.total_count; page++) {
            items.push(...(await search(query, {page: String(page)})).items)
        }

        return items
    }

    return {
        account    : id => get(`/user/${id}`),
        mergedSince,
        mergesOf   : async login => {
            const {total_count: total, items} = await search(`${RECORD} author:${login}`, {order: 'asc', sort: 'created'});

            return {items, total}
        }
    }
}

/**
 * @summary The same three reads from a fixture file, for a run without the network.
 * @param {Object[]} accounts `{id, login, type, association, merges: {count, first, last}}`
 * @returns {Object} `{account, mergedSince, mergesOf}`
 */
function fixtureSource(accounts) {
    const item = (account, mergedAt) => ({
        author_association: account.association ?? 'CONTRIBUTOR',
        pull_request      : {merged_at: mergedAt},
        user              : {id: account.id, login: account.login, type: account.type ?? 'User'}
    });

    return {
        account    : async id => accounts.find(account => account.id === id) ?? null,
        mergedSince: async (from, to) => accounts
            .filter(account => account.merges.last >= from && account.merges.last <= to)
            .map(account => item(account, account.merges.last)),
        mergesOf   : async login => {
            const account = accounts.find(candidate => candidate.login.toLowerCase() === login.toLowerCase());

            return account
                ? {items: [item(account, account.merges.first), item(account, account.merges.last)], total: account.merges.count}
                : {items: [], total: 0}
        }
    }
}

const tidy = ({id, logins = [], count, firstMerge, team}) => ({id, logins, count, firstMerge, ...(team && {team: true})}),
      seal = ({cursor, accounts}) => crypto.createHash('sha256').update(JSON.stringify({cursor, accounts})).digest('hex');

/**
 * @summary Brings a ledger into its written shape: accounts by id, fields in one order.
 * @param {Object} ledger `{cursor, accounts}`
 * @returns {Object}
 */
function shape({cursor = null, accounts = []}) {
    return {cursor, accounts: [...accounts].map(tidy).sort((a, b) => a.id - b.id)}
}

/**
 * @summary Admits the opt-out list: a JSON array of numeric account ids and nothing else. A string such as "4242"
 * equals no account's id, so a list that held one would skip nobody and its holder would keep a folder.
 * @param {Function} read Answers the parsed list; a throw counts as unreadable
 * @returns {Set<Number>}
 */
function admitOptout(read) {
    let list;

    try {
        list = read()
    } catch {
        // refused below, with the same sentence
    }

    if (!Array.isArray(list) || !list.every(id => Number.isSafeInteger(id) && id > 0)) {
        throw new Error('badges/optout.json is not a JSON array of numeric account ids such as [4242]: nothing is written.')
    }

    return new Set(list)
}

async function main() {
    const dry         = flag('--dry'),
          fixtureFile = option('--fixture'),
          neo         = path.resolve(option('--neo') ?? path.join(here, '../../neo')),
          util        = file => import(pathToFileURL(path.join(neo, 'buildScripts/util', file)).href);

    if ((fixtureFile || option('--since')) && !dry) {
        throw new Error('--fixture and --since write nothing under badges/: add --dry.')
    }

    const [{isOutsideHuman}, {BADGES_SINCE, RUNGS, badgeFolder, badgeLine, standing}] =
              await Promise.all([util('claimResponse.mjs'), util('contributorStanding.mjs')]).catch(error => {
                  throw new Error(`The standing module of neomjs/neo did not load from ${neo}: ${error.message}`)
              }),
          fixture = fixtureFile && JSON.parse(fs.readFileSync(fixtureFile, 'utf8')),
          since   = option('--since') ?? fixture?.badgesSince ?? BADGES_SINCE;

    if (!since) {
        console.log('BADGES_SINCE is unset: no folder is written and none is removed.');
        return
    }

    const stored = fixture ? fixture.ledger : JSON.parse(fs.readFileSync(path.join(here, 'ledger.json'), 'utf8')),
          ledger = shape(stored),
          // The run seals the ledger it writes. A ledger whose seal does not match was edited by hand, and nothing
          // in it is carried over unchecked: not a count, not the cursor, not an account that no longer answers.
          sealed = Boolean(fixture) || stored.digest === seal(ledger),
          optout = admitOptout(() => fixture ? fixture.optout : JSON.parse(fs.readFileSync(path.join(here, 'optout.json'), 'utf8'))),
          source = fixture ? fixtureSource(fixture.accounts) : githubSource(process.env.GITHUB_TOKEN),
          now    = stamp(fixture?.now ?? Date.now()),
          byId   = new Map(ledger.accounts.map(account => [account.id, account])),
          due    = new Set();

    if (!sealed) {
        warn('badges/ledger.json was changed by hand: every account is counted again from GitHub.');
        ledger.cursor = null
    }

    const from = stamp(Math.max(Date.parse(since), ledger.cursor ? Date.parse(ledger.cursor) - OVERLAP_MS : 0));

    // 1. Who merged since the last run. An account enters the ledger only here, so only after the launch.
    for (const merge of await source.mergedSince(from, now)) {
        const {id} = merge.user;

        if (isOutsideHuman(merge) && !optout.has(id)) {
            byId.has(id) || byId.set(id, tidy({id}));
            due.add(id);

            if (!ledger.cursor || merge.pull_request.merged_at > ledger.cursor) {
                ledger.cursor = merge.pull_request.merged_at
            }
        }
    }

    for (const id of optout) {
        byId.delete(id)
    }

    if (!sealed) {
        byId.forEach(account => due.add(account.id))
    } else if (flag('--full')) {
        // An account that joined the team keeps its last outside standing and is not counted again
        byId.forEach(account => account.team || due.add(account.id))
    }

    // 2. One search per account that is due
    for (const id of due) {
        const account = byId.get(id),
              user    = await source.account(id);

        if (!user || !LOGIN.test(user.login)) {
            warn(`Account ${id} ${user ? `has a login this generator does not write (${JSON.stringify(user.login)})` : 'no longer answers'}: ${sealed ? 'left as it was' : 'dropped'}.`);
            sealed || byId.delete(id);
            continue
        }

        const {items, total} = await source.mergesOf(user.login),
              first          = items.map(merge => merge.pull_request.merged_at).sort()[0],
              known          = sealed ? account : {};

        account.logins = [...account.logins.filter(login => login.toLowerCase() !== user.login.toLowerCase()), user.login];

        if (items.length > 0 && !items.some(isOutsideHuman)) {
            account.team = true;
            continue
        }

        if (total < (known.count ?? 0)) {
            // Search sometimes answers low for a while; a count that is right never goes down by itself
            warn(`${user.login} has ${total} merged pull requests on record, fewer than the ${known.count} counted before: the count stays.`)
        }

        account.count      = Math.max(known.count ?? 0, total);
        account.firstMerge = [known.firstMerge, first].filter(Boolean).sort()[0];
        delete account.team
    }

    // 3. Every folder again, from the ledger alone
    const folders = new Map();

    for (const account of byId.values()) {
        const login                   = account.logins.at(-1),
              {rung, next, remaining} = standing(account.count ?? 0);

        if (!rung || !login || !account.firstMerge) {
            continue
        }

        const current = badgeFolder(login, account.id),
              lines   = Object.fromEntries(FORMS.map(form => [form.key, badgeLine(login, account.id, form.key)])),
              badges  = FORMS.map(form => [`${form.key}.svg`, renderBadge(form.key, {login, rung, rungs: RUNGS})]);

        for (const name of account.logins) {
            const folder = badgeFolder(name, account.id);

            if (!FOLDER.test(folder)) {
                throw new Error(`"${folder}" is no folder name for a badge.`)
            }

            folders.set(folder, Object.fromEntries([...badges, ['index.html', renderRecord({
                ...account, folder: current, formerLogin: folder === current ? null : name, lines, login, next, remaining, rung
            })]]))
        }
    }

    const written = shape({accounts: [...byId.values()], cursor: ledger.cursor}),
          root    = !dry ? here : option('--out') ? path.resolve(option('--out')) : fs.mkdtempSync(path.join(os.tmpdir(), 'neo-badges-'));

    if (dry) {
        fs.mkdirSync(root, {recursive: true});

        if (fs.readdirSync(root).length > 0) {
            throw new Error(`${root} is not empty.`)
        }
    } else {
        // A folder nobody would write again goes: a hand-made one, or that of an account that asked to be left out
        fs.readdirSync(root, {withFileTypes: true})
            .filter(entry => entry.isDirectory())
            .forEach(entry => fs.rmSync(path.join(root, entry.name), {force: true, recursive: true}))
    }

    for (const [folder, files] of folders) {
        fs.mkdirSync(path.join(root, folder));
        Object.entries(files).forEach(([name, content]) => fs.writeFileSync(path.join(root, folder, name), content))
    }

    fs.writeFileSync(path.join(root, 'ledger.json'), `${JSON.stringify({...written, digest: seal(written)}, null, 2)}\n`);

    if (dry && flag('--sheet')) {
        fs.writeFileSync(path.join(root, 'sheet.html'), renderSheet([...folders.keys()]))
    }

    console.log(`${folders.size} folders for ${written.accounts.length} accounts in the ledger, ${due.size} recounted, merges read from ${from}${dry ? `\n${root}` : ''}`)
}

main().catch(error => {
    console.error(process.env.GITHUB_ACTIONS ? `::error::${error.message}` : error.message);
    process.exit(1)
});
