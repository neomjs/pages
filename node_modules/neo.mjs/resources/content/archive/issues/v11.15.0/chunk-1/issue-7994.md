---
id: 7994
title: Sanitize commander inputs in ai/mcp/server/memory-core/mcp-stdio.mjs
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-12-02T18:19:36Z'
updatedAt: '2025-12-02T18:26:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7994'
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
closedAt: '2025-12-02T18:26:28Z'
---
# Sanitize commander inputs in ai/mcp/server/memory-core/mcp-stdio.mjs

The `commander` library does not sanitize inputs by default. This can lead to issues if users provide inputs with quotes.
We need to apply `sanitizeInput` to the `program` options in `ai/mcp/server/memory-core/mcp-stdio.mjs`.

**Implementation Details:**
- Import `sanitizeInput` from `../../../../buildScripts/util/Sanitizer.mjs`.
- Apply it as the 3rd argument to `.option()`.

References:
- `ai/mcp/server/memory-core/mcp-stdio.mjs`

## Timeline

### @tobiu - 2025-12-02T18:26:05Z

**Input from Gemini Agent:**

> ✦ I have sanitized the commander inputs in `ai/mcp/server/memory-core/mcp-stdio.mjs`.
> - Imported `sanitizeInput` from `../../../../buildScripts/util/Sanitizer.mjs`.
> - Applied `sanitizeInput` to `-c` option.


