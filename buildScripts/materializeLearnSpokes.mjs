import {spawnSync}                              from 'node:child_process';
import {existsSync, statSync, utimesSync}       from 'node:fs';
import {cp, mkdir, readFile, rm, writeFile}     from 'node:fs/promises';
import {dirname, posix, relative, resolve, sep} from 'node:path';

/**
 * @module buildScripts.materializeLearnSpokes
 * @summary Materializes `docs/public-manifest.json`-admitted Markdown guides from pinned 40-hex spoke commits into a
 * freshly restored `node_modules/neo.mjs/learn/` tree, stamps each guide's own unshallow git commit timestamp into
 * filesystem `mtime` and `seo.json`, rewrites relative links into manifest-declared `sourceLinkRoots` to pinned GitHub
 * blob/tree URLs, and composes the unified Portal `learn/tree.json` with fail-closed anchor and collision checks.
 */

const
    EXPECTED_SCHEMA = 'public-manifest.v1',
    SHA40_RE        = /^[0-9a-f]{40}$/,
    FENCE_RE        = /^ {0,3}(`{3,}|~{3,})/,
    INLINE_CODE_RE  = /(`[^`\n]+`)/g,
    LINK_TARGET_RE  = /\]\(([^()[\]\s]+)\)/g,
    EXTERNAL_RE     = /^(?:https?:|mailto:)/i;

/**
 * @summary Checks that `value` is a normalized repository-relative path without leading `/` or `..` segments.
 * @param {*} value
 * @returns {Boolean}
 */
function isNormalizedRelPath(value) {
    return typeof value === 'string' && value !== '' && value !== '.' && !value.startsWith('/') &&
        value !== '..' && !value.startsWith('../') && posix.normalize(value) === value
}

/**
 * @summary Appends a single trailing slash to `dir` so prefix checks match path segments (`ai/` vs `aix/`).
 * @param {String} dir
 * @returns {String}
 */
function asDirPrefix(dir) {
    return dir.endsWith('/') ? dir : `${dir}/`
}

/**
 * @summary Verifies `checkoutDir` is an unshallow git repository so per-file `git log -1 -- <file>` resolves each
 * guide's true last-change commit rather than a shallow fetch boundary.
 * @param {String} checkoutDir
 * @param {String} spokeName
 */
export function assertUnshallowGitCheckout(checkoutDir, spokeName) {
    if (!existsSync(resolve(checkoutDir, '.git'))) {
        throw new Error(`[learn-spokes] Spoke "${spokeName}" checkout at ${checkoutDir} lacks .git history.`)
    }

    const res = spawnSync('git', ['-C', checkoutDir, 'rev-parse', '--is-shallow-repository'], {
        encoding: 'utf-8',
        stdio   : ['pipe', 'pipe', 'ignore']
    });

    if (res.status !== 0 || res.stdout.trim() !== 'false') {
        throw new Error(
            `[learn-spokes] Refusing shallow git checkout for spoke "${spokeName}" (${checkoutDir}); full commit history is required for accurate per-guide lastmod dates.`
        )
    }
}

/**
 * @summary Reads the current 40-hex `HEAD` commit SHA from `checkoutDir` when `.git` is present.
 * @param {String} checkoutDir
 * @returns {String|null}
 */
function readGitHeadSha(checkoutDir) {
    if (!existsSync(resolve(checkoutDir, '.git'))) {
        return null
    }
    const res = spawnSync('git', ['-C', checkoutDir, 'rev-parse', 'HEAD'], {encoding: 'utf-8'});
    if (res.status === 0) {
        const sha = res.stdout.trim();
        if (SHA40_RE.test(sha)) {
            return sha
        }
    }
    return null
}

/**
 * @summary Determines whether a spoke-relative target path resolves to a GitHub `tree` (directory) or `blob` (file),
 * querying the commit tree in sparse checkouts where source directories outside `learn/` are not checked out on disk.
 * @param {String} checkoutDir
 * @param {String} resolvedAbsPath
 * @param {String} spokeRelPath
 * @param {String} rawTarget
 * @returns {'tree'|'blob'}
 */
function resolveGitHubObjectKind(checkoutDir, resolvedAbsPath, spokeRelPath, rawTarget) {
    if (rawTarget.endsWith('/')) {
        return 'tree'
    }
    if (existsSync(resolvedAbsPath)) {
        return statSync(resolvedAbsPath).isDirectory() ? 'tree' : 'blob'
    }
    if (existsSync(resolve(checkoutDir, '.git'))) {
        const res = spawnSync('git', ['-C', checkoutDir, 'cat-file', '-t', `HEAD:${spokeRelPath}`], {encoding: 'utf-8'});
        if (res.status === 0 && res.stdout.trim() === 'tree') {
            return 'tree'
        }
    }
    return 'blob'
}

/**
 * @summary Rewrites relative Markdown links outside fenced/inline code that resolve into `sourceRoots` (outside
 * `learn/`, e.g. `ai/`) into pinned `https://github.com/<spoke>/<blob|tree>/<commit>/<path>` URLs, leaving admitted
 * intra-`learn/` guide links untouched for Portal/SSR route resolution.
 * @param {Object} options
 * @param {String} options.markdown
 * @param {String} options.srcFile
 * @param {String} options.checkoutDir
 * @param {String} options.spoke
 * @param {String} options.commitRef
 * @param {String[]} options.sourceRoots Normalized directory prefixes with trailing `/`.
 * @param {Set<String>} options.admittedAbsFiles
 * @returns {String}
 */
export function rewriteSpokeSourceLinks({
    markdown,
    srcFile,
    checkoutDir,
    spoke,
    commitRef,
    sourceRoots,
    admittedAbsFiles
}) {
    if (!sourceRoots.length) {
        return markdown
    }

    let fence = null;

    return String(markdown).split('\n').map(rawLine => {
        const
            hasCr = rawLine.endsWith('\r'),
            line  = hasCr ? rawLine.slice(0, -1) : rawLine,
            match = FENCE_RE.exec(line);

        if (fence) {
            if (match && match[1][0] === fence[0] && match[1].length >= fence.length) {
                fence = null
            }
            return rawLine
        }

        if (match) {
            fence = match[1];
            return rawLine
        }

        const rewritten = line.split(INLINE_CODE_RE).map((segment, index) => {
            if (index % 2 === 1) {
                return segment
            }

            return segment.replace(LINK_TARGET_RE, (fullMatch, rawTarget) => {
                const
                    cleanTarget = rawTarget.split(/[?#]/)[0],
                    suffix      = rawTarget.slice(cleanTarget.length);

                if (!cleanTarget || EXTERNAL_RE.test(rawTarget) || rawTarget.startsWith('#') || rawTarget.startsWith('/')) {
                    return fullMatch
                }

                const resolved = resolve(dirname(srcFile), cleanTarget);
                if (admittedAbsFiles.has(resolved) || admittedAbsFiles.has(`${resolved}.md`)) {
                    return fullMatch
                }

                const spokeRelPath = relative(checkoutDir, resolved).split(sep).join('/');
                if (!spokeRelPath || spokeRelPath === '..' || spokeRelPath.startsWith('../')) {
                    return fullMatch
                }

                if (sourceRoots.some(dir => `${spokeRelPath}/`.startsWith(dir))) {
                    const kind = resolveGitHubObjectKind(checkoutDir, resolved, spokeRelPath, cleanTarget);
                    return `](https://github.com/${spoke}/${kind}/${commitRef}/${spokeRelPath}${suffix})`
                }

                return fullMatch
            })
        }).join('');

        return hasCr ? `${rewritten}\r` : rewritten
    }).join('\n')
}

/**
 * @summary Reads the Unix commit timestamp (seconds) for `relFile` from an unshallow git checkout without falling back
 * to `HEAD`, returning `null` if `relFile` has no committed history.
 * @param {String} checkoutDir
 * @param {String} relFile
 * @returns {Number|null}
 */
export function readGitCommitEpoch(checkoutDir, relFile) {
    if (!existsSync(resolve(checkoutDir, '.git'))) {
        return null
    }

    const res = spawnSync('git', ['-C', checkoutDir, 'log', '-1', '--format=%ct', '--', relFile], {encoding: 'utf-8'});
    if (res.status === 0) {
        const sec = Number.parseInt(res.stdout.trim(), 10);
        if (Number.isFinite(sec) && sec > 0) {
            return sec
        }
    }

    return null
}

/**
 * @summary Resolves a declared `parentId` (e.g. `"Benefits"`, `"AgentInterfaces"`, `"Guides"`) to the actual folder
 * `id` in the hub's base `learn/tree.json` (`"Benefits"`, `"AgentInterfaces"`, `"guides"`).
 * @param {Map<String, Object>} hubFoldersByLowerId
 * @param {String} declaredParentId
 * @param {String} spokeName
 * @returns {String}
 */
function resolveHubParentId(hubFoldersByLowerId, declaredParentId, spokeName) {
    const folder = hubFoldersByLowerId.get(String(declaredParentId || '').toLowerCase());
    if (!folder) {
        throw new Error(`[learn-spokes] Spoke "${spokeName}" declares unknown hub parentId "${declaredParentId}".`)
    }
    return folder.id
}

/**
 * @summary Collects a folder node and all of its descendants from a spoke's `tree.data` in spoke-authored order.
 * @param {Object[]} treeData
 * @param {String} rootFolderId
 * @param {String} targetHubParentId
 * @param {String} groupName
 * @returns {Object[]}
 */
function extractSubtree(treeData, rootFolderId, targetHubParentId, groupName) {
    const rootFolder = treeData.find(node => node.id === rootFolderId && node.isLeaf === false);
    if (!rootFolder) {
        throw new Error(`[learn-spokes] Missing spoke tree folder "${rootFolderId}".`)
    }

    const
        includedIds = new Set([rootFolderId]),
        out         = [{
            ...rootFolder,
            name    : groupName,
            parentId: targetHubParentId,
            isLeaf  : false,
            ...(targetHubParentId !== 'Benefits' ? {collapsed: true} : {})
        }];

    let added = true;
    while (added) {
        added = false;
        for (const node of treeData) {
            if (!includedIds.has(node.id) && node.parentId && includedIds.has(node.parentId)) {
                includedIds.add(node.id);
                added = true
            }
        }
    }

    for (const node of treeData) {
        if (node.id !== rootFolderId && includedIds.has(node.id)) {
            out.push({...node})
        }
    }

    return out
}

/**
 * @summary Validates `contentPins.learnSpokes` entries before fetching or writing files.
 * @param {Object[]} learnSpokes
 */
export function validateLearnSpokePins(learnSpokes) {
    if (!Array.isArray(learnSpokes) || learnSpokes.length === 0) {
        throw new Error('[learn-spokes] contentPins.json must declare a non-empty "learnSpokes" array.')
    }

    const seenSpokes = new Set();

    for (const [index, item] of learnSpokes.entries()) {
        if (!item || typeof item.spoke !== 'string' || !item.spoke.trim()) {
            throw new Error(`[learn-spokes] learnSpokes[${index}] must declare a non-empty "spoke" name.`)
        }
        if (seenSpokes.has(item.spoke)) {
            throw new Error(`[learn-spokes] Duplicate spoke "${item.spoke}" in contentPins.json.`)
        }
        seenSpokes.add(item.spoke);

        if (typeof item.repository !== 'string' || !item.repository.trim()) {
            throw new Error(`[learn-spokes] Spoke "${item.spoke}" must declare a repository URL.`)
        }
        if (typeof item.commit !== 'string' || !SHA40_RE.test(item.commit)) {
            throw new Error(`[learn-spokes] Spoke "${item.spoke}" must pin an exact 40-hex commit SHA (got ${JSON.stringify(item.commit)}).`)
        }
    }
}

/**
 * @summary Restores `neoDir/learn/` from `pristineLearnDir`, materializes admitted Markdown guides from unshallow
 * spoke checkouts into `neoDir/learn/`, composes the unified `learn/tree.json`, and stamps per-guide git commit
 * `lastmod` dates into filesystem `mtime` and `seo.json` (pruning delisted spoke `/learn/*` entries).
 * @param {Object} options
 * @param {String} options.pristineLearnDir Pristine Engine `learn/` directory (`engineClonePath/learn`).
 * @param {Object} [options.baseTree] Optional pre-parsed `learn/tree.json`; defaults to `pristineLearnDir/tree.json`.
 * @param {String} options.neoDir Target `node_modules/neo.mjs` directory.
 * @param {Array<{spoke: String, checkoutDir: String, commit?: String}>} options.spokeCheckouts Unshallow spoke checkouts.
 * @param {String} [options.seoJsonPath] Optional `seo.json` path (`apps/portal/resources/data/seo.json` under `neoDir`).
 * @returns {Promise<{totalLeafCount: Number, totalMarkdownLeafCount: Number, spokeLeafCount: Number, routeLastmods: Object<String, String>}>}
 */
export async function materializeLearnSpokes({
    pristineLearnDir,
    baseTree = null,
    neoDir,
    spokeCheckouts,
    seoJsonPath = resolve(neoDir, 'apps/portal/resources/data/seo.json')
}) {
    if (!pristineLearnDir || !existsSync(resolve(pristineLearnDir, 'tree.json'))) {
        throw new Error(`[learn-spokes] Missing pristine Engine learn/tree.json at ${pristineLearnDir}.`)
    }

    const
        resolvedPristineLearn = resolve(pristineLearnDir),
        learnDest             = resolve(neoDir, 'learn');

    if (resolvedPristineLearn === learnDest) {
        throw new Error('[learn-spokes] pristineLearnDir must be distinct from target neoDir/learn so re-runs restore a clean tree.')
    }

    const resolvedBaseTree = baseTree || JSON.parse(await readFile(resolve(resolvedPristineLearn, 'tree.json'), 'utf-8'));
    if (!resolvedBaseTree || !Array.isArray(resolvedBaseTree.data)) {
        throw new Error('[learn-spokes] baseTree must contain a "data" array.')
    }

    const
        hubFoldersByLowerId = new Map(),
        claimedNodeIds      = new Map(),
        claimedRoutes       = new Map(),
        splicesByHubParent  = new Map(),
        copyPlan            = [],
        routeLastmods       = {};

    for (const node of resolvedBaseTree.data) {
        if (!node || typeof node.id !== 'string') {
            throw new Error('[learn-spokes] Invalid node in base learn/tree.json.')
        }
        claimedNodeIds.set(node.id, 'neomjs/neo');

        if (node.isLeaf === false) {
            hubFoldersByLowerId.set(node.id.toLowerCase(), node)
        } else if (!node.route) {
            claimedRoutes.set(`/learn/${node.id}`, 'neomjs/neo')
        }
    }

    let spokeLeafCount = 0;

    for (const spokeSpec of spokeCheckouts) {
        const
            {spoke, checkoutDir, commit = null} = spokeSpec,
            manifestPath = resolve(checkoutDir, 'docs/public-manifest.json');

        assertUnshallowGitCheckout(checkoutDir, spoke);

        const headSha = readGitHeadSha(checkoutDir);
        if (commit !== null && (!SHA40_RE.test(String(commit)) || (headSha && commit !== headSha))) {
            throw new Error(
                `[learn-spokes] Spoke "${spoke}" commit must be an exact 40-hex SHA matching checkout HEAD (commit=${JSON.stringify(commit)}, head=${headSha}).`
            )
        }

        const commitRef = commit || headSha;
        if (!commitRef || !SHA40_RE.test(commitRef)) {
            throw new Error(`[learn-spokes] Spoke "${spoke}" requires an exact 40-hex commit SHA.`)
        }

        if (!existsSync(manifestPath)) {
            throw new Error(`[learn-spokes] Missing docs/public-manifest.json in spoke "${spoke}".`)
        }

        const manifest = JSON.parse(await readFile(manifestPath, 'utf-8'));
        if (manifest?.schema !== EXPECTED_SCHEMA) {
            throw new Error(`[learn-spokes] Invalid schema in ${spoke}: expected "${EXPECTED_SCHEMA}".`)
        }
        if (manifest?.spoke !== spoke) {
            throw new Error(`[learn-spokes] Manifest spoke mismatch: expected "${spoke}", got "${manifest?.spoke}".`)
        }
        if (!Array.isArray(manifest?.entries) || manifest.entries.length === 0) {
            throw new Error(`[learn-spokes] Spoke "${spoke}" manifest must contain a non-empty entries array.`)
        }

        for (const [field, insideLearn] of [['excludedDirs', true], ['sourceLinkRoots', false]]) {
            const dirs = manifest?.[field];
            if (dirs !== undefined && !(Array.isArray(dirs) && dirs.every(dir => isNormalizedRelPath(dir) && asDirPrefix(dir).startsWith('learn/') === insideLearn))) {
                throw new Error(`[learn-spokes] Spoke "${spoke}" ${field} must be an array of normalized directories ${insideLearn ? 'inside' : 'outside'} learn/.`)
            }
        }

        const
            excludedPrefixes = (manifest.excludedDirs || []).map(asDirPrefix),
            sourceRoots      = (manifest.sourceLinkRoots || []).map(asDirPrefix);

        const treePath = resolve(checkoutDir, manifest.treeFile || '');
        if (!existsSync(treePath)) {
            throw new Error(`[learn-spokes] Missing treeFile "${manifest.treeFile}" in spoke "${spoke}".`)
        }

        const spokeTree = JSON.parse(await readFile(treePath, 'utf-8'));
        if (!Array.isArray(spokeTree?.data)) {
            throw new Error(`[learn-spokes] "${manifest.treeFile}" in "${spoke}" must contain a "data" array.`)
        }

        const
            spokeLearnRoot = resolve(checkoutDir, 'learn'),
            splicedLeaves  = new Map();

        if (manifest.treeMount && !manifest.treeMounts) {
            const
                {parentId, id: mountId, name: mountName} = manifest.treeMount,
                hubParentId = resolveHubParentId(hubFoldersByLowerId, parentId, spoke),
                groupNodes  = [{
                    name     : mountName,
                    parentId : hubParentId,
                    isLeaf   : false,
                    id       : mountId,
                    collapsed: true
                }];

            for (const node of spokeTree.data) {
                const
                    prefixedId     = `${mountId}/${node.id}`,
                    prefixedParent = node.parentId ? `${mountId}/${node.parentId}` : mountId,
                    cloned         = {...node, id: prefixedId, parentId: prefixedParent};

                groupNodes.push(cloned);
                if (cloned.isLeaf !== false && !cloned.route) {
                    splicedLeaves.set(`learn/${node.id}.md`, `/learn/${prefixedId}`)
                }
            }

            for (const node of groupNodes) {
                const existingOwner = claimedNodeIds.get(node.id);
                if (existingOwner) {
                    throw new Error(`[learn-spokes] Tree node id collision on "${node.id}" between "${existingOwner}" and "${spoke}".`)
                }
                claimedNodeIds.set(node.id, spoke)
            }

            if (!splicesByHubParent.has(hubParentId)) {
                splicesByHubParent.set(hubParentId, [])
            }
            splicesByHubParent.get(hubParentId).push({mountId, nodes: groupNodes})
        } else if (Array.isArray(manifest.treeMounts) && manifest.treeMounts.length > 0) {
            for (const mount of manifest.treeMounts) {
                const
                    hubParentId = resolveHubParentId(hubFoldersByLowerId, mount.parentId, spoke),
                    groupNodes  = extractSubtree(spokeTree.data, mount.id, hubParentId, mount.name);

                for (const node of groupNodes) {
                    const existingOwner = claimedNodeIds.get(node.id);
                    if (existingOwner) {
                        throw new Error(`[learn-spokes] Tree node id collision on "${node.id}" between "${existingOwner}" and "${spoke}".`)
                    }
                    claimedNodeIds.set(node.id, spoke);

                    if (node.isLeaf !== false && !node.route) {
                        splicedLeaves.set(`learn/${node.id}.md`, `/learn/${node.id}`)
                    }
                }

                if (!splicesByHubParent.has(hubParentId)) {
                    splicesByHubParent.set(hubParentId, [])
                }
                splicesByHubParent.get(hubParentId).push({mountId: mount.id, nodes: groupNodes})
            }
        } else {
            throw new Error(`[learn-spokes] Spoke "${spoke}" must declare either "treeMount" or "treeMounts".`)
        }

        if (splicedLeaves.size !== manifest.entries.length) {
            throw new Error(
                `[learn-spokes] Spoke "${spoke}" manifest/tree count mismatch: ${manifest.entries.length} manifest entries vs ${splicedLeaves.size} tree leaves.`
            )
        }

        const admittedAbsFiles = new Set();

        for (const entry of manifest.entries) {
            const normalizedFile = posix.normalize(String(entry?.file || ''));
            if (normalizedFile !== entry?.file || !normalizedFile.startsWith('learn/') || !normalizedFile.endsWith('.md') || normalizedFile.includes('..')) {
                throw new Error(`[learn-spokes] Invalid entry file "${entry?.file}" in "${spoke}".`)
            }
            if (excludedPrefixes.some(dir => normalizedFile.startsWith(dir))) {
                throw new Error(`[learn-spokes] Excluded internal record "${normalizedFile}" cannot be materialized in "${spoke}".`)
            }
            if (typeof entry?.route !== 'string' || !entry.route.startsWith('/learn/') || entry.route.endsWith('/') || entry.route.endsWith('.md') || entry.route.includes('..')) {
                throw new Error(`[learn-spokes] Invalid entry route "${entry?.route}" in "${spoke}".`)
            }

            const expectedRoute = splicedLeaves.get(normalizedFile);
            if (expectedRoute !== entry.route) {
                throw new Error(
                    `[learn-spokes] Route mismatch in "${spoke}" for "${normalizedFile}": manifest has "${entry.route}", tree expects "${expectedRoute}".`
                )
            }

            const existingRouteOwner = claimedRoutes.get(entry.route);
            if (existingRouteOwner) {
                throw new Error(`[learn-spokes] Route collision on "${entry.route}" between "${existingRouteOwner}" and "${spoke}".`)
            }
            claimedRoutes.set(entry.route, spoke);

            const srcFile = resolve(checkoutDir, normalizedFile);
            if (!srcFile.startsWith(spokeLearnRoot + sep) || !existsSync(srcFile) || !statSync(srcFile).isFile()) {
                throw new Error(`[learn-spokes] Missing admitted Markdown file "${normalizedFile}" in "${spoke}".`)
            }
            admittedAbsFiles.add(srcFile);

            const epochSec = readGitCommitEpoch(checkoutDir, normalizedFile);
            if (!epochSec) {
                throw new Error(`[learn-spokes] Missing git commit history for "${normalizedFile}" in "${spoke}".`)
            }

            const
                destRel  = `${entry.route.slice('/learn/'.length)}.md`,
                destFile = resolve(learnDest, destRel),
                isoDate  = new Date(epochSec * 1000).toISOString().slice(0, 10);

            if (!destFile.startsWith(learnDest + sep)) {
                throw new Error(`[learn-spokes] Destination escaped learn/ root for "${entry.route}".`)
            }

            copyPlan.push({
                srcFile,
                destFile,
                epochSec,
                route: entry.route,
                isoDate,
                checkoutDir,
                spoke,
                commitRef,
                sourceRoots,
                admittedAbsFiles
            });
            spokeLeafCount++
        }
    }

    // Fail closed if any hub insertion anchor required by spliced spoke groups is absent from the Engine tree.
    if (splicesByHubParent.has('Benefits') && !claimedNodeIds.has('benefits/body')) {
        throw new Error('[learn-spokes] Missing required hub anchor "benefits/body" under "Benefits".')
    }
    if (splicesByHubParent.has('AgentInterfaces') && !claimedNodeIds.has('AgentInterfaces/Decisions')) {
        throw new Error('[learn-spokes] Missing required hub anchor "AgentInterfaces/Decisions" under "AgentInterfaces".')
    }

    const
        composedData       = [],
        insertedHubParents = new Set(),
        flushGroups        = hubParentId => {
            if (insertedHubParents.has(hubParentId)) return;
            insertedHubParents.add(hubParentId);
            const groups = splicesByHubParent.get(hubParentId) || [];
            for (const group of groups) {
                composedData.push(...group.nodes)
            }
        };

    // Collect the full descendant ID set of `guides` so `DevIndex App` inserts cleanly at the end of `guides`.
    const guidesSubtreeIds = new Set();
    if (hubFoldersByLowerId.has('guides')) {
        const guidesId = hubFoldersByLowerId.get('guides').id;
        guidesSubtreeIds.add(guidesId);
        let grew = true;
        while (grew) {
            grew = false;
            for (const node of resolvedBaseTree.data) {
                if (!guidesSubtreeIds.has(node.id) && node.parentId && guidesSubtreeIds.has(node.parentId)) {
                    guidesSubtreeIds.add(node.id);
                    grew = true
                }
            }
        }
    }

    for (let i = 0; i < resolvedBaseTree.data.length; i++) {
        const node = resolvedBaseTree.data[i];

        // Under `Benefits`, place Brain's `"The Brain - Agent OS"` group immediately before `"benefits/body"`.
        if (node.id === 'benefits/body' && splicesByHubParent.has('Benefits')) {
            flushGroups('Benefits')
        }

        // Under `AgentInterfaces`, place the 3 Brain groups + `"Agent Institution"` immediately before Retained Decisions.
        if (node.id === 'AgentInterfaces/Decisions' && splicesByHubParent.has('AgentInterfaces')) {
            flushGroups('AgentInterfaces')
        }

        composedData.push({...node});

        // If `Guides` is ending on the next item (or at EOF), append `"DevIndex App"` at the end of `guides`.
        if (guidesSubtreeIds.has(node.id)) {
            const
                guidesId = hubFoldersByLowerId.get('guides').id,
                nextNode = resolvedBaseTree.data[i + 1];

            if (!nextNode || !guidesSubtreeIds.has(nextNode.id)) {
                flushGroups(guidesId)
            }
        }
    }

    for (const hubParentId of splicesByHubParent.keys()) {
        if (!insertedHubParents.has(hubParentId)) {
            throw new Error(`[learn-spokes] Failed to splice spoke groups into hub parent "${hubParentId}".`)
        }
    }

    // Restore `neoDir/learn/` from the pristine Engine directory before writing admitted spoke guides so re-runs
    // remove any guide a spoke delisted or moved while keeping Engine assets (e.g. `learn/blog/*`) intact.
    await rm(learnDest, {recursive: true, force: true});
    await cp(resolvedPristineLearn, learnDest, {recursive: true, preserveTimestamps: true});

    for (const item of copyPlan) {
        await mkdir(dirname(item.destFile), {recursive: true});
        if (item.sourceRoots.length > 0) {
            const
                rawMarkdown = await readFile(item.srcFile, 'utf-8'),
                rewritten   = rewriteSpokeSourceLinks({
                    markdown        : rawMarkdown,
                    srcFile         : item.srcFile,
                    checkoutDir     : item.checkoutDir,
                    spoke           : item.spoke,
                    commitRef       : item.commitRef,
                    sourceRoots     : item.sourceRoots,
                    admittedAbsFiles: item.admittedAbsFiles
                });
            await writeFile(item.destFile, rewritten, 'utf-8')
        } else {
            await cp(item.srcFile, item.destFile)
        }
        utimesSync(item.destFile, item.epochSec, item.epochSec);
        routeLastmods[item.route] = item.isoDate
    }

    await writeFile(resolve(learnDest, 'tree.json'), JSON.stringify({data: composedData}, null, 4) + '\n');

    if (seoJsonPath) {
        let existingSeo = {};
        if (existsSync(seoJsonPath)) {
            try {
                existingSeo = JSON.parse(await readFile(seoJsonPath, 'utf-8')) || {}
            } catch {
                existingSeo = {}
            }
        }
        for (const existingRoute of Object.keys(existingSeo)) {
            if (existingRoute.startsWith('/learn/') && !claimedRoutes.has(existingRoute)) {
                delete existingSeo[existingRoute]
            }
        }
        for (const [route, isoDate] of Object.entries(routeLastmods)) {
            existingSeo[route] = {
                ...(existingSeo[route] || {}),
                lastmod: isoDate
            }
        }
        await mkdir(dirname(seoJsonPath), {recursive: true});
        await writeFile(seoJsonPath, JSON.stringify(existingSeo, null, 4) + '\n')
    }

    const
        totalMarkdownLeafCount = composedData.filter(node => node.isLeaf !== false && !node.route).length,
        totalLeafCount         = composedData.filter(node => node.isLeaf !== false).length;

    return {
        totalLeafCount,
        totalMarkdownLeafCount,
        spokeLeafCount,
        routeLastmods
    }
}

/**
 * @summary Fetches each spoke in `contentPins.learnSpokes` at its exact 40-hex commit SHA with full blobless commit
 * history (`docs` + `learn` sparse paths) and materializes its admitted guides onto a fresh copy of `pristineLearnDir`.
 * Always cleans up temporary clones.
 * @param {Object} options
 * @param {String} options.pristineLearnDir Path to pristine hub `learn/` directory (`engineClonePath/learn`).
 * @param {Object} options.contentPins Parsed `buildScripts/contentPins.json`.
 * @param {Function} options.fetchRevision `fetchRevision(url, ref, dir, sparse, options)` helper from `updateNeoVersion.mjs`.
 * @param {String} options.neoDir Target `node_modules/neo.mjs` directory.
 * @param {String} options.tempRoot Temporary directory for spoke sparse checkouts.
 * @returns {Promise<{totalLeafCount: Number, totalMarkdownLeafCount: Number, spokeLeafCount: Number, routeLastmods: Object<String, String>}>}
 */
export async function fetchAndMaterializeLearnSpokes({
    pristineLearnDir,
    contentPins,
    fetchRevision,
    neoDir,
    tempRoot
}) {
    validateLearnSpokePins(contentPins?.learnSpokes);

    if (!pristineLearnDir || !existsSync(resolve(pristineLearnDir, 'tree.json'))) {
        throw new Error(`[learn-spokes] Missing base Engine learn/tree.json under ${pristineLearnDir}.`)
    }

    await rm(tempRoot, {recursive: true, force: true});

    try {
        const spokeCheckouts = [];

        for (const [index, pin] of contentPins.learnSpokes.entries()) {
            const
                checkoutDir = resolve(tempRoot, `spoke-${index}`),
                fetchedSha  = fetchRevision(pin.repository, pin.commit, checkoutDir, ['docs', 'learn'], {shallow: false});

            if (fetchedSha !== pin.commit) {
                throw new Error(
                    `[learn-spokes] Failed to fetch ${pin.spoke} (${pin.repository}) at exact 40-hex SHA ${pin.commit} (got ${fetchedSha}).`
                )
            }

            const commitDate = spawnSync('git', ['-C', checkoutDir, 'log', '-1', '--format=%cs'], {encoding: 'utf-8'}).stdout.trim();
            console.log(`Spoke learn content (${pin.spoke}): ${fetchedSha} (${commitDate})`);

            spokeCheckouts.push({
                spoke : pin.spoke,
                commit: fetchedSha,
                checkoutDir
            })
        }

        return await materializeLearnSpokes({
            pristineLearnDir,
            neoDir,
            spokeCheckouts
        })
    } finally {
        await rm(tempRoot, {recursive: true, force: true})
    }
}
