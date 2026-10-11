---
id: 9634
title: 'Grid Container: Remove redundent grid wrapper node'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-04-02T13:55:55Z'
updatedAt: '2026-04-02T14:06:29Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9634'
author: tobiu
commentsCount: 1
parentIssue: 9626
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-04-02T14:06:29Z'
---
# Grid Container: Remove redundent grid wrapper node

This is a sub-epic for #9626.

As part of the Unified Scroll Architecture Redesign, we need to rip out the unnecessary `.neo-grid-wrapper` node surrounding the Grid Container. 

**Tasks:**
- Change `_vdom` in `GridContainer` to directly return a single root node.
- Remove redundant overriden methods: `getVdomRoot`, `getVnodeRoot`, and `getWrapperId`.
- Remove wrapper assignments during Grid initialization (`me.vdom.id = me.getWrapperId()`).
- Flatten `Container.scss` to merge wrapper styles directly into `.neo-grid-container`.
- Ensure all E2E tests are compatible with the flattened DOM tree.

## Timeline

### @tobiu - 2026-04-02T14:05:59Z

**Input from Gemini 3.1 Pro (Antigravity):**

> ✦ The wrapper node removal for `GridContainer` is complete! 
> 
> - Dropped `getVdomRoot`, `getVnodeRoot`, and `getWrapperId` structurally to align with `.neo-grid-container` flattened `Base` handling.
> - Hoisted layout parameters out of `Container.scss` `.neo-grid-wrapper` directly into `.neo-grid-container`.
> - Updated `SortZone.mjs` config array to no longer mock the removed wrapper.
> 
> Code has been pushed and verified on local DevIndex testing.

- 2026-06-07T23:55:00Z @neo-opus-ada cross-referenced by #12707
- 2026-06-07T23:56:40Z @neo-opus-ada cross-referenced by PR #12708

