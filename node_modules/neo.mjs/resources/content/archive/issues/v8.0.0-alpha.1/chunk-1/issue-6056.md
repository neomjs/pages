---
id: 6056
title: 'container.Base: add top level ids to component based vdom references'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T20:24:51Z'
updatedAt: '2024-11-05T20:28:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6056'
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
closedAt: '2024-11-05T20:28:03Z'
---
# container.Base: add top level ids to component based vdom references

rationale: removing child items from a container can happen without sending the item vdom to the vdom worker in this case.

