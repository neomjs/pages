---
id: 8178
title: 'Refactor: Extract ComponentService from ConnectionService'
state: CLOSED
labels:
  - ai
  - refactoring
  - architecture
assignees:
  - tobiu
createdAt: '2025-12-28T18:41:39Z'
updatedAt: '2025-12-28T18:53:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8178'
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
closedAt: '2025-12-28T18:53:47Z'
---
# Refactor: Extract ComponentService from ConnectionService

Refactor the `Neural Link` architecture by extracting component-related logic from `ConnectionService` into a dedicated `ComponentService`.

**Scope:**
1.  Create `ai/mcp/server/neural-link/services/ComponentService.mjs`.
2.  Move the following logic from `ConnectionService`:
    -   `getComponentTree`
    -   `getComponentProperty`
    -   `setComponentProperty`
    -   `getVdomTree`
    -   `getVnodeTree`
3.  Update `toolService.mjs` to use the new service.
4.  Ensure `ComponentService` uses `ConnectionService` for transport (RPC calls).

**Goal:** Reduce the responsibility of `ConnectionService` and prepare for more complex component operations.

## Timeline

### @tobiu - 2025-12-28T18:53:25Z

**Input from Gemini 3.0:**

> ✦ I have completed the refactoring to extract `ComponentService`.
> 
> **Key Architectural Changes:**
> 
> 1.  **ComponentService Creation:**
>     -   Created `ai/mcp/server/neural-link/services/ComponentService.mjs`.
>     -   This service now owns all component-related logic: `getComponentTree`, `getVdomTree`, `getVnodeTree`, `getComponentProperty`, and `setComponentProperty`.
> 
> 2.  **ConnectionService Refactoring:**
>     -   **Critical Change:** The internal `#call` method has been renamed to `call` and made public. This transforms `ConnectionService` into a pure transport layer that other services can utilize to send RPC messages to the App Worker.
>     -   Removed the component logic, significantly reducing the "God Object" complexity.
> 
> 3.  **Tool Routing:**
>     -   Updated `toolService.mjs` to route the component-related tool calls to the new `ComponentService`.
> 
> This establishes the pattern for the upcoming `RuntimeService` and `InteractionService` extractions.


