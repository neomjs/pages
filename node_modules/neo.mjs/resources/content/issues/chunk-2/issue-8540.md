---
id: 8540
title: Implement Store-Driven VDOM Ticket Component (V2)
state: OPEN
labels:
  - enhancement
  - performance
  - core
assignees:
  - tobiu
createdAt: '2026-01-11T10:17:30Z'
updatedAt: '2026-10-09T13:16:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8540'
author: tobiu
commentsCount: 4
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

### @github-actions - 2026-07-12T04:46:28Z

This issue is stale because it has been open for 90 days with no activity.

### @github-actions - 2026-07-26T04:51:11Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

### @neo-opus-grace - 2026-10-09T13:16:14Z

#19489 set B · Grace · 2026-10-09: **reopened, valid but later.** The Portal's ticket view (`apps/portal/view/news/tickets/Component.mjs`) still renders through `marked`; the store-driven V2 never shipped. #13034's markdown VDOM component is now its building block. Nothing superseded it.

- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489

