---
id: 5458
title: 'plugin.Responsive: switch the domListeners to the new Viewport resize custom event'
state: CLOSED
labels:
  - enhancement
assignees:
  - neo-gemini-maryam
createdAt: '2024-06-23T08:26:52Z'
updatedAt: '2026-11-05T17:18:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5458'
author: tobiu
commentsCount: 6
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
closedAt: '2026-11-05T17:18:28Z'
---
# plugin.Responsive: switch the domListeners to the new Viewport resize custom event

*(No description provided)*

## Timeline

- 2024-06-23T08:26:52Z @tobiu added the `enhancement` label
- 2024-06-23T08:26:52Z @tobiu assigned to @Dinkh
### @github-actions - 2024-09-22T02:36:43Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-22T02:36:44Z @github-actions added the `stale` label
### @github-actions - 2024-10-06T02:38:09Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-10-06T02:38:09Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:53:20Z

#19489 set C · T7 · Grace · 2026-10-09: **reopened, valid.** The `plugin.Responsive` cleanup (#5458–#5461) is still open: it still attaches a DOM `resize` listener on `Neo.first('viewport')` (`src/plugin/Responsive.mjs`).

- 2026-10-09T20:53:25Z @neo-opus-grace cross-referenced by #5459
- 2026-10-09T20:53:30Z @neo-opus-grace cross-referenced by #5460
- 2026-10-09T20:53:34Z @neo-opus-grace cross-referenced by #5461
- 2026-10-09T21:02:53Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:35:38Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `container.Viewport` now fires the custom `resize` event this ticket asks for (`this.fire('resize', data)`). `plugin.Responsive` still ignores it: it attaches a DOM `resize` listener on `Neo.first('viewport')` instead. The plugin is unchanged since 10-09.

**Verdict: holds.** #5458–#5461 are one cleanup of one plugin. A single ticket that replaces all four would let one PR resolve it, since a PR resolves exactly one ticket. They are operator-authored, so bundling them is the operator's call; it is listed on #15000.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gemini-maryam - 2026-11-05T14:42:23Z

Picking up per 7-day rule; previous assignee @Dinkh; last qualifying activity 2024-06-23T08:26:52Z.

### Ticket Intake Classification (`#5458` + `#5459` + `#5460` + `#5461`)
- **Ticket age:** `createdAt: 2024-06-23T08:26:52Z`, `updatedAt: 2026-11-05T10:35:38Z`
- **Bot stale-band:** `pre-stale` (`stale: false`, `no auto close: false`)
- **Prescription checked:** `src/plugin/Responsive.mjs` and `src/container/Viewport.mjs` — own the concern.
- **Core-Idiom Pre-Flight:** Read `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`.
- **Verdict:** `valid-as-written` — switching `plugin.Responsive` to `Viewport` custom `resize` events (`monitorSize = true` + `viewport.on('resize', ...)`, plus `afterSetMonitorSize` on `Viewport` when enabled after mount) (`#5458`), resolving the owner's matching viewport via `owner.up('viewport') || owner.app?.mainView` (`#5459`), rebinding on `owner.on('mounted', me.onOwnerMounted, me)` so cross-window moves switch viewports (`#5460`), and removing global `Neo.Responsive` namespace pollution in favor of instance `responsiveConfig` and `static apps` (`#5461`).

— Maryam 🧭

### @neo-gemini-maryam - 2026-11-05T14:42:39Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@Dinkh`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule (operator backlog sweep #15000); previous assignee @Dinkh; last qualifying activity 2024-06-23T08:26:52Z.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T14:50:59Z @neo-gemini-maryam cross-referenced by PR #20334

