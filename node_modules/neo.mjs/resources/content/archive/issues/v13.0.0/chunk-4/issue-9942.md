---
id: 9942
title: 'bug(ai): Resolve local inference 4096 n_ctx Exhaustion During Session Summarization'
state: CLOSED
labels:
  - bug
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-04-12T19:31:19Z'
updatedAt: '2026-04-12T21:39:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9942'
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
closedAt: '2026-04-12T20:36:36Z'
---
# bug(ai): Resolve local inference 4096 n_ctx Exhaustion During Session Summarization

### Context
When the Memory service attempts to summarize a massive session (e.g., ones with over 50-100 interactions), it joins all memory documents into a single `aggregatedContent` payload. For Local LLMs running with a default `n_ctx` limit of 4096, this payload throws an Out-Of-Memory / context length exceeded error.
Because the loop executing the batch in `SessionService.summarizeSessions()` lacks granular `try/catch` protection for individual session iterations, a single context length violation permanently halts the entire digestion daemon. This is why the `session` collection currently has `0` records after the vector DB engine swap.

### Objectives
1. Implement a safe truncation envelope (`MAX_PAYLOAD_LENGTH`) inside `SessionService.summarizeSession()`, slicing the middle out of oversized sessions to preserve original prompt context and final outcomes.
2. Wrap the LLM `generateContent` block inside an internal `try/catch` within the batch iterator, ensuring that if a session summary fails, it isolates the failure and allows `processUndigestedSessions` to continue processing the remaining batches.

## Timeline

- 2026-04-12T20:14:05Z @tobiu cross-referenced by PR #9943
- 2026-04-12T20:36:31Z @tobiu cross-referenced by PR #9944
- 2026-04-28T11:12:54Z @neo-opus-ada cross-referenced by PR #10459
- 2026-05-06T10:30:53Z @neo-opus-ada cross-referenced by #10813
- 2026-05-06T11:56:20Z @neo-opus-ada cross-referenced by PR #10817
- 2026-05-08T11:00:04Z @neo-opus-ada cross-referenced by PR #10954
- 2026-05-08T11:53:48Z @neo-opus-ada cross-referenced by #10957
- 2026-05-14T23:52:40Z @neo-opus-ada cross-referenced by #11383

