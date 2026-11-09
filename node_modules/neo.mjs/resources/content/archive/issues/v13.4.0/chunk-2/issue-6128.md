---
id: 6128
title: 'manager.Focus: history => scope the content to windowIds'
state: CLOSED
labels:
  - enhancement
  - no auto close
  - ai
  - core
assignees:
  - tobiu
  - neo-gpt-euclid
createdAt: '2024-11-22T11:00:15Z'
updatedAt: '2026-11-05T12:05:51Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6128'
author: tobiu
commentsCount: 1
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
closedAt: '2026-11-05T12:00:03Z'
---
# manager.Focus: history => scope the content to windowIds

for the multi-window scope, it would be nice to have a separated focus history for each connected window.

![Image](https://github.com/user-attachments/assets/d0067ed4-5957-4029-ba87-b977a8bea82e)

so, the history should become an object with `windowId` props which then contain the current arrays.

closing a browser window should clear the related history.

## Implementation intake — Euclid, 2026-11-05

The original outcome remains valid. The current source drops the DOM event envelope's `windowId` at `manager.DomEvent.fire` before calling Focus; the shared worker's global config and a component's current window are not substitutes for that event origin. `worker.App.removePort` already identifies the final live port of a window and owns immediate window retirement. The date picker is the only production reader of pending focusout state outside Focus.

| Target surface | Authority | Behavior / edge cases | Docs | Evidence |
| --- | --- | --- | --- | --- |
| `Focus.history` | Original issue | Object keyed by originating window ID, with a bounded newest-first array per window. Focus moves read only their window's previous path. | Config/method JSDoc | Same-window controls and interleaved two-window histories |
| `Focus.pendingFocusOut` | Existing focus settlement contract | Pending out/in pairing and stale-timer fencing are per window; a sibling's focusin cannot consume another window's pending leave. | Config/method JSDoc | Interleaved focus events, supersession and close-before-timer controls |
| `DomEvent.fire` → Focus | Current Main-to-App message envelope | Forward the supplied event `windowId`; never infer it from the logical path or singleton config. | Dispatch docs | Production dispatcher test |
| `App.removePort` → Focus cleanup | Existing final-port retirement boundary | Clear only the departed window's state when its final live port is removed. A per-app disconnect, remaining port or stale port must preserve live-window state. | Cleanup JSDoc | Real App worker lifecycle tests |
| `DateSelector.triggerVdomUpdate` | Existing focus-restoration guard | Read pending focusout only for the selector's current window. | Method docs | Date focus-restoration control and existing picker/focus coverage |

Classification: valid-as-written outcome, prescription sharpened for the current dispatcher, pending pairing and final-port lifecycle. Created 2024-11-22; retained `no auto close` is historical parked metadata, not proof of currency. Current source and the isolated two-window history probe establish that this remains unimplemented; live reference/successor search found no resolving PR. No new user configuration is required. Original author prose and human assignment are preserved.



### Implementation handoff — 2026-11-05

Delivered in [PR #20305](https://github.com/neomjs/neo/pull/20305). [Julia approved](https://github.com/neomjs/neo/pull/20305#pullrequestreview-5784524620) the exact head `f47becdf18f09a349695818da857ddd15dcfbdc2` with no required actions. Human-merged on 2026-11-05 at 12:00 UTC as `408ff47e2a012aabe19b076317eb35c986cf4d22`; #6128 is closed as completed.

Merged-`dev` continuity passed: 30 focused unit tests (Focus, Picker, DateSelector focus and departed-window retirement) and the real-browser two-document SharedWorker journey (1 passed, 10.7s). The resident checkout is clean on `dev` at that merge. Detailed red-first, full-unit, real-worker and browser evidence remains in the PR.



## Timeline

- 2024-11-22T11:00:15Z @tobiu added the `enhancement` label
- 2024-11-22T11:00:15Z @tobiu added the `no auto close` label
- 2024-11-22T11:00:15Z @tobiu assigned to @tobiu
- 2026-07-10T23:09:38Z @neo-fable-clio cross-referenced by #15000
- 2026-09-04T17:53:38Z @neo-opus-ada cross-referenced by #18299
### @neo-gpt-euclid - 2026-11-05T10:34:40Z

**2026-11-05 premise read — holds; current implementation still needs the per-window boundary.** Checked Engine `6ddbed1bd5e67822510c8ab3ece3340f58994313` for the backlog sweep in #15000.

[`src/manager/Focus.mjs:21`](https://github.com/neomjs/neo/blob/6ddbed1bd5e67822510c8ab3ece3340f58994313/src/manager/Focus.mjs#L21) still declares one `history: []`; `addToHistory()` (53–57) unshifts into it without selecting a window, and `focusMove()` (87–109) reads its global first entry. An isolated call through the real singleton with `window-a`, then `window-b` produced `{isSharedArray:true,length:2,order:["window-b","window-a"]}`. No browser focus behavior is inferred from that probe.

The outcome in this issue remains valid. The implementation prescription needs to account for code added since 2024: `pendingFocusOut` and its settlement (162–190) are also singleton-wide. The eventual coherent fix should review history selection, pending focusout pairing and window-disconnect cleanup together; only replacing the array declaration would leave the pairing path shared. `test/playwright/unit/manager/Focus.spec.mjs` currently checks the single-array path. No resolving PR surfaced in the live ticket-reference search.

This is a dated intent/shape check, not a close recommendation or implementation claim. The original operator-authored body and assignment remain intact; no replacement ticket.


- 2026-11-05T11:35:34Z @neo-gpt-euclid cross-referenced by PR #20305

