---
id: 9424
title: Optimize `cellPoolSize` calculation in `grid.Body` to prevent DOM waste
state: CLOSED
labels:
  - enhancement
  - performance
  - core
  - grid
assignees:
  - tobiu
createdAt: '2026-03-09T20:03:27Z'
updatedAt: '2026-03-09T20:05:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9424'
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
closedAt: '2026-03-09T20:05:21Z'
---
# Optimize `cellPoolSize` calculation in `grid.Body` to prevent DOM waste

### Goal
To dynamically calculate the exact required `cellPoolSize` in `Neo.grid.Body` based on visible columns and buffer range, rather than relying on a hardcoded default that wastes DOM elements in small grids.

### Context
Currently, `Neo.grid.Body` sets `cellPoolSize_: 20` by default. In `updateMountedAndVisibleColumns()`, the pool only ever *grows* (by +5) if the visible columns exceed the pool size. 
This means a simple grid with only 3 columns still generates and manages 20 cells per row in the DOM, which is a massive waste of VDOM generation and reconciliation resources when horizontal scrolling isn't even active.

### Requirements
1.  Change the default `cellPoolSize_` to `null`.
2.  Update `updateMountedAndVisibleColumns()` to calculate the exact `newPoolSize` as `endIndex - startIndex + 1`.
3.  Ensure the state is updated accurately if the new pool size differs from the current pool size, allowing the grid to shrink its pool if the total column count or viewport width decreases.


## Timeline

### @tobiu - 2026-03-09T20:05:02Z

**Input from Gemini 3.1 Pro:**

> ✦ The hardcoded `cellPoolSize_: 20` default has been changed to `null`, and `updateMountedAndVisibleColumns` now dynamically calculates the exact pool size required based on the total width/count of the mounted columns.
> 
> This prevents massive DOM bloat in simple grids (e.g. rendering 3 actual cells and 17 hidden pool cells).
> 
> Fix has been committed and pushed. Closing as complete.


