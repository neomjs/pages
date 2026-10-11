---
id: 2648
title: 'form.field.Base: fireChangeEvent()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-07-23T08:57:05Z'
updatedAt: '2021-07-23T08:57:44Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2648'
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
closedAt: '2021-07-23T08:57:44Z'
---
# form.field.Base: fireChangeEvent()

extract the logic from `afterSetValue()`, so that class extensions like `form.field.Select` can override it.

