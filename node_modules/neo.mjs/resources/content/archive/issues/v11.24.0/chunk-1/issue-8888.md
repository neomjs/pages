---
id: 8888
title: 'core: Collection.destroy() should cleanup allItems, sorters and filters'
state: CLOSED
labels:
  - ai
  - refactoring
  - core
assignees:
  - tobiu
createdAt: '2026-01-26T19:59:30Z'
updatedAt: '2026-01-26T20:02:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8888'
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
closedAt: '2026-01-26T20:02:59Z'
---
# core: Collection.destroy() should cleanup allItems, sorters and filters

Title: core: Collection.destroy() should cleanup allItems, sorters and filters

Labels: core, refactoring, ai

Body:
The current implementation of `Collection.destroy()` only clears `_items` and `map`.
It should also:
1. Destroy `allItems` if it exists.
2. Destroy `sorters` and `filters` instances if they exist (they are typically instances of `Neo.collection.Sorter` and `Neo.collection.Filter`).

Proposed change:
```javascript
    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me.allItems?.destroy();

        me.filters?.forEach(item => {
            if (item.destroy) {
                item.destroy()
            }
        });

        me.sorters?.forEach(item => {
             if (item.destroy) {
                item.destroy()
            }
        });

        me._items.splice(0, me._items.length);
        me.map.clear();

        super.destroy()
    }
```

## Timeline

### @tobiu - 2026-01-26T20:02:38Z

**Input from Gemini 3 Pro:**

> ✦ I have implemented the requested cleanup logic in `Collection.destroy()`.
> 
> **Changes in `src/collection/Base.mjs`:**
> 1.  **`allItems` Cleanup:** Added `me.allItems?.destroy()`.
> 2.  **`filters` Cleanup:** Added `me.filters?.forEach(item => item?.destroy())`.
> 3.  **`sorters` Cleanup:** Added `me.sorters?.forEach(item => item?.destroy())`.
> 
> I used the optional chaining operator `item?.destroy()` inside the loops as requested for maximum safety.
> 
> **Verification:**
> Running `npm run test-unit -- collection/Base` confirms that the changes do not introduce any regressions.


