/**
 * @summary The art of the contributor badges: three badge forms and the record page of one account.
 *
 * Pure: every function takes an account and returns markup; nothing here reads or writes a file.
 * A profile README shows a badge as an image, so a badge uses system fonts, no script and nothing outside itself,
 * and whatever a reader should see is printed on it. `assertBadge` refuses a badge that breaks that.
 */

const FONT = `-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif`,
      MONO = `ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`,
      HOME = 'https://neomjs.com',
      // The mark of resources/images/logo/neo_logo_primary.svg, viewBox 0 0 157 157
      P1   = 'M8.841,127.508L33.676,144.928L33.675,105.744L33.675,94.343L43.023,100.871L112.335,149.272L135.026,135.569L8.841,46.576L8.841,127.508Z',
      P2   = 'M144.867,30.661L120.032,13.241L120.033,52.425L120.034,63.826L110.686,57.298L41.374,8.897L18.682,22.6L144.867,111.593L144.867,30.661Z',
      GOLD = ['#FFE994', '#F2C230', '#BF8A0C'];

/**
 * The colours of each rung, by its slug in neomjs/neo's `contributorStanding.mjs`. A rung without an entry has no
 * art, and the generator stops instead of drawing it in someone else's colours.
 */
const PALETTE = {
    contributor: {g: ['#6F8FF5', '#3E63DD', '#2B49B8'], light: '#9DB1FF', ink: '#FFFFFF'},
    returning  : {g: ['#9A8CFA', '#6E56CF', '#4F3BA8'], light: '#C4B8FF', ink: '#FFFFFF'},
    bronze     : {g: ['#E7B286', '#B9783F', '#84502C'], light: '#EDBA91', ink: '#FFFFFF'},
    silver     : {g: ['#F4F6F8', '#C5CCD3', '#8E979F'], light: '#DEE4E9', ink: '#1B2330', darkMark: true},
    gold       : {g: ['#FFE994', '#F2C230', '#BF8A0C'], light: '#FFDB63', ink: '#3A2A00', darkMark: true},
    diamond    : {g: ['#F2FDFF', '#93E3FF', '#6A8DF5'], light: '#A9EEFF', ink: '#0B2540', darkMark: true},
    core       : {g: ['#2C3760', '#151C36', '#0A0F1F'], light: '#FFDB63', ink: '#FFDB63', core: true}
};

/** Helvetica's advances in thousandths of an em, [regular, bold]: enough to size a box around a handle. */
const ADVANCES = [
    ['ijl',                     222, 278],
    ['ftI',                     278, 333],
    ['r-',                      333, 389],
    ['cksvxyzJ',                500, 556],
    ['abdeghnopqu0123456789L',  556, 611],
    ['FTZ',                     611, 611],
    ['ABEKPSVXY',               667, 722],
    ['wCDHNRU',                 722, 778],
    ['GOQ',                     778, 778],
    ['mM',                      833, 889],
    ['W',                       944, 944],
    ['@',                       1015, 975]
];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * @summary The three forms, in the order the record shows them. The merge comment hands over the first.
 * @member {Object[]} FORMS
 */
export const FORMS = Object.freeze([
    {key: 'card',  title: 'Card',  note: 'The project, the rung in words and the handle; seven pips show how far the ladder goes.'},
    {key: 'plate', title: 'Plate', note: '28 px high, for a row of README badges.'},
    {key: 'medal', title: 'Medal', note: 'Reads like an achievement.'}
]);

/**
 * @summary Escapes text for an XML or HTML text node and for a double-quoted attribute.
 * @param {String} text
 * @returns {String}
 */
export function escapeXml(text) {
    return String(text).replace(/[&<>"']/g, char => `&#${char.charCodeAt(0)};`)
}

/**
 * @summary The width a handle is drawn at, in px. Every handle is pinned to it with `textLength`, because the
 * reader's system font decides the natural width: measured against these advances, San Francisco draws up to 15 %
 * wider, DejaVu Sans up to 21 %, Arial up to 8 % narrower. The factor sits between them.
 * @param {String} text
 * @param {Number} size Font size in px
 * @param {Boolean} [bold=false]
 * @returns {Number}
 */
function textWidth(text, size, bold = false) {
    let units = 0;

    for (const char of text) {
        units += ADVANCES.find(([chars]) => chars.includes(char))?.[bold ? 2 : 1] ?? 611
    }

    return Math.round(units * size / 1000 * (bold ? 1.06 : 1.1))
}

const mark  = (x, y, size, color, weight = 12) =>
          `<g transform="translate(${x} ${y}) scale(${(size / 157).toFixed(4)})" fill="none" stroke="${color}" stroke-width="${weight}"><path d="${P1}"/><path d="${P2}"/></g>`,
      stops = g => `<stop offset="0" stop-color="${g[0]}"/><stop offset=".55" stop-color="${g[1]}"/><stop offset="1" stop-color="${g[2]}"/>`,
      capW  = (text, size, spacing) => Math.round(text.length * size * 0.66 + (text.length - 1) * spacing),
      head  = (w, h, label) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><title>${label}</title>`;

/** The card: 244 × 60 px, wider only for a handle that would not fit. */
function card({handle, index, label, rung, rungs, tone}) {
    const h     = 60,
          nameW = textWidth(handle, 10.5),
          w     = Math.max(244, 62 + nameW + 14),
          pips  = rungs.map((_, k) =>
              `<circle cx="${w - 17 - (rungs.length - 1 - k) * 9}" cy="17" r="3" fill="${k <= index ? tone.light : '#2B3659'}"/>`).join('');

    return `${head(w, h, label)}
<defs>
<linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#18233F"/><stop offset="1" stop-color="#0A0F1F"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="1">${stops(tone.g)}</linearGradient>
<radialGradient id="g" cx=".12" cy=".5" r=".6"><stop offset="0" stop-color="${tone.light}" stop-opacity=".22"/><stop offset="1" stop-color="${tone.light}" stop-opacity="0"/></radialGradient>
<clipPath id="r"><rect width="${w}" height="${h}" rx="12"/></clipPath>
</defs>
<g clip-path="url(#r)">
<rect width="${w}" height="${h}" fill="url(#b)"/>
<rect width="${w}" height="${h}" fill="url(#g)"/>
</g>
<rect x=".75" y=".75" width="${w - 1.5}" height="${h - 1.5}" rx="11.25" fill="none" stroke="${tone.light}" stroke-opacity=".5" stroke-width="1.5"/>
<rect x="10" y="10" width="40" height="40" rx="10" fill="url(#t)"/>
<rect x="10.5" y="10.5" width="39" height="39" rx="9.5" fill="none" stroke="${tone.core ? '#F2C230' : '#FFFFFF'}" stroke-opacity="${tone.core ? '.95' : '.3'}"/>
${mark(18, 18, 24, tone.core ? '#FFDB63' : tone.darkMark ? '#16203A' : '#FFFFFF', 13)}
<g font-family="${FONT}">
<text x="62" y="23" font-size="15" font-weight="700" fill="#FFFFFF">Neo.mjs</text>
<text x="62" y="38" font-size="12" font-weight="600" fill="${tone.light}">${escapeXml(rung.name)}</text>
<text x="62" y="51.5" font-size="10.5" font-weight="500" fill="#A3AFCD" textLength="${nameW}">${escapeXml(handle)}</text>
</g>
${pips}
</svg>`
}

/** The plate: 28 px high; the project, the handle, the rung. */
function plate({handle, label, rung, tone}) {
    const h      = 28,
          short  = rung.slug.toUpperCase(),
          nameW  = capW('NEO.MJS', 11, 1.2),
          leftW  = 10 + 16 + 7 + nameW + 10,
          handW  = textWidth(handle, 11, true),
          midW   = handW + 20,
          tierW  = capW(short, 11, 1.2),
          rightW = tierW + 22,
          w      = leftW + midW + rightW;

    return `${head(w, h, label)}
<defs>
<linearGradient id="d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#202C4E"/><stop offset="1" stop-color="#0E1528"/></linearGradient>
<linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34426F"/><stop offset="1" stop-color="#212B4F"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="0" y2="1">${stops(tone.g)}</linearGradient>
<clipPath id="r"><rect width="${w}" height="${h}" rx="6"/></clipPath>
</defs>
<g clip-path="url(#r)">
<rect width="${leftW}" height="${h}" fill="url(#d)"/>
<rect x="${leftW}" width="${midW}" height="${h}" fill="url(#m)"/>
<rect x="${leftW + midW}" width="${rightW}" height="${h}" fill="url(#t)"/>
<rect width="${w}" height="1" fill="#FFFFFF" fill-opacity=".16"/>
</g>
<rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="5.5" fill="none" stroke="${tone.core ? '#F2C230' : '#000000'}" stroke-opacity="${tone.core ? '.95' : '.2'}"/>
${mark(10, 6, 16, '#FFFFFF', 14)}
<g font-family="${FONT}" font-size="11" font-weight="700">
<text x="33" y="18" fill="#FFFFFF" letter-spacing="1.2" textLength="${nameW}">NEO.MJS</text>
<text x="${leftW + 10}" y="18" fill="#FFFFFF" textLength="${handW}">${escapeXml(handle)}</text>
<text x="${leftW + midW + 11}" y="18" fill="${tone.ink}" letter-spacing="1.2" textLength="${tierW}">${short}</text>
</g>
</svg>`
}

/** The medal: the mark in a ring, the rung on a plate under it, the handle on a second plate. */
function medal({handle, label, rung, tone}) {
    const short = rung.slug.toUpperCase(),
          handW = textWidth(handle, 9.5, true),
          nameW = handW + 18,
          w     = Math.max(96, nameW + 4),
          h     = 110,
          cx    = w / 2,
          cy    = 38,
          r     = 33,
          ring  = tone.core ? GOLD : tone.g,
          size  = short.length > 9 ? 7.6 : 8.4,
          textW = capW(short, size, 0.9),
          pillW = textW + 18;

    return `${head(w, h, label)}
<defs>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="1">${stops(ring)}</linearGradient>
<linearGradient id="p" x1="0" y1="0" x2="0" y2="1">${stops(tone.g)}</linearGradient>
<linearGradient id="n" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#202C4E"/><stop offset="1" stop-color="#0E1528"/></linearGradient>
<radialGradient id="c" cx=".5" cy=".3" r=".85"><stop offset="0" stop-color="#27376A"/><stop offset="1" stop-color="#0A0F1F"/></radialGradient>
</defs>
<circle cx="${cx}" cy="${cy}" r="${r + 3}" fill="url(#t)"/>
<circle cx="${cx}" cy="${cy}" r="${r + 2.5}" fill="none" stroke="#000000" stroke-opacity=".18"/>
<circle cx="${cx}" cy="${cy}" r="${r - 2}" fill="url(#c)"/>
<circle cx="${cx}" cy="${cy}" r="${r - 2.5}" fill="none" stroke="#FFFFFF" stroke-opacity=".14"/>
${mark(cx - 17, cy - 19, 34, tone.core ? '#FFDB63' : '#FFFFFF', 12)}
<rect x="${cx - pillW / 2}" y="66" width="${pillW}" height="19" rx="9.5" fill="url(#p)" stroke="${tone.core ? '#F2C230' : '#0A0F1F'}" stroke-width="${tone.core ? 1.5 : 2.5}"/>
<rect x="${cx - nameW / 2}" y="90.5" width="${nameW}" height="18" rx="9" fill="url(#n)" stroke="${tone.light}" stroke-opacity=".45"/>
<g font-family="${FONT}" text-anchor="middle">
<text x="${cx}" y="79" font-size="${size}" font-weight="800" letter-spacing=".9" fill="${tone.ink}" textLength="${textW}">${short}</text>
<text x="${cx}" y="103" font-size="9.5" font-weight="700" fill="#FFFFFF" textLength="${handW}">${escapeXml(handle)}</text>
</g>
</svg>`
}

const BUILDERS = {card, medal, plate};

/**
 * @summary Draws one badge form for an account at its rung.
 * @param {String} form One of the keys of `FORMS`
 * @param {Object} account
 * @param {String} account.login The account's current login; it is printed as the handle
 * @param {Object} account.rung The account's rung, an entry of `rungs`
 * @param {Object[]} account.rungs The whole ladder, lowest first: `{slug, merges, name}`
 * @returns {String} The SVG, checked by `assertBadge`
 */
export function renderBadge(form, {login, rung, rungs}) {
    const tone = PALETTE[rung.slug];

    if (!tone) {
        throw new Error(`The rung "${rung.slug}" has no art: add its colours to PALETTE in badges/art.mjs.`)
    }

    return assertBadge(BUILDERS[form]({
        handle: `@${login}`,
        index : rungs.findIndex(candidate => candidate.slug === rung.slug),
        label : escapeXml(`Neo.mjs ${rung.name}: @${login}`),
        rung,
        rungs,
        tone
    }))
}

/**
 * @summary Refuses a badge that could not be shown as an image: script, an event attribute, a foreign object, a
 * reference to anything outside the file, a missing size or a font that is not the system stack.
 * @param {String} svg
 * @returns {String} The same SVG
 */
export function assertBadge(svg) {
    const body  = svg.replace('xmlns="http://www.w3.org/2000/svg"', ''),
          fault = [
              [/<script/i,                                   'a script element'],
              [/\son[a-z]+\s*=/i,                            'an event attribute'],
              [/<foreignObject/i,                            'a foreignObject'],
              [/<(?:a|image|use|style|iframe|link)[\s>]/i,   'an element that can point outside the file'],
              [/(?:href|src)\s*=/i,                          'a reference attribute'],
              [/url\((?!#)/i,                                'a url() that leaves the file'],
              [/:\/\/|@import/i,                             'an address']
          ].find(([pattern]) => pattern.test(body))?.[1];

    if (fault) {
        throw new Error(`A badge contains ${fault}.`)
    }

    if (!/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" width="[\d.]+" height="[\d.]+" /.test(svg)) {
        throw new Error('A badge does not state its size.')
    }

    if ([...svg.matchAll(/font-family="([^"]*)"/g)].some(([, family]) => family !== FONT) || !svg.includes(`font-family="${FONT}"`)) {
        throw new Error('A badge does not use the system font stack.')
    }

    return svg
}

const date   = iso => { const d = new Date(iso); return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}` },
      plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

/**
 * @summary Writes the record page of one account: the one place on neomjs.com that says whose badge this is.
 *
 * The login is the only free text on the page and it is escaped. No pull request title or body is rendered:
 * whoever opens a pull request writes them.
 * @param {Object} account
 * @param {String} account.login The account's current login
 * @param {Number} account.id GitHub's numeric account id
 * @param {Number} account.count Merged pull requests
 * @param {String} account.firstMerge ISO time of the first merge
 * @param {Object} account.rung `{slug, merges, name}`
 * @param {Object|null} account.next The next rung, null at the top
 * @param {Number} account.remaining Merges missing to `next`
 * @param {String} account.folder The current folder name, `<login>-<id>`
 * @param {Object} account.lines The line to paste per form key
 * @param {String|null} [account.formerLogin] Set in the folder of an earlier login
 * @returns {String} The HTML document
 */
export function renderRecord({login, id, count, firstMerge, rung, next, remaining, folder, lines, formerLogin = null}) {
    const handle  = escapeXml(`@${login}`),
          name    = escapeXml(rung.name),
          address = `${HOME}/badges/${folder}/`,
          list    = `https://github.com/search?q=${encodeURIComponent(`org:neomjs is:pr is:merged author:${login}`)}&amp;type=pullrequests`,
          leave   = `https://github.com/neomjs/pages/issues/new?title=${encodeURIComponent('Leave my account out of the contributor badges')}`,
          day     = firstMerge.slice(0, 10);

    return assertRecord(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<title>${handle} · Neo.mjs ${name}</title>
<link rel="canonical" href="${address}">
<style>
:root{color-scheme:light dark;--bg:#f5f6fa;--panel:#ffffff;--ink:#141a2b;--muted:#586177;--line:#dde2ec;--link:#3552c8;--code:#f1f3f8}
@media (prefers-color-scheme:dark){:root{--bg:#0a0f1f;--panel:#111831;--ink:#eef1f8;--muted:#9aa7c7;--line:#243059;--link:#9db1ff;--code:#0b1124}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 ${FONT}}
main{max-width:700px;margin:0 auto;padding:26px 20px 56px}
a{color:var(--link)}
.top{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px}
.brand{display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--ink);text-decoration:none}
.kicker{color:var(--muted);font-size:12px;letter-spacing:.08em;text-transform:uppercase}
.hero{display:flex;flex-wrap:wrap;align-items:center;gap:14px 26px;margin:40px 0 30px}
.hero img{display:block;max-width:100%}
.hero div{flex:1 1 320px;min-width:0}
h1{font-size:34px;line-height:1.15;margin:0 0 8px;overflow-wrap:anywhere}
.standing{font-size:18px;margin:0 0 6px}
.muted{color:var(--muted)}
section{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin-top:16px}
h2{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0 0 10px}
p{margin:0 0 10px}
p:last-child{margin-bottom:0}
.form{display:grid;gap:10px;padding:16px 0;border-top:1px solid var(--line)}
.form:last-child{padding-bottom:2px}
.form img{display:block;max-width:100%}
.form p{font-size:14px;margin:0}
pre{margin:0;padding:10px 12px;background:var(--code);border:1px solid var(--line);border-radius:8px;font:12.5px/1.5 ${MONO};white-space:pre-wrap;overflow-wrap:anywhere;user-select:all}
footer{color:var(--muted);font-size:13px;margin-top:22px}
</style>
</head>
<body>
<main>
<div class="top">
<a class="brand" href="${HOME}"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 157 157" fill="none" stroke="currentColor" stroke-width="13" aria-hidden="true"><path d="${P1}"/><path d="${P2}"/></svg>Neo.mjs</a>
<span class="kicker">Contributor record</span>
</div>
<div class="hero">
<img src="medal.svg" alt="Neo.mjs ${name}: ${handle}">
<div>
<h1>${handle}</h1>
<p class="standing"><strong>${name}</strong> to Neo.mjs: ${count === 1 ? '1 merged pull request, on' : `${count} merged pull requests, the first on`} <time datetime="${day}">${date(firstMerge)}</time>.</p>
<p class="muted">${next ? `${remaining} more reach ${escapeXml(next.name)}. ` : ''}<a href="${list}">The merged pull requests on GitHub</a></p>
</div>
</div>
<section>
<h2>What this page says</h2>
<p>neomjs.com writes this page from GitHub's public merge record. It stands for one GitHub account: <a href="https://github.com/${escapeXml(login)}">${handle}</a>, account id ${id}.</p>
<p>A badge that links here is genuine where that account shows it. Shown by anyone else, it says nothing about them.</p>${formerLogin ? `
<p class="muted">The account was <strong>@${escapeXml(formerLogin)}</strong> before. Its record now lives at <a href="${address}">${address}</a>, and this address keeps working.</p>` : ''}
</section>
<section>
<h2>Show it</h2>
<p>Three forms, one line each for a profile README or a site. A line keeps showing the current rung and handle.</p>
${FORMS.map(form => `<div class="form">
<img src="${form.key}.svg" alt="${form.title}: Neo.mjs ${name}, ${handle}">
<p><strong>${form.title}.</strong> <span class="muted">${form.note}</span></p>
<pre>${escapeXml(lines[form.key])}</pre>
</div>`).join('\n')}
</section>
<section>
<h2>Neo.mjs</h2>
<p>Neo.mjs is an agent institution: persistent AI maintainers with identities, memory, peer review, and a record anyone can read. <a href="${HOME}">neomjs.com</a></p>
</section>
<section>
<h2>To be left out</h2>
<p>This page exists because ${handle} merged a pull request in a public Neo.mjs repository. To have it removed and not written again, <a href="${leave}">open an issue</a> from this account.</p>
</section>
<footer>The folder is generated. Its rules: <a href="https://github.com/neomjs/pages/blob/main/badges/README.md">badges/README.md</a></footer>
</main>
</body>
</html>
`)
}

/**
 * @summary Refuses a record that carries script, an event attribute or an image from outside its own folder.
 * @param {String} html
 * @returns {String} The same HTML
 */
function assertRecord(html) {
    if (/<script|\son[a-z]+\s*=|<iframe|<object|<embed/i.test(html)) {
        throw new Error('A record contains script, an event attribute or an embedded document.')
    }

    if ([...html.matchAll(/\ssrc="([^"]*)"/g)].some(([, source]) => !FORMS.some(form => source === `${form.key}.svg`))) {
        throw new Error('A record shows an image from outside its folder.')
    }

    return html
}

/**
 * @summary A review sheet for a dry run: every folder's three forms as images on GitHub's light and dark
 * backgrounds, which is how a profile README shows them.
 * @param {String[]} folders Folder names, relative to the sheet
 * @returns {String} The HTML document
 */
export function renderSheet(folders) {
    const row = (folder, theme) => `<div class="panel ${theme}">${FORMS.map(form => `<img src="${folder}/${form.key}.svg" alt="">`).join('')}</div>`;

    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Contributor badges: review sheet of a dry run</title>
<style>
body{margin:0;background:#f4f6f9;color:#1c2230;font:14px/1.5 ${FONT}}
main{max-width:1000px;margin:0 auto;padding:28px 16px 56px}
h1{font-size:20px;margin:0 0 20px}
h2{font-size:14px;margin:22px 0 8px;font-family:${MONO};font-weight:600}
.panel{border:1px solid #d9dee7;border-radius:10px;padding:16px;display:flex;flex-wrap:wrap;gap:18px;align-items:center}
.panel + .panel{margin-top:8px}
.light{background:#ffffff}
.dark{background:#0d1117;border-color:#30363d}
</style>
</head>
<body>
<main>
<h1>Contributor badges: review sheet of a dry run</h1>
${folders.map(folder => `<h2><a href="${folder}/index.html">${folder}/</a></h2>
${row(folder, 'light')}
${row(folder, 'dark')}`).join('\n')}
</main>
</body>
</html>
`
}
