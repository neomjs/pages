---
id: 5122
title: 'worker.App: fireEvent() remote method to main'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2023-12-02T09:07:21Z'
updatedAt: '2023-12-02T09:14:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5122'
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
closedAt: '2023-12-02T09:14:50Z'
---
# worker.App: fireEvent() remote method to main

This one can be useful for e.g. testing, where we might want to trigger event listeners (not dom events) from within the main thread.

