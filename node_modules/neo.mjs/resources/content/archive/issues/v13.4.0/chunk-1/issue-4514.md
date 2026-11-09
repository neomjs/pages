---
id: 4514
title: 'Toast Component: closable and vanish-able after timeout '
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-06-26T08:24:04Z'
updatedAt: '2026-11-03T15:38:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4514'
author: alberthashani
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
closedAt: '2026-11-03T15:38:39Z'
---
# Toast Component: closable and vanish-able after timeout 

Currently the Toast component, is either closable or vanish-able after timeout, but not both. The component is needed to be closable and vanish-able

## Timeline

- 2023-06-26T08:24:04Z @alberthashani added the `enhancement` label
### @github-actions - 2024-08-29T02:27:14Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:14Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:51Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:52Z @github-actions closed this issue
- 2026-10-09T20:31:51Z @neo-opus-grace reopened this issue
- 2026-10-09T20:31:52Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:31:53Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid.** Thank you @alberthashani. `component.Toast` still auto-closes only when it is not `closable` (`if (!me.closable && value)`), so it cannot be both.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T08:38:01Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T08:38:01Z @neo-gemini-maryam added the `core` label
- 2026-11-03T08:38:06Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T08:38:10Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigned for implementation under `ticket-intake`.

### Intake & Contract Ledger (`#4514`)

- **Ticket reality classification:** `valid-as-written`
  - `Ticket age`: `createdAt: 2023-06-26`, `updatedAt: 2026-10-09` (reopened and re-validated in `#19489` set C by `@neo-opus-grace`).
  - `Bot stale-band`: `pre-stale` since 2026-10-09 re-validation (`stale`: false, `no auto close`: false).
  - `Currency / successor-risk evidence`: Verified against live `dev` (`src/component/Toast.mjs#L56-L60`, `src/component/Toast.mjs#L131`, `src/component/Toast.mjs#L213-L223`). `afterSetMounted` still checks `if (!me.closable && value)`, preventing a toast with `closable: true` from also auto-vanishing after `removeDelay`.
  - `Prescription checked`: `src/component/Toast.mjs` (`afterSetMounted` + idempotent `destroy` guard) — owns the concern.
  - `Structural Pre-Flight (§9.5)`: Stage 1 fast-path sibling match (`test/playwright/unit/component/Progress.spec.mjs` and `test/playwright/unit/component/Label.spec.mjs` mirror `src/component/*.mjs` -> `test/playwright/unit/component/Toast.spec.mjs`).
  - `Core-Idiom Pre-Flight (§9.6)`: Read and verified `src/core/Base.mjs` (`timeout()`, `trap()`, `destroy()`, `isDestroyed` / `isDestroying`), `src/Neo.mjs` (`setupClass`), and `src/state/Provider.mjs`.

| Surface / Symbol | Owner File | Contract / Behavior |
|---|---|---|
| `Neo.component.Toast#closable_` & `removeDelay` | `src/component/Toast.mjs` | Orthogonal controls: `closable: true` renders the `.neo-toast-close` dismiss button (`vdom.cn[0].cn[2].removeDom = false`), while `removeDelay` (default `3000` ms) governs auto-vanish after mount whenever `removeDelay > 0`, regardless of `closable`. Setting `removeDelay: 0` or `null` disables the auto-vanish timer (sticky toast). |
| `Neo.component.Toast#afterSetMounted` & `destroy` | `src/component/Toast.mjs` | Schedules `this.trap(this.timeout(this.removeDelay))` when `mounted` becomes `true` and `this.removeDelay > 0`; guards `destroy()` so manual dismissal before `removeDelay` elapses neither double-triggers fade-out nor causes an unhandled `Neo.isDestroyed` rejection. |

Authored by Maryam (Gemini 4 Argon, Antigravity). Session `dadd700f-6b16-47b5-b22c-2f57073f86f3`. 🧭

- 2026-11-03T08:48:29Z @neo-gemini-maryam cross-referenced by PR #20234
- 2026-11-03T15:38:39Z @tobiu referenced in commit `e9494b2` - "feat(component): allow Toast to be both closable and auto-dismissed after removeDelay (#4514) (#20234)"
- 2026-11-03T15:38:40Z @tobiu closed this issue

