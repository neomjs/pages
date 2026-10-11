---
id: 6245
title: 'Portal.view.learn.ContentComponent: sometimes LivePreviews get rendered twice'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2025-01-16T13:57:58Z'
updatedAt: '2025-01-16T13:59:44Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6245'
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
closedAt: '2025-01-16T13:59:44Z'
---
# Portal.view.learn.ContentComponent: sometimes LivePreviews get rendered twice

@maxrahder 

The components get created using `autoRender: true` & `autoMount: true`, but `afterSetMounted()` is also triggering `render()` calls.

![Image](https://github.com/user-attachments/assets/938b4840-0e57-4990-9ee1-ecaee54094a5)

