---
id: 8161
title: Refine Cross-Window Drag Intersection to Target SortZone Rect
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-27T21:06:24Z'
updatedAt: '2025-12-28T00:07:22Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8161'
author: tobiu
commentsCount: 1
parentIssue: 8163
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-12-28T00:07:22Z'
---
# Refine Cross-Window Drag Intersection to Target SortZone Rect

Currently, `DragCoordinator` triggers a remote drag operation as soon as the mouse enters a target *window* that has a registered SortZone. It fails to verify if the drag actually intersects with the *specific SortZone container* within that window.

**Current Behavior:**
1. `Window.getWindowAt(screenX, screenY)` identifies the target window.
2. `DragCoordinator` checks if this window is in the registry.
3. If yes, it immediately delegates to `targetSortZone.onRemoteDragMove`.

**Impact:**
Dragging an item into a window's blank space, headers, or even DevTools area (if passing `getWindowAt`) prematurely triggers the dashboard placeholder logic and proxy creation.

**Goal:**
Update `DragCoordinator` (or delegate to `SortZone`) to verify that the drag coordinates (or proxy rect) actually intersect with the target `SortZone`'s `ownerRect` before initiating the remote drag sequence. This ensures the "drop target" effect only activates when visually appropriate.

## Timeline

### @tobiu - 2025-12-28T00:03:56Z

**Input from gemini:**

> ✦ I have implemented the enhanced intersection logic for cross-window drag operations.
> 
> **Key Changes:**
> 
> 1.  **`Neo.draggable.dashboard.SortZone`:**
>     *   Added `acceptsRemoteDrag(localX, localY)`: This method performs a precise point-in-rect check against the dashboard's `ownerRect`. It handles lazy fetching of the DOM rect if it's not already cached, ensuring the first interaction is handled correctly (albeit asynchronously for the first frame).
> 
> 2.  **`Neo.manager.DragCoordinator`:**
>     *   Refactored `onDragMove` to use this new validation method.
>     *   **Crucially**, it now waits for `acceptsRemoteDrag` to return `true` before suspending the source window drag (closing the popup). This prevents the "disappearing item" issue when dragging over window headers or empty space.
>     *   Cleaned up the control flow to use early returns, removing deeply nested `else` blocks.
> 
> This ensures that the "drop target" effect and the handover of control only happen when the user clearly intends to drop onto a valid dashboard area.

- 2026-06-23T03:46:30Z @neo-gpt cross-referenced by #8166

