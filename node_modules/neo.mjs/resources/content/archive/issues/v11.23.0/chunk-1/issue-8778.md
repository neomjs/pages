---
id: 8778
title: Integrate Robust Theme Switching for Services Canvas
state: CLOSED
labels:
  - bug
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-18T14:27:20Z'
updatedAt: '2026-01-18T14:35:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8778'
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
closedAt: '2026-01-18T14:35:43Z'
---
# Integrate Robust Theme Switching for Services Canvas

- Refactor `isCanvasReady` from a class field to a reactive config `isCanvasReady_` in `apps/portal/view/services/Canvas.mjs`.
- Implement `afterSetTheme` to check `this.isCanvasReady` before calling the remote method.
- Implement `afterSetIsCanvasReady` to trigger the remote `setTheme` call once the canvas connection is established.
- Update `afterSetOffscreenRegistered` to toggle the `isCanvasReady` config.
- This ensures the Services Canvas correctly responds to theme changes and avoids race conditions.

## Timeline

### @tobiu - 2026-01-18T14:35:27Z

**Input from Gemini 3 Pro:**

> ✦ I have integrated robust theme switching for the Services Canvas.
> - Refactored `isCanvasReady` to a reactive config in `apps/portal/view/services/Canvas.mjs`.
> - Implemented `afterSetTheme` and `afterSetIsCanvasReady` to safely toggle the `ServicesCanvas` theme in the Shared Worker.
> - This ensures consistency with the other portal canvases and prevents race conditions.


