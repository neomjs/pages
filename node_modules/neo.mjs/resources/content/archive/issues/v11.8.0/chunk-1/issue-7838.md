---
id: 7838
title: 'Fix ChromaDB warning: No embedding function configuration found'
state: CLOSED
labels:
  - bug
  - ai
assignees:
  - tobiu
createdAt: '2025-11-21T09:21:36Z'
updatedAt: '2025-11-21T10:19:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7838'
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
closedAt: '2025-11-21T10:19:00Z'
---
# Fix ChromaDB warning: No embedding function configuration found

The `ai/examples/self-healing.mjs` script outputs a warning: "No embedding function configuration found for collection schema deserialization". This is caused by the `dummyEmbeddingFunction` not implementing the full interface required by the `chromadb` client for proper serialization.

We need to update the `dummyEmbeddingFunction` to include the required properties (`name`, `getConfig`, and a static `buildFromConfig`) so that it is recognized as a valid embedding function and not treated as 'legacy', which triggers the warning.

## Timeline

### @tobiu - 2025-11-21T10:19:00Z

resolved via #7839.


