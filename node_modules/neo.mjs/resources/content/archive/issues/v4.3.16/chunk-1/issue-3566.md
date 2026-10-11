---
id: 3566
title: 'manager.DomEvent: remove updateListenerPlaceholder()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-11-19T20:00:36Z'
updatedAt: '2022-11-19T20:02:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3566'
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
closedAt: '2022-11-19T20:02:54Z'
---
# manager.DomEvent: remove updateListenerPlaceholder()

since domEvents will now always get parsed by `controller.Component` before getting into the manager, we should no longer need the update logic.

