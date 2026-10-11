---
id: 9561
title: Add Functional Tests for MCP Authorization and Refine Error Handling
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
assignees:
  - tobiu
createdAt: '2026-03-26T14:24:58Z'
updatedAt: '2026-03-26T14:25:30Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9561'
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
closedAt: '2026-03-26T14:25:18Z'
---
# Add Functional Tests for MCP Authorization and Refine Error Handling

Add functional Playwright tests to verify the OIDC/OAuth 2.1 authorization implementation for Neo.mjs MCP servers.

**Scope:**
- Create `test/playwright/unit/ai/mcp/Authorization.spec.mjs` which mocks an OIDC provider and verifies the MCP server's response to valid/invalid tokens and CORS requests.
- Refine `Server.mjs` to use the SDK's `InvalidTokenError` for consistent 401 status codes.
- Fix content negotiation requirements for the SSE transport in tests.

## Timeline

### @tobiu - 2026-03-26T14:25:30Z

Functional tests implemented in test/playwright/unit/ai/mcp/Authorization.spec.mjs. Verified OIDC/OAuth 2.1 flow, CORS, and error handling.


