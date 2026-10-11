---
id: 9282
title: 'Grid Row: Propagate theme changes to cell components'
state: CLOSED
labels:
  - bug
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-02-24T01:51:59Z'
updatedAt: '2026-02-24T01:53:17Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9282'
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
closedAt: '2026-02-24T01:53:17Z'
---
# Grid Row: Propagate theme changes to cell components

When the `theme` config on a grid changes, `Neo.grid.Body` properly propagates the new theme to its `items` (the `Neo.grid.Row` pool). However, `Neo.grid.Row` was missing the `afterSetTheme` hook, meaning any custom components rendered inside the grid cells (e.g. `Sparkline` widgets) were not notified of the theme change.

**Resolution:**
- Added `afterSetTheme(value, oldValue)` to `src/grid/Row.mjs`.
- The method iterates over `this.components` (the cached instances of column components) and sets `component.theme = value`, ensuring deep propagation of the theme switch to all cell widgets.

## Timeline

### @tobiu - 2026-02-24T01:53:05Z

The fix has been implemented and pushed to the `dev` branch.


