---
id: 5258
title: 'main.DomAccess: importing the string util breaks a base class invocation'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-02-22T15:54:14Z'
updatedAt: '2024-02-22T15:56:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5258'
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
closedAt: '2024-02-22T15:56:31Z'
---
# main.DomAccess: importing the string util breaks a base class invocation

names of imported modules must not collide with reserved prototypes.

## Timeline

- 2024-02-22T15:54:14Z @tobiu added the `bug` label

