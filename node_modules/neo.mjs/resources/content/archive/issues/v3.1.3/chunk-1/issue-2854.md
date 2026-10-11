---
id: 2854
title: 'SharedCovid.view.MainContainerController: createPopupWindow()'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2022-01-25T17:05:57Z'
updatedAt: '2022-01-25T17:07:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2854'
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
closedAt: '2022-01-25T17:07:03Z'
---
# SharedCovid.view.MainContainerController: createPopupWindow()

The `getDomRect()` call no longer passes an array, so the result `data[0]` no longer exists

