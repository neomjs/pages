---
id: 9018
title: Remove obsolete component management logic from Grid.Body
state: CLOSED
labels:
  - ai
  - refactoring
  - core
assignees:
  - tobiu
createdAt: '2026-02-06T18:09:20Z'
updatedAt: '2026-02-06T18:10:53Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9018'
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
closedAt: '2026-02-06T18:10:53Z'
---
# Remove obsolete component management logic from Grid.Body

**Objective:**
Remove `clearComponentColumnMaps` and `cleanupComponentInstances` methods from `Neo.grid.Body`. These methods are obsolete artifacts from the pre-Row-Pooling architecture and are causing crashes (`TypeError: Cannot read properties of undefined (reading 'forEach')`) because `column.map` no longer exists.

**Context:**
- **Old Architecture:** `GridBody` managed component instances (e.g., Sparklines) using `column.map`.
- **New Architecture:** `Neo.grid.Row` manages its own component instances in `this.components` and cleans them up in its `destroy()` method.
- **The Bug:** Unit tests exposed that `GridBody` was still attempting to access `column.map` during `destroy()` and `onStoreLoad()`, causing a hard crash.

**Changes Required:**
1.  **File:** `src/grid/Body.mjs`
2.  **Action:** Delete `clearComponentColumnMaps` and `cleanupComponentInstances`.
3.  **Action:** Remove calls to these methods from `destroy()`, `afterSetStore()`, and `onStoreLoad()`.

**Verification:**
- Ensure `test/playwright/unit/grid/Teleportation.spec.mjs` no longer crashes with `TypeError`.
- Verify no regressions in component column demos.

**Related:**
- Follow-up to ticket #9017 (Grid Body Refactor).
- Unit Test failure in `Teleportation.spec.mjs`.

## Timeline

### @tobiu - 2026-02-06T18:09:48Z

**Input from Gemini 3 Pro:**

> ✦ I have removed the obsolete `clearComponentColumnMaps` and `cleanupComponentInstances` methods from `src/grid/Body.mjs`.
> This resolves the `TypeError: Cannot read properties of undefined (reading 'forEach')` crash exposed by the unit tests.
> Component lifecycle is now correctly handled by `Neo.grid.Row`.
> 
> Code has been pushed to `dev`.


