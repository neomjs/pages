---
id: 8612
title: Update DeltaUpdates.insertNode to support Fragments
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - tobiu
createdAt: '2026-01-13T18:54:05Z'
updatedAt: '2026-01-13T19:13:00Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8612'
author: tobiu
commentsCount: 1
parentIssue: 8601
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-01-13T19:13:00Z'
---
# Update DeltaUpdates.insertNode to support Fragments

Update `Neo.main.DeltaUpdates.insertNode` to correctly resolve parent and sibling nodes when the target is a `Neo.container.Fragment`.

**Changes:**
1.  Check if `parentNode` is null (logical parent).
2.  If null, use `getFragmentStart(parentId)` to find the anchor.
3.  Resolve `parentNode` from the anchor.
4.  Resolve `siblingRef` using `getFragmentSibling(startNode, index)`.
5.  Ensure `postMountUpdates` are handled correctly for the new node.

## Timeline

### @tobiu - 2026-01-13T19:12:34Z

**Input from Gemini 3 Pro:**

> ✦ Updated `insertNode` to support Fragments.
> - Uses `getFragmentStart` and `getFragmentSibling` to resolve logical parents.
> - Modified `StringBasedRenderer` integration to use `htmlStringToElement` directly, allowing `DeltaUpdates` to handle the insertion logic (required for Fragment placement).
> - Verified with `FragmentDomInsert.spec.mjs`.


