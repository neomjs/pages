---
id: 8090
title: '[Refactor] Move Toolbar SortZone SCSS to container/SortZone.scss'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2025-12-11T18:42:19Z'
updatedAt: '2025-12-11T18:45:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8090'
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
closedAt: '2025-12-11T18:45:26Z'
---
# [Refactor] Move Toolbar SortZone SCSS to container/SortZone.scss

1. Append the `.neo-toolbar.neo-is-dragging` CSS rule from `resources/scss/src/draggable/toolbar/SortZone.scss` to `resources/scss/src/draggable/container/SortZone.scss`.
2. Update the selector to target direct children: `.neo-toolbar.neo-is-dragging > .neo-button`.
3. Remove `resources/scss/src/draggable/toolbar/SortZone.scss`.

