---
id: 5977
title: 'core.Base: remove static registerToGlobalNs'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-09-28T12:22:28Z'
updatedAt: '2024-09-28T12:23:15Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5977'
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
closedAt: '2024-09-28T12:23:15Z'
---
# core.Base: remove static registerToGlobalNs

* rationale: with the new class export logic to prevent importing multiple classes from different locations with the same className, the static config is no longer optional

