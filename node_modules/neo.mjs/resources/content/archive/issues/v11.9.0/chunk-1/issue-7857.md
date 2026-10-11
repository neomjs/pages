---
id: 7857
title: Enhance Memory Core MCP Server Documentation
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-11-22T09:43:22Z'
updatedAt: '2025-11-22T09:55:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7857'
author: tobiu
commentsCount: 0
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
closedAt: '2025-11-22T09:55:26Z'
---
# Enhance Memory Core MCP Server Documentation

**Objective:** Expand `learn/guides/mcp/MemoryCore.md` to provide a comprehensive overview of the Memory Core server.

**Requirements:**
*   Describe the server's architecture and key services (`SessionService`, `SummaryService`, `MemoryService`, `DatabaseService`, etc.).
*   Document all available tools and their usage based on the provided source code.
*   Explain the "Save-Then-Respond" protocol and session summarization in detail, referencing the source implementation.
*   Include insights into the internal logic of services like `TextEmbeddingService` and `ChromaManager`.

**Source Files to Analyze:**
*   `ai/mcp/server/memory-core/services/SessionService.mjs`
*   `ai/mcp/server/memory-core/services/SummaryService.mjs`
*   `ai/mcp/server/memory-core/logger.mjs`
*   `ai/mcp/server/memory-core/services/TextEmbeddingService.mjs`
*   `ai/mcp/server/memory-core/mcp-stdio.mjs`
*   `ai/mcp/server/memory-core/services/DatabaseLifecycleService.mjs`
*   `ai/mcp/server/memory-core/services/DatabaseService.mjs`
*   `ai/mcp/validation/OpenApiValidator.mjs`
*   `ai/mcp/server/memory-core/config.mjs`
*   `ai/mcp/server/memory-core/openapi.yaml`
*   `ai/mcp/server/memory-core/services/HealthService.mjs`
*   `ai/mcp/server/memory-core/services/MemoryService.mjs`
*   `ai/mcp/server/toolService.mjs`
*   `ai/mcp/server/memory-core/services/toolService.mjs`
*   `ai/mcp/server/memory-core/services/ChromaManager.mjs`

