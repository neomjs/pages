---
id: 4671
title: 'component.Base: updateVdom() => set needsVdomUpdate to false before starting the roundtrip'
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2023-08-08T17:14:21Z'
updatedAt: '2023-08-08T17:49:58Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4671'
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
closedAt: '2023-08-08T17:49:58Z'
---
# component.Base: updateVdom() => set needsVdomUpdate to false before starting the roundtrip

in theory, new changes could happen while the roundtrip is processing.

