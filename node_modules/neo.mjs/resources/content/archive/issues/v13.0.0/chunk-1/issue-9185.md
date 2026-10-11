---
id: 9185
title: Implement Telemetry Probe for Worker Saturation Monitoring
state: CLOSED
labels:
  - enhancement
  - stale
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-02-16T12:54:05Z'
updatedAt: '2026-10-09T15:31:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9185'
author: tobiu
commentsCount: 3
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
closedAt: '2026-06-01T06:22:18Z'
---
# Implement Telemetry Probe for Worker Saturation Monitoring

To diagnose potential worker thread saturation (which causes scroll lag but is invisible to static analysis), we need a runtime telemetry tool.

**Goal:** Implement a "Heartbeat" probe to measure the Round-Trip Time (RTT) across the worker triangle.

**Architecture:**
1.  **Main Thread Addon:** Sends a timestamped "ping" message.
2.  **App Worker:** Relays the ping to VDOM Worker.
3.  **VDOM Worker:** Relays the ping back to Main Thread.
4.  **Main Thread:** Calculates `RTT = Now - OriginalTimestamp`.

**Usage:**
-   **Low RTT (<16ms):** Healthy.
-   **High RTT (>50ms):** Saturation (VDOM diffing, GC, or Serialization bottleneck).

This provides a definitive "Lag Meter" to identify if performance issues are computational or rendering-based.

## Timeline

- 2026-02-16T12:54:06Z @tobiu added the `enhancement` label
- 2026-02-16T12:54:07Z @tobiu added the `ai` label
- 2026-02-16T12:54:07Z @tobiu added the `performance` label
- 2026-02-16T12:54:25Z @tobiu assigned to @tobiu
### @github-actions - 2026-05-18T05:37:23Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-06-01T06:22:18Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T15:31:02Z

#19489 set B · other · Grace · 2026-10-09: **confirm-close.** No probe was built. The grid scroll-lag diagnosis it served moved to the grid e2e telemetry (`e2e/grid/RowPinning.spec.mjs`, `ThumbDragPause.spec.mjs`), as #9209's verdict records.


