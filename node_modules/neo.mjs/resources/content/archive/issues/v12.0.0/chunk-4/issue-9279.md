---
id: 9279
title: 'DevIndex: Fix ''Show Animations'' checkbox binding for Grid Sparklines'
state: CLOSED
labels:
  - bug
  - ai
  - grid
assignees:
  - tobiu
createdAt: '2026-02-24T01:01:03Z'
updatedAt: '2026-02-24T01:02:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9279'
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
closedAt: '2026-02-24T01:02:43Z'
---
# DevIndex: Fix 'Show Animations' checkbox binding for Grid Sparklines

The `Show Animations` checkbox in the DevIndex app was failing to disable the pulse animations in the Grid sparklines.

**Root Cause:**
The `bind: { animateVisuals: ... }` config defined in `GridContainer`'s static config was being completely overridden by the `bind: { store: ... }` config passed when instantiating the grid inside `MainContainer.mjs`. Because Neo.mjs instance configs shadow static prototype configs, the `animateVisuals` binding was erased upon instantiation, preventing the grid from receiving state updates from the `ViewportStateProvider`.

**Resolution:**
- Moved the `animateVisuals` binding directly into the `body` config of `GridContainer`.
- Removed the now-redundant `animateVisuals_` config and `afterSetAnimateVisuals` hook from `GridContainer.mjs`.
- Cleaned up unused variables (`regexPrefixCy`, `positions`).

## Timeline

### @tobiu - 2026-02-24T01:02:31Z

The fix has been implemented and pushed to the `dev` branch.


