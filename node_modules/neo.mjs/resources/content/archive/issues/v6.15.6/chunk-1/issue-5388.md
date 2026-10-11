---
id: 5388
title: 'form.field.Text: beforeSetTriggers() => pass the windowId to the trigger configs'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-04-11T16:39:42Z'
updatedAt: '2024-04-11T16:40:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5388'
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
closedAt: '2024-04-11T16:40:39Z'
---
# form.field.Text: beforeSetTriggers() => pass the windowId to the trigger configs

otherwise this can create a mess inside `Neo.cssMap`.

