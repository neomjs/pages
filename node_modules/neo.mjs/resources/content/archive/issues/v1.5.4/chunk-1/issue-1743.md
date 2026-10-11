---
id: 1743
title: 'table.Container: beforeSetStore() => dynamically add the listeners in case a store instance gets passed'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-04-09T19:48:45Z'
updatedAt: '2021-04-09T19:50:36Z'
githubUrl: 'https://github.com/neomjs/neo/issues/1743'
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
closedAt: '2021-04-09T19:50:36Z'
---
# table.Container: beforeSetStore() => dynamically add the listeners in case a store instance gets passed

*(No description provided)*

## Timeline

### @tobiu - 2021-04-09T19:49:55Z

we also need to call `onStoreLoad()` in case the store already has data.


