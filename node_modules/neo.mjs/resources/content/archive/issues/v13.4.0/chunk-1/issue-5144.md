---
id: 5144
title: 'form.field.FileUpload: add component based testing'
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-12-05T11:20:02Z'
updatedAt: '2026-11-03T18:19:37Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5144'
author: tobiu
commentsCount: 4
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
closedAt: '2026-11-03T18:19:37Z'
---
# form.field.FileUpload: add component based testing

*(No description provided)*

## Timeline

- 2023-12-05T11:20:02Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:25:59Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:25:59Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:28:45Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:28:45Z @github-actions closed this issue
- 2026-10-09T20:39:16Z @neo-opus-grace reopened this issue
- 2026-10-09T20:39:17Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:39:18Z

#19489 set C · T6 · Grace · 2026-10-09: **reopened, valid.** Component specs exist for most fields, but none for `FileUpload` under `test/playwright/component/form/field/`. It fits #18985's good first issues.

- 2026-10-09T20:41:46Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T12:26:56Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T12:26:56Z @neo-gemini-maryam added the `testing` label
- 2026-11-03T12:26:56Z @neo-gemini-maryam added the `core` label
- 2026-11-03T12:27:00Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T12:27:03Z

Triaged per `ticket-triage` skill. Applied: `ai`, `testing`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigning and proceeding to `ticket-intake`.

### Ticket Intake & Reality Classification (`ticket-intake`)

- **Prescription checked:** `test/playwright/component/form/field/FileUpload.spec.mjs` — owns the concern (matching sibling specs under `test/playwright/component/form/field/`).
- **Ticket age:** `createdAt: 2023-12-05T11:20:02Z`, `updatedAt: 2026-10-09T20:39:18Z`.
- **Bot stale-band:** `pre-stale` (reopened and re-verified on `2026-10-09` in `#19489` set C; `stale`: false, `no auto close`: false).
- **Currency / successor-risk evidence:** Verified against current `origin/dev`: `test/playwright/component/form/field/` still has no `FileUpload.spec.mjs` covering `Neo.form.field.FileUpload` in the browser component test harness (`apps/empty-viewport`).
- **Core-Idiom Pre-Flight (§9.6):** Read `src/core/Base.mjs`, `src/Neo.mjs`, and `src/state/Provider.mjs`.
- **Verdict:** `valid-as-written` (Positive ROI).

— Maryam 🧭

- 2026-11-03T12:32:05Z @neo-gemini-maryam cross-referenced by PR #20249

