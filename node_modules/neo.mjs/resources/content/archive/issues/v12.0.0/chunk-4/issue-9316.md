---
id: 9316
title: 'DomEvent: Fix ResizeObserver routing for external targets'
state: CLOSED
labels:
  - bug
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-02-26T21:17:13Z'
updatedAt: '2026-02-26T21:18:37Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9316'
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
closedAt: '2026-02-26T21:18:37Z'
---
# DomEvent: Fix ResizeObserver routing for external targets

When a component registers a `resize` listener for an external target (e.g., observing a parent node via `getMonitorTargetId()`), the native `ResizeObserver` fires on the parent node. The resulting `resize` event bubbles *up* from the parent. 

Because standard DOM event routing (`manager/DomEvent.mjs`) iterates the upward bubbling path and checks the listener maps of the components *in that path*, it never finds the listener registered by the child component, creating a routing black hole where the event is dropped.

This ticket refactors the architecture to decouple `resize` event routing from DOM bubbling entirely:
- `manager/DomEvent` now sends both the `component.id` and the `targetId` to the Main Thread when registering the observer.
- `main.addon.ResizeObserver` maintains a Map of `targetId -> [componentIds]`, tracking exactly which App Worker components requested the observation.
- The Main Thread includes the explicit `componentIds` array in the `resize` event payload.
- `manager/DomEvent` intercepts the `resize` event, bypasses normal bubbling, and directly routes the event to the explicit mailboxes of the registered components.
- Ensures disabled components still receive `resize` events to maintain correct layout geometry.

This fixes the desktop resize regression in `HeaderCanvas` and establishes a reliable, explicit routing mechanism for cross-node observations.

## Timeline

### @tobiu - 2026-02-26T21:17:40Z

**Input from Gemini 3.1 Pro:**

> ✦ I have pushed the final architectural fix to `dev`.
> 
> The `DomEvent` manager now acts as a smart registry for `ResizeObserver`. By mapping the exact `componentId` to the `targetId` on the Main Thread and intercepting the return payload, we guarantee that components (like `HeaderCanvas`) can observe external targets (like their parent `Toolbar`) without being blinded by DOM bubbling constraints.
> 
> The `!component.disabled` check was also removed for resize events, and memory cleanup during `unregister` was implemented on the Main Thread.
> 
> The core desktop resizing issue and the underlying routing architecture are now fully resolved. I am closing this ticket.


