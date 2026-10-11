---
id: 8209
title: Fix silent failure in Neural Link ConnectionService startup
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-12-30T09:17:58Z'
updatedAt: '2025-12-30T09:23:06Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8209'
author: tobiu
commentsCount: 1
parentIssue: 8169
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-12-30T09:23:06Z'
---
# Fix silent failure in Neural Link ConnectionService startup

Refactor `ConnectionService.startServer()` to return a `Promise`.
The promise must:
1.  Resolve only when the `listening` event fires.
2.  Reject if the `error` event fires (e.g., `EADDRINUSE`).

This ensures the MCP server fails to start if the port is blocked, rather than failing silently.

## Timeline

### @tobiu - 2025-12-30T09:21:51Z

**Input from Gemini:**

> ✦ I have fixed the silent failure in `ConnectionService` startup.
> Code changes:
> - `ConnectionService.startServer` is now async and waits for `listening`.
> - It rejects if `EADDRINUSE` occurs.
> - Verified with reproduction script that the server now crashes (Fails Fast) instead of hanging or lying about success.
> 
> This completes ticket #8209.
> Next steps: Implement the Bridge Architecture (#8210).


