/**
 * @summary Generates the three badge forms of the Neo.mjs contributor ladder, seven rungs each.
 *
 * It lives in the folder it writes: ./<form>/<rung>.svg, served as https://neomjs.com/badges/<form>/<rung>.svg.
 * A published file name is never renamed, removed or repurposed; refining the art rewrites the same files.
 * `node generate.mjs --sheet` also writes ./sheet.html, which shows every badge the way a profile README does:
 * as an image on GitHub's light and dark backgrounds. The sheet is a review aid and is not committed.
 */
import fs                from 'node:fs';
import path              from 'node:path';
import {fileURLToPath}   from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url)),
      out  = here,
      FONT = `-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif`,
      // The mark of resources/images/logo/neo_logo_primary.svg, viewBox 0 0 157 157
      P1   = 'M8.841,127.508L33.676,144.928L33.675,105.744L33.675,94.343L43.023,100.871L112.335,149.272L135.026,135.569L8.841,46.576L8.841,127.508Z',
      P2   = 'M144.867,30.661L120.032,13.241L120.033,52.425L120.034,63.826L110.686,57.298L41.374,8.897L18.682,22.6L144.867,111.593L144.867,30.661Z';

fs.mkdirSync(out, {recursive: true});

const TIERS = [
    {id: 'contributor', merges: 1,   short: 'CONTRIBUTOR', name: 'Contributor',           g: ['#6F8FF5', '#3E63DD', '#2B49B8'], light: '#9DB1FF', ink: '#FFFFFF'},
    {id: 'returning',   merges: 5,   short: 'RETURNING',   name: 'Returning Contributor', g: ['#9A8CFA', '#6E56CF', '#4F3BA8'], light: '#C4B8FF', ink: '#FFFFFF'},
    {id: 'bronze',      merges: 10,  short: 'BRONZE',      name: 'Bronze Contributor',    g: ['#E7B286', '#B9783F', '#84502C'], light: '#EDBA91', ink: '#FFFFFF'},
    {id: 'silver',      merges: 25,  short: 'SILVER',      name: 'Silver Contributor',    g: ['#F4F6F8', '#C5CCD3', '#8E979F'], light: '#DEE4E9', ink: '#1B2330'},
    {id: 'gold',        merges: 50,  short: 'GOLD',        name: 'Gold Contributor',      g: ['#FFE994', '#F2C230', '#BF8A0C'], light: '#FFDB63', ink: '#3A2A00'},
    {id: 'diamond',     merges: 100, short: 'DIAMOND',     name: 'Diamond Contributor',   g: ['#F2FDFF', '#93E3FF', '#6A8DF5'], light: '#A9EEFF', ink: '#0B2540'},
    {id: 'core',        merges: 250, short: 'CORE',        name: 'Core Contributor',      g: ['#2C3760', '#151C36', '#0A0F1F'], light: '#FFDB63', ink: '#FFDB63', core: true}
];

const GOLD = ['#FFE994', '#F2C230', '#BF8A0C'];

const mark  = (x, y, size, color, weight = 12) =>
          `<g transform="translate(${x} ${y}) scale(${(size / 157).toFixed(4)})" fill="none" stroke="${color}" stroke-width="${weight}"><path d="${P1}"/><path d="${P2}"/></g>`,
      stops = g => `<stop offset="0" stop-color="${g[0]}"/><stop offset=".55" stop-color="${g[1]}"/><stop offset="1" stop-color="${g[2]}"/>`,
      capW  = (text, size, spacing) => Math.round(text.length * size * 0.66 + (text.length - 1) * spacing),
      head  = (w, h, t) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Neo.mjs ${t.name}"><title>Neo.mjs ${t.name}</title>`;

/** A: the plate. 28 px high, sits in a row of ordinary README badges. */
function plate(t) {
    const h      = 28,
          nameW  = capW('NEO.MJS', 11, 1.2),
          leftW  = 10 + 16 + 7 + nameW + 10,
          tierW  = capW(t.short, 11, 1.2),
          rightW = tierW + 22,
          w      = leftW + rightW;

    return `${head(w, h, t)}
<defs>
<linearGradient id="d" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#202C4E"/><stop offset="1" stop-color="#0E1528"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="0" y2="1">${stops(t.g)}</linearGradient>
<clipPath id="r"><rect width="${w}" height="${h}" rx="6"/></clipPath>
</defs>
<g clip-path="url(#r)">
<rect width="${leftW}" height="${h}" fill="url(#d)"/>
<rect x="${leftW}" width="${rightW}" height="${h}" fill="url(#t)"/>
<rect width="${w}" height="1" fill="#FFFFFF" fill-opacity=".16"/>
</g>
<rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="5.5" fill="none" stroke="${t.core ? '#F2C230' : '#000000'}" stroke-opacity="${t.core ? '.95' : '.2'}"/>
${mark(10, 6, 16, '#FFFFFF', 14)}
<g font-family="${FONT}" font-size="11" font-weight="700" letter-spacing="1.2">
<text x="33" y="18" fill="#FFFFFF" textLength="${nameW}">NEO.MJS</text>
<text x="${leftW + 11}" y="18" fill="${t.ink}" textLength="${tierW}">${t.short}</text>
</g>
</svg>`
}

/** B: the medal. Reads like an achievement; the rung stands on a plate under the mark. */
function medal(t) {
    const w     = 96,
          h     = 90,
          cx    = 48,
          cy    = 38,
          r     = 33,
          ring  = t.core ? GOLD : t.g,
          size  = t.short.length > 9 ? 7.6 : 8.4,
          textW = capW(t.short, size, 0.9),
          pillW = textW + 18,
          pillX = cx - pillW / 2;

    return `${head(w, h, t)}
<defs>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="1">${stops(ring)}</linearGradient>
<linearGradient id="p" x1="0" y1="0" x2="0" y2="1">${stops(t.g)}</linearGradient>
<radialGradient id="c" cx=".5" cy=".3" r=".85"><stop offset="0" stop-color="#27376A"/><stop offset="1" stop-color="#0A0F1F"/></radialGradient>
</defs>
<circle cx="${cx}" cy="${cy}" r="${r + 3}" fill="url(#t)"/>
<circle cx="${cx}" cy="${cy}" r="${r + 2.5}" fill="none" stroke="#000000" stroke-opacity=".18"/>
<circle cx="${cx}" cy="${cy}" r="${r - 2}" fill="url(#c)"/>
<circle cx="${cx}" cy="${cy}" r="${r - 2.5}" fill="none" stroke="#FFFFFF" stroke-opacity=".14"/>
${mark(cx - 17, cy - 19, 34, t.core ? '#FFDB63' : '#FFFFFF', 12)}
<rect x="${pillX}" y="${h - 24}" width="${pillW}" height="19" rx="9.5" fill="url(#p)" stroke="${t.core ? '#F2C230' : '#0A0F1F'}" stroke-width="${t.core ? 1.5 : 2.5}"/>
<text x="${cx}" y="${h - 11}" text-anchor="middle" font-family="${FONT}" font-size="${size}" font-weight="800" letter-spacing=".9" fill="${t.ink}" textLength="${textW}">${t.short}</text>
</svg>`
}

/** C: the card. Says the project's name and the rung in words, and shows the ladder as seven pips. */
function card(t, index) {
    const w    = 244,
          h    = 60,
          dark = ['silver', 'gold', 'diamond'].includes(t.id),
          pips = TIERS.map((tier, k) =>
              `<circle cx="${w - 17 - (6 - k) * 9}" cy="19" r="3" fill="${k <= index ? t.light : '#2B3659'}"/>`).join('');

    return `${head(w, h, t)}
<defs>
<linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#18233F"/><stop offset="1" stop-color="#0A0F1F"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="1">${stops(t.g)}</linearGradient>
<radialGradient id="g" cx=".12" cy=".5" r=".6"><stop offset="0" stop-color="${t.light}" stop-opacity=".22"/><stop offset="1" stop-color="${t.light}" stop-opacity="0"/></radialGradient>
<clipPath id="r"><rect width="${w}" height="${h}" rx="12"/></clipPath>
</defs>
<g clip-path="url(#r)">
<rect width="${w}" height="${h}" fill="url(#b)"/>
<rect width="${w}" height="${h}" fill="url(#g)"/>
</g>
<rect x=".75" y=".75" width="${w - 1.5}" height="${h - 1.5}" rx="11.25" fill="none" stroke="${t.light}" stroke-opacity=".5" stroke-width="1.5"/>
<rect x="10" y="10" width="40" height="40" rx="10" fill="url(#t)"/>
<rect x="10.5" y="10.5" width="39" height="39" rx="9.5" fill="none" stroke="${t.core ? '#F2C230' : '#FFFFFF'}" stroke-opacity="${t.core ? '.95' : '.3'}"/>
${mark(18, 18, 24, t.core ? '#FFDB63' : dark ? '#16203A' : '#FFFFFF', 13)}
<g font-family="${FONT}">
<text x="62" y="27" font-size="15" font-weight="700" fill="#FFFFFF">Neo.mjs</text>
<text x="62" y="45" font-size="12" font-weight="600" fill="${t.light}">${t.name}</text>
</g>
${pips}
</svg>`
}

const options = [
    {key: 'card',  title: 'Card',  build: card,  note: '244 × 60 px. It writes the project\'s name and the rung in words, and the seven pips show how far the ladder goes. The merge comment hands this one over.'},
    {key: 'plate', title: 'Plate', build: plate, note: '28 px high. It sits in a row of ordinary README badges and reads as label and value: the project, then the rung.'},
    {key: 'medal', title: 'Medal', build: medal, note: '96 × 90 px. It reads like an achievement, the form GitHub\'s own profile badges use. The project name is not written on it.'}
];

options.forEach(option => {
    fs.mkdirSync(path.join(out, option.key), {recursive: true});
    TIERS.forEach((t, index) => fs.writeFileSync(path.join(out, option.key, `${t.id}.svg`), option.build(t, index)))
});

const row = (option, theme) => `<div class="panel ${theme}">${TIERS.map(t =>
    `<figure><img src="${option.key}/${t.id}.svg" alt="Neo.mjs ${t.name}"><figcaption>${t.merges} ${t.merges === 1 ? 'merge' : 'merges'}</figcaption></figure>`).join('')}</div>`;

const line = form => `&lt;a href="https://neomjs.com"&gt;&lt;img src="https://neomjs.com/badges/${form}/bronze.svg" alt="Neo.mjs contributor"&gt;&lt;/a&gt;`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Neo.mjs contributor badges</title>
<style>
:root{--bg:#f4f6f9;--ink:#1c2230;--muted:#5b6475;--line:#d9dee7}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 ${FONT}}
main{max-width:1120px;margin:0 auto;padding:32px 16px 64px}
h1{font-size:24px;margin:0 0 4px}
.lede{color:var(--muted);margin:0 0 28px;max-width:72ch}
section{margin:0 0 36px}
h2{font-size:17px;margin:0 0 2px}
.note{color:var(--muted);margin:0 0 12px;font-size:14px;max-width:84ch}
.panel{border:1px solid var(--line);border-radius:10px;padding:18px 16px;display:flex;flex-wrap:wrap;gap:14px 16px;align-items:flex-end}
.panel + .panel{margin-top:10px}
.light{background:#ffffff}
.dark{background:#0d1117;border-color:#30363d}
figure{margin:0;display:flex;flex-direction:column;align-items:center;gap:6px}
figcaption{font-size:11px;color:#6b7385}
.dark figcaption{color:#8b949e}
pre{margin:0;padding:14px 16px;background:#ffffff;border:1px solid var(--line);border-radius:10px;overflow-x:auto;font:13px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace}
</style>
</head>
<body>
<main>
<h1>Neo.mjs contributor badges</h1>
<p class="lede">Three forms, all offered, each at its seven rungs. They are shown as images on GitHub's light and dark backgrounds, which is how a profile README shows them. One file per form and rung, so an address never changes while the art behind it can still be refined.</p>
${options.map(option => `<section>
<h2>${option.title}</h2>
<p class="note">${option.note}</p>
${row(option, 'light')}
${row(option, 'dark')}
</section>`).join('\n')}
<section>
<h2>The line a contributor pastes</h2>
<p class="note">The merge comment hands over the card's line with the rung filled in; the guide shows the other two. Every link goes to the home page.</p>
<pre>${options.map(option => line(option.key)).join('\n')}</pre>
</section>
</main>
</body>
</html>
`;

const sheet = process.argv.includes('--sheet');

if (sheet) {
    fs.writeFileSync(path.join(here, 'sheet.html'), html)
}

console.log(`wrote ${options.length * TIERS.length} badges${sheet ? ' and ./sheet.html' : ''}`);
