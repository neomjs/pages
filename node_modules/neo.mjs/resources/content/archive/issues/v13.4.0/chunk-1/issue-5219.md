---
id: 5219
title: 'form.field.Date: Accessibility enhancements'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
  - accessibility
assignees:
  - neo-gemini-maryam
createdAt: '2024-02-13T08:35:50Z'
updatedAt: '2026-11-05T21:23:16Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5219'
author: tobiu
commentsCount: 5
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
closedAt: '2026-11-05T21:23:16Z'
---
# form.field.Date: Accessibility enhancements

there are quite some official specs for this widget, which we should honor.

related content (example link):
https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/

---

## Contract Ledger

### Problem / Goal
Bring `Neo.form.field.Date`, `Neo.form.field.trigger.Date`, `Neo.component.DateSelector`, and `Neo.selection.DateSelectorModel` into alignment with the W3C WAI-ARIA Date Picker Dialog and Grid patterns while honoring `Neo.form.field.Picker`'s non-modal popup lifecycle.

### Touch Set
- `src/form/field/Date.mjs`
- `src/form/field/trigger/Date.mjs`
- `src/component/DateSelector.mjs`
- `src/selection/DateSelectorModel.mjs`
- `src/main/DomEvents.mjs`
- `test/playwright/unit/form/field/DateAria.spec.mjs`
- `test/playwright/component/form/field/Date.spec.mjs`

### Acceptance Criteria
1. **Input, Trigger & Non-Modal Dialog Contract (`DateField` & `DateTrigger`):**
   - `DateField`'s `<input>` exposes `aria-haspopup="dialog"`, `aria-expanded="false"`/`"true"` synchronized in `onPickerHiddenChange`, and `aria-controls` pointing to `getPickerId()`.
   - `DateTrigger` exposes `role="button"`, `tabIndex: 0`, `aria-label="Choose Date"`, `aria-haspopup="dialog"`, sets `parentComponent = field` so focus remains inside `DateField` when tabbing from `<input>` to `DateTrigger`, and activates `onTriggerClick` on `Enter` and `Space` (`data.cancelBubble = true`).
   - `DateField#createPicker` configures the floating picker container with `role="dialog"` and `aria-label="Choose Date"` without `aria-modal="true"` (matching its non-modal outside-pointer and `focusLeave` dismissal contract), sets `picker.focusOnMount = false`, and focuses the active/selected day `gridcell` via `onPickerMounted -> dateSelector.focusCurrentItem()`.
2. **Calendar Header, Month Navigation Buttons & Live Region (`DateSelector`):**
   - Previous/Next month controls (`.neo-prev-button`, `.neo-next-button`) expose `role="button"`, `tabIndex: 0`, and `aria-label="Previous Month"` / `"Next Month"`, and activate month navigation on `Enter` and `Space` (`data.cancelBubble = true`) while preserving button focus across month transitions.
   - `DomEvents#onKeyDown` suppresses default page scrolling when `Space` is pressed on `.neo-field-trigger` or `.neo-nav-button`.
   - The month/year header container (`${id}__header-center`) exposes `aria-live="polite"` and labels the calendar grid via `aria-labelledby`.
3. **Calendar Grid, Weekday Column Headers & Roving `gridcell` States (`DateSelector` & `DateSelectorModel`):**
   - `DateSelector`'s center content element exposes `role="grid"` and `aria-labelledby="${id}__header-center"`.
   - Weekday header cells expose `role="row"` and `role="columnheader"` with full localized weekday names in `aria-label` (via `Intl.DateTimeFormat(locale, {weekday: 'long'})`) in both `createDayNamesRow()` and `updateHeaderDays()`.
   - Day rows expose `role="row"` and day cells expose `role="gridcell"` with full localized date `aria-label`s (`dateStyle: 'full'`), `aria-selected="true"` on the selected date, `aria-current="date"` on today's cell, `aria-disabled="true"` on disabled/overflow cells, and roving `tabIndex: 0` on the active/selected day cell (`-1` on other in-month day cells) so `Tab` / `Shift+Tab` traverses cleanly between the month navigation buttons and the active day cell.
4. **Verification:**
   - Unit coverage in `test/playwright/unit/form/field/DateAria.spec.mjs` and real-browser component coverage in `test/playwright/component/form/field/Date.spec.mjs`.

## Timeline

- 2024-02-13T08:35:50Z @tobiu added the `enhancement` label
- 2024-02-13T08:35:50Z @tobiu assigned to @ExtAnimal
- 2024-02-13T08:37:02Z @tobiu cross-referenced by #5217
- 2024-02-14T10:22:18Z @tobiu cross-referenced by #5223
### @github-actions - 2024-08-29T02:25:45Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:25:45Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:28:25Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:28:26Z @github-actions closed this issue
- 2026-10-09T20:52:56Z @neo-opus-grace reopened this issue
- 2026-10-09T20:52:58Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:53:00Z

#19489 set C · T7 · Grace · 2026-10-09: **reopened, valid but later.** `component.DateSelector` still carries no ARIA roles or attributes (compare the WAI-ARIA datepicker dialog pattern).

- 2026-10-09T21:02:53Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:42Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. Neither `component.DateSelector` nor `form.field.Date` carries a `role` or `aria-*` attribute: zero matches in either file.

**Verdict: holds.** The WAI-ARIA date picker dialog pattern linked in the body is the spec.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T19:43:35Z @neo-gemini-maryam added the `ai` label
- 2026-11-05T19:43:35Z @neo-gemini-maryam added the `core` label
- 2026-11-05T19:43:35Z @neo-gemini-maryam added the `accessibility` label
### @neo-gemini-maryam - 2026-11-05T19:43:39Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core`, `accessibility`. Stage retrospective passed.

Picking up per 7-day rule; previous assignee @ExtAnimal; last qualifying activity 2024-02-13T08:35:50Z.

### Intake Scope & WAI-ARIA Date Picker Dialog Alignment
- **`Neo.form.field.Date` (`src/form/field/Date.mjs`) & `Neo.form.field.trigger.Date` (`src/form/field/trigger/Date.mjs`):**
  - Input element carries `aria-haspopup: 'dialog'`, `aria-controls` pointing to the picker container id, and `aria-expanded` synchronized with `onPickerHiddenChange` (`false` when closed, `true` when open).
  - Floating picker container carries `role: 'dialog'`, `aria-modal: true`, and `aria-label: 'Choose Date'`.
  - `DateTrigger` carries `role: 'button'`, `aria-label: 'Choose Date'`, and `aria-haspopup: 'dialog'`.
- **`Neo.component.DateSelector` (`src/component/DateSelector.mjs`):**
  - Header prev/next navigation buttons carry `role: 'button'` and `aria-label: 'Previous Month'` / `'Next Month'`.
  - Header center region (`month` + `year`) carries deterministic id (`${id}__header-center`) and `aria-live: 'polite'`.
  - Calendar day-view grid (`.neo-dateselector-content`) carries `role: 'grid'` and `aria-labelledby: ${id}__header-center` across initial render and month/year transitions.
  - Header and week rows (`.neo-row`) carry `role: 'row'`.
  - Weekday header cells carry `role: 'columnheader'` and `abbr` with the full localized weekday name (`weekday: 'long'`), updated dynamically in `updateHeaderDays`.
  - Day cells carry `role: 'gridcell'`, full localized date `aria-label`, `aria-disabled: true` when `.neo-disabled`, `aria-current: 'date'` on today's cell, and `aria-selected: true` on the committed selected date cell (matching `Neo.selection.Model#annotateItem` / `deannotateItem`).

Authored by Maryam (Gemini 4 Argon, Antigravity). Session `70151411-91ec-4496-b8f0-ea3b31ddb60b`. 🧭

- 2026-11-05T19:43:54Z @neo-gemini-maryam unassigned from @ExtAnimal
- 2026-11-05T19:44:07Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-05T19:56:39Z @neo-gemini-maryam cross-referenced by PR #20383

