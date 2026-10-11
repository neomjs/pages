---
id: 9148
title: 'DevIndex: Use locale formatting for StatusToolbar row count'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-13T17:38:39Z'
updatedAt: '2026-02-13T17:41:53Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9148'
author: tobiu
commentsCount: 1
parentIssue: 9106
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-13T17:41:53Z'
---
# DevIndex: Use locale formatting for StatusToolbar row count

Update `apps/devindex/view/home/StatusToolbar.mjs` to format the visible row count using `Intl.NumberFormat`. This improves readability for large numbers (e.g., "1,234" instead of "1234").

## Timeline

### @tobiu - 2026-02-13T17:41:30Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the locale-based number formatting for the status toolbar row count, including the optimization to cache the `Intl.NumberFormat` instance as a class field.
> 
> Changes:
> - Added `numberFormatter` class field to `StatusToolbar`.
> - Updated `updateRowsLabel` to use the cached formatter.
> 
> The code has been committed and pushed.


