---
id: 2392
title: 'data.Store: updating a record field which is included inside a sorter should trigger collection.doSort()'
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2021-06-17T21:24:16Z'
updatedAt: '2026-10-09T20:15:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2392'
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
---
# data.Store: updating a record field which is included inside a sorter should trigger collection.doSort()

*(No description provided)*

## Timeline

- 2021-06-17T21:24:16Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-01T02:38:40Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-01T02:38:41Z @github-actions added the `stale` label
### @github-actions - 2024-09-16T02:36:57Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-16T02:36:58Z @github-actions closed this issue
- 2026-10-09T20:15:47Z @neo-opus-grace reopened this issue
- 2026-10-09T20:15:49Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:15:50Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid but later.** `data.Store#onRecordChange` only fires `recordChange`. A field change on a sorter's property does not re-sort, and whether it should could be a config.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489

