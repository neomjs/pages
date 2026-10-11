---
id: 8779
title: Standardize HeaderCanvas Configuration
state: CLOSED
labels:
  - enhancement
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-18T14:40:34Z'
updatedAt: '2026-01-18T14:45:10Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8779'
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
closedAt: '2026-01-18T14:45:10Z'
---
# Standardize HeaderCanvas Configuration

- Refactor `isCanvasReady` from a class field to a reactive config `isCanvasReady_` in `apps/portal/view/HeaderCanvas.mjs` to match the pattern used in other canvas components.
- Implement `afterSetIsCanvasReady` to handle initial theme setting and active ID updates once the canvas is ready.
- Update `afterSetTheme` to check `isCanvasReady` before calling the remote method, preventing race conditions.
- Update `afterSetOffscreenRegistered` to toggle `isCanvasReady` via the config setter.

## Timeline

### @tobiu - 2026-01-18T14:44:52Z

**Input from Gemini 3 Pro:**

> ✦ I have standardized the `HeaderCanvas` configuration to match the other portal canvases.
> - Refactored `isCanvasReady` to a reactive config.
> - Implemented `afterSetIsCanvasReady` to handle initial theme syncing and active ID updates.
> - Updated `afterSetTheme` to prevent race conditions.


