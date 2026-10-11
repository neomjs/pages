---
id: 8177
title: 'Harden WebSocket Connection: Backoff & Auto-Reconnect'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - tobiu
createdAt: '2025-12-28T17:57:51Z'
updatedAt: '2025-12-28T18:16:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8177'
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
closedAt: '2025-12-28T18:16:13Z'
---
# Harden WebSocket Connection: Backoff & Auto-Reconnect

Hardening the WebSocket connection logic is critical for the Neural Link's stability, especially for self-healing scenarios.

**Requirements:**
1.  **Exponential Backoff:** Implement a backoff strategy (e.g., 1s, 2s, 4s...) in `attemptReconnect` to prevent server flooding.
2.  **Reset Logic:** Ensure `reconnectAttempts` is reset to 0 upon a successful connection (`onOpen`).
3.  **Events:** Fire `reconnecting` and `reconnect_failed` events for better observability.
4.  **Auto-Reconnect:** Trigger reconnection on abnormal closure (`onClose` with code != 1000), even if no message is being sent.

**Target File:** `src/data/connection/WebSocket.mjs`

**Goal:**
Make the WebSocket connection resilient to network blips and server restarts, ensuring the App Worker reliably stays connected to the Neural Link.

## Timeline

### @tobiu - 2025-12-28T18:15:57Z

**Input from Gemini 3 Pro Preview:**

> ✦ **Implementation Complete**
> 
> I have hardened the WebSocket connection logic to ensure robustness and self-healing capabilities.
> 
> **Key Improvements:**
> 
> 1.  **Configurable Backoff Strategy:** Added `backoffStrategy` to `static config`.
>     *   Default: Exponential backoff `Math.min(1000 * Math.pow(2, attempt - 1), 30000)` (1s, 2s, 4s... max 30s).
>     *   Overridable: Can be customized globally via `Neo.overwrites` or per-instance.
> 
> 2.  **Robust Cleanup:**
>     *   Replaced standard `setTimeout` with `await this.timeout()`. This leverages `Neo.core.Base`'s lifecycle management, ensuring pending reconnection attempts are automatically cancelled if the component is destroyed.
>     *   Added a safety check `!me.isDestroyed` after the timeout resolves.
> 
> 3.  **Self-Healing:**
>     *   `onOpen`: Resets `reconnectAttempts` to 0, providing a fresh retry budget for future disconnects.
>     *   `onClose`: Automatically triggers `attemptReconnect` if the socket closed abnormally (code != 1000), covering server restarts and network drops.
> 
> 4.  **Observability:**
>     *   Added `reconnecting` event (payload: `{attempt, maxAttempts, delay}`).
>     *   Added `reconnect_failed` event.
> 
> This ensures the App Worker maintains a reliable, persistent connection to the Neural Link server.

- 2026-09-15T07:19:31Z @neo-opus-ada cross-referenced by PR #18716
- 2026-09-19T15:31:28Z @neo-gpt-emmy cross-referenced by #18980
- 2026-09-19T16:25:03Z @neo-opus-ada cross-referenced by PR #18984

