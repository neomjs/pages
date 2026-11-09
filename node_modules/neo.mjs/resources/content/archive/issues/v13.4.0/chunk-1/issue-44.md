---
id: 44
title: 'component.DateSelector: keynav & select'
state: CLOSED
labels:
  - enhancement
  - ai
  - accessibility
assignees:
  - neo-gpt-euclid
createdAt: '2019-11-18T01:11:11Z'
updatedAt: '2026-11-05T14:26:49Z'
githubUrl: 'https://github.com/neomjs/neo/issues/44'
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
closedAt: '2026-11-05T14:24:57Z'
---
# component.DateSelector: keynav & select

(optional) mode to not select when using the arrow keys. apply a different cls (similar the today cls) and select on enter.

config: selectOnNavigate sounds good to me.

## Implementation intake — Euclid, 2026-11-05

Valid-as-written outcome; the optional navigation policy belongs beside `stayInMonth` / `stayInColumn` in `src/selection/DateSelectorModel.mjs`. At intake, arrows called `select()` unconditionally. Existing `component.DateSelector` owns the displayed month, value, cell VDOM and transition settlement. Default behavior remains select-on-navigation; opting out must keep the committed value until Enter (or the existing pointer selection path).

| Surface / owner | Contract | Evidence / initial state |
| --- | --- | --- |
| `DateSelectorModel.selectOnNavigate` | Optional boolean, default true; false moves a separate day highlight without changing the committed selection/value. Serialized with the model's other navigation configs. | Current config absent; both arrow paths select unconditionally. Unit default and opt-out controls required. |
| `DateSelectorModel` arrow / Enter handlers | Repeated arrows advance from the navigation position; Enter commits that day through the existing selection path. Preserve `stayInMonth` and `stayInColumn`. | Opt-out journey currently fails; test row/column wrapping and adjacent month/year navigation. |
| `DateSelector` cell VDOM / SCSS | Navigation has a distinct visible class while the committed selected day remains identifiable; repainting a month preserves the two meanings. | Current VDOM marks only selected/today state; real-browser assertions required. |
| `DateSelector.currentDate` / transition settlement | Browsing may show another month without committing it. After a settled animation, keyboard focus belongs to the navigated day unless the user has left. | Prior #47 focus regression informs the animated boundary falsifier. |
| `form.field.Date` consumer | Optional picker navigation does not write the field or close the picker before commitment; existing default behavior remains. | Consumer/browser control required. |
| `DateSelectorModel.navigationCls` / `navigationId` | The configurable class defaults to `neo-navigated`; the protected cursor is uncommitted and is not serialized. | Unit and browser checks distinguish the outline from the committed selection. |
| `DateSelector.navigateToDate()` / `selectDate()` | Existing view owns queued display/focus and the shared Enter/pointer commitment path. | Animated queued-year, replacement and null-field commitment controls pass. |

Source and ownership checked at merged dev `408ff47e2a012aabe19b076317eb35c986cf4d22`; no open blocker or matching open PR found. Recent merged #20247 owns month crossing, #19447 owns deferred day-view rebuilding, and #20305 owns per-window focus cleanup; none delivers this option. Memory prior art `c2014461-cc27-4977-b90b-7f8c2597828b` records the settled boundary-focus falsifier. The graph pre-brief lacks node `neomjs/neo#44`; live GitHub/source supply the intake evidence.

Created 2019-11-18; updated 2026-11-05 before pickup. Current automation marks stale after 90 inactive days and never auto-closes; neither `stale` nor `no auto close` is present. Triaged per `ticket-triage`: retain enhancement, add existing accessibility and ai labels. No ADR or service-boundary change, new user obligation, or new ticket is proposed. Original author text is preserved.


### Implementation handoff — 2026-11-05

Implemented in [PR #20316](https://github.com/neomjs/neo/pull/20316), head `cc1bc1c719c8346ffc1a9bb572f584aef5caffa2`. Current full local units passed 5,835 with 2 skipped; current real-browser component journeys passed 14/14, including default controls, opt-out wrapping, queued animated year crossing, external focus, replacement and null date-field commitment. The browser run also reproduced the existing `hidePickerOnSelect` owner mismatch for pointer and Enter; both now use `Picker.hidePicker()` and preserve its retained hidden container. The original default-false dismissal policy remains.

A +14 probe reproduced a shared date-only boundary failure, including the old default controls: UTC noon became the next local day. `DateSelector.dateFromValue()` now owns local-noon calendar construction for the display and cursor; the field's separate submission conversion remains unchanged. Current timezone units pass 19/19 at +14 and −11, and browser UTC-instant reads prove both real worker timezone contexts. The final full-unit rerun passed 5,835 with 2 skipped using the normal invocation. A diagnostic JSON-output setting had interfered with nested CLI collection in the prior run; no source fix was needed for that instrument issue.

CI passed at `cc1bc1c719c8346ffc1a9bb572f584aef5caffa2`, including all ten required baseline contexts and the unit, timezone, component, Engine and Brain jobs. Julia approved that exact head with no required actions in [review 5786373204](https://github.com/neomjs/neo/pull/20316#pullrequestreview-5786373204); no reviewer requests remained. The operator merged PR #20316 on 2026-11-05 as `4a2706499f276d11672121f4e299dfb9170fd7fb`, and #44 closed automatically. The outcome is delivered on `dev`; release or deployed-consumer adoption is not asserted.



## Timeline

- 2019-11-18T01:11:11Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-15T02:37:10Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:11Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:55Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:55Z @github-actions closed this issue
- 2026-09-08T07:51:41Z @neo-opus-grace cross-referenced by #18465
### @neo-opus-grace - 2026-10-09T20:00:17Z

#19489 set C · T1 · Grace · 2026-10-09: **reopened, valid but later.** `DateSelectorModel` still selects on every arrow key (`onNavKeyColumn` / `onNavKeyRow` call `select()` then `focus()`). The navigate-then-Enter mode (`selectOnNavigate`) does not exist.

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T20:09:43Z @neo-opus-grace cross-referenced by #963
- 2026-10-15T17:01:44Z @neo-opus-ada cross-referenced by PR #19761
- 2026-11-02T18:13:46Z @neo-opus-vega cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:29Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `selection.DateSelectorModel` still selects on every arrow key, because `onNavKeyColumn()` and `onNavKeyRow()` both end in `me.select(id)`. The `stayInMonth` config that #47 added on 11-03 (9889010e11) changes where navigation goes, not whether it selects. There is no `selectOnNavigate`.

**Verdict: holds.** The body's design is still the shape: a navigation cls like the today cls, and select on Enter.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T12:47:48Z @neo-gpt-euclid cross-referenced by PR #20316

