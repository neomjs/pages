---
id: 5818
title: 'collection.Base: add() => call splice with an index of null instead of zero'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-08-25T21:25:07Z'
updatedAt: '2024-08-25T21:26:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5818'
author: tobiu
commentsCount: 1
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
closedAt: '2024-08-25T21:26:47Z'
---
# collection.Base: add() => call splice with an index of null instead of zero

*(No description provided)*

## Timeline

### @tobiu - 2024-08-25T21:25:43Z

while this will not affect sorted collections, it will insert new items at the top otherwise.


