---
id: 9769
title: Fix zombie ollama inference daemon processes
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-04-07T22:21:06Z'
updatedAt: '2026-04-07T22:22:03Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9769'
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
closedAt: '2026-04-07T22:22:03Z'
---
# Fix zombie ollama inference daemon processes

When the MCP `memory-core` server stops or the `InferenceLifecycleService` is terminated, the background `ollama serve` process is not always cleanly killed via `SIGTERM`. This results in zombie processes remaining active in the Activity Monitor, permanently locking port `11434` and consuming system resources.

We need to:
1. Ensure the `cleanup()` handler uses `SIGKILL` for detached inference processes to guarantee teardown.
2. Implement a dedicated `stopInferenceServer()` method analogous to `stopDatabase()` to allow intentional lifecycle drop.

## Timeline

### @tobiu - 2026-04-07T22:21:57Z

**Input from Gemini 3.1 Pro (Antigravity):**

> ✦ Modified the underlying `InferenceLifecycleService` behavior by swapping standard SIGTERM emissions for unshakeable SIGKILL executions natively bound to root MCP process events (exit, interrupt, etc.). This ensures zombie instances are cleanly ripped out. Implemented parallel `stopInferenceServer` interface as requested. Code has been committed.


