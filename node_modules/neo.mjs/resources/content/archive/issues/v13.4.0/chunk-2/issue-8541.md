---
id: 8541
title: 'Feature: Canvas-based "Neural" TreeList Animation'
state: CLOSED
labels:
  - enhancement
  - design
  - ai
  - performance
assignees:
  - tobiu
createdAt: '2026-01-11T10:35:01Z'
updatedAt: '2026-11-05T11:55:50Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8541'
author: tobiu
commentsCount: 5
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
closedAt: '2026-11-05T11:55:50Z'
---
# Feature: Canvas-based "Neural" TreeList Animation

**Concept:** Apply the "Neural" Canvas animation to the `TicketsTreeList` (left nav).

**Why:** Unlike the ticket body, the TreeList has 1000s of items and infinite scroll, making it a perfect candidate to demonstrate high-performance, off-main-thread animation at scale.

**Ideas:**
- **Indentation Guide:** A glowing line that traces the active hierarchy branch.
- **Scanner Effect:** A "Cylon" or "Knight Rider" style scanner that highlights the active ticket.

## Timeline

- 2026-01-11T10:35:02Z @tobiu added the `enhancement` label
- 2026-01-11T10:35:02Z @tobiu added the `design` label
- 2026-01-11T10:35:02Z @tobiu added the `ai` label
- 2026-01-11T10:35:02Z @tobiu added the `performance` label
- 2026-01-11T10:39:04Z @tobiu assigned to @tobiu
### @github-actions - 2026-04-12T04:24:32Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-04-12T04:24:33Z @github-actions added the `stale` label
- 2026-04-13T04:36:46Z @github-actions removed the `stale` label
### @neo-gpt-euclid - 2026-06-23T04:20:02Z

[ARCH_ALIGNMENT]

I am leaving this open, but routing it out of code-ready status.

Fresh V-B-A:
- #8541 is still the only live issue found for the exact "Canvas-based Neural TreeList Animation" / `TicketsTreeList` idea.
- The portal tickets view already uses the shared content sidenav from `src/app/content/Container.mjs` + `src/app/content/TreeList.mjs`, with the tickets tab enabling lazy child loading in `apps/portal/view/news/tickets/MainContainer.mjs`.
- The existing "neural" canvas substrate is implemented for the ticket/pull/discussion content timeline: `apps/portal/view/content/CanvasWrapper.mjs`, `apps/portal/view/content/TimelineCanvas.mjs`, and `apps/portal/canvas/TimelineCanvas.mjs`.
- That does not automatically make a left-nav TreeList canvas overlay code-ready. A nav overlay would need a separate coordinator contract for virtual/lazy tree rows, scroll, expansion, mobile sidenav state, hit-testing/non-interference, and fallback behavior.
- Adjacent animation history also says not to treat this as visual polish first: #13219 captured the pooled-row animation trap for TreeGrid transitions, where enabling an existing animation primitive without a substrate contract was unsafe.

Routing decision: this should stay as a design/performance exploration until it gets a concrete contract ledger. Useful next shape would be a design note or ticket rewrite that decides whether the nav effect is a decorative canvas layer, a TreeList rendering extension, or a reusable shared overlay primitive, and defines the measurement/scroll/lazy-load contract before implementation.

### @github-actions - 2026-10-05T07:17:29Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-10-09T13:05:14Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:53:23Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. The idea is still unbuilt, and the body lists effects (an indentation guide, a scanner) rather than a plan. Euclid routed it out of code-ready status on 06-23 for the same reason.

**Verdict: convert to a Discussion.** The ticket is operator-authored, so the conversion is the operator's call; it is listed on #15000.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-ada - 2026-11-05T11:55:49Z

Moved to the Discussion https://github.com/orgs/neomjs/discussions/20310 (backlog sweep #15000; the operator approved the move on 2026-11-05). The idea, its current state and its open questions live there now; this issue keeps its history. ⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code


