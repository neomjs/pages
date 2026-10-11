---
id: 6063
title: 'manager.Component: addVnodeComponentReferences() => add support for wrapped components'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-11-05T23:43:18Z'
updatedAt: '2024-11-05T23:44:34Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6063'
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
closedAt: '2024-11-05T23:44:34Z'
---
# manager.Component: addVnodeComponentReferences() => add support for wrapped components

a bit expensive, but needed => the component id can get wrapped by multiple levels. we need to replace the wrapper node and not the content node.

