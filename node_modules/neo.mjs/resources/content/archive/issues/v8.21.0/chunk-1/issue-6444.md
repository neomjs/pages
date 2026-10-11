---
id: 6444
title: 'data.Store: createRecord() => enhancement'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-02-11T21:20:47Z'
updatedAt: '2025-02-11T21:21:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6444'
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
closedAt: '2025-02-11T21:21:28Z'
---
# data.Store: createRecord() => enhancement

* move the logic inside `beforeSetData()` here
* => support for object & object[]
* use the new `createRecord()` method inside `add()`
* adjust the `isLoading` state inside beforeSet & afterSetData()

