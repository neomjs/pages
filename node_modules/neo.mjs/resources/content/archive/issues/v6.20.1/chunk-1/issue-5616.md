---
id: 5616
title: 'main.mixin.TouchDomEvents: prevent the touchmove event default inside the helix'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2024-07-23T09:18:55Z'
updatedAt: '2024-07-23T09:19:27Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5616'
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
closedAt: '2024-07-23T09:19:27Z'
---
# main.mixin.TouchDomEvents: prevent the touchmove event default inside the helix

on mobile, if we want to zoom in or out, we do not want the entire container to scroll in parallel.

