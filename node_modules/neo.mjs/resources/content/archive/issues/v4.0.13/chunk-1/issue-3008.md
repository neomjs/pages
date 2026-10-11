---
id: 3008
title: 'manager.rpc.Api: register() => try to simplify the logic'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-04-25T17:57:28Z'
updatedAt: '2022-04-25T19:10:20Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3008'
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
closedAt: '2022-04-25T19:10:20Z'
---
# manager.rpc.Api: register() => try to simplify the logic

In theory, we should be able to expose `worker.Data: onRpc()` to the app worker, in which case `manager.rpc.Api: generateRemote()` would be obsolete.

## Timeline

### @tobiu - 2022-04-25T19:10:20Z

tested this in depth and it is a bigger trade-off than i thought => not worth it.


