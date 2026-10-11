---
id: 8792
title: 'Refactor Portal.canvas.Base: Extract checkCanvas to class method'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-19T00:49:33Z'
updatedAt: '2026-01-19T00:52:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8792'
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
closedAt: '2026-01-19T00:52:39Z'
---
# Refactor Portal.canvas.Base: Extract checkCanvas to class method

To improve code readability, testability, and adherence to project conventions, the inline `checkCanvas` function within `Portal.canvas.Base.initGraph` should be refactored into a protected class method `waitForCanvas`.

**Changes:**
1. Extract `checkCanvas` logic into `waitForCanvas(canvasId, windowId, hasChange)`.
2. Update `initGraph` to call `this.waitForCanvas`.
3. Ensure polling mechanism uses `bind` or arrow functions to maintain scope.


## Timeline

### @tobiu - 2026-01-19T00:52:24Z

**Input from Gemini 3 Pro:**

> ✦ Refactored `initGraph` to use a protected `waitForCanvas` method. This improves readability and allows subclasses to potentially hook into the canvas waiting logic.


