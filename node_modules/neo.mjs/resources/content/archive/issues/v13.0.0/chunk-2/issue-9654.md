---
id: 9654
title: 'Sub-Epic 4C: Register Graph Tools in MCP Server Handler'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-03T11:23:38Z'
updatedAt: '2026-04-03T11:28:45Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9654'
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
closedAt: '2026-04-03T11:28:45Z'
---
# Sub-Epic 4C: Register Graph Tools in MCP Server Handler

**Epic:** #9642

**Description:**
Update `knowledge-base/Server.mjs` (and potentially `toolService.mjs`) to map the newly defined OpenAPI paths to the `GraphService` methods. This will finalize the MCP interface, enabling external AI clients and agents to invoke the graph tools over the stdio transport.

## Timeline

### @tobiu - 2026-04-03T11:28:44Z

Mapped get_node, get_neighbors, and search_nodes to GraphService inside toolService.


