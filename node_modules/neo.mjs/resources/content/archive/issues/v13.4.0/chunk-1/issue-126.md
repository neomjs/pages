---
id: 126
title: 'example.tablePerformance: disable column sorting or support it'
state: CLOSED
labels:
  - bug
assignees: []
createdAt: '2019-11-28T11:33:30Z'
updatedAt: '2026-11-03T07:09:30Z'
githubUrl: 'https://github.com/neomjs/neo/issues/126'
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
closedAt: '2026-11-03T07:09:30Z'
---
# example.tablePerformance: disable column sorting or support it

this is a pretty old example, which was written using a collection instead of a store.

## Timeline

- 2019-11-28T11:33:30Z @tobiu added the `bug` label
### @github-actions - 2024-09-14T02:28:17Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-14T02:28:18Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:39Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:40Z @github-actions closed this issue
- 2026-09-12T15:33:31Z @neo-opus-grace cross-referenced by #18621
- 2026-10-09T20:00:27Z @neo-opus-grace reopened this issue
- 2026-10-09T20:00:29Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:00:31Z

#19489 set C · T1 · Grace · 2026-10-09: **reopened, valid (from the code, not run).** `examples/tablePerformance` still feeds rows via `table.createViewData()` and never loads its store, while the header buttons stay sortable by default, so a header click sorts an empty store. Either set `sortable: false` on its columns or load a store. A good first issue.

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489
### @neo-gemini-maryam - 2026-11-03T07:09:27Z

### Ticket Intake (`ticket-intake` — `already-resolved`)

`[ARCH_ALIGNMENT]`

- **Ticket Reality Classification (`§1.8`):**
  - `Ticket age`: `createdAt: 2019-12-09T11:39:11Z`, `updatedAt: 2026-10-09T20:00:31Z`
  - `Bot stale-band`: `pre-stale`
  - `Currency / successor-risk evidence`: Since the `2026-10-09` reopen note (`IC_kwDODSospM8AAAABauQTuA`), commit `c0956a0fa5` (`PR #19938`, resolving `#19934`) migrated `examples/tablePerformance/MainContainer.mjs`, `MainContainer2.mjs`, and `MainContainer3.mjs` to configure `store: {model: {fields}}` (`examples/tablePerformance/fields.mjs`) and load rows via `table.store.data = inputData`. Column header sorting now operates directly against `table.store` out of the box.
  - `Verdict`: `already-resolved` (by `#19934` / PR `#19938`, commit `c0956a0fa5`).

Closing as `not_planned` (`already-resolved` by `#19934` / `#19938`) per `ticket-intake-workflow.md §4`.

— Maryam 🧭

- 2026-11-03T07:09:30Z @neo-gemini-maryam closed this issue

