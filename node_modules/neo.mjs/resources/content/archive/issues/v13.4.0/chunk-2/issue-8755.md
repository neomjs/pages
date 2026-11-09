---
id: 8755
title: Enhance LivePreview to Support Mermaid Diagrams
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - ai
assignees:
  - neo-gpt-euclid
createdAt: '2026-01-17T10:46:30Z'
updatedAt: '2026-11-05T17:23:23Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8755'
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
closedAt: '2026-11-05T17:20:41Z'
---
# Enhance LivePreview to Support Mermaid Diagrams

To further unify the developer experience within the Portal and Documentation apps, we should extend the `Neo.component.code.LivePreview` component to support Mermaid diagrams.

**Current State:**
`LivePreview` expects JavaScript code that exports a Neo.mjs component or VDOM, which it then executes and mounts in the preview area.

**New Capability:**
Enable `LivePreview` to accept Mermaid diagram syntax.

**Implementation Strategy:**
1.  **Detection/Configuration:** Add a mechanism to determine if the content is Mermaid code (e.g., a `language` config or auto-detection).
2.  **Renderer Switching:**
    -   If JavaScript: Keep existing execution logic.
    -   If Mermaid: Instantiate `Neo.component.wrapper.Mermaid` in the preview container and bind its `value` to the editor content.
3.  **Editor Integration:** Ensure the Monaco Editor uses the correct syntax highlighting for Mermaid.

**Benefits:**
-   Unified "Playground" for both UI widgets and architectural diagrams.
-    Simplifies documentation authoring (one component for all live examples).

## Implementation intake — Euclid, 2026-11-05

**Verdict: valid-as-written, with current owner paths.** `src/code/LivePreview.mjs` already owns explicit `language` selection and lazy preview creation; it accepts `neomjs` and `markdown` only. The diagram renderer already exists at `src/component/wrapper/Mermaid.mjs`; its addon consumes the built Mermaid module. This extends that path, not a second diagram renderer or syntax inference rule. Existing callers acquire no new obligation.

| Surface / owner | Contract | Current-source anchor / verification |
| --- | --- | --- |
| `LivePreview.language` | Add explicit `mermaid`; retain default `neomjs` and existing Markdown/JavaScript semantics. | `src/code/LivePreview.mjs` static languages / afterSetLanguage / doRunSource. |
| LivePreview preview lifecycle | Reuse the existing Mermaid wrapper with current editor source; switching modes, clearing source, tab teardown and destruction must not leave stale or resurrected preview output. Admit its renderer in the current window before dispatch. | Existing container ownership, awaited import boundary and worker per-window addon admission; unit and real-browser controls. |
| Monaco wrapper language | Accept Mermaid and pass its language id through the existing addon API. | `src/component/wrapper/MonacoEditor.mjs` languages / afterSetLanguage. |
| Monaco language definition | Register Mermaid syntax in the existing main-thread Monaco owner before editing; no extra worker or global loader replacement. | `src/main/addon/MonacoEditor.mjs` loadFiles / getWorkerUrl; actual model/tokenization browser proof. |
| Markdown live-preview consumer | A `mermaid live-preview` fence creates a Mermaid-mode LivePreview; existing fence modes and ordinary Mermaid diagrams remain unchanged. | `src/component/Markdown.mjs` processLivePreviewBlocks / render. |
| Error / update behavior | Existing Mermaid parse-error reporting remains usable; correction and successive edits recover to the latest SVG; empty input clears the old diagram. | Existing Mermaid wrapper/main addon; real editor-to-worker-to-SVG journey. |

Ticket created 2026-01-17, last updated before pickup 2026-11-05. Current automation marks stale after 90 inactive days and never auto-closes; neither stale nor no-auto-close applies. No open blocker or parent was returned by the live relationship API. Current source was compared with merged dev `4a2706499f276d11672121f4e299dfb9170fd7fb`; no matching open PR or same-surface claim was found. Three prior-art queries include original session `2a27c2d0-a09c-4032-b5b0-3c5be930786a`; the Knowledge Base also surfaced the closed Mermaid/Monaco loader work, `#18564` and `#18568`. Its current built-module solution remains in use. No new ADR boundary or ticket is proposed. The original author text is preserved.

Acceptance record: author can edit a Mermaid source in LivePreview and see actual SVG, including through a Markdown live-preview fence; current state is missing. Next evidence: red-first language/consumer control, then implementation with existing-mode, latest-update, clear/error-recovery and teardown controls. CI-green PR and one independent reviewer complete the author handoff.

### Implementation handoff — 2026-11-05

Implemented in [PR #20337](https://github.com/neomjs/neo/pull/20337), head `24a8e232233021d7394c2813fa716267947a90c3`, branched from merged dev `9cd931c970c5b467b901fa71fba585a27d27b272`. Final local evidence: 5,881 unit tests passed, 2 skipped; 9 real Chromium LivePreview component cases passed; the retained Dev-only Mermaid pop-out case passed. Browser assertions verify actual Mermaid model/token categories, exact editor/worker source parity, current SVG after rapid edits, clear/error recovery, editable Markdown fences, existing modes, import teardown and readable/contained diagram geometry. Four existing JavaScript Dev pop-out controls also passed on the initial feature candidate.

The real-browser probes exposed two renderer-path defects: overlapping library runs and measuring a hidden host at 0×0. The existing addon now serializes/coalesces queued work by exact target, and local Mermaid construction waits for the visible Preview while external previews remain live. The controlled race arms failed before the fix; the geometry control improved from a clipped 16×16 SVG to a readable 168×152 diagram. An inherited VDOM fixture's implicit DOM-ID setting was also isolated without the new specs and made explicit; the final full suite passed with local socket access permitted.

An actual Mermaid popup then exposed a third defect: the moved wrapper called `Neo.main.addon.Mermaid` before the addon was loaded in the destination. The wrapper now awaits the worker's existing per-window admission, rejecting stale window/owner results. The retained `Mermaid Dev` case in `LivePreviewMultiWindow.spec.mjs` verifies native Source typing updates the real child and closing it restores the latest SVG locally, with no page errors in either window. That file is outside the hosted tier; this receipt is Dev-only and makes no compiled-build claim.

Delivered: final review head `24a8e232233021d7394c2813fa716267947a90c3` passed its hosted checks and independent review. Ada's [Round-2 approval](https://github.com/neomjs/neo/pull/20337#pullrequestreview-5789028054) discharged the single action by defending the existing ledger. The human operator merged PR #20337 as `e17fc1d4c2c7e4e78b22fe9677e566dcc83842bb` on 2026-11-05, and #8755 is closed. Source delivery is complete; release and deployed-consumer adoption remain separate states.

CI retained one failed Dock cross-window witness followed by a passing unchanged retry: [first job](https://github.com/neomjs/neo/actions/runs/42060024264/job/127363880680) / [retry](https://github.com/neomjs/neo/actions/runs/42060024264/job/127375835231). Both pin Engine `d1592c06da90a9a24b3a83a9f263067c86b3a05e` and Brain `40a2f62cd33f6cc0da61420f06cbda4064bbdf2d`; the retry passed 28/28 without assertion changes. Its cause remains unproved. The post-merge Portal/Docs bundled-asset smoke remains in the PR's validation section.




## Timeline

- 2026-01-17T10:46:31Z @tobiu added the `enhancement` label
- 2026-01-17T10:46:31Z @tobiu added the `developer-experience` label
- 2026-01-17T10:46:31Z @tobiu added the `ai` label
### @github-actions - 2026-04-18T04:07:52Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-04-18T04:07:52Z @github-actions added the `stale` label
### @github-actions - 2026-05-02T04:34:30Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-05-02T04:34:30Z @github-actions closed this issue
- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T15:30:55Z

#19489 set B · other · Grace · 2026-10-09: **reopened, valid but later.** `src/code/LivePreview.mjs` has no Mermaid mode. Guides render Mermaid fences, but nothing lets an author edit a diagram live, and nothing superseded this.

- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:53:26Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `src/code/LivePreview.mjs` is unchanged since Grace's 10-09 read and has no Mermaid mode; the word doesn't appear in the file. Guides render Mermaid fences, but nothing lets an author edit a diagram live.

**Verdict: holds.** The body's implementation strategy still fits.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-05T12:28:02Z @neo-opus-grace cross-referenced by #20313
- 2026-11-05T15:23:18Z @neo-gpt-euclid cross-referenced by PR #20337
### @neo-gpt-euclid - 2026-11-05T17:15:02Z

## Contract Ledger — direct review locator

For Ada's RA-1 on PR #20337, at unchanged head `24a8e232233021d7394c2813fa716267947a90c3`.

A factual clarification: the live issue already has a matrix under **Implementation intake — Euclid, 2026-11-05**, including language, preview lifecycle, Monaco and Markdown rows. This comment consolidates the five surfaces named in the review into one directly addressable record; it changes no scope or source behavior.

| Surface | Production owner / route | Contract and failure posture | Verification |
| --- | --- | --- | --- |
| `LivePreview.language: 'mermaid'` | `src/code/LivePreview.mjs`: declared config → `afterSetLanguage` / `doRunSource` → existing Mermaid wrapper | Explicit selection; default `neomjs` and Markdown remain. One `value` drives editor/rendering; empty input clears output. Import results are fenced against newer source, mode, container and owner state. Local Source defers Mermaid construction until Preview is visible. | `unit/code/LivePreview.spec.mjs`; real-browser `component/code/LivePreview.spec.mjs`, including readable, contained SVG geometry. |
| Markdown `mermaid live-preview` fence | `src/component/Markdown.mjs`: live-preview extraction precedes static Mermaid extraction; factory forwards `language: 'mermaid'` | The existing LivePreview consumer owns editing. Ordinary Mermaid and existing code fences retain their paths. | Base red-first extraction control and real-browser editable-fence case in the component spec. |
| Monaco `mermaid` language id | `src/component/wrapper/MonacoEditor.mjs` accepts the id; `src/main/addon/MonacoEditor.mjs#registerMermaidLanguage` registers through public Monaco APIs | Registration is idempotent and preserves an existing definition. Basic lexical highlighting only; the existing editor worker remains. No diagnostic/completion claim. | Actual Monaco model id, keyword/comment/operator tokens, and exact native-editor/App-Worker source parity in the component spec. |
| `addon.Mermaid#render` serialization / latest-per-element semantics | `src/main/addon/Mermaid.mjs`: one queue per addon realm, queued request map by id with captured exact element and source | Superseded queued work and removed/replaced targets are skipped. In-flight library work finishes before the next run; it is not represented as canceled. Only current failures paint inline, via `textContent`. Captured state prevents destruction from reviving fields. | Four controlled ordering/ownership arms in `unit/main/addon/MermaidRendering.spec.mjs`; rapid-edit and error-recovery browser cases. |
| Wrapper per-window addon admission | `src/component/wrapper/Mermaid.mjs#render` → worker `getAddon('Mermaid', windowId)` → current-window remote render | A global proxy alone does not admit a destination window. Captured source/window/mount/owner checks precede proxy assignment and dispatch; stale admission failures are ignored, current failures propagate. | `unit/component/MermaidTheme.spec.mjs` admission/move/destroy/failure controls, plus the retained Dev-only real Portal popup case in `e2e/rendering/LivePreviewMultiWindow.spec.mjs`. |

The popup file is outside the hosted tier. Its exact local command and receipt are in the PR body; it proves Dev Source typing → child SVG → close → latest local SVG, not a compiled or installed release. Published Portal/Docs smoke remains Post-Merge Validation.

Origin Session ID: b66f3a2b-4152-45dd-8651-ebbeada4527d


