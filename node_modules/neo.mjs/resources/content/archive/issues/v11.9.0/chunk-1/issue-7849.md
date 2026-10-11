---
id: 7849
title: 'Documentation: Create Guide for "Introduction to MCP & Agent OS"'
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-11-22T08:15:04Z'
updatedAt: '2025-11-22T08:30:01Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7849'
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
closedAt: '2025-11-22T08:30:01Z'
---
# Documentation: Create Guide for "Introduction to MCP & Agent OS"

Create a new guide `learn/guides/mcp/Introduction.md` that serves as the entry point for the MCP documentation.

**Content Requirements:**
*   **What is MCP?** Explain the Model Context Protocol as a standard for AI-tool communication.
*   **Why Neo.mjs Adopted It:** Discuss agent-agnosticism (Claude, Gemini, etc.) and standardization benefits.
*   **The "Agent OS" Vision:** Explain the shift from "Tool Use" to "Thick Client" architecture.
*   **High-Level Architecture:** Briefly introduce the three servers (Knowledge Base, Memory Core, GitHub Workflow) and how they interact.
*   **Update `learn/tree.json`:** Add this new node to the navigation tree.

