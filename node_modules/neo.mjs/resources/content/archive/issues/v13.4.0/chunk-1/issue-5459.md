---
id: 5459
title: 'plugin.Responsive: ensure to use the correct matching viewport'
state: CLOSED
labels:
  - enhancement
assignees:
  - neo-gemini-maryam
createdAt: '2024-06-23T08:29:37Z'
updatedAt: '2026-11-05T17:20:53Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5459'
author: tobiu
commentsCount: 7
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
closedAt: '2026-11-05T17:20:53Z'
---
# plugin.Responsive: ensure to use the correct matching viewport

`Neo.first()` is only meant for debugging. Custom apps can have custom Viewport ntypes and especially inside the multi-window scope it is crucial to match the right Viewport.

## Timeline

- 2024-06-23T08:29:37Z @tobiu added the `enhancement` label
- 2024-06-23T08:29:38Z @tobiu assigned to @Dinkh
### @github-actions - 2024-09-22T02:36:42Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-22T02:36:42Z @github-actions added the `stale` label
### @github-actions - 2024-10-06T02:38:07Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-10-06T02:38:08Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:53:24Z

#19489 set C · T7 · Grace · 2026-10-09: **reopened, valid.** The `plugin.Responsive` cleanup (#5458–#5461) is still open: it still resolves `Neo.first('viewport')` (marked `// todo`), which picks the wrong viewport in multi-window apps.

- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:35:40Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `plugin.Responsive` still resolves its viewport with `Neo.first('viewport')`, in two places, one of them marked `// todo`. In a multi-window app that can be another window's viewport. The plugin is unchanged since 10-09.

**Verdict: holds.** It belongs in one bundle with #5458, #5460 and #5461; see #5458.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T10:35:44Z @neo-opus-ada cross-referenced by #5460
### @neo-gemini-maryam - 2026-11-05T14:42:27Z

Picking up per 7-day rule; previous assignee @Dinkh; last qualifying activity 2024-06-23T08:29:37Z.

### Ticket Intake Classification (`#5459`, paired with `#5458`, `#5460`, `#5461`)
- **Ticket age:** `createdAt: 2024-06-23T08:29:37Z`, `updatedAt: 2026-11-05T10:35:41Z`
- **Bot stale-band:** `pre-stale` (`stale: false`, `no auto close: false`)
- **Prescription checked:** `src/plugin/Responsive.mjs` — owns the concern.
- **Core-Idiom Pre-Flight:** Read `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`.
- **Verdict:** `valid-as-written` — resolving the owner's matching viewport via `owner.up('viewport') || owner.app?.mainView` instead of `Neo.first('viewport')`.

— Maryam 🧭

### @neo-gemini-maryam - 2026-11-05T14:42:47Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@Dinkh`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule (operator backlog sweep #15000); previous assignee @Dinkh; last qualifying activity 2024-06-23T08:29:37Z.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T14:50:59Z @neo-gemini-maryam cross-referenced by PR #20334
### @neo-gemini-maryam - 2026-11-05T17:20:44Z

Delivered and merged in PR #20334 (`feat(plugin): bind Responsive to matching Viewport resize on mount and remove Neo.Responsive (#5458)`), which resolves the owner's matching viewport via `owner.up('viewport') || Neo.apps[owner.appName]?.mainView` (`src/plugin/Responsive.mjs` + `test/playwright/unit/plugin/Responsive.spec.mjs`).

Closing `#5459` as completed per `#20334` Post-Merge Validation.

— Maryam (Gemini 4 Argon, Antigravity) · session 70151411-91ec-4496-b8f0-ea3b31ddb60b 🧭


