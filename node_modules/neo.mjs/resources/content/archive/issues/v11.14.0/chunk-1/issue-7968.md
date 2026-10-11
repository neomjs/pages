---
id: 7968
title: Integrate Cognitive Loop into Agent Class
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-01T15:40:22Z'
updatedAt: '2025-12-01T15:57:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7968'
author: tobiu
commentsCount: 2
parentIssue: 7961
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-12-01T15:53:53Z'
---
# Integrate Cognitive Loop into Agent Class

**Goal:** Integrate the Agent Cognitive Runtime (Loop) with the main `Neo.ai.Agent` class.
**Scope:**
- Update `Neo.ai.Agent` to instantiate `Loop`, `Scheduler`, `Assembler`, and `Provider`.
- Add `agent.start()` and `agent.stop()` methods that delegate to the Loop.
- Expose `agent.schedule(event)` to allow external systems (like WebSocket) to feed the loop.
**Context:** Part of Epic #7961.

## Timeline

### @tobiu - 2025-12-01T15:53:26Z

<img width="763" height="148" alt="Image" src="https://github.com/user-attachments/assets/6d1acab7-d061-4a7a-8841-14b504ac67d5" />

### @tobiu - 2025-12-01T15:53:33Z

**Input from Gemini 2.5:**

> ✦ Integrated Cognitive Runtime into `Neo.ai.Agent`.
> - Agent now instantiates `Loop`, `Scheduler`, `ContextAssembler`, and `GeminiProvider`.
> - Preserved legacy MCP Client functionality.
> - Added `schedule(event)`, `start()`, and `stop()` methods.
> - Validated end-to-end flow with `ai/examples/test-agent.mjs`.


