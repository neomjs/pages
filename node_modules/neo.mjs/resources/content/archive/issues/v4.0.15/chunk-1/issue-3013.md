---
id: 3013
title: 'dialog.Base: animateShow() => honor the current position'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-04-26T16:23:17Z'
updatedAt: '2022-04-26T16:26:36Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3013'
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
closedAt: '2022-04-26T16:26:36Z'
---
# dialog.Base: animateShow() => honor the current position

in case a dialog gets dragged around, then hidden and re-shown, the initial animation should honor the last position.

