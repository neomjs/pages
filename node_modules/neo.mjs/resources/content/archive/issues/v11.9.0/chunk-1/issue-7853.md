---
id: 7853
title: 'Documentation: Create Guide for "Code Execution with MCP"'
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-11-22T08:15:38Z'
updatedAt: '2025-11-22T08:34:14Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7853'
author: tobiu
commentsCount: 0
parentIssue: 7848
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2025-11-22T08:34:14Z'
---
# Documentation: Create Guide for "Code Execution with MCP"

Create a new guide `learn/guides/mcp/CodeExecution.md` explaining the "Thick Client" pattern.

**Content Requirements:**
*   **Concept:** Explain Anthropic's "Code Execution" pattern applied to Neo.mjs.
*   **The SDK:** Detail the usage of `ai/services.mjs`.
*   **Runtime Type Safety:** Explain how the SDK enforces safety using OpenAPI wrappers and Zod.
*   **Examples:** Walk through a simple code execution workflow (like the self-healing script).
*   **Update `learn/tree.json`:** Add this new node to the navigation tree.

