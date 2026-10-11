---
id: 2068
title: adjust the buildAll program to match the new commander specs
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2021-05-17T12:35:00Z'
updatedAt: '2021-05-17T12:36:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2068'
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
closedAt: '2021-05-17T12:36:13Z'
---
# adjust the buildAll program to match the new commander specs

before there was direct access to program options, like `program.env`, now options are returned via `program.opts()`.

