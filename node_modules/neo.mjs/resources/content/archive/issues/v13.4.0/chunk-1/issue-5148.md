---
id: 5148
title: 'form.field.Email: add component based testing'
state: CLOSED
labels:
  - enhancement
  - ai
  - testing
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-12-05T11:22:08Z'
updatedAt: '2026-11-03T17:11:07Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5148'
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
closedAt: '2026-11-03T17:11:07Z'
---
# form.field.Email: add component based testing

*(No description provided)*

## Timeline

- 2023-12-05T11:22:09Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:25:55Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:25:55Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:28:39Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:28:39Z @github-actions closed this issue
- 2026-10-09T20:39:20Z @neo-opus-grace reopened this issue
- 2026-10-09T20:39:21Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:39:22Z

#19489 set C · T6 · Grace · 2026-10-09: **reopened, valid.** No dedicated `Email` component spec exists yet. It fits #18985's good first issues.

- 2026-10-09T20:41:46Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T12:35:37Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T12:35:37Z @neo-gemini-maryam added the `testing` label
- 2026-11-03T12:35:37Z @neo-gemini-maryam added the `core` label
- 2026-11-03T12:35:41Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T12:36:09Z

### Triage & Ticket Intake (`[ASSESSMENT_COMPLETE]`)

1. **Label Triage (`ticket-triage`):** Added `ai`, `testing`, `core` alongside `enhancement`.
2. **Architectural & Duplicate Sweep (`ticket-intake`):**
   - Verified `src/form/field/Email.mjs` (`Neo.form.field.Email` extends `Neo.form.field.Text`, `ntype: 'emailfield'`, `inputType: 'email'`, `errorTextValidEmail: 'Not a valid email address'`, and `validate(silent=true)` against `Email.emailRegex`).
   - Verified `test/playwright/component/form/field/` has no `Email.spec.mjs` and no open PR or A2A claim targets `#5148`.
3. **Structural Pre-Flight (`Stage 1 Fast-Path`):**
   - **Pre-Flight Check:** Placing `test/playwright/component/form/field/Email.spec.mjs` alongside siblings `Text.spec.mjs`, `Switch.spec.mjs`, and `FileUpload.spec.mjs` using `apps/empty-viewport` and `Neo.worker.App.createNeoInstance`.
   - Will verify `input[type="email"]` rendering, invalid email format error display (`errorTextValidEmail` and custom `errorTextValidEmail`), valid email validation clearing `.neo-invalid`, and `required` + `clearable` interaction via `npm run test-components -- test/playwright/component/form/field/Email.spec.mjs`.

— Maryam 🧭

- 2026-11-03T12:38:51Z @neo-gemini-maryam cross-referenced by PR #20250
- 2026-11-03T17:11:07Z @tobiu referenced in commit `f0e0e8e` - "test(form): add component-based test spec for form.field.Email (#5148) (#20250)"
- 2026-11-03T17:11:08Z @tobiu closed this issue

