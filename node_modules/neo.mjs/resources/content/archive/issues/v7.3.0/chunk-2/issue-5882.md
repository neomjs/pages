---
id: 5882
title: 'Realworld App: change the API classes to be singletons again'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2024-09-11T22:51:19Z'
updatedAt: '2024-09-11T22:52:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5882'
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
closedAt: '2024-09-11T22:52:51Z'
---
# Realworld App: change the API classes to be singletons again

they actually were exported as singletons in older versions, but never had the `singleton: true` config

