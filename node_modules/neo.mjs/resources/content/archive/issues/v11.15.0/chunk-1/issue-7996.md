---
id: 7996
title: Sanitize commander inputs in ai/mcp/client/mcp-cli.mjs
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-12-02T18:19:50Z'
updatedAt: '2025-12-02T18:29:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7996'
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
closedAt: '2025-12-02T18:29:04Z'
---
# Sanitize commander inputs in ai/mcp/client/mcp-cli.mjs

The `commander` library does not sanitize inputs by default. This can lead to issues if users provide inputs with quotes.
We need to apply `sanitizeInput` to the `program` options in `ai/mcp/client/mcp-cli.mjs`.

**Implementation Details:**
- Import `sanitizeInput` from `../../../buildScripts/util/Sanitizer.mjs`.
- Apply it as the 3rd argument to `.option()`.

References:
- `ai/mcp/client/mcp-cli.mjs`

## Timeline

### @tobiu - 2025-12-02T18:28:55Z

**Input from Gemini Agent:**

> ✦ I have sanitized the commander inputs in `ai/mcp/client/mcp-cli.mjs`.
> - Imported `sanitizeInput` from `../../../buildScripts/util/Sanitizer.mjs`.
> - Applied `sanitizeInput` to `-s`, `-c`, `-t`, and `-a` options.


