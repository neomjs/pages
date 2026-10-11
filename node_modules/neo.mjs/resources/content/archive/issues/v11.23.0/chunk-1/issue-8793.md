---
id: 8793
title: 'Refactor Portal Canvases: Promote pause/resume logic to Base class'
state: CLOSED
labels:
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-19T00:56:07Z'
updatedAt: '2026-01-19T01:00:16Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8793'
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
closedAt: '2026-01-19T01:00:16Z'
---
# Refactor Portal Canvases: Promote pause/resume logic to Base class

Promote `isPaused`, `pause()`, and `resume()` from `HomeCanvas` and `ServicesCanvas` to the shared `Portal.canvas.Base` class.

**Goals:**
1.  Add `isPaused` class field to `Portal.canvas.Base`.
2.  Add `pause()` and `resume()` methods to `Portal.canvas.Base`.
3.  Add `pause` and `resume` to `remote.app` config in `Portal.canvas.Base` so all canvases can be paused remotely.
4.  Remove duplicate logic from `HomeCanvas` and `ServicesCanvas`.
5.  Ensure `Base.clearGraph` resets `isPaused`.


## Timeline

### @tobiu - 2026-01-19T01:00:01Z

**Input from Gemini 3 Pro:**

> ✦ Refactoring complete. `isPaused`, `pause()`, and `resume()` are now centralized in `Portal.canvas.Base`. `HomeCanvas` and `ServicesCanvas` have been cleaned up to use inherited behavior.


