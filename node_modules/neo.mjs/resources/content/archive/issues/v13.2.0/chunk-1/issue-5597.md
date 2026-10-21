---
id: 5597
title: 'form.field.Time: adjust the internal logic to better honor the new separation of value & inputValue'
state: CLOSED
labels:
  - enhancement
  - no auto close
assignees:
  - neo-opus-grace
createdAt: '2024-07-20T18:58:45Z'
updatedAt: '2026-09-14T19:19:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5597'
author: tobiu
commentsCount: 2
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
closedAt: '2026-09-14T19:19:04Z'
---
# form.field.Time: adjust the internal logic to better honor the new separation of value & inputValue

*(No description provided)*

## Timeline

- 2024-07-20T18:58:45Z @tobiu added the `enhancement` label
### @github-actions - 2024-10-19T02:31:19Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-10-19T02:31:19Z @github-actions added the `stale` label
- 2024-10-19T13:41:18Z @tobiu removed the `stale` label
- 2024-10-19T13:41:18Z @tobiu added the `no auto close` label
- 2026-06-23T04:42:22Z @neo-gpt added the `needs-design` label
- 2026-06-23T04:42:22Z @neo-gpt added the `not-code-ready` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
- 2026-09-14T18:21:33Z @neo-opus-grace assigned to @neo-opus-grace
### @neo-opus-grace - 2026-09-14T18:29:00Z

## Intake: `valid-as-written` — and the empty body turned out to hide three concrete defects

Picked up under today's resolve-existing-tickets directive. Assigned to me. **Ledger first, code after** — the order I got wrong on #5621.

**Age / successor-risk.** Filed 2024-07-20, the same day as #5593 ("broken with JS errors", fixed in `4123b8ea36`), as its "do it properly" follow-up. Stale-bot 2024-10-19; `no auto close`. Zero prior PRs; no open PR touches `Time.mjs`. No subclass of `form.field.Time` exists. The value/inputValue split this ticket names is #5303 (2024-03-07). Siblings that actually *define* its hooks are `ComboBox` and `Chip` (`updateValueFromInputValue`/`updateInputValueFromValue`) and `Currency` (`inputValueRenderer`/`inputValueAdjustor`). `Number` defines none, despite the word appearing in it.

### What a scratch probe found, at `dev@f8425236af`

These results come from running unit specs against unchanged source, not from reading it.

| # | behavior | evidence |
|---|---|---|
| 1 | **A list selection reaches no `value` subscriber and no two-way binding.** | Click → a `getConfig('value')` subscriber saw `[]`; a two-way-bound provider kept `'10:00'` while `value` became `'08:15'`. A programmatic `value = '09:00'` reached both. |
| 2 | **Re-selecting the current time fires `change` anyway.** | Three clicks on the selected item → three `change` events, two of them `{value:'08:15', oldValue:'08:15'}`. |
| 3 | **Opening the picker on an empty field throws.** | `value: null` → `onPickerTriggerClick()` → `TypeError: Cannot read properties of null (reading 'isRecord')`. |
| 4 | **An unparseable value throws out of the setter.** | `value = 'abc'` or `inputValue = 'abc'` → `RangeError: Invalid time value`. |

**Why, in the source:**

- **1 and 2 share a root.** `onListItemClick` (`:365`) writes `me._value = value` and then calls `me.afterSetValue(value, oldValue, true)` by hand. A raw backing-field write routes through `Config#setRaw`, which skips both the equality check and `notify()` (`core/Config.mjs:173`). `Neo.mjs:466` only calls `afterSetConfig` — where `component/Abstract.mjs:196` pushes two-way bindings — inside the real setter. The guard `me.value !== value` compares `'08:15'` against the record's display string `'08:15 AM'`, so it never short-circuits.
- **This is not a mistake someone made later.** `_value` and `preventListSelect` date to the first commit, `8ccc8e7d7b` (2019), before Config subscribers, state providers and two-way binding existed. The engine grew observers around a bypass that had nothing to bypass when it was written.
- **3** is `afterSetPickerIsMounted` → `selectCurrentListItem()` → `list.getItemId(me.value)`, and `list/Base#getItemId:729` reads `.isRecord` on its argument. It is reachable in the repo: `calendar/view/settings/GeneralContainer.mjs:174` constructs `endTime` with `value: null`, and every `clearToOriginalValue` field can be cleared.

### Contract Ledger

| Target surface | Source of authority | Proposed behavior | Fallback | Evidence |
|---|---|---|---|---|
| `onListItemClick` | `Time.mjs:365` | assigns `me.value`, inside an instance flag that keeps the clicked item from being re-selected | — | subscriber, two-way and re-click arms |
| `afterSetValue` signature | `Time.mjs:191` (third `preventListSelect` param) | the standard `(value, oldValue)`; reads the flag instead | none needed — `:375` was the only caller | grep: no other caller, no subclass |
| the flag | `ComboBox#programmaticValueChange` (declared class field, JSDoc'd) | same idiom — **not** `ComboBox#preventFiltering`, which is an undeclared ad-hoc property | — | spy arm: a click does not call `selectCurrentListItem` |
| `selectCurrentListItem` | `Time.mjs:408`; `list/Base#getItemId:729` | an empty value deselects and returns | `list/Base` untouched — `getItemId(null)` → `"id__null"` would only move the problem; Time is what knows empty means "no current item" | empty-picker arm |
| `formatTime` | `Time.mjs:322` | unparseable → `null` (an already-legal state: `reset()` sets it) | every valid input unchanged | unparseable arm |
| `change` event | `Text#afterSetValue` | unchanged for a real change; not fired for a no-op re-selection | — | calendar's `EditEventContainer#onTimeFieldChange`, `GeneralContainer#onDataChange` |

### Acceptance Criteria

- [ ] AC-1 A list selection assigns `value` through the reactive setter: `value` subscribers and two-way bindings receive it.
- [ ] AC-2 Re-selecting the current time fires no `change`.
- [ ] AC-3 A list click still does not re-select or re-focus the item just clicked, and `afterSetValue` is back to the standard two-argument signature.
- [ ] AC-4 Opening the picker on an empty Time field does not throw.
- [ ] AC-5 An unparseable value resolves to `null` instead of throwing.
- [ ] AC-6 Red-first: the AC-1, AC-2, AC-4 and AC-5 arms fail on unchanged source for the stated reason, while their programmatic-set controls pass in both states.
- [ ] AC-7 No regression: `TimeFieldInternalId.spec.mjs` and the unit tier; calendar's `change` listeners keep receiving real changes.

### Out of Scope

- **`Date`-parity validation.** `form.field.Date` keeps invalid text and flags it (`invalidInput` + `errorTextInvalidDate` + a `validate` override). Doing the same for Time is new API, not a repair; AC-5 only stops the crash.
- **Silent coercion.** `formatTime('8')` → `'00:00'`, a quirk of `Date` string parsing. Recorded, not changed.
- **`userChange` on a click.** `ComboBox` does not fire it for a list selection either; parity is kept.
- **Clearing to `null` while the picker is open** is unmeasurable in the unit tier (`Neo.main.DomAccess.align` is absent there). It runs through the same `selectCurrentListItem` guard, so AC-4 covers it by construction — stated, not claimed as tested.

Authored by Grace (Opus 5, Claude Code). Session b43a5b46-c79a-40ce-8eb8-d4eb122f4cd8.


- 2026-09-14T18:36:12Z @neo-opus-grace cross-referenced by PR #18703
- 2026-09-14T19:19:04Z @tobiu referenced in commit `b4f0fd7` - "fix(form): a Time field's list selection goes through the value config, and an empty or unparseable value no longer throws (#5597) (#18703)

`Time#onListItemClick` wrote `me._value = value` and then called `me.afterSetValue(value,
oldValue, true)` by hand. A raw backing-field write routes through `Config#setRaw`, which skips
the equality check and `notify()`, and `afterSetConfig` — where two-way bindings push — only runs
inside the real setter. So a list selection updated the field and fired `change`, while `value`
subscribers and a two-way-bound provider never heard of it. The guard in front of it compared the
formatted value against the record's display string (`'08:15'` vs `'08:15 AM'`), never matched,
and re-picking the current time fired `change` with an unchanged value. The bypass is from the
first commit, written before Config subscribers or state providers existed.

The click now assigns `me.value` inside `preventListSelect`, a declared field in
`ComboBox#programmaticValueChange`'s idiom that keeps the picked item from being re-selected and
re-focused, and `afterSetValue` is back to the standard two-argument signature.

Two crashes on the same value path:

- An empty field threw on opening its picker: `afterSetPickerIsMounted` -> `selectCurrentListItem`
  -> `list.getItemId(null)` reads `.isRecord` on its argument. The calendar example's settings
  panel builds its `endTime` field empty by default (`MainContainerStateProvider` endTime '24:00'
  -> `GeneralContainer` value null), so it was reachable in three clicks. `selectCurrentListItem`
  now deselects and returns for an empty value; `list/Base` is untouched, since an id for "no
  item" would only move the problem.
- An unparseable value threw `RangeError: Invalid time value` out of the setter, through `value`
  and `inputValue` alike. `formatTime` now returns null for a value that does not parse, a state
  the field already holds after `reset()`."
- 2026-09-14T19:19:04Z @tobiu closed this issue

