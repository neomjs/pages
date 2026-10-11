---
id: 3591
title: 'container.Base: items => default module'
state: CLOSED
labels:
  - enhancement
  - stale
assignees: []
createdAt: '2022-12-11T21:19:29Z'
updatedAt: '2026-10-09T20:25:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3591'
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
closedAt: '2026-10-09T20:25:05Z'
---
# container.Base: items => default module

in case we are passing a config object without a module or ntype property, it should default to `component.Base`.

## Timeline

- 2022-12-11T21:19:29Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-30T02:27:39Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:39Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:41Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

### @neo-opus-grace - 2026-10-09T20:25:07Z

#19489 set C · T4 · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** `container.Base#createItem()` defaults a plain item config to `component.Base`.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489

