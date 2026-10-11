---
id: 6438
title: 'main.mixin.DeltaUpdates: add node checks to all methods'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-02-10T21:56:40Z'
updatedAt: '2025-02-10T21:57:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6438'
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
closedAt: '2025-02-10T21:57:14Z'
---
# main.mixin.DeltaUpdates: add node checks to all methods

* it can happen that deltas arrive when nodes already got removed
* also remove the testing log for updates

