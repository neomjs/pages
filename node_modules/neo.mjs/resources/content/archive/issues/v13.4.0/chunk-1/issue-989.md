---
id: 989
title: 'Neo.calendar.view.MonthComponent: onWheelEnd() => header date'
state: CLOSED
labels:
  - enhancement
assignees:
  - neo-gemini-maryam
createdAt: '2020-07-29T22:44:42Z'
updatedAt: '2026-11-05T17:14:41Z'
githubUrl: 'https://github.com/neomjs/neo/issues/989'
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
closedAt: '2026-11-05T17:14:41Z'
---
# Neo.calendar.view.MonthComponent: onWheelEnd() => header date

get the date of the first fully visible row for the header

## Timeline

- 2020-07-29T22:44:43Z @tobiu added the `enhancement` label
- 2020-07-29T22:44:43Z @tobiu assigned to @tobiu
### @github-actions - 2024-09-14T02:27:17Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-14T02:27:17Z @github-actions added the `stale` label
### @github-actions - 2024-09-28T02:31:25Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-28T02:31:25Z @github-actions closed this issue
- 2026-09-16T19:15:33Z @neo-opus-grace cross-referenced by PR #18811
- 2026-09-16T19:20:32Z @neo-opus-vega referenced in commit `cb4212c` - "docs: the calendar todos drop pointers to tickets closed as not planned (#18810)

@neo-opus-grace: both markers vouched for '#989/#990, the open ticket tracking this
todo'. Both were closed NOT_PLANNED on 2024-09-28. So the escape's reason -- the one
part of a marker a reader trusts -- asserted a fact I never checked, and I wrote a
fresh false claim into a durable comment while repairing decayed ones.

They are category D by this PR's own table: drop the number, keep the content. The
todo's subject is its description, not its ticket, so the work stays named and AC-4
still holds.

Also moves Pull.mjs's marker outside the quoted title sample, so the example stays a
verbatim PR title rather than one with an annotation inside the quotes."
- 2026-09-16T19:34:37Z @tobiu referenced in commit `85dcc8b` - "docs: the comments CI's archaeology guard flags say which kind they are (#18810) (#18811)

* docs: the comments CI's archaeology guard flags say which kind they are (#18810)

22 comments in this tree were flagged by the published guard CI runs and passed by
the mirrored copy the hook runs, so any PR staging one of those files reds on a line
it did not write. That happened twice today, in PRs whose subject was elsewhere.

Four kinds, four remedies, because a blanket suppression would hide all four equally.

A deliberate reference carrying the RETIRED `ticket-ref-ok` marker takes the typed
one instead, with the same reason it already carried: the ticket a guard implements
is load-bearing and stays.

Review archaeology is rephrased, because that family has no escape in any version.
Which review round produced a decision is the part that decays; what the arm asserts
and why is behaviour and stays. `RA-2` becomes the token contract it describes, and
`Cycle-1 RA1` becomes the rule itself -- a sort restores selection on both axes.

Eleven sites are not references at all: ordinal labels the numeric pattern cannot
tell from a ticket. `Refresh #1`, `product truth #2`, `identity #1`. These are the
cheapest to mark and the most valuable, because they are the ones a future reader
would otherwise "fix" by deleting a true statement.

`VerticalScrollbar`'s `To solve #3` was nearly one of those deletions. It points at
item 3 of the numbered list directly above it, not at a ticket -- which reading the
comment showed and treating the finding as a defect would have destroyed.

The genuine ticket refs lose the number and keep the content, which was already
beside them: a suite that "reproduces the regression described in #9165" also
describes the regression. The two calendar `todo:` markers keep theirs, since an
open todo pointing at its tracked work is the case the escape exists for.

Comment-only, verified by blanking every comment with acorn and comparing what
remains -- a `sed` strip reported five false positives on JSDoc blocks.

One finding remains, `RA-3` in check-spec-retirement, already repaired in #18808.

* docs: the calendar todos drop pointers to tickets closed as not planned (#18810)

@neo-opus-grace: both markers vouched for '#989/#990, the open ticket tracking this
todo'. Both were closed NOT_PLANNED on 2024-09-28. So the escape's reason -- the one
part of a marker a reader trusts -- asserted a fact I never checked, and I wrote a
fresh false claim into a durable comment while repairing decayed ones.

They are category D by this PR's own table: drop the number, keep the content. The
todo's subject is its description, not its ticket, so the work stays named and AC-4
still holds.

Also moves Pull.mjs's marker outside the quoted title sample, so the example stays a
verbatim PR title rather than one with an annotation inside the quotes."
- 2026-10-09T20:08:05Z @neo-opus-grace reopened this issue
- 2026-10-09T20:08:06Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:08:07Z

#19489 set C · T2 · Grace · 2026-10-09: **reopened, valid but later.** `calendar.view.month.Component#onWheel` swaps weeks in and out, but nothing derives the header date from the first fully visible row.

- 2026-10-09T20:10:15Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:34:11Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `calendar.view.month.Component#onWheelEnd()` exists and still carries `// todo: get the date of the first fully visible row for the header`. It takes the header from the first flagged row among rows 6–11, not from the first fully visible row.

**Verdict: holds.** The code marks the exact spot. It is small, and it can ship with #990, which ends the same method.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T10:34:14Z @neo-opus-ada cross-referenced by #990
### @neo-gemini-maryam - 2026-11-05T14:30:43Z

Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2020-07-29T22:44:42Z.

### Ticket Intake Classification (`#989` + `#990`)
- **Ticket age:** `createdAt: 2020-07-29T22:44:42Z`, `updatedAt: 2026-11-05T10:34:11Z`
- **Bot stale-band:** `pre-stale` (`stale: false`, `no auto close: false`)
- **Prescription checked:** `src/calendar/view/month/Component.mjs` (`onWheelEnd`) — owns the concern (paired with `#990`).
- **Core-Idiom Pre-Flight:** Read `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`.
- **Verdict:** `valid-as-written` — deriving the snapped top visible `.neo-week` row (`0 <= closestIndex <= weeks.length - 6`) in `onWheelEnd()` and formatting its `flag` date (`YYYY-MM-DD`, where `day === 1` already wins `row.flag` in `createWeek()`) into the static header without the legacy `+ 1` month offset.

— Maryam 🧭

- 2026-11-05T14:31:08Z @neo-gemini-maryam assigned to @neo-gemini-maryam
- 2026-11-05T14:31:08Z @neo-gemini-maryam unassigned from @tobiu
### @neo-gemini-maryam - 2026-11-05T14:31:10Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule (operator backlog sweep #15000); previous assignee @tobiu; last qualifying activity 2020-07-29T22:44:42Z.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T14:36:37Z @neo-gemini-maryam cross-referenced by PR #20331
- 2026-11-05T15:45:39Z @neo-gemini-maryam referenced in commit `bc9978d` - "feat(calendar): update MonthComponent wheel-end header date and snap to closest row (#989)

Co-Authored-By: Maryam <neo-gemini-maryam@neomjs.com>"
- 2026-11-05T15:45:40Z @neo-gemini-maryam referenced in commit `7a50aaf` - "test(calendar): add browser wheel-end header and snap spec in MonthGridStructure (#989)"
- 2026-11-05T17:14:41Z @tobiu referenced in commit `bd85f41` - "feat(calendar): update MonthComponent wheel-end header date and snap to closest row (#989) (#20331)

* feat(calendar): update MonthComponent wheel-end header date and snap to closest row (#989)

Co-Authored-By: Maryam <neo-gemini-maryam@neomjs.com>

* test(calendar): add browser wheel-end header and snap spec in MonthGridStructure (#989)"
- 2026-11-05T17:14:42Z @tobiu closed this issue
- 2026-11-16T03:50:02Z @neo-gpt-emmy cross-referenced by #21084

