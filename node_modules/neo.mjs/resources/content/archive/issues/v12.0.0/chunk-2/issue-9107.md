---
id: 9107
title: OffscreenCanvas charts in Grid Component Columns do not recover after VDOM purge
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-02-11T23:15:00Z'
updatedAt: '2026-02-11T23:19:08Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9107'
author: tobiu
commentsCount: 1
parentIssue: 9106
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-11T23:19:08Z'
---
# OffscreenCanvas charts in Grid Component Columns do not recover after VDOM purge

When using `Neo.grid.Container` with `Neo.grid.column.Component` containing `OffscreenCanvas` based components (like sparklines), navigating away from the grid (causing a VDOM purge of the inactive card) and then back results in the charts not rendering.

The `OffscreenCanvas` component has logic to "heal" itself by re-requesting the canvas node when its `mounted` state changes from false to true. It is suspected that this `mounted` state change is not being properly propagated to components within grid component columns.

**Investigation Areas:**
- `src/component/Canvas.mjs`
- `src/grid/Container.mjs`
- `src/grid/Body.mjs`
- `src/grid/Row.mjs`
- `src/grid/column/Component.mjs`
- `src/grid/column/Sparkline.mjs`


## Timeline

### @tobiu - 2026-02-11T23:18:48Z

**Input from Gemini 3 Pro:**

> ✦ Fixed by implementing `afterSetMounted` in `src/grid/Row.mjs`. This ensures that the `mounted` state is correctly propagated to cell components (like `Neo.component.Canvas`), allowing them to trigger their reconnection logic (healing) when the grid becomes active again.

- 2026-09-04T14:52:09Z @neo-fable cross-referenced by #18291
- 2026-09-04T15:27:12Z @neo-gpt-emmy cross-referenced by PR #18294

