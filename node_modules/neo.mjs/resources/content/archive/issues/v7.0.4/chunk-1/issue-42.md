---
id: 42
title: 'Docs App: useCss4 button'
state: CLOSED
labels:
  - enhancement
assignees: []
createdAt: '2019-11-18T01:08:53Z'
updatedAt: '2024-08-27T20:46:02Z'
githubUrl: 'https://github.com/neomjs/neo/issues/42'
author: tobiu
commentsCount: 0
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
closedAt: '2024-08-27T20:46:02Z'
---
# Docs App: useCss4 button

It would be nice to be able to easily switch between the CSS4 vars themes and the ones not using them.

## Timeline

- 2019-11-18T01:08:53Z @tobiu added the `enhancement` label
- 2024-08-27T20:46:02Z @tobiu closed this issue
- 2026-08-15T23:02:16Z @neo-gpt-euclid cross-referenced by PR #17218
- 2026-08-15T23:22:12Z @neo-opus-grace referenced in commit `0ffb92a` - "fix(ai): the demand bound goes stateless, and covers the update path (#17214)

@neo-gpt drove four bypasses at the exact head; all four are closed here.

The central one is the one I should have caught myself: the COMMENT guard
refused a demand packet only once the family had spent an ordinary
`CHANGES_REQUESTED` round. A family that never chose that enum was never
"post-budget", so it could push demand after demand through COMMENT forever —
the same packet was admitted after zero, one and two prior same-family demand
COMMENTs. The guard rebuilt the loophole it was written to close, one layer up,
because it still bound on review STATE while claiming to bind on demand
SUBSTANCE.

So the rule is now stateless: a managed COMMENT may not raise a new action
packet at all, in any budget state. That is not a stricter rule but the honest
one — a review demanding author action IS a request for changes, and routing it
there is what makes the budget count it. Every fail-open precondition the
budget-scoped version needed (cutover resolution, provable history, a
classifiable reviewer) is gone with it; each was a way to be right about the
demand and admit it anyway.

- `action: update` had no demand guard at all, so both create-side guards were
  walkable: post an admissible review, then edit the demand in. Being stateless
  is what lets the same rule apply there, since that path holds the review's
  state and body but no PR projection. `CHANGES_REQUESTED` is exempt — a packet
  is what that state is for.
- `RA-999: fix the production boundary` under Required Actions was admitted:
  the detector read the measured checkbox population as the whole grammar.
  Measured specimens are evidence about what has been written, not permission
  to narrow the contract to one form.
- `line #42` satisfied the A+FU ownership check, and the positive fixture cited
  this PR's own close target as proof of INDEPENDENT ownership — the
  anti-pattern shipped as its own proof. Both refuse now, with an issue this PR
  does not close as the control.

Existence-of-issue stays out: the admission path resolves identity from a
startup cache specifically so a submission cannot fail for reasons unrelated to
the review, and N tracker lookups per approval reintroduces that."
- 2026-08-16T19:16:49Z @tobiu referenced in commit `9d8d991` - "feat(ai): the review budget reads every action-demand channel, not just one (#17214) (#17218)

* feat(ai): the review budget reads every action-demand channel, not just one (#17214)

`validatePrReviewBudget` was reached from a single branch — `event ===
'REQUEST_CHANGES'` — so a reviewer family that had spent its ordinary round
could keep pushing action demands through `COMMENT` indefinitely, and an
`APPROVE` could demand work while naming nobody to own it.

That is not a predicted loophole. Replaying PR #17103, the budget's own anchor
case: three reviewer-pushed `COMMENTED` rounds carried 2, 1 and 1 unchecked
action items past a machine that recorded one ordinary RC, every one of them
under a `### Required Action(s)` heading.

- `collectDemandedActionItems` scopes detection to that heading. A body-wide
  checkbox scan would read a Micro-Delta verdict block — a list of unchecked
  OPTIONS — as fresh demands, refusing the exact bodies the budget permits.
  Blockquoted carried actions and fenced examples fall out of the line shape.
- `getPostBudgetActionPacketFailure` refuses the PACKET, never the channel: a
  `STILL_OPEN` disposition is required to be `COMMENT`, so a channel-level
  refusal would forbid the round this ticket exists to make terminal. Every
  precondition passes the comment rather than refusing it, because the cost of
  being wrong inverts against the RC path.
- `getApproveFollowUpOwnershipFailure` gives A+FU its first mechanical
  existence; the string appeared nowhere under `ai/`, only in skill prose.
- `resolveFamilyOrdinaryRounds` is shared, so the two paths cannot drift apart
  on what a family's spent round means.

Ten tests, each mutation-verified: disabling either guard, or widening the
detector past the Required Actions section, fails exactly one and no other.

Router bytes -8; the review load path grows 108 B for two contracts a reviewer
previously could not discover.

* fix(ai): the demand bound goes stateless, and covers the update path (#17214)

@neo-gpt drove four bypasses at the exact head; all four are closed here.

The central one is the one I should have caught myself: the COMMENT guard
refused a demand packet only once the family had spent an ordinary
`CHANGES_REQUESTED` round. A family that never chose that enum was never
"post-budget", so it could push demand after demand through COMMENT forever —
the same packet was admitted after zero, one and two prior same-family demand
COMMENTs. The guard rebuilt the loophole it was written to close, one layer up,
because it still bound on review STATE while claiming to bind on demand
SUBSTANCE.

So the rule is now stateless: a managed COMMENT may not raise a new action
packet at all, in any budget state. That is not a stricter rule but the honest
one — a review demanding author action IS a request for changes, and routing it
there is what makes the budget count it. Every fail-open precondition the
budget-scoped version needed (cutover resolution, provable history, a
classifiable reviewer) is gone with it; each was a way to be right about the
demand and admit it anyway.

- `action: update` had no demand guard at all, so both create-side guards were
  walkable: post an admissible review, then edit the demand in. Being stateless
  is what lets the same rule apply there, since that path holds the review's
  state and body but no PR projection. `CHANGES_REQUESTED` is exempt — a packet
  is what that state is for.
- `RA-999: fix the production boundary` under Required Actions was admitted:
  the detector read the measured checkbox population as the whole grammar.
  Measured specimens are evidence about what has been written, not permission
  to narrow the contract to one form.
- `line #42` satisfied the A+FU ownership check, and the positive fixture cited
  this PR's own close target as proof of INDEPENDENT ownership — the
  anti-pattern shipped as its own proof. Both refuse now, with an issue this PR
  does not close as the control.

Existence-of-issue stays out: the admission path resolves identity from a
startup cache specifically so a submission cannot fail for reasons unrelated to
the review, and N tracker lookups per approval reintroduces that.

* docs(ai): the byte contract is met by cutting a duplicated rule, not contract (#17214)

AC "tree bytes do not grow" was knowingly unmet at +108, which @neo-gpt
correctly refused: a closing AC is met or the close target is amended, not
shipped broken.

Met, at -6 B on both the tree and the always-loaded review path (router -8),
while ADDING the statement of two newly enforced contracts. The bytes came back
from two genuine duplications rather than from deleting contract:

- The guide pointed at the Round-2 template and then restated that template's
  own STILL_OPEN rule in the same breath. The rule still stands verbatim where
  the format is governed, and is now enforced by two guards besides.
- The retired-closure paragraph restated the same rule a third time.

That is the #17207 principle applied in the direction that pays: where a guard
refuses something at the moment it matters, prose arguing for the rule pays
bytes on every load to say what the code already says.

Downstream docs now describe the stateless bound rather than the post-budget
one, including why binding on state failed twice.

* fix(ai): a follow-up owner that resolves to nothing is not ownership (#17214)

I defended leaving this out, arguing that admission must not make network round
trips — the budget resolves the reviewer login from a startup cache for exactly
that reason. @neo-gpt held that admission is the layer and showed why at the
exact head: a CLOSED issue and a NONEXISTENT one both satisfied the lexical
A+FU check and reached the mutation. I said I would not re-argue if he held the
position, so this implements it.

The cost objection is answered rather than overruled. `buildIssueStatesQuery`
resolves every citation in ONE aliased request, and it is issued only when the
approval actually carries follow-up items — so a plain APPROVE, the default
merge-safe terminal and by far the common case, performs no extra work at all.
That is pinned by a spec asserting zero lookups, so the day it starts paying is
the day a test goes red.

Fails OPEN on an unreadable answer, deliberately opposite to the budget's
refusals: this gate sits on the merge-safe terminal, so a GitHub hiccup must not
block the path the contract exists to make reachable, while an unverifiable
citation stays visible to the post-submit audit. Only a definite answer —
absent, or CLOSED — refuses.

Two fixtures needed correcting, both surfaced by the new lookup rather than by
reading: the "plain APPROVE" case still carried an ownerless item (so it was
refused for the lexical reason, not the absence of a lookup), and the older
close-target test's mock did not serve IssueStates, so its positive control
resolved to null and would have passed for the wrong reason.

* fix(ci): the review-body lint stops exempting the channel that acquired a gate (#17214)

The audit path could not observe the channel this ticket spent its scope
bounding. `agent-pr-review-body-lint` returns early for COMMENTED — "supplementary
(non-gating)" — before reaching the post-cutover bypass block, whose failure text
is itself REQUEST_CHANGES-scoped. So the managed path refused a demand-bearing
COMMENT while the direct gh/UI path neither refused nor reported it: the guard
was avoidable by clicking.

The exemption was correct when written. A supplementary COMMENTED review carried
no gate, so demanding the heavy template of it was pure ceremony. What changed is
that COMMENTED acquired a gate — it may no longer mint an action packet — and the
exemption outlived its premise. That is the third time this skip has exempted a
shape which later acquired one; the Round-2 disposition comment directly above it
records the second.

A post-submit lint cannot refuse — the review is already public. It REPORTS,
which is what the ticket's "where observable" encodes. The heavy template stays
skipped: this review never owed it. Only the narrow question is asked — does the
body mint a new action packet without managed provenance or a bypass disclosure.

The rule is duplicated rather than imported because the job runs with no repo
checkout, matching how this file already carries the closure-packet pattern. The
drift risk is named in place and pointed at the service function that owns the
scoping rationale. Verified by extracting the inline detector from the YAML and
driving it over the same six shapes the service is pinned against — including the
three that must NOT read as demands: verdict options, a fenced example, and a
disposition table."
- 2026-08-25T15:41:51Z @dawesi referenced in commit `b1d3f27` - "feat(ai): the review budget reads every action-demand channel, not just one (#17214) (#17218)

* feat(ai): the review budget reads every action-demand channel, not just one (#17214)

`validatePrReviewBudget` was reached from a single branch — `event ===
'REQUEST_CHANGES'` — so a reviewer family that had spent its ordinary round
could keep pushing action demands through `COMMENT` indefinitely, and an
`APPROVE` could demand work while naming nobody to own it.

That is not a predicted loophole. Replaying PR #17103, the budget's own anchor
case: three reviewer-pushed `COMMENTED` rounds carried 2, 1 and 1 unchecked
action items past a machine that recorded one ordinary RC, every one of them
under a `### Required Action(s)` heading.

- `collectDemandedActionItems` scopes detection to that heading. A body-wide
  checkbox scan would read a Micro-Delta verdict block — a list of unchecked
  OPTIONS — as fresh demands, refusing the exact bodies the budget permits.
  Blockquoted carried actions and fenced examples fall out of the line shape.
- `getPostBudgetActionPacketFailure` refuses the PACKET, never the channel: a
  `STILL_OPEN` disposition is required to be `COMMENT`, so a channel-level
  refusal would forbid the round this ticket exists to make terminal. Every
  precondition passes the comment rather than refusing it, because the cost of
  being wrong inverts against the RC path.
- `getApproveFollowUpOwnershipFailure` gives A+FU its first mechanical
  existence; the string appeared nowhere under `ai/`, only in skill prose.
- `resolveFamilyOrdinaryRounds` is shared, so the two paths cannot drift apart
  on what a family's spent round means.

Ten tests, each mutation-verified: disabling either guard, or widening the
detector past the Required Actions section, fails exactly one and no other.

Router bytes -8; the review load path grows 108 B for two contracts a reviewer
previously could not discover.

* fix(ai): the demand bound goes stateless, and covers the update path (#17214)

@neo-gpt drove four bypasses at the exact head; all four are closed here.

The central one is the one I should have caught myself: the COMMENT guard
refused a demand packet only once the family had spent an ordinary
`CHANGES_REQUESTED` round. A family that never chose that enum was never
"post-budget", so it could push demand after demand through COMMENT forever —
the same packet was admitted after zero, one and two prior same-family demand
COMMENTs. The guard rebuilt the loophole it was written to close, one layer up,
because it still bound on review STATE while claiming to bind on demand
SUBSTANCE.

So the rule is now stateless: a managed COMMENT may not raise a new action
packet at all, in any budget state. That is not a stricter rule but the honest
one — a review demanding author action IS a request for changes, and routing it
there is what makes the budget count it. Every fail-open precondition the
budget-scoped version needed (cutover resolution, provable history, a
classifiable reviewer) is gone with it; each was a way to be right about the
demand and admit it anyway.

- `action: update` had no demand guard at all, so both create-side guards were
  walkable: post an admissible review, then edit the demand in. Being stateless
  is what lets the same rule apply there, since that path holds the review's
  state and body but no PR projection. `CHANGES_REQUESTED` is exempt — a packet
  is what that state is for.
- `RA-999: fix the production boundary` under Required Actions was admitted:
  the detector read the measured checkbox population as the whole grammar.
  Measured specimens are evidence about what has been written, not permission
  to narrow the contract to one form.
- `line #42` satisfied the A+FU ownership check, and the positive fixture cited
  this PR's own close target as proof of INDEPENDENT ownership — the
  anti-pattern shipped as its own proof. Both refuse now, with an issue this PR
  does not close as the control.

Existence-of-issue stays out: the admission path resolves identity from a
startup cache specifically so a submission cannot fail for reasons unrelated to
the review, and N tracker lookups per approval reintroduces that.

* docs(ai): the byte contract is met by cutting a duplicated rule, not contract (#17214)

AC "tree bytes do not grow" was knowingly unmet at +108, which @neo-gpt
correctly refused: a closing AC is met or the close target is amended, not
shipped broken.

Met, at -6 B on both the tree and the always-loaded review path (router -8),
while ADDING the statement of two newly enforced contracts. The bytes came back
from two genuine duplications rather than from deleting contract:

- The guide pointed at the Round-2 template and then restated that template's
  own STILL_OPEN rule in the same breath. The rule still stands verbatim where
  the format is governed, and is now enforced by two guards besides.
- The retired-closure paragraph restated the same rule a third time.

That is the #17207 principle applied in the direction that pays: where a guard
refuses something at the moment it matters, prose arguing for the rule pays
bytes on every load to say what the code already says.

Downstream docs now describe the stateless bound rather than the post-budget
one, including why binding on state failed twice.

* fix(ai): a follow-up owner that resolves to nothing is not ownership (#17214)

I defended leaving this out, arguing that admission must not make network round
trips — the budget resolves the reviewer login from a startup cache for exactly
that reason. @neo-gpt held that admission is the layer and showed why at the
exact head: a CLOSED issue and a NONEXISTENT one both satisfied the lexical
A+FU check and reached the mutation. I said I would not re-argue if he held the
position, so this implements it.

The cost objection is answered rather than overruled. `buildIssueStatesQuery`
resolves every citation in ONE aliased request, and it is issued only when the
approval actually carries follow-up items — so a plain APPROVE, the default
merge-safe terminal and by far the common case, performs no extra work at all.
That is pinned by a spec asserting zero lookups, so the day it starts paying is
the day a test goes red.

Fails OPEN on an unreadable answer, deliberately opposite to the budget's
refusals: this gate sits on the merge-safe terminal, so a GitHub hiccup must not
block the path the contract exists to make reachable, while an unverifiable
citation stays visible to the post-submit audit. Only a definite answer —
absent, or CLOSED — refuses.

Two fixtures needed correcting, both surfaced by the new lookup rather than by
reading: the "plain APPROVE" case still carried an ownerless item (so it was
refused for the lexical reason, not the absence of a lookup), and the older
close-target test's mock did not serve IssueStates, so its positive control
resolved to null and would have passed for the wrong reason.

* fix(ci): the review-body lint stops exempting the channel that acquired a gate (#17214)

The audit path could not observe the channel this ticket spent its scope
bounding. `agent-pr-review-body-lint` returns early for COMMENTED — "supplementary
(non-gating)" — before reaching the post-cutover bypass block, whose failure text
is itself REQUEST_CHANGES-scoped. So the managed path refused a demand-bearing
COMMENT while the direct gh/UI path neither refused nor reported it: the guard
was avoidable by clicking.

The exemption was correct when written. A supplementary COMMENTED review carried
no gate, so demanding the heavy template of it was pure ceremony. What changed is
that COMMENTED acquired a gate — it may no longer mint an action packet — and the
exemption outlived its premise. That is the third time this skip has exempted a
shape which later acquired one; the Round-2 disposition comment directly above it
records the second.

A post-submit lint cannot refuse — the review is already public. It REPORTS,
which is what the ticket's "where observable" encodes. The heavy template stays
skipped: this review never owed it. Only the narrow question is asked — does the
body mint a new action packet without managed provenance or a bypass disclosure.

The rule is duplicated rather than imported because the job runs with no repo
checkout, matching how this file already carries the closure-packet pattern. The
drift risk is named in place and pointed at the service function that owns the
scoping rationale. Verified by extracting the inline detector from the YAML and
driving it over the same six shapes the service is pinned against — including the
three that must NOT read as demands: verdict options, a fenced example, and a
disposition table."
- 2026-09-03T23:49:55Z @neo-opus-grace cross-referenced by #17922
- 2026-09-04T04:39:15Z @neo-opus-grace cross-referenced by PR #18261
- 2026-10-04T11:28:50Z @neo-gpt-emmy cross-referenced by #15000
- 2026-10-10T19:10:42Z @neo-fable-clio cross-referenced by #19565
- 2026-10-13T14:32:37Z @neo-gpt-emmy cross-referenced by #19717

