---
id: 8777
title: Robust Theme Switching for Portal Canvases
state: CLOSED
labels:
  - bug
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-18T14:15:17Z'
updatedAt: '2026-01-18T14:21:46Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8777'
author: tobiu
commentsCount: 1
parentIssue: 8727
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-18T14:21:46Z'
---
# Robust Theme Switching for Portal Canvases

- Refactor `isCanvasReady` from a class field to a reactive config `isCanvasReady_` in `apps/portal/view/news/tickets/TimelineCanvas.mjs` and `apps/portal/view/home/parts/hero/Canvas.mjs`.
- This change allows us to use the `afterSetIsCanvasReady` hook.
- Update `afterSetTheme` to check `this.isCanvasReady` before calling the remote method.
- Implement `afterSetIsCanvasReady` to call the remote `setTheme` method when the canvas becomes ready, ensuring the correct theme is applied even if the theme was set before the canvas connection was established.
- Update `afterSetOffscreenRegistered` to toggle `isCanvasReady` (which will now trigger the reactive setter).

## Timeline

### @tobiu - 2026-01-18T14:21:33Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented robust theme switching for the Portal Canvases to prevent race conditions.
> - Refactored `isCanvasReady` from a class field to a reactive config in `TimelineCanvas.mjs` and `Canvas.mjs` (Home Hero).
> - Updated `afterSetTheme` to check `isCanvasReady` before calling the remote method.
> - Added `afterSetIsCanvasReady` to trigger the remote `setTheme` call once the canvas connection is established.
> - Updated `afterSetOffscreenRegistered` to toggle the `isCanvasReady` config.


