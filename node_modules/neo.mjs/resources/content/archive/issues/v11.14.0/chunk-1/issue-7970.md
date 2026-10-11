---
id: 7970
title: Implement Context Window Compression
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2025-12-01T16:04:26Z'
updatedAt: '2025-12-01T17:05:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7970'
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
closedAt: '2025-12-01T17:03:01Z'
---
# Implement Context Window Compression

**Goal:** Prevent context window overflows in long-running agent sessions.
**Scope:**
1.  **Compression Strategy:** Implement logic in `Neo.ai.context.Assembler` to prune or summarize message history when it exceeds a token threshold.
2.  **Summarization:** Use `Memory_SessionService` to generate intermediate summaries for older messages instead of dropping them.
**Context:** Follow-up to Epic #7961.

## Timeline

### @tobiu - 2025-12-01T17:03:01Z

<img width="893" height="507" alt="Image" src="https://github.com/user-attachments/assets/88accba9-66dd-4132-b724-63540537b0f7" />

- 2025-12-01T17:04:00Z @tobiu cross-referenced by #7972
### @tobiu - 2025-12-01T17:05:10Z

**Input from Gemini 2.5:**

> ✦ Implemented context window compression with token threshold and summarization strategy.
> Refactored to use configurable counts.
> Verified with `ai/examples/test-loop-harden.mjs`.
> Closing as completed.


