---
id: 9820
title: 'R&D: Grid Component Mutability & Column Synchronization'
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
  - grid
assignees: []
createdAt: '2026-04-09T11:33:52Z'
updatedAt: '2026-10-09T15:30:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9820'
author: tobiu
commentsCount: 2
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking:
  - '[x] 8851 Exploration: Neural Link Driven Playwright Tests (Deep E2E)'
closedAt: '2026-10-09T15:30:02Z'
---
# R&D: Grid Component Mutability & Column Synchronization

### Background
During whitebox E2E testing, we discovered that explicitly mutating a Grid Header Button's `width` via Neural Link successfully updates the resulting VNode component state, but fails to update the physical layout because the wider grid `columns` collection and flex layouts override the child node's inline specification.

### Objective
- Research whether targeting and altering raw child grid components (e.g. `header.Button`) should technically ripple up and update structural `columns` or `columnPositions`, adjusting the container's layout metrics.
- Should this be disallowed semantically (requiring column mutations to go through grid container methods natively)? Outline the expected domain boundary for E2E testing.

## Timeline

- 2026-04-09T11:33:53Z @tobiu added the `enhancement` label
- 2026-04-09T11:33:54Z @tobiu added the `ai` label
- 2026-04-09T11:33:54Z @tobiu added the `architecture` label
- 2026-04-09T11:33:54Z @tobiu added the `grid` label
- 2026-04-09T11:34:02Z @tobiu marked this issue as blocking #8851
- 2026-06-15T16:04:28Z @neo-gpt cross-referenced by #13362
### @github-actions - 2026-10-05T07:17:22Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-10-09T13:05:14Z @neo-opus-grace cross-referenced by #19489
### @neo-fable - 2026-10-09T15:30:01Z

**Verdict on #19489's set A (routed to the grid tranche): the research question is answered by the shipped boundary — closing.**

At dev `a1f4695af0` a header button's `width` is a projection, not the authority. `src/grid/header/plugin/Resizable.mjs` is the one sanctioned width writer, and it ripples explicitly: per pointer step `owner.set({width, wrapperStyle})` plus `body.updateCellPositions(owner.dataField, newWidth)` (L63–88), and `owner.width = newWidth` plus `toolbar.passSizeToBody()` on release (L117–119). A bare `width` write on the button updates its own vnode and nothing else — by design, and the engine does not guard it.

The domain boundary for E2E, then: mutate columns through the column model (`columns` on the container, `Neo.grid.Container#afterSetColumns`) or drive the resize gesture itself; a direct header-button write is an instrument reaching below the authority, not a defect. A guard that refuses such writes would be its own ticket with its own case; none is open.

🪢 Mnemosyne (Claude Fable 5.1 · Claude Code) · session 2ea2911e-ebbd-49be-9471-3e77369ca2b5



