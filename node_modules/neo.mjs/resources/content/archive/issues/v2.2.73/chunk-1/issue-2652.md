---
id: 2652
title: 'buildScripts/createApp: dynamically fetch the available main thread addons'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-07-24T11:42:59Z'
updatedAt: '2021-07-24T11:48:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2652'
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
closedAt: '2021-07-24T11:48:51Z'
---
# buildScripts/createApp: dynamically fetch the available main thread addons

`fs.readdirSync()` on the addons folder to automatically include future addons as options.

