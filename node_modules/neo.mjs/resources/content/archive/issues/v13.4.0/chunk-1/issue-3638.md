---
id: 3638
title: 'buildScripts/buildThemes: merge the workspace and framework theme folders for the selection question'
state: CLOSED
labels:
  - enhancement
  - ai
  - build
assignees:
  - neo-gemini-maryam
createdAt: '2022-12-18T20:06:49Z'
updatedAt: '2026-11-03T15:40:08Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3638'
author: tobiu
commentsCount: 4
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-03T15:40:08Z'
---
# buildScripts/buildThemes: merge the workspace and framework theme folders for the selection question

*(No description provided)*

## Timeline

- 2022-12-18T20:06:49Z @tobiu added the `enhancement` label
- 2022-12-18T20:06:49Z @tobiu assigned to @tobiu
### @github-actions - 2024-08-30T02:27:31Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:32Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:33Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:33Z @github-actions closed this issue
- 2026-10-09T20:23:58Z @neo-opus-grace reopened this issue
- 2026-10-09T20:23:59Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:24:01Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid but later.** `buildScripts/build/themes.mjs` lists only the local `resources/scss/theme-*` folders, so a workspace build's theme choice does not include the framework's themes.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T20:53:09Z @neo-opus-grace cross-referenced by #5305
- 2026-11-03T09:41:54Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T09:41:54Z @neo-gemini-maryam added the `build` label
### @neo-gemini-maryam - 2026-11-03T09:41:58Z

## Ticket Triage & Intake (`#3638`)

Triaged per `ticket-triage` skill. Applied: `ai`, `build` (alongside existing `enhancement`). Stage retrospective passed.
Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2026-10-09T20:24:01Z.

### Ticket Reality Classification (`ticket-intake §1.8`)
- **Ticket age:** created `2022-11-08`, reopened `2026-10-09T20:24:01Z` (`#19489`).
- **Bot stale-band:** `pre-stale` since reopen (`no auto close` not set; no `stale` label).
- **Currency / successor-risk evidence:**
  - Verified [`buildScripts/build/themes.mjs#L22-L32`](https://github.com/neomjs/neo/blob/dev/buildScripts/build/themes.mjs#L22-L32): `scssFolders` currently calls `fs.readdirSync(path.resolve(scssPath))` against `cwd` only, ignoring `path.resolve(neoPath, scssPath)` (`node_modules/neo.mjs/resources/scss/`) when `!insideNeo`.
  - Prescription checked: `buildScripts/build/themes.mjs` — owns the concern (reading and deduplicating `theme-*` directories across `path.resolve(neoPath, scssPath)` and `path.resolve(cwd, scssPath)` into `themeFolders` feeds `--help`, the interactive `themes` selection prompt, and `buildEnv`).
- **Verdict:** `valid-as-written`.

Authored by Maryam (Gemini 4 Argon, Antigravity). Session dadd700f-6b16-47b5-b22c-2f57073f86f3. 🧭

- 2026-11-03T09:42:02Z @neo-gemini-maryam unassigned from @tobiu
- 2026-11-03T09:42:16Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-03T09:44:10Z @neo-gemini-maryam cross-referenced by PR #20237
- 2026-11-03T15:40:08Z @tobiu referenced in commit `c9ae6b2` - "fix(build): merge framework and workspace theme folders in buildThemes (#3638) (#20237)"
- 2026-11-03T15:40:09Z @tobiu closed this issue

