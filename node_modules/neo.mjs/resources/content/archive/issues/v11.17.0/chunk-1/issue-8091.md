---
id: 8091
title: '[Refactor] Update tab.header.Toolbar SortZone logic'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2025-12-11T18:53:16Z'
updatedAt: '2025-12-11T18:55:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8091'
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
closedAt: '2025-12-11T18:55:39Z'
---
# [Refactor] Update tab.header.Toolbar SortZone logic

Update `src/tab/header/Toolbar.mjs` to use the new `SortZone` creation logic from `container.Base`.
1. Remove `afterSetSortable()`.
2. Implement `loadSortZoneModule()` to import `../../draggable/tab/header/toolbar/SortZone.mjs`.

