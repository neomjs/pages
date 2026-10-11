---
id: 7189
title: 'grid.Body: onStoreFilter() => pass arguments to onStoreLoad'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2025-08-12T23:36:50Z'
updatedAt: '2025-08-12T23:37:55Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7189'
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
closedAt: '2025-08-12T23:37:55Z'
---
# grid.Body: onStoreFilter() => pass arguments to onStoreLoad

* `onStoreLoad()` was changed to use destructured params, so we must pass something, or it results inside a JS bug

