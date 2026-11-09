---
id: 991
title: 'Neo.calendar.view.MonthComponent: on base font size change => fetch the new header height in px'
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2020-07-29T23:39:51Z'
updatedAt: '2026-11-03T17:09:45Z'
githubUrl: 'https://github.com/neomjs/neo/issues/991'
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
closedAt: '2026-11-03T17:09:45Z'
---
# Neo.calendar.view.MonthComponent: on base font size change => fetch the new header height in px

needed for the srcoll positions (em based)

## Timeline

- 2020-07-29T23:39:51Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-14T02:27:15Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-14T02:27:15Z @github-actions added the `stale` label
### @github-actions - 2024-09-28T02:31:22Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-28T02:31:22Z @github-actions closed this issue
- 2026-10-09T20:08:14Z @neo-opus-grace reopened this issue
- 2026-10-09T20:08:15Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:08:17Z

#19489 set C · T2 · Grace · 2026-10-09: **reopened, narrowed.** The month view measures `headerHeight` each time it becomes active, but not when the base font size changes while it is shown, and `onWheel` divides by that value.

- 2026-10-09T20:10:15Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T11:33:15Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T11:33:16Z @neo-gemini-maryam added the `core` label
- 2026-11-03T11:33:16Z @neo-gemini-maryam added the `testing` label
- 2026-11-03T11:33:19Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T11:33:23Z

### Ticket Triage & Pre-Execution Intake (`#991`)

Triaged per `ticket-triage` skill. Applied: `ai`, `core`, `testing` (alongside existing `enhancement`). Stage retrospective passed. Self-assigned for implementation.

#### 1. Retrospective Six-Stage Challenge & Prescription Check
- **Premise:** Verified in [`src/calendar/view/month/Component.mjs`](https://github.com/neomjs/neo/blob/dev/src/calendar/view/month/Component.mjs), [`src/calendar/view/MainContainer.mjs`](https://github.com/neomjs/neo/blob/dev/src/calendar/view/MainContainer.mjs), and [`resources/scss/src/calendar/view/month/Component.scss`](https://github.com/neomjs/neo/blob/dev/resources/scss/src/calendar/view/month/Component.scss). `.neo-days-header` uses `height: 3.75em`, while `month.Component#onWheel` computes row thresholds and scroll offsets in pixels using `data.clientHeight - me.headerHeight`. Currently `headerHeight` is only measured inside `afterSetMounted`, so changing `MainContainer#baseFontSize` while the month view is mounted changes the rendered `.neo-days-header` height in pixels without updating `me.headerHeight`.
- **Prescription checked:** `src/calendar/view/month/Component.mjs` & `src/calendar/view/MainContainer.mjs` — owns the concern.
  - Extract `updateHeaderHeight(scrollTo=false)` on `Neo.calendar.view.month.Component` (resolving the `// todo: extract the logic into a new method` in `afterSetCurrentDate` and guarding on `me.mounted`).
  - Invoke `me.monthComponent.updateHeaderHeight()` from `Neo.calendar.view.MainContainer#afterSetBaseFontSize` when `me.monthComponent?.mounted` is `true`.
- **Core-Idiom Pre-Flight (`ticket-intake §1.9.6`):** Verified against `src/core/Base.mjs`, `src/Neo.mjs`, and `src/state/Provider.mjs`.

#### 2. Ticket Reality Classification (`ticket-intake §1.8`)
- `Ticket age`: `createdAt: 2020-07-29T23:39:51Z`, `updatedAt: 2026-10-09T20:08:17Z`
- `Bot stale-band`: `pre-stale` (`stale`: false, `no auto close`: false; reopened and narrowed by `@neo-opus-grace` in `#19489` set C · T2, [`IC_kwDODSospM8AAAABauXeIA`](https://github.com/neomjs/neo/issues/991#issuecomment-6088416800))
- `Currency / successor-risk evidence`: Verified live source and PR history (`gh pr list --search "991 OR headerHeight"`). No prior PR or commit updates `headerHeight` on `baseFontSize` changes.
- `ADR successor-risk`: N/A
- `Verdict`: `valid-as-written`

#### 3. Contract Ledger (`ticket-intake §1.7`)

| Surface | Owner / Path | Contract / Behavior | Verification |
|---|---|---|---|
| `Neo.calendar.view.month.Component#updateHeaderHeight` | `src/calendar/view/month/Component.mjs` | When `mounted` is `true`, waits for the layout pass (`timeout(100)`), measures `[me.vdom.cn[1].id, me.vdom.cn[0].id]` via `getDomRect`, updates `me.headerHeight = data[1].height`, and when `scrollTo` is `true` scrolls `me.vdom.cn[1].id` to `data[0].height - data[1].height`. | Playwright unit & component tests |
| `Neo.calendar.view.month.Component#afterSetMounted` & `afterSetCurrentDate` | `src/calendar/view/month/Component.mjs` | Delegate to `me.updateHeaderHeight(true)` when mounted instead of duplicating or calling `afterSetMounted(true, false)` directly. | Playwright unit & component tests |
| `Neo.calendar.view.MainContainer#afterSetBaseFontSize` | `src/calendar/view/MainContainer.mjs` | After updating `this.style.fontSize`, calls `this.monthComponent.updateHeaderHeight()` when `this.monthComponent?.mounted` is `true`. | Playwright unit & component tests |

---
Authored by Maryam (Gemini 4 Argon, Antigravity). Session `dadd700f-6b16-47b5-b22c-2f57073f86f3`. 🧭

- 2026-11-03T11:40:54Z @neo-gemini-maryam cross-referenced by PR #20246
- 2026-11-03T17:09:45Z @tobiu referenced in commit `f515098` - "fix(calendar): refresh MonthComponent headerHeight on baseFontSize change (#991) (#20246)"
- 2026-11-03T17:09:46Z @tobiu closed this issue

