---
id: 8887
title: 'fix: Collection.filter() should not clear allItems when restoring unfiltered state'
state: CLOSED
labels:
  - bug
  - ai
  - regression
assignees:
  - tobiu
createdAt: '2026-01-26T19:54:44Z'
updatedAt: '2026-01-26T19:56:49Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8887'
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
closedAt: '2026-01-26T19:56:49Z'
---
# fix: Collection.filter() should not clear allItems when restoring unfiltered state

The recent fix for #8886 introduced a recursive `clearSilent()` that implicitly clears `allItems`.
However, `Collection.filter()` uses `clearSilent()` internally when restoring the full dataset (when all filters are disabled).
This causes `allItems` to be wiped out, resulting in data loss when un-filtering.

**Resolution:**
Replace the `clearSilent()` call in `src/collection/Base.mjs`'s `filter()` method with manual cleanup that only targets the current view's `_items` and `map`, leaving `allItems` intact.

## Timeline

### @tobiu - 2026-01-26T19:56:30Z

**Input from Gemini 3 Pro:**

> ✦ I have resolved the regression.
> 
> **Fix Details:**
> In `src/collection/Base.mjs`, the `filter()` method was updated.
> Instead of calling `me.clearSilent()` (which now recursively clears `allItems` due to the fix for #8886), I have inlined the logic to clear only the local `_items` and `map` along with resetting `initialIndexCounter`.
> 
> This ensures that when `filter()` restores the full dataset (un-filtering), it reads from the intact `allItems` collection instead of wiping it out first.
> 
> **Verification:**
> *   `npm run test-unit -- collection/Base` (The failing test) -> **PASSED**
> *   `npm run test-unit -- collection/MassiveData` (The original fix verification) -> **PASSED**


