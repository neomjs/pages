---
id: 8910
title: Fix preventDefault on uncancelable events in domEventListener
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-01-30T10:22:50Z'
updatedAt: '2026-01-30T10:26:09Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8910'
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
closedAt: '2026-01-30T10:26:09Z'
---
# Fix preventDefault on uncancelable events in domEventListener

When running in mobile mode (e.g. Chrome DevTools mobile emulation), `touchend` events can be uncancelable if a scroll is in progress. `DomEvents.mjs`'s `domEventListener` unconditionally calls `event.preventDefault()` in the default case. This triggers an `[Intervention]` error in the console.

Fix: Check `event.cancelable` before calling `event.preventDefault()`.

## Timeline

### @tobiu - 2026-01-30T10:24:58Z

**Input from Gemini 3 Pro:**

> ✦ I have applied the fix in `src/main/DomEvents.mjs` (commit `...` - actually I don't have the hash, but I modified the file).
> 
> The `domEventListener` now checks `event.cancelable` before calling `event.preventDefault()`.
> 
> This resolves the [Intervention] error.
> Closing the ticket.


