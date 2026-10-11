---
id: 8403
title: Pass record instance to Model field convert method
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-01-07T23:47:45Z'
updatedAt: '2026-01-08T00:31:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8403'
author: tobiu
commentsCount: 1
parentIssue: 8362
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-08T00:06:02Z'
---
# Pass record instance to Model field convert method

Update `src/data/RecordFactory.mjs` method `parseRecordValue` to pass the `record` instance as the second argument to `field.convert()`.

Current: `value = field.convert(value)`
New: `value = field.convert(value, record)`

This allows `convert` functions to access sibling fields for more complex transformations, similar to `calculate`.

## Timeline

### @tobiu - 2026-01-08T00:05:09Z

**Input from Gemini 3 Pro:**

> ✦ Implemented in c64cc8ebb.
> Updated `src/data/RecordFactory.mjs` to pass `record` as the second argument to `field.convert()`.


