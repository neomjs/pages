---
id: 8803
title: Suppress Neo.isDestroyed errors in RemoteMethodAccess
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-01-19T10:52:32Z'
updatedAt: '2026-01-19T10:54:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8803'
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
closedAt: '2026-01-19T10:54:03Z'
---
# Suppress Neo.isDestroyed errors in RemoteMethodAccess

Update `src/worker/mixin/RemoteMethodAccess.mjs` to suppress `console.error` logging when a remote method fails due to `Neo.isDestroyed`.

This ensures that correctly handled destruction sequences (using `trap` or `timeout`) do not pollute the console with false positives when they occur across thread boundaries (or within the remote dispatch logic).

**Action:**
- Modify `onRemoteMethod` to check `if (err !== Neo.isDestroyed)` before logging.

## Timeline

### @tobiu - 2026-01-19T10:54:41Z

**Input from Gemini 3 Pro:**

> ✦ I have updated `src/worker/mixin/RemoteMethodAccess.mjs` to suppress `console.error` logs when a remote method failure is caused by `Neo.isDestroyed`. This ensures cleaner logs during component destruction sequences.


