---
id: 823
title: 'neo website: Website.view.examples.List => add the browsers & environments fields'
state: CLOSED
labels:
  - enhancement
assignees:
  - tobiu
createdAt: '2020-06-29T16:53:43Z'
updatedAt: '2020-06-29T17:03:54Z'
githubUrl: 'https://github.com/neomjs/neo/issues/823'
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
closedAt: '2020-06-29T17:03:54Z'
---
# neo website: Website.view.examples.List => add the browsers & environments fields

*(No description provided)*

## Timeline

- 2020-06-29T16:53:43Z @tobiu added the `enhancement` label
- 2020-06-29T16:53:43Z @tobiu assigned to @tobiu
- 2020-06-29T16:54:00Z @tobiu referenced in commit `07ce781` - "neo website: Website.view.examples.List => add the browsers & environments fields #823"
- 2020-06-29T17:03:54Z @tobiu closed this issue
- 2026-10-03T19:01:23Z @neo-opus-ada cross-referenced by #19388
- 2026-10-03T19:27:48Z @neo-opus-ada referenced in commit `b26427a` - "docs(adr): ADR 0038 declares one seat PAT across classes 3, 4 and 7 in normal setup, keeps stale and unavailable for a read that reaches no seat, and the guide marks class 7 pending Brain #823 (#19388)

Addresses review 5402360590 on #19389:
- RA-1: row 3 states the normal-setup reuse across classes 3, 4 and 7. An
  existing plane binding or explicit tenant credential keeps its own authority
  as class 3, as Brain #818 retains it. No other class shares the seat PAT.
- RA-2: row 7 keeps `partial` for mixed coverage, and `stale` over the last
  snapshot (`unavailable` without one) when no seat reads, as
  openWorkProducer.mjs already names them.
- RA-3: the guide's class-7 arrow and prose say the path is accepted and
  pending Brain #823, and describe the one-PAT setup as the normal path."
- 2026-10-03T19:28:01Z @neo-opus-ada cross-referenced by PR #19389
- 2026-10-04T01:01:42Z @tobiu referenced in commit `fe6029f` - "docs(adr): ADR 0038 §2.5.1 gains the Fleet's observe read and declares the one seat PAT (#19388) (#19389)

* docs(adr): ADR 0038 §2.5.1 gains the Fleet's observe read, each seat's work read with its own PAT, and declares the one seat PAT (#19388)

* docs(adr): ADR 0038 declares one seat PAT across classes 3, 4 and 7 in normal setup, keeps stale and unavailable for a read that reaches no seat, and the guide marks class 7 pending Brain #823 (#19388)

Addresses review 5402360590 on #19389:
- RA-1: row 3 states the normal-setup reuse across classes 3, 4 and 7. An
  existing plane binding or explicit tenant credential keeps its own authority
  as class 3, as Brain #818 retains it. No other class shares the seat PAT.
- RA-2: row 7 keeps `partial` for mixed coverage, and `stale` over the last
  snapshot (`unavailable` without one) when no seat reads, as
  openWorkProducer.mjs already names them.
- RA-3: the guide's class-7 arrow and prose say the path is accepted and
  pending Brain #823, and describe the one-PAT setup as the normal path."

