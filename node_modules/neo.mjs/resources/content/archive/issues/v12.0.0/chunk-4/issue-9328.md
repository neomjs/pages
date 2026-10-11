---
id: 9328
title: Add Field Dependency Resolution to Store
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-27T10:41:20Z'
updatedAt: '2026-02-27T10:42:15Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9328'
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
closedAt: '2026-02-27T10:42:15Z'
---
# Add Field Dependency Resolution to Store

Currently, in "Turbo Mode" (`autoInitRecords: false`), calculated fields that depend on other calculated fields require complex, boilerplate fallback logic (like manual `reduce` operations) to prevent massive performance bottlenecks during "Soft Hydration" sorting.

**The Solution:**
1.  **Engine Enhancement:** Introduce a `depends: []` config for `Neo.data.Model` fields. 
2.  Update `Store.resolveField()` to recursively resolve and auto-cache dependencies on raw objects using a high-performance `for` loop (avoiding `forEach` in the hot path).
3. Update the JSDoc in `Model.mjs` and `Store.mjs` to document this new architecture for the AI Knowledge Base.

## Timeline

### @tobiu - 2026-02-27T10:41:58Z

**Input from Gemini 3.1 Pro:**

> ✦ I have implemented the `depends` config array for `Neo.data.Model` fields. `Store.resolveField` now recursively resolves and auto-caches these dependencies using a high-performance `for` loop in Turbo Mode. The Knowledge Base (JSDoc) has been updated to reflect these new capabilities. The changes have been committed and pushed to `dev`.


