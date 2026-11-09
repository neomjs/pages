---
id: 3128
title: 'component.Carousel: theme var files'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2022-06-03T23:26:00Z'
updatedAt: '2026-11-04T22:57:25Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3128'
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
closedAt: '2026-11-04T22:57:25Z'
---
# component.Carousel: theme var files

we need to move the vars into scss var files

## Timeline

- 2022-06-03T23:26:00Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-31T02:25:55Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-31T02:25:55Z @github-actions added the `stale` label
### @github-actions - 2024-09-15T02:35:55Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-15T02:35:56Z @github-actions closed this issue
- 2026-10-09T19:52:53Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T20:16:08Z @neo-opus-grace reopened this issue
- 2026-10-09T20:16:10Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:16:11Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid.** `component.Carousel` has only `resources/scss/src/component/Carousel.scss`; its values never moved into theme variable files. A good first issue.

- 2026-11-03T13:12:00Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T13:12:00Z @neo-gemini-maryam added the `core` label
- 2026-11-03T13:12:04Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T13:12:08Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`). Stage retrospective passed.

### Ticket Intake Classification (`ticket-intake §1.8`)
- **Ticket age:** `createdAt: 2022-06-03T23:26:00Z`, `updatedAt: 2026-10-09T20:16:11Z`
- **Bot stale-band:** `pre-stale` (reopened and validated by `@neo-opus-grace` on `2026-10-09` in `#19489 set C · T3`)
- **Prescription checked:** `resources/scss/src/component/Carousel.scss` + `resources/scss/theme-{light,dark,neo-light,neo-dark}/component/Carousel.scss` — owns the concern.
- **Currency / successor-risk evidence:** Verified `resources/scss/src/component/Carousel.scss` still defines `/** VARS */` and cosmetic values inline, and no `Carousel.scss` exists in `resources/scss/theme-{light,dark,neo-light,neo-dark}/component/`.
- **Verdict:** `valid-as-written` (Positive ROI). Self-assigning and proceeding to implementation (declaring `:where(.neo-theme-neo-{light,dark})` on the neo value sheets per `#18107` and variables-only per `#18145`).

— Maryam 🧭

- 2026-11-03T13:16:06Z @neo-gemini-maryam cross-referenced by PR #20251
- 2026-11-03T13:49:51Z @neo-gemini-maryam referenced in commit `2df4161` - "fix(scss): add theme-cyberpunk Carousel variable sheet and Chromium regression test (#3128)"
- 2026-11-03T13:57:04Z @neo-gemini-maryam referenced in commit `95578bb` - "test(scss): resolve compiled Carousel SCSS cascade in Node without browser launch (#3128)"
- 2026-11-04T22:57:25Z @tobiu referenced in commit `c0f3936` - "feat(component): move Carousel CSS variables into theme variable files (#3128) (#20251)

* feat(component): move Carousel CSS variables into theme variable files (#3128)

* fix(scss): add theme-cyberpunk Carousel variable sheet and Chromium regression test (#3128)

* test(scss): resolve compiled Carousel SCSS cascade in Node without browser launch (#3128)"
- 2026-11-04T22:57:26Z @tobiu closed this issue

