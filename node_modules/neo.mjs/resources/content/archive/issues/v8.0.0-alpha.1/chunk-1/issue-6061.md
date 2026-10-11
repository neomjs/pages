---
id: 6061
title: 'manager.Component: getVdomTree(), getVnodeTree() => depth'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-11-05T22:41:25Z'
updatedAt: '2024-11-05T22:44:49Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6061'
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
closedAt: '2024-11-05T22:44:49Z'
---
# manager.Component: getVdomTree(), getVnodeTree() => depth

the new implementation needs to change => instead of adjusting the depth on child node levels, it needs to adjust depending on component replacements inside a path.

