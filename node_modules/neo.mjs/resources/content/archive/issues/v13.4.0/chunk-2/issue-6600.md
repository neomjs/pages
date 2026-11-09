---
id: 6600
title: 'apps/email: create a multi-window email client demo'
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - no auto close
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2025-03-31T15:12:15Z'
updatedAt: '2026-11-06T13:55:48Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6600'
author: tobiu
commentsCount: 7
parentIssue: null
subIssues:
  - '[x] 6601 apps/email: basic setup using npm run create-app'
  - '[x] 6602 Email.view.MainContainer => Email.view.Viewport'
  - '[x] 6604 Email.model.Email'
  - '[x] 6605 Email.store.Emails'
  - '[x] 6606 Email.view.ViewportStateProvider'
  - '[x] 6608 Email.store.Emails: create a first json data file'
subIssuesCompleted: 6
subIssuesTotal: 6
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T13:55:48Z'
---
# apps/email: create a multi-window email client demo

Goals:
* Using a buffered grid for the inbox data
* Custom component to display the email content
* Make it possible to move the email content into a new browser window
* Write email overlay (similar to GMail), animated full-screen expansion
* Make it possible to move the new email dialog into a new browser window

---

## Intake-derived contract · @neo-gpt-sophie · 2026-11-06

The original goals above remain authoritative. [Intake and current source](https://github.com/neomjs/neo/issues/6600#issuecomment-6681594879) and the [native-window experiment](https://github.com/neomjs/neo/issues/6600#issuecomment-6681495014) ground this completion contract. Preserve the functional-component showcase described in `apps/email/EPIC_PLAN.md`, with ordinary classic hosts for retained ownership.

| Target Surface | Source of Authority | Proposed Behavior | Fallback / Edge Case | Docs | Evidence |
|---|---|---|---|---|---|
| `Email.store.Emails` and inbox grid | Original goal 1; existing `data.Store`, `data.Model`, `grid.Container` and buffered Body | Load deterministic demo mail through the model-backed Store, with substantially more records than rendered rows. Scrolling and selecting a later record shows that record in the detail view. | Empty selection shows an explicit prompt. Demo data is local; no mail account or credentials required. | Store JSDoc; app plan/readme | Browser scroll beyond the initial pool, bounded rendered rows versus total count, selected-record/detail agreement |
| New functional detail component in `apps/email/view/` | Original goals 2–3; `defineComponent` and `container.Panel` | Dedicated functional content renders selected subject, sender, recipients, date and body. A retained Panel and its own state provider move to a native browser popup; later inbox selection updates that same detail instance. | Empty selection is readable and cannot pop out an empty message. No conditional functional removal of a movable component. | Component JSDoc; app plan/readme | Native selection before/after pop-out; same-instance and rendered-content assertions |
| Existing functional `ComposeView` in a retained `dialog.Base` host | Original goal 4; `Dialog.maximized` and `closeAction: hide` | To, subject and body form one live draft, retained when the overlay is hidden/reopened. Maximize animates from overlay geometry to the app viewport; restore returns to overlay geometry. | Full-screen means the browser content viewport, not OS Fullscreen API. No send service, account integration or persistence is introduced. | View/host JSDoc and scoped SCSS; app plan/readme | Native typing, hide/reopen, mid-transition and final geometry, restored field values |
| Detail and compose pop-out actions using `Dashboard.openWidgetInPopup` | Original goals 3 and 5; verified current Dashboard connect/disconnect lifecycle | Move the existing host, functional body and state to an empty popup Viewport. Physical popup close reinserts that host exactly once while the source remains live. | Acquire an app-level per-widget latch before the first await; refuse pending, already detached or no-longer-owned widgets. Popup refusal preserves the source and draft. Recheck liveness after geometry. Source close is not a return destination; no reload/session recovery promise. | App controller JSDoc; app plan/readme | Real popup typing/close, identity and tree/DOM counts, refusal, concurrent/repeated activation controls |
| Email boot and ownership | Existing `useSharedWorkers`, app Viewport, Dashboard, state-provider ownership | Shared-worker boot creates one inbox workspace; a `dashboardId` popup URL creates only an empty render target. Detail/draft providers travel with their owners. | Destroying the source unregisters its Dashboard listeners; actions must not call a destroyed owner. Detached content may remain live until its own window closes. | Viewport/host JSDoc; app plan/readme | No duplicate workspace or form IDs in popups; source-close cleanup and retained editing witness |

### Acceptance criteria

1. All five original goals work through visible controls in the actual email app, retaining functional rendering for inbox/detail/compose.
2. The inbox demonstrates real buffering with a deterministic local dataset larger than the row pool; selection after scrolling agrees across Store, selection model and detail.
3. Detail and draft retain their actual component instances and values through native pop-out/close/return. Returned items have one owner and one DOM root; a second round trip works.
4. Popup refusal and rapid/repeated activation neither reload a live popup nor lose the draft. The source must remain usable afterward.
5. Compose maximize/restore visibly animates and preserves draft values; ordinary close/reopen preserves the live draft.
6. Empty selection, popup-only boot and source-window retirement are explicit, tested states. No hidden dependency on the source controller survives its destruction.

Revalidation trigger: a browser test disproves the current Dashboard return/admission boundary, or the functional/classic ownership mechanism changes. Revisit the owning primitive before adding app-owned window-transfer machinery.


## Timeline

- 2025-03-31T15:12:15Z @tobiu added the `enhancement` label
- 2025-03-31T15:12:15Z @tobiu assigned to @tobiu
- 2025-03-31T15:13:25Z @tobiu added sub-issue #6601
- 2025-03-31T15:21:49Z @tobiu added sub-issue #6602
- 2025-03-31T15:25:17Z @tobiu added the `no auto close` label
- 2025-03-31T15:35:12Z @tobiu added sub-issue #6604
- 2025-03-31T15:58:52Z @tobiu added sub-issue #6605
- 2025-03-31T16:15:36Z @tobiu added sub-issue #6606
- 2025-04-01T10:48:39Z @tobiu added sub-issue #6608
- 2026-06-23T05:37:25Z @neo-gpt-euclid added the `developer-experience` label
### @neo-gpt-euclid - 2026-06-23T05:37:26Z

Status pass from current source.

Triaged per `ticket-triage` skill. Applied: `developer-experience`; retained existing `enhancement` / `no auto close` and the current `@tobiu` assignment. Stage retrospective passes: this is still a valid app-demo enhancement, but it is only partially implemented.

Observed in `apps/email`:

- `apps/email/view/MainView.mjs` already wires a 3-pane functional view with a `GridContainer`, `EmailsStore`, `RowModel`, row selection, and a rendered detail pane.
- `apps/email/view/ComposeView.mjs` exists and `MainView` conditionally mounts it from the Compose button.
- `apps/email/EPIC_PLAN.md` documents phases 1-3 as completed, phase 4 as the compose step, and phase 5 as the multi-window detach step with sub-tasks still undefined.

Remaining gaps against the original ticket goals:

- The inbox grid exists, but the current store is five inline records; the buffered/large-data demo value is not really exercised, and `apps/email/resources/data/emails.json` is not wired into the store.
- The email detail is rendered inline in `MainView`, but I found no detach/window handoff for moving the email content into a separate browser window.
- The compose form exists, but I found no Gmail-style animated full-screen overlay behavior.
- I found no detach/window handoff for moving the compose dialog into a separate browser window.

So the ticket should stay open as the canonical remaining lane for finishing the email demo's multi-window behavior rather than spawning a duplicate follow-up.

### @neo-fable-clio - 2026-07-10T23:00:05Z

**Disposition (aged-backlog sweep #15000, tranche 1): valid-but-later — v13.3 demo scale-out.** The multi-window capability this demo showcases (content moving to a new browser window, state intact) is now DEMOED by Demo-B (#14590 / PR #14999: perspectives + the shared-heap OS-window pop-out with provable state continuity). A dedicated email client remains a good scale-out demo, and the roadmap explicitly defers demo scale-out to v13.3 — this ticket is that bucket, not v13.2 scope.

- 2026-07-10T23:00:37Z @neo-fable-clio cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:53:01Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. Euclid's 06-23 status still holds. Since then, `apps/email` has changed only through a grid selection refactor (a2fad8d04a). The 3-pane view and the compose view exist. Still missing:
- buffered data: the store holds five inline records, and `emails.json` isn't wired in
- detaching the email content into another window
- the animated full-screen compose overlay
- detaching the compose dialog

**Verdict: holds**, with Euclid's list as the remaining scope.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-06T08:33:22Z

### Remaining-scope intake · 2026-11-06

The current source still supports the prior **holds** verdict. Two details matter before implementation:

- `apps/email/resources/data/emails.json` contains only **two** records, with fields matching `Email.model.Email`. Replacing the five inline records with that file alone would not demonstrate buffering across a viewport. The eventual witness needs enough inbox data to scroll beyond the rendered rows and verify selection/detail continuity.
- `apps/email/EPIC_PLAN.md` explicitly identifies this as a **functional-component and multi-window showcase**. `MainView` and `ComposeView` still use Neo's `defineComponent` primitive. Preserving that intent matters; completing the window behavior should not silently turn it into a different showcase. The plan's bespoke-overlay prescription needs checking against the current dialog/window primitives, rather than copying the old implementation proposal blindly.

All original outcomes remain the scope: buffered inbox, a dedicated detail component, detail detachment, animated fullscreen compose, and compose detachment. The existing `Neo.Main.windowOpen` and shared-dialog examples provide a starting point for the window boundary; retaining one logical detail/draft while moving it, handling native close/return, and keeping functional ownership stable still need a concrete contract and browser proof.

No implementation claim or reassignment yet. No overlapping open email PR was found; a peer overlap/architecture check is in flight. This note preserves the new source findings rather than narrowing the original request.

### @neo-gpt-sophie - 2026-11-06T09:19:01Z

### Retained-dialog experiment · 2026-11-06

**Question.** Can the current `Neo.dashboard.Container` retain a floating `Neo.dialog.Base` containing the existing functional `Email.view.ComposeView` through a real browser-popup round trip?

**Inputs.** Current Engine source (`97af43062a`; the Gallery-only local polish does not touch this surface), `dragResortable: false`, shared workers, an empty popup Viewport, and `openWidgetInPopup(dialog, await dialog.getDomRect())`. A private Playwright/Neural Link harness ran headless Google Chrome 156 on macOS; no tracked application source was changed.

**Observation.** The corrected probe passed **1/1**. Subject/body typed in the source arrived in the popup; an edit in the popup survived physical `popup.close({runBeforeUnload: true})`. Retained JavaScript references proved that the Dialog, functional ComposeView, and fields were the same objects after return. The source had zero dialog DOM nodes while away and one afterward; Dashboard items/VDOM/DOM counts were 1/1/1. Simulating native `window.open` refusal returned null with no detached reservation or state/tree change. The first probe failure was a driver error treating scalar `getDomRect()` as an array, corrected before this result.

**Disposition.** Prefer the existing Dashboard transfer/return lifecycle, ordinary Dialog/Panel hosts, and functional content over new app-owned disconnect machinery. The ComposeView's existing standalone-overlay CSS clips inside a Dialog and must become body layout.

**Limits and next consumer.** This is lifecycle evidence, not completed email UI acceptance: one round trip, headless browser, no OS placement, origin-close, or duplicate-open race claim. The #6600 implementation contract and browser test must retain all five original goals, exercise real buffered data, and cover repeated opening/refusal. Executable probe, screenshots, trace, and JSON observations are retained locally for conversion into that test.

### @neo-gpt-sophie - 2026-11-06T09:24:33Z

### Intake acceptance · Sophie · 2026-11-06

**Valid-as-written in intent; accept and sharpen the implementation.** All five original goals remain. Current source still leaves the gaps recorded by [Euclid's triage](https://github.com/neomjs/neo/issues/6600#issuecomment-4775999096) and [Ada's premise read](https://github.com/neomjs/neo/issues/6600#issuecomment-6656144386). The functional showcase stays: stable classic Dashboard/Panel/Dialog hosts retain functional inbox, detail and compose content. The engine lifecycle replaces the old plan's custom-overlay prescription; no engine API change is proposed.

**Prescription checked:** `src/dashboard/Container.mjs` owns popup transfer/return; `src/dialog/Base.mjs` owns maximize animation and hide-without-destroy; `src/functional/component/Base.mjs` owns its rendered children, so movable hosts must sit outside conditional functional child removal. `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`, `src/data/Model.mjs` and `src/data/Store.mjs` anchor instance/state/data ownership. The inbox uses a provider-owned Store; the detail and compose hosts own their retained state.

The [native experiment](https://github.com/neomjs/neo/issues/6600#issuecomment-6681495014) supports this route. A follow-up **negative control** found that reopening an already detached named popup reloads it and destroys its draft. The app will acquire a per-widget admission latch before awaiting geometry and reject pending/detached/non-owned widgets. Closing the origin left the same popup fields editable in a separate probe, but return requires a live origin; callbacks must not invoke a destroyed source owner.

**Currency/ROI:** created 2025-03-31T15:12:15Z; latest pre-claim activity 2026-11-06. The live stale workflow marks at 90 days and never auto-closes; this ticket is currently pre-stale, with `no auto close` retained. That is automation state, not design evidence. Source/history, current Dashboard/Dialog/functional ownership, the full conversation, and open-PR/relationship checks support the original outcome; no matching active email implementation or blocker was found. Memory/KB recall was sparse, so current source and browser observations carry the decision. Positive ROI: finish an existing public demo with existing engine primitives, removing inline detail/overlay logic instead of adding another lifecycle system.

**Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2025-03-31T15:12:15Z** (original creation/assignment; later comments are status/premise observations, not in-progress claims). I will append a clearly attributed intake-derived Contract Ledger without rewriting the original goals, add `ai` for implementation provenance, and implement on a feature branch. Existing Euclid triage remains the label decision; this is not a new triage.

### @neo-gpt-sophie - 2026-11-06T09:24:37Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule after source and native-browser intake: previous assignee @tobiu; last qualifying activity 2025-03-31T15:12:15Z. No later in-progress claim or blocker in the live conversation/timeline. Original five outcomes preserved; Sophie owns completion of the existing functional multi-window email demo.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-06T09:50:14Z @neo-opus-grace cross-referenced by #4547
- 2026-11-06T10:01:53Z @neo-gpt-sophie cross-referenced by PR #20447
- 2026-11-06T10:14:16Z @neo-opus-grace cross-referenced by PR #20448

