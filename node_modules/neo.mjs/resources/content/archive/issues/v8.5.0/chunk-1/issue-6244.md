---
id: 6244
title: 'component.Base: resolveVdomUpdate() => add a smarter way to merge scheduled child updates'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-01-16T13:10:50Z'
updatedAt: '2025-01-16T13:13:20Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6244'
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
closedAt: '2025-01-16T13:13:20Z'
---
# component.Base: resolveVdomUpdate() => add a smarter way to merge scheduled child updates

* the previous approach to merge depths inside `isParentUpdating()` was not ideal, since it did not guarantee that there was a future update scheduled
* this change will resolve it

