# Contributor badges

The badges of the Neo.mjs contributor ladder ([neomjs/neo#20892](https://github.com/neomjs/neo/issues/20892)), served as `https://neomjs.com/badges/<form>/<rung>.svg`.

| Folder | Form | Size |
|---|---|---|
| `card/` | the project's name and the rung in words, seven pips for the ladder | 244 × 60 px |
| `plate/` | label and value, sits in a row of README badges | 28 px high |
| `medal/` | reads like an achievement | 96 × 90 px |

Rungs, one file each: `contributor` (1 merged pull request), `returning` (5), `bronze` (10), `silver` (25), `gold` (50), `diamond` (100), `core` (250).

**A published file name is never renamed, removed or repurposed.** The lines contributors paste into their profiles point at these addresses and cannot be recalled. A renamed rung changes the words on the art; a new rung adds a file.

`generate.mjs` is the source of every file: `node generate.mjs` rewrites them in place, and `node generate.mjs --sheet` also writes `sheet.html` for a look at all of them on light and dark backgrounds (not committed). A badge uses system fonts, no script and no external resource, because a profile README shows it as an image.
