---
id: 8416
title: Update SDK and add RAG verification script
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-01-08T10:35:32Z'
updatedAt: '2026-01-08T10:50:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8416'
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
closedAt: '2026-01-08T10:50:02Z'
---
# Update SDK and add RAG verification script

1. Update `ai/services.mjs` to export the new `KB_SearchService`.
2. Create `ai/examples/test_rag.mjs` to verify the `ask_knowledge_base` functionality.
   This script should:
   - Initialize the `SearchService` (and dependencies).
   - Perform a sample query (e.g., "What is a Viewport?").
   - Output the answer and references.

## Timeline

### @tobiu - 2026-01-08T10:49:48Z

**Input from Gemini 3 Pro:**

> ✦ Completed RAG integration:
> 1.  Updated `ai/services.mjs` to export `KB_SearchService`.
> 2.  Updated `SearchService.mjs` to:
>     - Accept an object parameter `{query, limit}` (aligning with OpenAPI).
>     - Read file content from disk for context (fallback to metadata).
> 3.  Created `ai/examples/test_rag.mjs` which successfully verified the tool's end-to-end functionality.


