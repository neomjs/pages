---
id: 3623
title: 'buildScripts/createClass: guessBaseClass() => add container.Viewport'
state: CLOSED
labels:
  - enhancement
  - good first issue
  - ai
  - build
assignees:
  - neo-gemini-maryam
createdAt: '2022-12-17T19:15:10Z'
updatedAt: '2026-11-03T15:31:15Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3623'
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
closedAt: '2026-11-03T15:31:14Z'
---
# buildScripts/createClass: guessBaseClass() => add container.Viewport

*(No description provided)*

## Timeline

- 2022-12-17T19:15:10Z @tobiu added the `enhancement` label
- 2022-12-17T19:15:10Z @tobiu added the `good first issue` label
### @github-actions - 2024-08-30T02:27:34Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:35Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:36Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:37Z @github-actions closed this issue
- 2026-10-09T20:23:54Z @neo-opus-grace reopened this issue
- 2026-10-09T20:23:56Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:23:57Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid.** `guessBaseClass()` in `buildScripts/create/class.mjs` guesses models, stores, components, controllers, state providers and tables, but not `container.Viewport`. A good first issue.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T06:02:09Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T06:02:09Z @neo-gemini-maryam added the `build` label
### @neo-gemini-maryam - 2026-11-03T06:02:13Z

Triaged per `ticket-triage` skill. Applied: `ai`, `build` (alongside existing `enhancement`, `good first issue`). Stage retrospective passed. Self-assigning and proceeding to `ticket-intake`.

### Ticket Intake & Contract Ledger (`ticket-intake`)

- **Prescription checked:** `buildScripts/create/class.mjs` — owns the concern (`guessBaseClass(className)`).
- **Ticket age:** `createdAt: 2022-12-17T19:15:10Z`, `updatedAt: 2026-10-09T20:23:57Z`.
- **Bot stale-band:** `pre-stale` (reopened and revalidated on `2026-10-09T20:23:57Z` by `@neo-opus-grace` under `#19489 set C · T4`; `stale` label: false, `no auto close` label: false).
- **Currency / successor-risk evidence:** Verified live `buildScripts/create/class.mjs` on `dev`: `'container.Viewport'` is present in the interactive `choices` list (line 119) and `createContent()` `items: []` generation (line 641), but `guessBaseClass(className)` (lines 701–733) still lacks a `viewport` suffix check and falls through to `'container.Base'`. Guarding the CLI execution with `isEntryModule(import.meta.url)` (matching sibling `buildScripts/create/example.mjs`) also allows exporting `guessBaseClass` for direct unit testing.
- **ADR successor-risk:** `not-applicable`.
- **Classification verdict:** `valid-as-written` (Positive ROI).

#### Contract Ledger

| Surface / Symbol | File / Path | Current Behavior (`dev`) | Target Behavior (`#3623`) | Consumer / Test Anchor |
|---|---|---|---|---|
| `guessBaseClass(className)` | `buildScripts/create/class.mjs` | Checks `.model.`, `.store.`, `endsWith('component')`, `endsWith('controller')`, `endsWith('stateprovider')`, `includes('table')`, `includes('tab')`, else returns `'container.Base'`; unexported inside CLI block | Returns `'container.Viewport'` when `className.toLowerCase().endsWith('viewport')`; exported at module top-level with CLI entry guarded by `isEntryModule(import.meta.url)` | `buildScripts/create/class.mjs` baseClass prompt default + `test/playwright/unit/buildScripts/createClass.spec.mjs` |

— Maryam 🧭

- 2026-11-03T06:02:16Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-03T06:04:51Z @neo-gemini-maryam cross-referenced by PR #20219
- 2026-11-03T15:31:11Z @tobiu referenced in commit `ca3f843` - "feat(build): add container.Viewport to createClass guessBaseClass() (#3623) (#20219)"
- 2026-11-03T15:31:15Z @tobiu closed this issue

