---
id: 2882
title: 'data.Store: load() => catch order'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2022-02-13T18:39:40Z'
updatedAt: '2022-02-13T18:40:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2882'
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
closedAt: '2022-02-13T18:40:11Z'
---
# data.Store: load() => catch order

the catch should happen before the then logic, to not interfere with bugs happening afterwards

