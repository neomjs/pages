---
id: 5305
title: 'buildScripts/createApp: should show framework and workspace related themes'
state: CLOSED
labels:
  - enhancement
  - ai
  - build
assignees:
  - neo-gemini-maryam
createdAt: '2024-03-08T10:53:15Z'
updatedAt: '2026-11-03T15:41:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5305'
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
closedAt: '2026-11-03T15:41:28Z'
---
# buildScripts/createApp: should show framework and workspace related themes

*(No description provided)*

## Timeline

- 2024-03-08T10:53:15Z @tobiu added the `enhancement` label
- 2024-03-08T10:53:16Z @tobiu assigned to @tobiu
### @github-actions - 2024-08-29T02:25:30Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:25:30Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:28:05Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:28:05Z @github-actions closed this issue
- 2026-10-09T20:53:05Z @neo-opus-grace reopened this issue
- 2026-10-09T20:53:07Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:53:08Z

#19489 set C · T7 · Grace · 2026-10-09: **reopened, valid but later.** `buildScripts/create/app.mjs` still builds its theme question from the framework's `resources/scss` only, so a workspace's own themes are not offered. It pairs with #3638 (`buildThemes`), reopened in this triage.

- 2026-10-09T21:02:53Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T09:44:26Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T09:44:26Z @neo-gemini-maryam added the `build` label
- 2026-11-03T09:44:29Z @neo-gemini-maryam unassigned from @tobiu
- 2026-11-03T09:45:29Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T09:45:34Z

## Ticket Triage & Intake (`#5305`)

Triaged per `ticket-triage` skill. Applied: `ai`, `build` (alongside existing `enhancement`). Stage retrospective passed.
Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2026-10-09T20:53:08Z.

### Ticket Reality Classification (`ticket-intake §1.8`)
- **Ticket age:** created `2024-03-01`, reopened `2026-10-09T20:53:08Z` (`#19489`).
- **Bot stale-band:** `pre-stale` since reopen (`no auto close` not set; no `stale` label).
- **Currency / successor-risk evidence:**
  - Verified [`buildScripts/create/app.mjs#L23-L30`](https://github.com/neomjs/neo/blob/dev/buildScripts/create/app.mjs#L23-L30) and [`buildScripts/create/appMinimal.mjs#L23-L30`](https://github.com/neomjs/neo/blob/dev/buildScripts/create/appMinimal.mjs#L23-L30): both scripts only read `path.join(neoPath, '/resources/scss')` (the framework's `resources/scss`), omitting workspace-defined `theme-*` folders in `path.resolve(cwd, 'resources/scss')` when `!insideNeo`.
  - Prescription checked: `buildScripts/create/app.mjs` and `buildScripts/create/appMinimal.mjs` — own the concern (reading and deduplicating `theme-*` folders from both `neoPath` and `cwd` into `themeFolders` prefixed with `neo-`).
- **Verdict:** `valid-as-written`.

Authored by Maryam (Gemini 4 Argon, Antigravity). Session dadd700f-6b16-47b5-b22c-2f57073f86f3. 🧭

- 2026-11-03T09:47:20Z @neo-gemini-maryam cross-referenced by PR #20238
- 2026-11-03T15:41:28Z @tobiu referenced in commit `f29ea74` - "fix(build): merge framework and workspace themes in createApp (#5305) (#20238)"
- 2026-11-03T15:41:28Z @tobiu closed this issue

