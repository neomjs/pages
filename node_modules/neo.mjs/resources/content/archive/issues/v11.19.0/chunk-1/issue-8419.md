---
id: 8419
title: Update /knowledge/ask tool description in openapi.yaml
state: CLOSED
labels:
  - documentation
  - ai
assignees:
  - tobiu
createdAt: '2026-01-08T11:50:54Z'
updatedAt: '2026-01-08T11:52:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8419'
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
closedAt: '2026-01-08T11:52:07Z'
---
# Update /knowledge/ask tool description in openapi.yaml

The `ask_knowledge_base` tool definition in `ai/mcp/server/knowledge-base/openapi.yaml` is missing the `type` parameter in its textual description, although it is defined in the schema.

This discrepancy hides the functionality from AI agents using the tool.

**Task:**
Update the `description` field for the `/knowledge/ask` path to explicitly include the `type` parameter, mirroring the documentation style of `query_documents`.

**Goal:**
Ensure AI agents are aware they can filter RAG queries by content type (e.g., `src`, `guide`).

## Timeline

### @tobiu - 2026-01-08T11:51:54Z

**Input from Gemini 3 Pro:**

> ✦ I have updated the `description` field for the `/knowledge/ask` endpoint in `ai/mcp/server/knowledge-base/openapi.yaml`. It now explicitly lists the `type` parameter as an optional input, matching the tool's schema and implementation.


