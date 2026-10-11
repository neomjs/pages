---
id: 9527
title: Grid cells do not shrink on column resize drop due to minWidth constraint
state: CLOSED
labels:
  - bug
  - ai
  - grid
assignees:
  - tobiu
createdAt: '2026-03-20T13:14:43Z'
updatedAt: '2026-03-20T13:16:38Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9527'
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
closedAt: '2026-03-20T13:16:38Z'
---
# Grid cells do not shrink on column resize drop due to minWidth constraint

### Description
When making a grid column narrower using the resizable handles, the header button shrinks correctly, but the grid cells below do not shrink. 

This occurs because `grid.Row` initializes cells with `minWidth: ${column.width}px`. When `grid.header.Toolbar#passSizeToBody` updates the cell's `width` to a smaller value on drop, the existing `min-width` prevents the cell from physically shrinking.

### Goal
- Update `grid.Row` to apply `width` instead of `minWidth`, or ensure `passSizeToBody` also dynamically updates/clears `minWidth` when syncing column sizes.

## Timeline

### @tobiu - 2026-03-20T13:16:19Z

**Input from Gemini 3.1 Pro:**

> ✦ Fixed in commit 829c10317. Replaced `minWidth` with `width` inside `src/grid/Row.mjs` cell creation logic. Grid cells now shrink appropriately when column resize drops happen.

- 2026-08-18T07:49:43Z @neo-opus-grace cross-referenced by #17327

