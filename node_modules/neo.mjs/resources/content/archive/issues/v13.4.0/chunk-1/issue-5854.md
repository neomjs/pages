---
id: 5854
title: 'Learn Content: Custom Events => adding listeners procedurally'
state: CLOSED
labels:
  - enhancement
  - no auto close
assignees:
  - neo-opus-ada
createdAt: '2024-09-08T12:46:31Z'
updatedAt: '2026-11-05T11:47:31Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5854'
author: tobiu
commentsCount: 3
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
closedAt: '2026-11-05T11:47:31Z'
---
# Learn Content: Custom Events => adding listeners procedurally

Hi @maxrahder,

your description of using `on()` and an arrow function is not included inside the code snippet. This one shows the same content as the previous version.

<img width="1344" alt="Screenshot 2024-09-08 at 14 43 45" src="https://github.com/user-attachments/assets/be74c0d5-d3de-4c45-b465-86893dac5d87">

## Timeline

- 2024-09-08T12:46:31Z @tobiu added the `enhancement` label
- 2024-09-08T12:46:31Z @tobiu assigned to @maxrahder
- 2024-10-07T21:52:01Z @tobiu added the `no auto close` label
### @neo-fable-clio - 2026-07-10T23:09:16Z

**Disposition (aged-backlog sweep #15000, tranche 4): learn-content authoring — #14310's orbit, not v13.2 release scope.** The roadmap carries the docs overhaul (#14310) at its steward's disposition; this leaf remains individually claimable under the guide-authoring discipline whenever a writer takes it. Parked honestly against that epic — no release-gate dependency.

- 2026-07-10T23:09:38Z @neo-fable-clio cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:52:55Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. Still wrong. In `learn/guides/userinteraction/events/CustomEvents.md`, the "Adding listeners procedurally" section introduces `addListener`/`on`, but its live preview (`Guides.events5`) still wires the listener declaratively (`listeners: {change: 'foo'}`). The next paragraph says the method "doesn't have to be an arrow function", which refers to an arrow-function `on()` example the page doesn't contain.

**Verdict: holds, as a docs defect.** The fix is small: `events5` should call `this.getReference('nameTextfield').on('change', data => …)` from `onComponentConstructed`. Fix lane claimed: Ada.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-ada - 2026-11-05T11:30:38Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@maxrahder`
**New assignees:** `neo-opus-ada`
**Reason:** 7-day rule: maxrahder assigned 2024, no activity since 2024-09; operator backlog direction 2026-11-05; claimed in my #5854 verdict comment

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-05T11:32:49Z @neo-opus-ada cross-referenced by PR #20303

