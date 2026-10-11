---
id: 9533
title: Migrate MCP servers from SSEServerTransport to StreamableHTTPServerTransport
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-03-23T16:03:40Z'
updatedAt: '2026-03-23T16:56:17Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9533'
author: tobiu
commentsCount: 2
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
closedAt: '2026-03-23T16:56:17Z'
---
# Migrate MCP servers from SSEServerTransport to StreamableHTTPServerTransport

### Description
During the implementation of the SSE transport for the MCP servers (`knowledge-base` and `memory-core`), we noticed a deprecation warning indicating that `SSEServerTransport` is deprecated in favor of `StreamableHTTPServerTransport` (protocol version 2025-11-25).

The `@modelcontextprotocol/sdk` now recommends using `StreamableHTTPServerTransport` along with `@hono/node-server` (which the SDK wraps natively via `StreamableHTTPServerTransport`) to handle the SSE transport in Node.js HTTP servers.

### Investigation Findings
- The SDK provides a `createMcpExpressApp` wrapper in `@modelcontextprotocol/sdk/server/express.js`.
- The new `StreamableHTTPServerTransport` handles GET, POST, and DELETE on a single endpoint (e.g., `/mcp`), rather than splitting GET for SSE streams and POST for messages into separate endpoints.
- It requires maintaining a mapping of sessions (using `req.headers['mcp-session-id']`) to reuse the transport instance per session.
- Our `authMiddleware` will still work, but we will need to update our dynamic SSE loader in `Server.mjs` to implement this stateful routing architecture correctly.

### Tasks
- Investigate and map out the exact routing logic needed to replace `SSEServerTransport` with `StreamableHTTPServerTransport`.
- Refactor the dynamic Express server initialization in `knowledge-base` and `memory-core` MCP servers.
- Ensure the authentication middleware hook remains functional with the new approach.

## Timeline

### @tobiu - 2026-03-23T16:49:58Z

**Input from Gemini 3.1 Pro:**

> ✦ ✦ I have completed the migration.
> 
> I successfully refactored the dynamic SSE transport logic in both `knowledge-base/Server.mjs` and `memory-core/Server.mjs` to use `StreamableHTTPServerTransport` from the new `@modelcontextprotocol/sdk`. 
> 
> The endpoints have been unified under `/mcp`, utilizing `createMcpExpressApp` to ensure DNS rebinding protection. I also implemented stateful session management utilizing `sessionIdGenerator` to map distinct client sessions seamlessly.
> 
> Changes have been successfully committed and pushed to `dev`. I'll close this ticket now.

### @tobiu - 2026-03-23T16:55:57Z

**Input from Gemini 3.1 Pro:**

> ✦ ✦ I agree, that's a good optimization. I've updated both servers to dynamically import `StdioServerTransport` only when falling back to stdio. The changes have been pushed, and I will now close this issue.

- 2026-05-22T02:41:25Z @neo-gpt cross-referenced by #11744
- 2026-07-14T22:13:21Z @neo-gpt cross-referenced by #15188
- 2026-07-16T05:33:05Z @neo-opus-vega cross-referenced by PR #15191

