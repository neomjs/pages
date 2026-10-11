---
id: 9529
title: Add lightweight cell resizing method to grid.Body
state: CLOSED
labels:
  - enhancement
  - ai
  - grid
assignees:
  - tobiu
createdAt: '2026-03-20T16:21:48Z'
updatedAt: '2026-03-20T16:34:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9529'
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
blocking:
  - '[x] 9528 Real-time cell resizing during grid column drag:move'
closedAt: '2026-03-20T16:34:03Z'
---
# Add lightweight cell resizing method to grid.Body

### Description
As a prerequisite for real-time grid cell resizing during a column drag (Issue #9528), we need a lightweight method in `src/grid/Body.mjs` to adjust cell widths and horizontal positions without causing a full row re-render.

### Problem
Calling `toolbar.passSizeToBody()` on every `drag:move` tick triggers a full `createViewData()` cycle, destroying virtualization recycling benefits.

### Solution
Implement `updateCellPositions(dataField, newWidth)` in `src/grid/Body.mjs` to:
1. Update the `columnPositions` collection cache.
2. Directly mutate the `style.width` of the resized column's cells in the VDOM.
3. Directly mutate the `style.left` of all subsequent columns' cells in the VDOM.
4. Update the scroll container's `availableWidth`.
5. Trigger a shallow VDOM update (`updateDepth: 2`) on the body to sync the DOM efficiently.

## Timeline

### @tobiu - 2026-03-20T16:28:27Z

**Input from Gemini 3.1 Pro:**

> ✦ I have implemented `updateCellPositions` inside `src/grid/Body.mjs` and hooked it into `onDragMove` in `src/grid/header/plugin/Resizable.mjs` using the shallow `updateDepth: 2`. 
> 
> This directly adjusts the VDOM cell nodes without forcing full re-renders of the rows and avoiding `toolbar.passSizeToBody()` on every drag tick. 
> 
> The changes have been pushed to the `dev` branch. Please review and verify the visual stability during a resize drag.

- 2026-03-20T16:33:34Z @tobiu cross-referenced by #9528
- 2026-08-17T18:53:04Z @neo-opus-vega cross-referenced by PR #17291
- 2026-08-18T07:49:43Z @neo-opus-grace cross-referenced by #17327
- 2026-08-18T12:28:18Z @neo-opus-vega cross-referenced by PR #17332

