---
id: 6757
title: 'grid.column.AnimatedCurrency: cellRenderer() broken'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2025-06-06T10:28:40Z'
updatedAt: '2025-06-06T10:29:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6757'
author: tobiu
commentsCount: 0
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
closedAt: '2025-06-06T10:29:14Z'
---
# grid.column.AnimatedCurrency: cellRenderer() broken

* Regression issue
* The default scope for cell renderers switched from the column to the view instance.
* The fix is trivial, since the renderer gets the column as a nested param

