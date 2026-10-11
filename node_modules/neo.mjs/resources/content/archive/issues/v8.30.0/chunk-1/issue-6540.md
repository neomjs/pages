---
id: 6540
title: 'grid.column.Component: component parentId'
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2025-03-03T23:17:59Z'
updatedAt: '2025-03-03T23:57:57Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6540'
author: tobiu
commentsCount: 1
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
closedAt: '2025-03-03T23:57:57Z'
---
# grid.column.Component: component parentId

* Important for connection to view controllers or state providers, if needed.

## Timeline

### @tobiu - 2025-03-03T23:57:32Z

For this specific use case, passing ´parentComponent´ instead makes more sense:
Inside the bigData demo, the button ripple effect will get affected when clicking very fast otherwise.


