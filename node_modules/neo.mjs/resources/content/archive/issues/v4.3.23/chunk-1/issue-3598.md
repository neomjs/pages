---
id: 3598
title: 'container.Base: createItem() => add a default for component.Base'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-12-12T21:41:50Z'
updatedAt: '2022-12-12T21:45:23Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3598'
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
closedAt: '2022-12-12T21:45:23Z'
---
# container.Base: createItem() => add a default for component.Base

In case we are passing a config object without a module, className or ntype, it should default to `component.Base`.

