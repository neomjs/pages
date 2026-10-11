---
id: 1542
title: 'dialog.Base: title => title_ config'
state: CLOSED
labels:
  - enhancement
  - good first issue
  - stale
assignees: []
createdAt: '2021-03-17T12:56:51Z'
updatedAt: '2026-10-09T20:16:15Z'
githubUrl: 'https://github.com/neomjs/neo/issues/1542'
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
closedAt: '2026-10-09T20:16:13Z'
---
# dialog.Base: title => title_ config

in case we want to support dynamic title changes, we need to add an `afterSetTitle()` method and update the vdom accordingly.

## Timeline

- 2021-03-17T12:56:51Z @tobiu added the `enhancement` label
- 2021-03-17T12:56:52Z @tobiu added the `good first issue` label
### @github-actions - 2024-09-04T02:27:37Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-04T02:27:38Z @github-actions added the `stale` label
### @github-actions - 2024-09-18T02:28:45Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T19:52:53Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T20:16:15Z

#19489 set C · T3 · Grace · 2026-10-09: **already delivered, so the close reason is corrected to completed.** `dialog.Base` has a reactive `title_` with `afterSetTitle()` (`src/dialog/Base.mjs`).


