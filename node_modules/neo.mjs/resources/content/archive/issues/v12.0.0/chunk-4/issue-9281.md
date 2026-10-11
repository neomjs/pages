---
id: 9281
title: 'DomEvents: Prevent duplicate local DOM event listeners'
state: CLOSED
labels:
  - bug
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-02-24T01:44:38Z'
updatedAt: '2026-02-24T01:45:40Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9281'
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
closedAt: '2026-02-24T01:45:40Z'
---
# DomEvents: Prevent duplicate local DOM event listeners

When calling `addDomListeners()` on a component that is already mounted, the `mountDomListeners` routine would re-send all existing local events (like `mousemove`) to the Main thread, resulting in duplicate `addEventListener` bindings and doubled `postMessage` traffic.

**Root Cause:**
`mountDomListeners` was iterating over all registered listeners for a component and adding them to the payload sent to the App Worker, without checking if they had already been mounted.

**Resolution:**
- Updated `mountDomListeners` in `src/manager/DomEvent.mjs` to check `!event.mounted` for local events, and set `event.mounted = true` before sending.
- Added `resetMountedDomListeners()` to `DomEvent` manager to reset the flag when a component unmounts.
- Added `resetMountedDomEvents()` to `src/mixin/DomEvents.mjs`.
- Called `me.resetMountedDomEvents?.()` in `src/component/Abstract.mjs` when `afterSetMounted` is `false` (unmounting).
This ensures listeners are only sent once and correctly re-attached if the component remounts.

## Timeline

### @tobiu - 2026-02-24T01:45:29Z

The fix has been implemented and pushed to the `dev` branch.


