---
id: 9653
title: 'Sub-Epic 4B: Expose Graph Endpoints in OpenAPI Spec'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-03T11:23:37Z'
updatedAt: '2026-04-03T11:26:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9653'
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
closedAt: '2026-04-03T11:26:26Z'
---
# Sub-Epic 4B: Expose Graph Endpoints in OpenAPI Spec

**Epic:** #9642

**Description:**
Update `knowledge-base/openapi.yaml` to define the new REST-like routes for the graph retrieval API (e.g., `/documents/graph/{id}`, `/documents/graph/query`). This formalizes the tool schema available to AI clients.

## Timeline

### @tobiu - 2026-04-03T11:26:25Z

Added /graph/nodes/{id}, /graph/neighbors/{id}, and /graph/search endpoints to the OpenAPI specification.


