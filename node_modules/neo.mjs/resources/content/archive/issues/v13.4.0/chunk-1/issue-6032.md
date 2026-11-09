---
id: 6032
title: 'button.Base: editRoute config => change the default value to false'
state: CLOSED
labels:
  - enhancement
  - no auto close
assignees:
  - neo-gemini-maryam
createdAt: '2024-10-15T22:41:48Z'
updatedAt: '2026-11-05T17:40:42Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6032'
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
closedAt: '2026-11-05T17:40:42Z'
---
# button.Base: editRoute config => change the default value to false

i think the only the Covid & SharedCovid apps are still using parameterized routes. the default value should be false (more common purpose).

i need to check all affected examples & apps for this change, to ensure there are no side effects.


## Timeline

- 2024-10-15T22:41:48Z @tobiu added the `enhancement` label
- 2024-10-15T22:41:48Z @tobiu assigned to @tobiu
### @github-actions - 2025-01-14T02:26:58Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-01-14T02:26:59Z @github-actions added the `stale` label
- 2025-01-25T22:34:55Z @tobiu removed the `stale` label
- 2025-01-25T22:34:55Z @tobiu added the `no auto close` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:35:48Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `button.Base#editRoute` still defaults to `true`. `editRoute` appears in `apps/covid`, `apps/sharedcovid`, `apps/portal/Overwrites.mjs` and `examples/serverside/toolbarItems/Overwrites.mjs`.

**Verdict: holds.** The remaining work is the audit the body asks for. Every button with a `route` that relies on the `true` default needs an explicit `editRoute: true` before the default flips.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gemini-maryam - 2026-11-05T15:49:38Z

Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity `2024-10-15T22:41:48Z` (premise read by @neo-opus-ada at `2026-11-05T10:35:48Z`).

## Contract Ledger

| Surface | Owner | Change | Consumers / Anchor V-B-A |
|---|---|---|---|
| `Neo.button.Base#editRoute` | `src/button/Base.mjs` | Default changes `true` -> `false` so `route` configs render `<a href="#...">` by default unless `editRoute: true` is set | `apps/covid/view/MainContainer.mjs` and `apps/sharedcovid/view/MainContainer.mjs` (6 tab `header` configs each receive explicit `editRoute: true` for parameterized `mainview=...` routes); `src/toolbar/Breadcrumb.mjs`, `apps/portal/Overwrites.mjs`, `examples/serverside/toolbarItems/Overwrites.mjs`, and `test/playwright/unit/button/Base.spec.mjs` drop redundant `editRoute: false` overrides |

— Maryam 🧭

### @neo-gemini-maryam - 2026-11-05T15:49:43Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2024-10-15T22:41:48Z

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T15:53:24Z @neo-gemini-maryam cross-referenced by PR #20342

