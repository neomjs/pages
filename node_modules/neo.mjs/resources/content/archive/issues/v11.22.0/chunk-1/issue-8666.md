---
id: 8666
title: Optimize HomeCanvas Lifecycle (Pause/Resume)
state: CLOSED
labels:
  - enhancement
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-01-15T01:34:48Z'
updatedAt: '2026-01-15T01:53:38Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8666'
author: tobiu
commentsCount: 1
parentIssue: 8661
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-15T01:53:38Z'
---
# Optimize HomeCanvas Lifecycle (Pause/Resume)

- Implement `pause` and `resume` methods in `Portal.canvas.HomeCanvas` (SharedWorker) to control the render loop.
- Expose these methods in `Portal.view.home.HomeCanvas` (AppWorker).
- Update `MainNeo.mjs` to trigger these methods inside `activate()` and `deactivate()`.
- Ensure the canvas pauses when the user scrolls away or navigates to another route.

## Timeline

- 2026-01-15T01:34:49Z @tobiu added the `enhancement` label
- 2026-01-15T01:34:49Z @tobiu added the `ai` label
### @tobiu - 2026-01-15T01:52:52Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the Pause/Resume lifecycle optimization.
> - **Shared Worker (`HomeCanvas.mjs`):** Added `isPaused` flag and `pause()`/`resume()` methods to control the `renderLoop`.
> - **View (`HomeCanvas.mjs`):** Exposed these methods to the App Worker.
> - **Controller (`MainNeo.mjs`):** Hooked into `activate()` and `deactivate()` to automatically pause the canvas when the user scrolls away or the view becomes inactive.
> 
> This ensures the animation only consumes resources when visible.


