---
id: 6055
title: 'manager.Component: addVnodeComponentReferences()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T16:00:27Z'
updatedAt: '2024-11-05T21:42:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6055'
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
closedAt: '2024-11-05T16:01:04Z'
---
# manager.Component: addVnodeComponentReferences()

when retrieving a new `vnode` tree, we need to first delegate subtrees to related child components and then flatten each cmp based tree by adding cmp reference ids to keep the vdom & vnode trees in sync.

