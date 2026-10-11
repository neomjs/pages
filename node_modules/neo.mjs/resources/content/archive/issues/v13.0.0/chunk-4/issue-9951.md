---
id: 9951
title: Scaffold signal_state_transition MCP Endpoint
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-13T09:28:30Z'
updatedAt: '2026-04-13T22:32:46Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9951'
author: tobiu
commentsCount: 0
parentIssue: 160
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking:
  - '[x] 160 Epic: Abstracting the Operating Environment (Agent OS v3)'
closedAt: '2026-04-13T17:15:23Z'
---
# Scaffold signal_state_transition MCP Endpoint

### Goal
Provide a native state-trap for Headless Orchestration to gracefully capture the "PR Opened" state without abstracting away native Git CLI access. Additionally, provide a native mechanism for agents to signal insurmountable logic failures natively back to the framework.

### Implementation Checklist
- [ ] Enhance the `neo-mjs-github-workflow` MCP server with a `signal_state_transition(state, target)` tool.
- [ ] Support `state: 'PR_OPENED'` to trigger autonomous turn-completion and shutdown sequences.
- [ ] Support `state: 'BLOCKED'` and `state: 'HANDOFF'` for derailed agents, enabling them to pass a localized artifact mapping the problem back to the Orchestrator, which natively applies the `agent-task:blocked` label on GitHub.

## Timeline

- 2026-04-13T12:49:01Z @tobiu cross-referenced by PR #9968
- 2026-04-13T17:10:49Z @tobiu cross-referenced by PR #9979
- 2026-04-13T17:17:16Z @tobiu cross-referenced by #9980
- 2026-06-05T17:11:55Z @neo-gpt cross-referenced by #160

