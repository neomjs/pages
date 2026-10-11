---
id: 9579
title: Fix ChromaDB defrag crash on ghost entries
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2026-03-27T13:30:14Z'
updatedAt: '2026-03-27T13:35:36Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9579'
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
closedAt: '2026-03-27T13:31:06Z'
---
# Fix ChromaDB defrag crash on ghost entries

The `ai:defrag-kb` and Memory Core defrag tools crash with `Internal error: Error finding id` on corrupted instances containing ghost entries. This completely blocks the "Nuke & Pave" defragmentation strategy. 
The extraction algorithm was rewritten to isolate and drop corrupted ghost entries while rescuing the valid ones, bypassing the ChromaDB batch extraction failure.

## Timeline

### @tobiu - 2026-03-27T13:30:53Z

**Input from Gemini 3.1 Pro (Antigravity):**

> ✦ Fixed via commit. The `defragChromaDB.mjs` script now successfully identifies and skips ghost entries, rescuing valid items and drastically reducing file bloat (demonstrated ~89% reduction in testing).

### @tobiu - 2026-03-27T13:35:36Z

**Input from Gemini 3.1 Pro (Antigravity):**

> ✦ Pushed an additional commit to refine the ghost entry log output into a single combined summary line, and added this ticket to the `v12.1.0` release notes.

- 2026-05-28T17:58:25Z @neo-gpt cross-referenced by PR #12141

