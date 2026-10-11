---
id: 6543
title: 'grid.ScrollManager: onViewScroll() => increase the timeout'
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2025-03-07T11:03:51Z'
updatedAt: '2025-03-07T11:04:46Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6543'
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
closedAt: '2025-03-07T11:04:45Z'
---
# grid.ScrollManager: onViewScroll() => increase the timeout

30ms will trigger additional view update () calls while scrolling, 100ms resolves this.

