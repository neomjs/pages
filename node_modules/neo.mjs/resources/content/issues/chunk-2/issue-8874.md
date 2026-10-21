---
id: 8874
title: Investigate addVnodeComponentReferences Data Loss & TreeBuilder Symmetry
state: OPEN
labels:
  - discussion
  - ai
  - testing
  - core
  - needs-re-triage
assignees: []
createdAt: '2026-01-23T23:30:52Z'
updatedAt: '2026-10-09T14:19:30Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8874'
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
---
# Investigate addVnodeComponentReferences Data Loss & TreeBuilder Symmetry

**Context:**
`ComponentManager.addVnodeComponentReferences` flattens a Full VNode tree into References.
It creates references as `{componentId, id}`.
**Crucially, it discards all other properties (`style`, `cls`, etc.) from the node.**

**Problem:**
When `syncVnodeTree` applies this flattening to a component (e.g. `Child`), `Child._vnode` becomes a "naked" reference.
In the next update, `TreeBuilder` generates a "rich" reference from `vdom` (containing `style`, etc.).
`Helper` compares "Naked Old Reference" vs "Rich New Reference".
Result: **Attribute Mismatch** -> Unnecessary Deltas.

**Baseline Behavior:**
In the baseline, `syncVnodeTree` often skipped children (due to `getChildIds` filtering placeholders). `Child._vnode` remained Full.
`Helper` compares "Rich New Reference" vs "Full Old Node".
It seems `Helper` handles this "Pruning" case gracefully (ignoring the Full content).

**Goal:**
1.  Confirm `Helper`'s behavior for Reference vs Full (Pruning logic).
2.  Investigate if `addVnodeComponentReferences` SHOULD preserve attributes (creating "Rich References").
    *   If it did, `syncVnodeTree` could safely flatten trees without causing diffs.
    *   This would align `_vnode` state more consistently with the "Placeholder" concept.

**Tasks:**
1.  Create unit tests demonstrating "Naked Reference" vs "Rich Reference" diffs in `Helper`.
2.  Prototype `addVnodeComponentReferences` preserving attributes.
3.  Evaluate impact on `syncVnodeTree` logic.

This explains the "Extra Delta" regression encountered in #8868.

## Timeline

- 2026-01-23T23:31:00Z @tobiu added the `discussion` label
- 2026-01-23T23:31:00Z @tobiu added the `ai` label
- 2026-01-23T23:31:00Z @tobiu added the `testing` label
- 2026-01-23T23:31:00Z @tobiu added the `core` label
### @tobiu - 2026-01-23T23:33:48Z

**Input from Gemini 3 Pro:**

> ✦ **Refinement based on Architectural Intent:**
> 
> The user clarified the intended architecture:
> 1.  `vdom` contains lightweight references (componentId + id).
> 2.  `addVnodeComponentReferences()` is **intended** to flatten VNode trees into this **exact same shape**.
> 3.  `TreeBuilder` is then expected to expand both (if needed) in an identical way.
> 
> **Investigation Pivot:**
> The "Attribute Mismatch" theory might be incorrect if `vdom` references are indeed naked.
> The investigation should focus on:
> 1.  Verifying that `vdom` references and `addVnodeComponentReferences` outputs are indeed **structurally identical**.
> 2.  Checking if `TreeBuilder` respects this symmetry under all `depth` conditions.
> 3.  Understanding why the "Extra Delta" occurred in #8868 when we enforced this flattening (via `syncVnodeTree`). It implies that for that specific test case, the "Flattened" state produced a different result than the "Full" state, which shouldn't happen if the pruning logic is perfect.
> 
> This ticket should verify the "Happy Path" symmetry and identify why it drifted in the regression case.

### @tobiu - 2026-01-23T23:36:59Z

**Input from Gemini 3 Pro:**

> ✦ **Final Architecture Confirmation:**
> 
> The user provided further evidence from `Container.Base.insert`, which also uses `createVdomReference()`.
> This confirms that the **VDOM protocol** is strictly:
> *   **Containers/Parents** hold **References** (`{componentId}`) to their children.
> *   **Components** hold their own **Full VDOM** (`_vdom`).
> *   **TreeBuilder** is the bridge that expands References into Full Trees for the Worker.
> *   **addVnodeComponentReferences** is the inverse bridge, flattening Worker Full Trees back into References for the App.
> 
> **Conclusion for Investigation:**
> The "Data Loss" hypothesis is definitely incorrect because the "Lost Data" (attributes on placeholders) *should not exist* in the VDOM reference model.
> The investigation in this ticket must focus on why the **Transition** (from Full to Flattened) triggered a reaction in `Helper` in the specific regression case. It implies `Helper` or `TreeBuilder` handled the "Flattened" structure differently than the "Full" structure in a way that produced a delta, despite them being logically equivalent after expansion.
> 
> This ticket is now purely about verifying and hardening this **Symmetry**.

### @tobiu - 2026-01-23T23:40:50Z

**Input from Gemini 3 Pro:**

> ✦ **Insights from Documentation (v10 Deep Dive & Asymmetric Updates):**
> 
> 1.  **Architectural Intent:** The documentation explicitly states that a container's `vdom` property "just lists its children" (references), and `TreeBuilder` is responsible for "intelligently expanding" them. This confirms that `syncVnodeTree`'s role in flattening the structure (via `addVnodeComponentReferences`) is architecturally correct: it resets the component's state to the "Reference Model" after a "Full Model" update from the worker.
> 
> 2.  **The "Extra Delta" Mystery:** Since `TreeBuilder` expands references into full structures before sending to `Helper`, the "Flattened" state (in App Worker) and "Full" state (in VDom Worker) should theoretically produce identical expanded outputs for `Helper` to compare. The fact that they don't (causing the regression) suggests that `addVnodeComponentReferences` might be **lossy** in a way that `TreeBuilder` cannot recover from.
> 
> **Hypothesis:** `addVnodeComponentReferences` might be stripping **Wrapper Nodes** or specific structural metadata that `TreeBuilder` relies on to reconstruct the full tree correctly. If `TreeBuilder` expands a "Naked Reference" differently than a "Reference with Wrapper Metadata", `Helper` will see a mismatch.
> 
> **Action Item:** Investigate if `addVnodeComponentReferences` correctly handles wrapped components and preserves necessary metadata for `TreeBuilder`.

### @github-actions - 2026-04-24T04:31:31Z

This issue is stale because it has been open for 90 days with no activity.

- 2026-04-24T04:31:31Z @github-actions added the `stale` label
### @github-actions - 2026-05-09T04:41:10Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2026-05-09T04:41:10Z @github-actions closed this issue
- 2026-10-09T13:16:49Z @neo-opus-grace cross-referenced by #19489
### @neo-gpt-sophie - 2026-10-09T14:19:17Z

### Set-B triage: preserve the corrected symmetry investigation

The [January 23 operator clarification](https://github.com/neomjs/neo/issues/8874#issuecomment-3793019503) already rejected the body's “lost attributes require rich references” premise. Parents hold references; each component holds its own complete tree. The remaining question is the Full → reference → expanded transition, especially wrappers. The bot closure did not answer it.

A bounded probe on today's Engine source (`f3b462e84f` helpers, Node 24.19.0) used a real Container, an ordinary styled/text child, and a wrapped child. After initialization/settlement, it built a full old vnode with `TreeBuilder.getVnodeTree(root.vnode, -1)`, flattened it with `addVnodeComponentReferences(full, root.id)`, and compared both old representations against the same current VDOM through the real TreeBuilder and Helper.

| Old representation / scope | Unchanged data | Root style changed |
|---|---:|---:|
| Normal flattened tree: depth 1, depth 2, sparse ordinary child, sparse wrapped child, full depth | 0 deltas in all five | 1 delta in all five |
| Explicitly expanded old tree: depth 2, full depth | 0 deltas | 1 delta |
| Explicitly expanded old tree: depth 1, either sparse scope | Helper identity guard throws | same guard throws |

The wrapper reference keeps the wrapper ID and the component keeps its own full vnode. **No normal production-path data loss was reproduced.** The constructed expanded-old-tree comparison is not proof that a running app reaches that input; it is also not a passing symmetry control. A future intake should first establish whether that input is reachable after a real lifecycle transition before proposing any Helper repair. The current `AutoId` wrapper and prior-sibling tests pass, but do not by themselves settle this broader transition question.

[ARCH_ALIGNMENT] Reopen the investigation with `needs-re-triage`, not as a release-blocking bug. The body must be narrowed to the operator's corrected question before implementation; do not implement rich references from its superseded prescription. This is separate from the naturally reproduced and actively repaired #8890.

Triaged per `ticket-triage`; existing domain labels retained. Parent sweep: #19489.

- 2026-10-09T14:19:22Z @neo-gpt-sophie added the `needs-re-triage` label
- 2026-10-09T14:19:24Z @neo-gpt-sophie removed the `stale` label
- 2026-10-09T14:19:30Z @neo-gpt-sophie reopened this issue

