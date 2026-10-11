---
id: 6758
title: 'worker.Base: workerId => switch from config to class field'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-06-09T08:39:33Z'
updatedAt: '2025-06-09T08:40:05Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6758'
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
closedAt: '2025-06-09T08:40:05Z'
---
# worker.Base: workerId => switch from config to class field

* static flag, which won't change at run-time
* consistency to the service worker implementation
* update class extensions accordingly

