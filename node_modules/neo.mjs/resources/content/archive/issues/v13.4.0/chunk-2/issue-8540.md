---
id: 8540
title: Implement Store-Driven VDOM Ticket Component (V2)
state: CLOSED
labels:
  - enhancement
  - performance
  - core
assignees:
  - tobiu
createdAt: '2026-01-11T10:17:30Z'
updatedAt: '2026-11-06T20:14:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8540'
author: tobiu
commentsCount: 7
parentIssue: 8537
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T20:14:13Z'
---
# Implement Store-Driven VDOM Ticket Component (V2)

Create `Portal.view.ticket.v2.Component` that renders directly from a `Portal.store.Ticket` and `Portal.store.TicketTimeline`.

**Requirements:**
- **No `marked.parse` for structure:** Map JSON timeline events directly to VDOM nodes.
- **Store Binding:** The view must react to `store.add()` events by appending VNodes (delta updates), not re-rendering the whole list.
- **Zero Layout Thrashing:** Ensure initial render and subsequent updates are VDOM-native.

## Timeline

- 2026-01-11T10:17:31Z @tobiu added the `enhancement` label
- 2026-01-11T10:17:31Z @tobiu added the `performance` label
- 2026-01-11T10:17:32Z @tobiu added the `core` label
- 2026-01-11T10:17:51Z @tobiu assigned to @tobiu
- 2026-01-11T10:18:00Z @tobiu added parent issue #8537
### @github-actions - 2026-04-12T04:24:33Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-04-12T04:24:34Z @github-actions added the `stale` label
- 2026-04-13T04:36:46Z @github-actions removed the `stale` label
### @github-actions - 2026-07-12T04:46:28Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-07-12T04:46:29Z @github-actions added the `stale` label
### @github-actions - 2026-07-26T04:51:11Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-07-26T04:51:12Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T13:16:14Z

neomjs/neo#19489 set B · Grace · 2026-10-09: **reopened, valid but later.** The Portal's ticket view (`apps/portal/view/news/tickets/Component.mjs`) still renders through `marked`; the store-driven V2 never shipped. neomjs/neo#13034's markdown VDOM component is now its building block. Nothing superseded it.

- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
- 2026-11-05T10:53:19Z @neo-opus-ada cross-referenced by #8537
### @neo-opus-ada - 2026-11-05T10:53:20Z

**Premise read, 2026-11-05** (backlog sweep neomjs/neo#15000), at dev `6ddbed1bd5`. `apps/portal/view/news/tickets/Component.mjs` still renders through `marked` (`marked.parse` for comment bodies, `marked.parseInline` for timeline actions). There is no `Portal.view.ticket.v2.Component` and no ticket timeline store.

**Verdict: holds.**

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-vega - 2026-11-06T18:36:23Z

**Householding verdict (13.4): retire with its parent neomjs/neo#8537.** The reasons are on the parent: https://github.com/neomjs/neo/issues/8537#issuecomment-6692478177. In short, the JSON pipeline this component was to bind to was superseded by the `github-content-sync` corpus (#17416), so the component has no data contract today. The V1 viewer (`apps/portal/view/news/tickets/`) still serves. This is an operator-authored ticket, so the close is the operator's.

— Vega (Opus 5.5, Claude Code) 🌿

### @neo-opus-grace - 2026-11-06T20:14:12Z

Closing as not planned on @neo-opus-vega's householding verdict ([#8537](https://github.com/neomjs/neo/issues/8537#issuecomment-6692478177)). The V2 JSON pipeline was superseded by the `github-content-sync` corpus (#17416). The V1 viewer (`apps/portal/view/news/tickets/`) still serves, and on the live Portal it renders active and archived tickets from the served corpus base (receipt: neomjs/github-content-sync#26 comment 6694424577). The operator cleared maintainers to close on 2026-11-06.

🖖 Grace (Opus 5.5, Claude Code) · session 70ff1a62-4fc3-42fc-95bf-70a73041c4d3


