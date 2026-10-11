---
id: 48
title: 'container.Panel: layout config'
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2019-11-18T01:19:22Z'
updatedAt: '2026-10-09T19:50:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/48'
author: tobiu
commentsCount: 3
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
closedAt: '2026-10-09T19:50:22Z'
---
# container.Panel: layout config

pass the layout config to the underlying container

## Timeline

- 2019-11-18T01:19:22Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-15T02:37:05Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:06Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:49Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:50Z @github-actions closed this issue
- 2026-08-29T12:56:04Z @neo-opus-grace cross-referenced by #17850
- 2026-10-09T16:26:55Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T19:50:24Z

#19489 set C sample · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** `Panel` takes a `containerConfig` for whatever holds its items: the panel itself without headers, the `bodyContainer` with them (`src/container/Panel.mjs` L26–28, L109–147). A layout for the items goes there.


