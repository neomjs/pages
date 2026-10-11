---
id: 8164
title: Enhance Neo.manager.Window to Track Full Window Geometry
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2025-12-27T21:30:52Z'
updatedAt: '2025-12-27T23:53:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8164'
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
closedAt: '2025-12-27T23:53:28Z'
---
# Enhance Neo.manager.Window to Track Full Window Geometry

During the implementation of cross-window drag & drop, we discovered that `Neo.manager.Window` primarily tracked the outer window `rect` (screen coordinates of the frame). To correctly position elements inside the viewport (like the drag proxy), we patched it to calculate `headerHeight` (`outerHeight - innerHeight`).

**Issue:**
The current `Window` model is incomplete. It confounds "Screen Position" (Frame) with "Content Position" (Viewport). This leads to ad-hoc calculations in consumers like `DragCoordinator` to infer the browser chrome size.

**Goal:**
Refactor `Neo.manager.Window` to explicitly track and expose:
1.  `outerRect`: The window frame on the OS screen.
2.  `innerRect` (or `viewportRect`): The content area on the OS screen.
3.  `chromeDimensions`: Top/Left/Right/Bottom border sizes.

**Benefits:**
*   Simplifies cross-window positioning (popups, proxies, infinite canvas).
*   Enables precise "center on parent content" logic.
*   Removes fragile `headerHeight` assumptions.

## Timeline

### @tobiu - 2025-12-27T23:53:00Z

**Input from gemini:**

> ✦ I have implemented the enhanced window geometry tracking to support the "Infinite Canvas" across different browsers.
> 
> **Key Changes:**
> 
> 1.  **Refactored `Neo.manager.Window`:**
>     *   Added `calculateGeometry` to interpret raw window data and derive `innerRect` (viewport), `outerRect` (frame), and `chrome` dimensions.
>     *   Implemented browser-specific logic:
>         *   **Firefox:** Uses `mozInnerScreenX/Y` directly for precise viewport positioning.
>         *   **Safari:** Uses `isSafari` flag (cached via `navigator.userAgent`) to correct for the frame-based `screenLeft/Top` coordinates by adding calculated chrome.
>         *   **Chrome/Edge:** Uses `screenLeft/Top` as the viewport origin (standard behavior).
>     *   Updated `onWindowConnect` and `onWindowPositionChange` to use this robust logic.
> 
> 2.  **Updated `Neo.manager.DragCoordinator`:**
>     *   Switched from manual, brittle coordinate calculations to using the new `targetWindow.innerRect`. This ensures drop targets are detected exactly where the user sees them, regardless of browser chrome size.
> 
> 3.  **Updated `Neo.Main`:**
>     *   Modified `getWindowData` to report raw sensor data, including `mozInnerScreenX/Y`. It now acts as a dumb sensor, delegating interpretation to the Worker.
> 
> 4.  **Reverted `Neo.main.addon.WindowPosition`:**
>     *   Restored to its simpler state of tracking raw `screenLeft/Top` for movement detection, maintaining clean separation of concerns.
> 
> This foundation allows precise cross-window coordinate mapping for all major browsers.

- 2026-06-12T22:03:32Z @neo-fable cross-referenced by #144
- 2026-06-12T22:33:53Z @neo-fable cross-referenced by #13030
- 2026-06-13T01:04:42Z @neo-opus-ada cross-referenced by #13033
- 2026-06-13T10:17:56Z @neo-opus-vega cross-referenced by PR #13085
- 2026-06-23T03:56:38Z @neo-gpt cross-referenced by #8163
- 2026-09-01T23:46:22Z @neo-opus-vega cross-referenced by #18058
- 2026-09-02T10:29:26Z @neo-fable-clio cross-referenced by PR #18068
- 2026-09-09T18:37:25Z @neo-opus-grace cross-referenced by PR #18559

