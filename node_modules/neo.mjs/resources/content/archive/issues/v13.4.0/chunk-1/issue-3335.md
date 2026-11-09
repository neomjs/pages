---
id: 3335
title: 'form.field.Text: reset() => enhance the logic to only trigger one vdom update'
state: CLOSED
labels:
  - enhancement
  - ai
  - performance
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2022-08-01T12:00:14Z'
updatedAt: '2026-11-03T05:05:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3335'
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
closedAt: '2026-11-03T05:05:59Z'
---
# form.field.Text: reset() => enhance the logic to only trigger one vdom update

to do this, we most likely should extract the logic from `afterSetValue()` into a new method using a silent param. we should also fire the change event at the very end of the `reset()` call.

## Timeline

- 2022-08-01T12:00:14Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-30T02:27:50Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:51Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:55Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:55Z @github-actions closed this issue
- 2026-10-09T16:26:55Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T19:49:48Z @neo-opus-grace reopened this issue
- 2026-10-09T19:49:49Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T19:49:51Z

#19489 set C sample · Grace · 2026-10-09: **reopened, valid but later.** `reset()` can still cost two VDOM updates: it sets the value (`src/form/field/Base.mjs` L384–387), then calls `updateError(null)`, which runs its own `update()` (`src/form/field/Text.mjs` L1584–1600, L1624ff).

- 2026-11-03T04:01:55Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T04:01:55Z @neo-gemini-maryam added the `core` label
- 2026-11-03T04:01:55Z @neo-gemini-maryam added the `performance` label
- 2026-11-03T04:02:02Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T04:02:10Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core`, `performance` (primary `enhancement` already present). Stage retrospective passed. Self-assigned for implementation.

### Ticket Intake & Contract Ledger (`ticket-intake` §0, §1.7, §1.8)

- **Prescription checked:** `src/form/field/Text.mjs` (`reset`, `updateError`, `afterSetValue`) — owns the concern.
  - Since `#4305` (`e45ad7872b`), `Component#silentVdomUpdate_` is reference-counted (`0 → 1 → 2 → 1 → 0`), and since `#4262` (`51a3912e94`), `Text#validate()` guards `updateError` behind `!me.clean`.
  - Two bugs remain in `src/form/field/Text.mjs`:
    1. `updateError(value, silent = false)` mutates `me.cls = cls` without `me.silentVdomUpdate = true`, which triggers `afterSetCls()` → `me.update()` immediately before `errorNode.text` and `errorWrapper.removeDom` are updated (and even when `silent = true` is passed). Wrapping the `cls` + `errorWrapper` mutations in `me.silentVdomUpdate = true / false` and updating `me._error = value` makes `updateError(value, true)` genuinely silent and `updateError(value, false)` a single atomic VDOM update.
    2. In `reset(value = null)`, restoring `me.clean = me.originalConfig.clean ?? true`, clearing `me.updateError(null, true)` silently before `super.reset(value)`, and calling `me.validate(); me.update()` only when `me.value === oldValue` (when `super.reset(value)` did not trigger `afterSetValue`) ensures `reset()` triggers **at most one** `me.update()` call and fires the `change` event at the very end via `Field#afterSetValue`'s `createSequence` after the VDOM update has completed.
- **Core-Idiom Pre-Flight (`§9.6`):** Read `src/core/Base.mjs`, `src/Neo.mjs`, and `src/state/Provider.mjs`.

#### Contract Ledger
| Surface | Owner / File | Change | Consumer / Verification |
|---|---|---|---|
| `Neo.form.field.Text#updateError(value, silent=false)` | `src/form/field/Text.mjs` | Batch `me.cls = cls` and `.neo-textfield-error-wrapper` VDOM mutations under `me.silentVdomUpdate = true / false` and sync `me._error = value` before `!silent && me.update()` | `test/playwright/unit/form/field/TextReset.spec.mjs` |
| `Neo.form.field.Text#reset(value=null)` | `src/form/field/Text.mjs` | Restore `me.clean = me.originalConfig.clean ?? true`, clear `updateError(null, true)` silently before `super.reset(value)`, and flush a single `me.update()` when `me.value === oldValue` so `reset()` emits at most one VDOM update and fires `change` at the end | `test/playwright/unit/form/field/TextReset.spec.mjs` |

#### Ticket Reality Classification
- **Ticket age:** `createdAt: 2022-08-01T12:00:14Z`, `updatedAt: 2026-10-09T19:49:51Z`
- **Bot stale-band:** `post-stale-with-exemption` (reopened and re-validated in `#19489` set C by `@neo-opus-grace` on `2026-10-09`)
- **Currency / successor-risk evidence:** Verified live `src/form/field/Text.mjs` (`L942–965`, `L1604–1668`); no open/closed duplicate or superseding PR resolves the double VDOM update in `reset()` / `updateError()`.
- **Verdict:** `valid-as-written` (sharpened to leverage reference-counted `silentVdomUpdate` from `#4305` and `createSequence` on `afterSetValue`).

— Maryam 🧭

- 2026-11-03T04:03:53Z @neo-gemini-maryam cross-referenced by PR #20206
- 2026-11-03T04:45:59Z @neo-opus-vega cross-referenced by #20211
- 2026-11-03T05:05:59Z @tobiu referenced in commit `71ab46e` - "fix(form): batch Text.reset() and updateError() into a single vdom update (#3335) (#20206)"
- 2026-11-03T05:06:00Z @tobiu closed this issue

