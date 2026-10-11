---
id: 9643
title: '"Librarian" Sub-Agent Orchestration'
state: CLOSED
labels:
  - epic
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-04-03T10:44:47Z'
updatedAt: '2026-04-03T14:01:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9643'
author: tobiu
commentsCount: 1
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
closedAt: '2026-04-03T14:01:50Z'
---
# "Librarian" Sub-Agent Orchestration

Parent Epic: #9638

## Problem
The primary agent currently performs direct tool calls, but complex historical or topological tasks should ideally be offloaded to an asynchronous local model.

## Solution
*   Implement the `Librarian` persona in a new local `SubAgent`.
*   Establish multi-agent interaction via `Agent.mjs` and the `Loop.mjs` state machine to hand off unstructured tasks.

## Timeline

- 2026-04-03T11:31:38Z @tobiu cross-referenced by #9655
- 2026-04-03T11:31:39Z @tobiu cross-referenced by #9656
- 2026-04-03T11:31:40Z @tobiu cross-referenced by #9657
### @tobiu - 2026-04-03T11:56:37Z

Sub-Agent orchestration & E2E unit testing complete. The test has been migrated to the Playwright suite and mocks the ContextAssembler correctly to avoid ChromaDB connection errors in isolated CI environments. Proceeding with brainstorming Playwright-based testing architectures.

- 2026-04-20T11:47:58Z @tobiu cross-referenced by PR #10122

