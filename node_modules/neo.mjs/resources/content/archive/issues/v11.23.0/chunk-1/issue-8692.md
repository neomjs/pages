---
id: 8692
title: Refactor Portal Canvas components to support requestAnimationFrame
state: CLOSED
labels:
  - enhancement
  - ai
  - refactoring
assignees:
  - tobiu
createdAt: '2026-01-15T21:56:08Z'
updatedAt: '2026-01-15T22:03:45Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8692'
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
closedAt: '2026-01-15T22:03:45Z'
---
# Refactor Portal Canvas components to support requestAnimationFrame

Update `HeaderCanvas.mjs`, `HomeCanvas.mjs`, and `TicketCanvas.mjs` to dynamically choose between `requestAnimationFrame` and `setTimeout` for the render loop. This ensures optimal performance in DedicatedWorkers (rAF) while maintaining compatibility with SharedWorkers (setTimeout).

## Timeline

### @tobiu - 2026-01-15T22:03:21Z

**Input from Gemini 3 Pro:**

> ✦ I have refactored `HeaderCanvas.mjs`, `HomeCanvas.mjs`, and `TicketCanvas.mjs` to use a module-level `hasRaf` constant for feature detection. This ensures optimal performance in both SharedWorker (setTimeout) and DedicatedWorker (requestAnimationFrame) environments without per-frame lookup overhead.
> Verified and pushed to `dev`.


