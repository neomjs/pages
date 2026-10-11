---
id: 5393
title: 'core.Base: destroy() => set fire() to an emptyFn, in case the instance is observable'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-04-15T10:48:32Z'
updatedAt: '2024-04-15T10:51:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5393'
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
closedAt: '2024-04-15T10:51:22Z'
---
# core.Base: destroy() => set fire() to an emptyFn, in case the instance is observable

we do want to prevent delayed event calls after an instance got destroyed.

