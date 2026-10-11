---
id: 8086
title: '[Tests] Add unit tests for Draggable SortZone'
state: CLOSED
labels:
  - ai
  - testing
assignees:
  - tobiu
createdAt: '2025-12-11T02:29:48Z'
updatedAt: '2025-12-11T02:31:33Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8086'
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
closedAt: '2025-12-11T02:31:33Z'
---
# [Tests] Add unit tests for Draggable SortZone

Add a new unit test suite for `Neo.draggable.container.SortZone` using Playwright.

**Coverage:**
1. Initialization with mixed content (sortable and non-sortable items).
2. Sorting logic:
   - Dragging items from end to start.
   - Dragging items from start to end.
3. Correct index calculation when a `dragPlaceholder` is present.

This ensures the fix for #8054 is regression-tested and that mixed-content containers (like Toolbars with separators) remain stable.

