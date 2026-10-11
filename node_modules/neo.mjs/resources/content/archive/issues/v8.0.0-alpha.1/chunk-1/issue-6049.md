---
id: 6049
title: 'container.Base: insert() => updateDepth -1'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T13:30:30Z'
updatedAt: '2024-11-05T13:44:17Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6049'
author: tobiu
commentsCount: 0
parentIssue: 6045
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2024-11-05T13:30:57Z'
---
# container.Base: insert() => updateDepth -1

in case we are adding / inserting new items into a container, we should pass the full vdom tree into the next update cycle.

