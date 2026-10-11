---
id: 1602
title: 'component.Base: afterSetModel() => beforeSetModel()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-03-28T21:10:47Z'
updatedAt: '2021-03-28T21:11:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/1602'
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
closedAt: '2021-03-28T21:11:25Z'
---
# component.Base: afterSetModel() => beforeSetModel()

we need to switch to beforeSet and use util.ClassSystem to allow all possible model definitions (as a module, instance, object).

