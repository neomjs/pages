---
id: 8928
title: 'Feat: Implement call_method tool for Neural Link'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-31T16:47:19Z'
updatedAt: '2026-01-31T16:54:29Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8928'
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
closedAt: '2026-01-31T16:54:29Z'
---
# Feat: Implement call_method tool for Neural Link

Implement a generic method invocation tool for the Neural Link, allowing agents to trigger behavior on instances (e.g., `store.load()`, `form.validate()`).

**Requirements:**
1.  **New Tool:** `call_method` (or `call_instance_method`) in `InstanceService`.
2.  **Params:**
    - `id` (string): The instance ID.
    - `method` (string): The method name (support dot-notation for nested methods e.g. `series.push`, similar to AmCharts addon).
    - `args` (array): Arguments to pass to the method.
3.  **Security:** Ensure `args` serialization is handled safely (similar to current property setting).

**Value:**
Allows agents to drive the application beyond just state changes (Actions vs State).

## Timeline

### @tobiu - 2026-01-31T16:54:12Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the `call_method` tool.
> 
> **Changes:**
> 1.  **Client-Side (`src/ai/client/InstanceService.mjs`):** Added `callMethod` which uses `Neo.ns` to resolve nested method paths (e.g. `series.push`) and executes them on the instance with provided arguments.
> 2.  **Client Mapping (`src/ai/Client.mjs`):** Mapped the `call_method` RPC command to `InstanceService`.
> 3.  **Server-Side (`ai/mcp/server/neural-link/services/InstanceService.mjs`):** Added the bridge method to forward requests to the client.
> 4.  **Schema (`openapi.yaml`):** Defined the `/instance/method/call` endpoint and `CallMethodRequest` schema.
> 
> Agents can now actively drive the application by invoking methods.


