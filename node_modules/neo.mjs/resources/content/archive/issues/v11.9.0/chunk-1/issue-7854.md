---
id: 7854
title: Enhance Knowledge Base MCP Server Guide
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-11-22T08:59:32Z'
updatedAt: '2025-11-22T09:05:56Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7854'
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
closedAt: '2025-11-22T09:05:55Z'
---
# Enhance Knowledge Base MCP Server Guide

The current guide `@learn/guides/mcp/KnowledgeBase.md` needs to be updated to reflect the current architecture and toolset of the `neo.mjs-knowledge-base` MCP server.

**Tasks:**
1.  Update the guide to describe all available tools defined in `openapi.yaml`.
2.  Dive into the architecture, explaining the role of each service:
    -   `QueryService` (Scoring algorithm, Gemini integration)
    -   `DatabaseService` (ETL pipeline, content hashing)
    -   `DatabaseLifecycleService` (ChromaDB process management)
    -   `HealthService` (Caching, gatekeeper logic)
    -   `DocumentService` (Inspection tools)
3.  Explain the OpenAPI-driven design and how `toolService.mjs` works.
4.  Add details about the configuration and environment variables (`GEMINI_API_KEY`).


