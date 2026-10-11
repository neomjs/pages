---
id: 4656
title: 'controller.Application: afterSetMainView() => simplify the Logger registration'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-08-06T12:47:55Z'
updatedAt: '2023-08-06T12:48:53Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4656'
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
closedAt: '2023-08-06T12:48:53Z'
---
# controller.Application: afterSetMainView() => simplify the Logger registration

we don't even need to wait for the `mounted` event of the mainView, since the `contextmenu` listener is directly assigned to the `document.body`.

