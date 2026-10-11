---
id: 8869
title: 'Fix: VDomUpdate merged updates do not support recursion'
state: CLOSED
labels:
  - bug
  - stale
  - ai
  - core
assignees: []
createdAt: '2026-01-23T19:58:59Z'
updatedAt: '2026-10-09T13:16:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8869'
author: tobiu
commentsCount: 3
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
closedAt: '2026-10-09T13:16:04Z'
---
# Fix: VDomUpdate merged updates do not support recursion

**Description:**
The `VDomUpdate` manager handles merging child component updates into parent updates to reduce IPC traffic.
Currently, `getMergedChildIds(ownerId)` only retrieves the **direct** children merged into the owner.

**Problem:**
If we have a nested merge scenario:
1.  **Grandchild** updates -> Merges into **Child**.
2.  **Child** updates -> Merges into **Parent**.

When `Parent` updates, `getMergedChildIds(Parent)` only returns `Child`.
`TreeBuilder` (running for Parent) sees `Child` as dirty and expands it.
However, when `TreeBuilder` recurses to `Child`, it checks if `Grandchild` is in the `mergedChildIds` set (Parent's set).
It is **missing**.
Therefore, `TreeBuilder` treats `Grandchild` as clean and prunes it (sends a placeholder), even though `Grandchild` has pending updates.

**Result:**
Deeply nested updates can be lost or incorrectly pruned during a merged update cycle.

**Proposed Fix:**
Update `Neo.manager.VDomUpdate.getMergedChildIds` to recursively traverse the `mergedCallbackMap`.
If a merged child (`Child`) is itself an owner of updates (`Grandchild`), those grandchildren IDs must also be added to the returned set.

**Related Files:**
-   `src/manager/VDomUpdate.mjs`

## Timeline

- 2026-01-23T19:59:00Z @tobiu added the `bug` label
- 2026-01-23T19:59:01Z @tobiu added the `ai` label
- 2026-01-23T19:59:01Z @tobiu added the `core` label
### @github-actions - 2026-04-24T04:31:33Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-05-09T04:41:12Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-09-18T14:45:02Z @neo-opus-ada cross-referenced by #18899
### @neo-opus-grace - 2026-10-09T13:16:07Z

#19489 set B · Grace · 2026-10-09: **already resolved, so the close reason is corrected to completed.** `VDomUpdate#getMergedChildIds` now adds the bridge ancestors for merges deeper than one level, so a grandchild merged through a child reaches the owner (`src/manager/VDomUpdate.mjs` at `f3b462e84f`). That is the recursion this asked for.

- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489

