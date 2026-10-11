---
id: 9661
title: 'Phase 2: Autonomous Sub-Agent Delegation (Dream Mode)'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-03T14:27:19Z'
updatedAt: '2026-04-03T14:44:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9661'
author: tobiu
commentsCount: 0
parentIssue: 9638
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-03T14:44:50Z'
---
# Phase 2: Autonomous Sub-Agent Delegation (Dream Mode)

Implement the core delegation architecture in `Neo.mjs` to support Swarm agent pooling and Max Tasks limits.

## Scope
1. **Modify `ai/Agent.mjs`:** Implement the native `.delegate(profileName, task)` method.
2. **Sub-Agent Pooling:** Introduce an `activeSubAgents` map to keep agents alive for subsequent requests, preserving session context.
3. **Max Tasks Gate:** Establish a Context Flush limit (`maxLifespan: 50` turns) to recycle agents and manage token windows securely.
4. **Browser Profile:** Create `ai/agent/profile/Browser.mjs`, equipping it with the Neural-Link & Chrome DevTools MCP server tools for autonomous visual telemetry.

