---
id: 3564
title: 'component.Base: afterSetDomListeners() => dynamically added listeners with controller based scopes'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-11-19T15:27:09Z'
updatedAt: '2022-11-19T15:28:17Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3564'
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
closedAt: '2022-11-19T15:28:17Z'
---
# component.Base: afterSetDomListeners() => dynamically added listeners with controller based scopes

in case `initConfig()` for a cmp has already run, like after the `super` call inside a `construct()` method, string based listeners will no longer get converted.

## Timeline

- 2022-11-19T15:27:09Z @tobiu added the `enhancement` label

