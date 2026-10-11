---
id: 6442
title: 'grid.View: createViewData() => needs to silently trigger updateScrollHeight()'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2025-02-11T19:51:36Z'
updatedAt: '2025-02-11T19:52:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6442'
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
closedAt: '2025-02-11T19:52:02Z'
---
# grid.View: createViewData() => needs to silently trigger updateScrollHeight()

* a store load or filter OP can result with a different amount of rows => needs to get reflected inside the view


