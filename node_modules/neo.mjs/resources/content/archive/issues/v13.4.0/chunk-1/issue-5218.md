---
id: 5218
title: 'component.DateSelector: we need a new widget to pick the month & year more easily'
state: CLOSED
labels:
  - enhancement
  - design
  - ai
  - accessibility
assignees:
  - neo-opus-ada
createdAt: '2024-02-13T08:20:55Z'
updatedAt: '2026-11-06T22:17:49Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5218'
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
closedAt: '2026-11-06T22:17:49Z'
---
# component.DateSelector: we need a new widget to pick the month & year more easily

- clicking on the header (year) should show the new widget
- it could slide in animated from the top
- we could use 2 lists => left side months, right side years

open for other ideas, but we need the functionality.

---

## Contract Ledger (intake-derived, claimer: @neo-opus-ada, 2026-11-06)

| Target Surface | Source of Authority | Proposed Behavior | Fallback / Edge Case | Docs | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Neo.component.MonthYearSelector` (new, `src/component/MonthYearSelector.mjs`) | this ticket | Two lists: 12 months, and 10 years per page with previous/next page buttons, plus OK and Cancel. A click or an arrow key moves the pending month or year. OK or Enter fires `select` with `{month, year}`; Cancel or Escape fires `cancel`. | Months and years outside `minValue` / `maxValue` are disabled and cannot be picked. | JSDoc | new unit spec `unit/component/MonthYearSelector.spec.mjs` |
| `Neo.component.DateSelector` header label (existing: `.neo-center-region`, id `${id}__header-center`, `aria-live: polite`) | this ticket | New reactive config `useMonthYearSelector_` (default `true`): the label becomes a button (`role=button`, `tabIndex 0`, `aria-expanded`, `aria-controls`). A click, Enter or Space slides the selector in from the top, over the day view. `select` sets `value` to the same day in the chosen month and year, through the path the previous/next buttons use. Either outcome closes the selector and puts focus back on the label. | The day is clamped to the month's length and to `minValue` / `maxValue`. `useMonthYearSelector: false` keeps today's static label. `useAnimations: false` skips the slide. | JSDoc | `component/component/DateSelector.spec.mjs`: red on dev, green at head |
| Keys inside the open selector | `Neo.util.KeyNavigation#onKeyDown` runs every matching handler of a component | Arrow keys do not move the day grid (`DateSelectorModel`). Escape closes only the selector, not `form.field.Date`'s picker (`onContainerKeyDownEscape`). | Keys the selector does not handle (Tab) behave as today. | none | same component spec |
| `form.field.Date` (consumer of DateSelector's `change`) | existing `DateSelector#afterSetValue` | Unchanged: a selector choice reaches the field as a `change`, like a header-button click. | n/a | none | existing `component/form/field/Date.spec.mjs` stays green |
| Tab order inside DateSelector (consumer: `form.field.Date`'s picker dialog, #5219) | this ticket; `Neo.main.DomAccess#trapFocus` (as `dialog.Base` uses it) | The label sits between Previous Month and Next Month in the Tab order. While the selector is open, Tab and Shift+Tab wrap inside it. | n/a | none | the Tab/Shift+Tab test in `component/form/field/Date.spec.mjs` gains the label |

## Timeline

- 2024-02-13T08:20:55Z @tobiu added the `enhancement` label
- 2024-02-13T08:20:55Z @tobiu assigned to @ExtAnimal
- 2024-02-14T10:22:18Z @tobiu cross-referenced by #5223
### @github-actions - 2024-08-29T02:25:46Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:25:46Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:28:27Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:28:27Z @github-actions closed this issue
- 2026-10-09T20:52:51Z @neo-opus-grace reopened this issue
- 2026-10-09T20:52:53Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:52:55Z

#19489 set C · T7 · Grace · 2026-10-09: **reopened, valid but later.** `DateSelector` still has only its header year stepping (`updateHeaderYear`); there is no month/year picker widget.

- 2026-10-09T21:02:53Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:39Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `component.DateSelector` still only steps the header year (`updateHeaderYear()`), and there is no month/year picker. #47's `stayInMonth` (11-03) does not change that.

**Verdict: holds.** The body's UX is enough to build from: clicking the header slides in two lists, months and years.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-06T19:57:30Z @neo-opus-ada added the `ai` label
- 2026-11-06T19:57:30Z @neo-opus-ada added the `design` label
- 2026-11-06T19:57:30Z @neo-opus-ada added the `accessibility` label
### @neo-opus-ada - 2026-11-06T19:57:33Z

Picking up per 7-day rule; previous assignee @ExtAnimal; last qualifying activity 2024-02-13T08:20:55Z (the assignment itself, with no comment since). Nige, if you are still on this, say so and I'll step back.

**Intake, 2026-11-06**, at dev `d9eb21fa5f`. **Verdict: valid-as-written.**
- `component.DateSelector` still changes month and year only through the header's previous/next buttons and the mouse wheel. Nothing in the org picks a month or year directly.
- `date.SelectorContainer` (#5384, 2024) never replaced the component. `form.field.Date` and `calendar.view.MainContainer` both use `component.DateSelector`, so the widget goes there.

**Shape:** a new `Neo.component.MonthYearSelector`, embedded in DateSelector as a child component, the way `table.header.Button` embeds its `filterField`. It has to be its own component because of how keys are dispatched. `KeyNavigation` runs every matching key handler on a component. If the panel were plain vdom inside DateSelector, an arrow key in it would also move the day grid, and Escape would also close `form.field.Date`'s picker. As a child component, the panel handles its own keys and stops them from reaching DateSelector.

The contract is in the body's Contract Ledger.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-06T19:57:35Z @neo-opus-ada assigned to @neo-opus-ada
- 2026-11-06T19:57:35Z @neo-opus-ada unassigned from @ExtAnimal
### @neo-opus-ada - 2026-11-06T19:57:36Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@ExtAnimal`
**New assignees:** `neo-opus-ada`
**Reason:** 7-day rule: ExtAnimal assigned 2024-02-13T08:20:55Z with no activity since; attribution comment posted on #5218

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-06T20:17:50Z @neo-opus-ada cross-referenced by PR #20483
- 2026-11-06T20:50:28Z @neo-opus-ada referenced in commit `3120ba3` - "chore(docs): register MonthYearSelector in the class hierarchy (#5218)"
- 2026-11-06T21:18:18Z @neo-opus-ada referenced in commit `7dffe13` - "fix(component): MonthYearSelector arrows from the focused year, bounds clamp the pair (#5218)

Arrow keys now move from the focused option. After a page turn the focused
year is not the pending one, and moving from the pending value jumped back
to its page.

A single clampPair() keeps the pending month and year inside minValue /
maxValue on every change of month, year or bounds, so OK only ever
confirms an allowed pair. A focus inside the selector follows the moved
month. It replaces clampMonth(), which only covered a year change."
- 2026-11-06T21:38:12Z @neo-opus-ada cross-referenced by #20489
- 2026-11-06T22:17:49Z @tobiu referenced in commit `f12b367` - "feat(component): month and year selector for DateSelector (#5218) (#20483)

* feat(component): month and year selector for DateSelector (#5218)

DateSelector's header label is now a button that opens a new
Neo.component.MonthYearSelector over the day view: twelve months and a
page of ten years, picked by click or arrow keys, confirmed with OK or
Enter, dismissed with Cancel or Escape. The pick moves the value the way
the previous / next month buttons do.

The selector is a child component, so the keys it handles stop there:
Escape no longer reaches form.field.Date's picker, and the arrows no
longer reach the day grid. useMonthYearSelector: false keeps the plain
label.

* chore(docs): register MonthYearSelector in the class hierarchy (#5218)

* fix(component): MonthYearSelector arrows from the focused year, bounds clamp the pair (#5218)

Arrow keys now move from the focused option. After a page turn the focused
year is not the pending one, and moving from the pending value jumped back
to its page.

A single clampPair() keeps the pending month and year inside minValue /
maxValue on every change of month, year or bounds, so OK only ever
confirms an allowed pair. A focus inside the selector follows the moved
month. It replaces clampMonth(), which only covered a year change."
- 2026-11-06T22:17:49Z @tobiu closed this issue

