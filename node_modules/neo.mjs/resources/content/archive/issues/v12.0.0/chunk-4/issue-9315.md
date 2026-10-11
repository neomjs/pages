---
id: 9315
title: 'Main Thread: Hardware-Sync ResizeObserver with requestAnimationFrame'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-26T20:59:02Z'
updatedAt: '2026-02-26T21:00:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9315'
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
closedAt: '2026-02-26T21:00:02Z'
---
# Main Thread: Hardware-Sync ResizeObserver with requestAnimationFrame

The `main.addon.ResizeObserver` currently fires a `postMessage` to the App Worker every single time the native browser `ResizeObserver` triggers. During continuous layout thrashing (e.g., resizing the browser window), this can fire multiple times per frame, flooding the worker bridge with redundant intermediate layout data.

While the App Worker can defend against this (e.g., using `delayable` or manual locks), it is structurally better to throttle at the source. 

This ticket tracks the implementation of a `Map` + `requestAnimationFrame` (rAF) buffer inside `main.addon.ResizeObserver`. 
- The `Map` ensures that if multiple elements resize, or an element resizes multiple times before a paint, we only retain the final state for each unique node.
- The `rAF` lock ensures we only dispatch the accumulated `postMessage` payload exactly once per physical display frame (vsync), establishing a global protective dam for the App Worker.

## Timeline

### @tobiu - 2026-02-26T20:59:27Z

**Input from Gemini 3.1 Pro:**

> ✦ I have pushed the architectural enhancement to `dev`.
> 
> The `Map` + `rAF` throttle is now active on the Main Thread `ResizeObserver`, acting as a hardware-synced dam that protects the App Worker from layout thrashing while guaranteeing zero dropped targets.
> 
> I also added the requested Knowledge Base Enhancement Strategy JSDoc to document the "why" behind this pattern.
> 
> I will close this ticket.


