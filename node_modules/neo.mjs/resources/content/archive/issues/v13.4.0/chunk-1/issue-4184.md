---
id: 4184
title: 'form.Container: setErrors(obj)'
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-03-08T16:20:09Z'
updatedAt: '2026-11-03T02:01:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4184'
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
closedAt: '2026-11-03T02:01:43Z'
---
# form.Container: setErrors(obj)

pass multiple errors inside a tree structure (JSON) with field names and their new error texts.

use case: api calls which return multiple errors.

## Contract Ledger

| Surface | Owner | Consumer | Format / Contract |
|---|---|---|---|
| `Neo.form.Container#setErrors(errors={}, suspendEvents=false)` | `src/form/Container.mjs` | Application controllers, form submit handlers | Async method accepting a flat or nested object mapping field paths/names/ids (including array paths via `Neo.nsWithArrays`) to `String\|null` error messages (or `{error}` config objects); wraps leaves with `Container.adjustTreeLeaves(errors, 'error', fieldPaths)` and applies via `this.setConfigs(errors, suspendEvents)`. |
| `Neo.form.field.Text#externalError` / `afterSetError` / `validate` / `isValid` | `src/form/field/Text.mjs` | `Neo.form.Container#setErrors`, `Neo.form.Container#isValid`, `Neo.form.Container#getFormState` | Two-slot error semantics: `afterSetError` records externally assigned errors in `this.externalError` (and marks `clean = false` when truthy at runtime), `isValid()` always re-runs `this.validate(true)` so `validator` functions reading outside state re-evaluate even when `value` is unchanged, `validate()` falls back to `this.externalError` when client-side validation passes, and changing `value`, calling `reset()`, or passing `error: null` clears `this.externalError`. |

## Timeline

- 2023-03-08T16:20:09Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:27:30Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:31Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:29:26Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:29:27Z @github-actions closed this issue
- 2026-10-09T20:31:35Z @neo-opus-grace reopened this issue
- 2026-10-09T20:31:36Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:31:37Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid but later.** `form.Container` still has no way to set many field errors at once (for example from an API response).

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T01:26:46Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T01:26:46Z @neo-gemini-maryam added the `core` label
- 2026-11-03T01:26:46Z @neo-gemini-maryam added the `testing` label
- 2026-11-03T01:26:53Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T01:26:59Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core`, `testing` (alongside existing `enhancement`). Stage retrospective passed. Self-assigned and proceeding to `ticket-intake`.

### Ticket Intake Classification (`ticket-intake` §0 / §1.8 / §9.6)

- **Ticket age:** `createdAt: 2023-03-08T16:20:09Z`, `updatedAt: 2026-10-09T20:31:37Z` (reopened and validated by `@neo-opus-grace` in `#19489 set C · T5`).
- **Bot stale-band:** `pre-stale` since 2026-10-09 re-triage (`stale: false`, `no auto close: false`).
- **Currency / successor-risk evidence:** Verified live `src/form/Container.mjs` (`setValues`, `setConfigs`, and `Container.adjustTreeLeaves` exist; `setErrors` is still absent) and `src/form/field/Text.mjs` (`error_`, `afterSetError`, `updateError`, `isValid`, `validate`). No open or closed successor PR/ticket implements `setErrors`.
- **ADR successor-risk:** `none`.
- **Core-Idiom Pre-Flight (`§9.6`):** Read `src/core/Base.mjs`, `src/Neo.mjs`, and `src/state/Provider.mjs`.
- **Prescription check (`§0`):** `Prescription checked: src/form/Container.mjs & src/form/field/Text.mjs — own the concern`.
  1. `Neo.form.Container#setErrors(errors={}, suspendEvents=false)` mirrors `setValues(values={}, suspendEvents=false)` by cloning `errors`, wrapping leaf error strings/nulls into `{error: value}` via `Container.adjustTreeLeaves(errors, 'error', fieldPaths)`, and delegating to `await this.setConfigs(errors, suspendEvents)`.
  2. In `Neo.form.field.Text#afterSetError(value, oldValue)`, assigning a non-empty runtime error (`value && oldValue !== undefined`) sets `this.clean = false` so `updateError(value)` immediately updates the field's `.neo-invalid` class and `.neo-textfield-error-wrapper` VDOM even on untouched fields, and `form.getFormState()` reflects `'invalid'`.
  3. In `Neo.form.field.Text#isValid()`, `this.validate(true)` is only invoked when `!this.error`, so an external/API error assigned via `setErrors()` or `field.error = ...` is not wiped out by client-side `validate(true)` before the field's value changes.
- **Verdict:** `valid-as-written` (sharpened with the Contract Ledger below).

### Contract Ledger

| Surface | Owner | Consumer | Format / Contract |
|---|---|---|---|
| `Neo.form.Container#setErrors(errors={}, suspendEvents=false)` | `src/form/Container.mjs` | Application controllers, form submit handlers | Async method accepting a flat or nested object mapping field paths/names/ids (including array paths via `Neo.nsWithArrays`) to `String\|null` error messages (or `{error}` config objects); wraps leaves with `Container.adjustTreeLeaves(errors, 'error', fieldPaths)` and applies via `this.setConfigs(errors, suspendEvents)`. |
| `Neo.form.field.Text#error_` / `afterSetError` / `isValid` | `src/form/field/Text.mjs` | `Neo.form.Container#setErrors`, `Neo.form.Container#isValid`, `Neo.form.Container#getFormState` | Setting a truthy runtime `error` marks `clean = false` and updates `.neo-invalid` + `.neo-textfield-error` VDOM; `isValid()` returns `false` while `this.error` is truthy without overwriting external errors via `validate(true)`, and changing `value` or passing `error: null` clears the error state. |

Authored by Maryam (Gemini 4 Argon, Antigravity). Session `dadd700f-6b16-47b5-b22c-2f57073f86f3`. 🧭

- 2026-11-03T01:30:01Z @neo-gemini-maryam cross-referenced by PR #20204
- 2026-11-03T01:47:24Z @neo-gemini-maryam referenced in commit `b9cb8e8` - "fix(form): separate externalError slot from validate()-computed errors (#4184)"
- 2026-11-03T02:01:43Z @tobiu referenced in commit `d46517c` - "feat(form): add Container.setErrors(errors, suspendEvents) (#4184) (#20204)

* feat(form): add Container.setErrors(errors, suspendEvents) (#4184)

* fix(form): separate externalError slot from validate()-computed errors (#4184)"
- 2026-11-03T02:01:44Z @tobiu closed this issue

