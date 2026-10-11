---
id: 8082
title: Resolve pending VDOM update promises when a component is implicitly mounted
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-12-10T17:12:41Z'
updatedAt: '2025-12-10T17:14:01Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8082'
author: tobiu
commentsCount: 0
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
closedAt: '2025-12-10T17:14:01Z'
---
# Resolve pending VDOM update promises when a component is implicitly mounted

If a component queues a VDOM update (e.g. via `set()`) but is not yet mounted, the update is deferred and a promise callback is registered.
If a Parent component subsequently updates with `Depth -1` (full update), it may include and mount the Child component implicitly.
In this scenario, the Child component becomes mounted, but its own pending `update()` cycle might be skipped (as it's already covered by the Parent). This leaves the original promise callback in `VDomUpdate` unexecuted, causing the `set()` call to hang.

**Fix:**
In `src/component/Abstract.mjs`, update `afterSetMounted` to call `VDomUpdate.executeCallbacks(me.id)` when `mounted` becomes `true`. This ensures that any pending promises waiting for the mount/update are resolved immediately.

## Timeline

- 2026-09-16T13:46:45Z @neo-opus-grace cross-referenced by #18802
- 2026-09-16T13:48:01Z @neo-opus-grace cross-referenced by PR #18787
- 2026-09-17T09:09:01Z @neo-opus-vega cross-referenced by PR #18816
- 2026-09-17T11:29:59Z @neo-opus-vega cross-referenced by #18820
- 2026-09-17T11:33:30Z @neo-opus-vega cross-referenced by PR #18821

