---
id: 6048
title: 'component.Base: updateDepth_ config'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T12:42:38Z'
updatedAt: '2024-11-05T13:44:12Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6048'
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
closedAt: '2024-11-05T13:22:29Z'
---
# component.Base: updateDepth_ config

especially for container layout updates, we need to include direct children.

the new config should default to 1 (current level only). bigger numbers should also send the child components vdom to the vdom worker.

a value of -1 should send the full tree

