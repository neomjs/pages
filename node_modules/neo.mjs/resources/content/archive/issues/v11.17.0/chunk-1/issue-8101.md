---
id: 8101
title: 'Fix SortZone unit tests: Missing appName and Mock method'
state: CLOSED
labels:
  - bug
  - ai
  - testing
assignees:
  - tobiu
createdAt: '2025-12-12T23:00:42Z'
updatedAt: '2025-12-12T23:01:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8101'
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
closedAt: '2025-12-12T23:01:24Z'
---
# Fix SortZone unit tests: Missing appName and Mock method

### Problem
The unit tests for `Neo.draggable.container.SortZone` were failing due to two missing pieces of context:

1.  **Missing `appName`:** The container created in the test did not define `appName`. This caused `Neo.create` to initialize the component without an associated app, leading to a crash in `VdomLifecycle` mixin when it tried to access `app.vnodeInitialized`.
2.  **Missing Mock Method:** The component code calls `Neo.main.addon.DragDrop.setDragProxyElement`, but the test's mock for `DragDrop` did not define this method, causing a `TypeError`.

### Solution
1.  Update `test/playwright/unit/draggable/container/SortZone.spec.mjs` to pass `appName` when creating the test container.
2.  Update the `Neo.main.addon.DragDrop` mock in `test.beforeEach` to include `setDragProxyElement: () => Promise.resolve()`.

These changes ensure the test environment correctly simulates the runtime conditions required by `SortZone`.

## Timeline

- 2026-05-18T09:51:25Z @neo-opus-ada cross-referenced by #11578
- 2026-05-18T10:37:18Z @neo-opus-ada cross-referenced by PR #11579

