---
id: 7047
title: 'Task: Create Example for Deeply Nested Components'
state: CLOSED
labels:
  - documentation
  - enhancement
  - developer-experience
  - no auto close
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2025-07-14T14:03:06Z'
updatedAt: '2026-11-06T10:00:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7047'
author: tobiu
commentsCount: 7
parentIssue: 6992
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-11-06T10:00:23Z'
---
# Task: Create Example for Deeply Nested Components

## Summary

Create a new example under `examples/functional/` that demonstrates deep nesting of components, mixing both classic (class-based) and new functional components.

## Rationale

To properly showcase the power and flexibility of the new functional component architecture, we need an example that goes beyond simple parent-child relationships. This example should illustrate:

1.  A functional component hosting multiple child components.
2.  A functional component hosting a classic component, which in turn hosts another functional component.
3.  A classic component hosting a functional component.
4.  State being passed down through multiple levels of nesting.
5.  The reactive updates (`component.set()`) working correctly through the entire hierarchy.

This will serve as a clear, practical guide for developers on how to structure complex UIs and manage component composition effectively.

## Acceptance Criteria

-   A new folder is created under `examples/functional/`.
-   The example contains at least three levels of component nesting.
-   The nesting hierarchy includes a mix of functional and classic components.
-   The top-level component's state drives changes in the deeply nested children.
-   The example is clean, well-documented, and easy to understand.

## Intake contract — Sophie, 2026-11-06

The five original acceptance criteria above are unchanged. Current siblings cover functional-to-classic hosting and nested template markup; this example adds the missing functional → classic → functional component chain and its state propagation. The [executed composition probe](https://github.com/neomjs/neo/issues/7047#issuecomment-6673058787) demonstrated current Engine support without a source change.

| Target surface | Source of authority | Behavior | Fallback / edge case | Docs | Evidence |
|---|---|---|---|---|---|
| New `examples/functional/nestedComponents/` app | Original AC-1–3; `hostComponent/` sibling | A functional root owns a classic relay and a direct functional sibling; the relay owns a functional child | It is an interoperability example, not a change to class-based application guidance | Class/method JSDoc and visible hierarchy labels | Native example route and component parent-chain inspection |
| Root named `value` and `message` configs | Original AC-4; `functional.component.Base#diffAndSet`, `core.Base#set` | Visible controls apply both configs with `set()`; relay config hooks forward them to its existing child | Stable owner-derived IDs preserve instances; the classic relay does not rebuild its items on an update | Explain parent-controlled configs at the forwarding boundary | Native inputs + rendered values + App Worker configs |
| Independent leaf counters | Original AC-5; `functional/useConfig.mjs` | Two instances of one leaf class keep distinct local click counts as root values change | Re-rendering does not reset a counter or accumulate click handlers | Explain local state beside the hook | Native clicks before/after root updates; retained DOM nodes |
| Owned child lifetime | `functional.component.Base#destroy`, `container.Base#destroy` | Removing/destroying the root retires the relay, both leaves and their owned buttons | No module-global singleton IDs or manual instance registry | Ownership comments in the example | App Worker registry and DOM absence after root destruction |

Prescription checked: `examples/functional/hostComponent/` supplies the app shell and hosting pattern; `src/functional/component/Base.mjs` already reconciles child configs through `set()`. The classic relay uses ordinary reactive config hooks. No Engine API, global provider, custom renderer, or new state abstraction is required.

Decision Record impact: none. The later FM-specific class conversion in #14745 does not supersede this dedicated interoperability example.



## Timeline

- 2025-07-14T14:03:07Z @tobiu assigned to @tobiu
- 2025-07-14T14:03:08Z @tobiu added the `enhancement` label
- 2025-07-14T14:03:08Z @tobiu added parent issue #6992
### @github-actions - 2025-10-13T02:49:42Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-10-13T02:49:43Z @github-actions added the `stale` label
- 2025-10-24T10:05:50Z @tobiu removed the `stale` label
- 2025-10-24T10:05:50Z @tobiu added the `no auto close` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:53:13Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `examples/functional/hostComponent/` covers two levels: a functional component that hosts a classic `Button`, mounted in a classic container. Still missing are point 2's three-level mix (functional → classic → functional) and points 4–5: state passed down through several levels, and `set()` updates propagating through the whole hierarchy.

**Verdict: holds**, narrowed to points 2, 4 and 5.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-06T00:17:42Z

### Current composition probe

The remaining mixed-component intent still holds. `hostComponent` demonstrates a functional parent hosting a classic Button; `nestedTemplateComponent` nests template markup, rather than a functional → classic → functional component chain.

A read-only prototype against current Engine classes exercised that exact chain plus a direct functional sibling. A root `set({value: 8, message: 'updated'})` propagated from initial value `1` to the classic relay, its functional child, and the sibling. All three child instances retained identity; destroying the root destroyed each child. The mechanism is `functional.component.Base#diffAndSet` for parent-controlled named configs, with the classic relay using ordinary config hooks and `set()` on its owned child. No engine change was needed for this probe.

The implementation should make that propagation and retained local state visible in the example, and test the rendered result—not merely the configuration values. Stable functional child IDs and classic container ownership are the relevant boundaries. Julia reports no overlap with the completed `useMemo` work; this scoped `examples/functional/` interoperability example does not change the class-based application architecture preference.

No assignment transfer or implementation claim yet: the exposed Gallery mount-selection defect in #20409 has author-lifecycle priority. This record preserves the successful prototype and the next native acceptance step.


### @neo-gpt-sophie - 2026-11-06T01:11:11Z

Triaged per `ticket-triage`: preserved `enhancement` / `no auto close`; added `ai`, `documentation`, and `developer-experience` for the example implementation. The retrospective premise/prescription/substrate/consumer/boundary checks pass: current functional primitives support the requested interoperability, and a new frontend example owns the missing demonstration. No Engine API or application-architecture change is proposed.

Intake added an explicitly attributed Contract Ledger below the original body; the original five ACs remain unchanged. Current-source anchors and the successful prototype are retained in the existing [composition probe](https://github.com/neomjs/neo/issues/7047#issuecomment-6673058787). Parent #6992 remains closed and linked; I am completing its current pickup review before branching.

Sophie · GPT-6 Astra · ultra · Codex Desktop. Session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae.

- 2026-11-06T01:12:02Z @neo-gpt-sophie cross-referenced by #6992
### @neo-gpt-sophie - 2026-11-06T01:12:05Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per the 7-day rule and Tobias's current Engine backlog authorship direction. Previous assignee @tobiu; last assignee-authored issue activity is the original 2025-07-14T14:03:06Z filing. The complete comment thread contains no later assignee or maintainer acknowledgment of in-progress implementation; Ada's 2026-11-05 premise read and Sophie's current probe/intake are observer/validation records. No contributor claim, open matching PR, or open blocker was found. The closed parent6992 now has a scoped structured pickup review; original five ACs remain unchanged.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

### @neo-gpt-sophie - 2026-11-06T01:12:33Z

**Intake verdict: valid-as-written, with the existing five ACs made executable by the attributed ledger.** Created 2025-07-14T14:03:06Z; last pre-intake update 2026-11-06T00:17:42Z. Current automation is `mark-inactive-issues.yml`: 90 days to stale, no automatic closure; this recently active ticket has no `stale` label and retains its existing exemption. Age is not the currency evidence.

Current source and successor sweep: `hostComponent` is two-level hosting and `nestedTemplateComponent` is template markup. Closed nesting/config-diff work (#7057, #7053/#7054, #7086) supplies primitives, not this example. Later #6997 adds memoization, while #14745 is the FM app conversion; neither replaces the requested demonstration. No matching open PR or blocker was found. [Parent pickup review](https://github.com/neomjs/neo/issues/6992#issuecomment-6673933574) is complete.

Core-idiom read: `src/Neo.mjs` setup/resolution, `src/core/Base.mjs` configs/set/observation/lifetime, and `src/state/Provider.mjs` binding ownership. This example deliberately teaches parent-to-child composition; it does not replace application-wide provider bindings. ADR successor-risk: no-adr-impact after source/ADR sweep.

Structural fast-path: `examples/functional/nestedComponents/` follows `hostComponent/`'s Body app shell and `ConfigurationViewport`; new functional/classic modules stay with that example. The focused native spec follows rendering siblings. The public prototype already establishes feasibility; next acceptance is rendered controls → both leaves with independent counters, stable identities and destruction cleanup. Positive ROI: fill an old, precise learning gap without adding Engine machinery.

Sophie · GPT-6 Astra · ultra · Codex Desktop. Session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae.

### @neo-gpt-sophie - 2026-11-06T01:21:23Z

### Native acceptance and teardown boundary

The new `examples/functional/nestedComponents/` app passed a native Chrome/Neural Link run: visible inputs apply value `8` and a new message to the root; the classic relay and both functional leaves receive them. The leaf counters retain independent values `2` and `1`, then advance exactly once to `3` and `2`; DOM identity markers survive the root update. Removing the root through its owning Container retires the entire mixed subtree from both DOM and the component registry. The screenshot/trace is retained by `NestedComponentsNL.spec.mjs`.

A rejected teardown probe called functional `destroy(true)` directly. The registry teardown ran, but the parent's DOM stayed present. Current `functional.component.Base#destroy(updateParentVdom, silent)` forwards those arguments to `component.Abstract#destroy()`, which does not implement the parent-VDOM removal provided by `component.Base#destroy`. This is a distinct existing API discrepancy, routed to Ada against historical #7062 and flight-cancellation #19830; it is not hidden by an error whitelist or fixed inside the example. The example's ownership test uses the Container's documented removal path.

JSDoc generation also completed and produced no tracked class-hierarchy delta. The implementation adds only the example and its native test.

Sophie · GPT-6 Astra · ultra · Codex Desktop. Session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae.

- 2026-11-06T01:23:43Z @neo-opus-ada cross-referenced by #20414
- 2026-11-06T01:25:46Z @neo-gpt-sophie cross-referenced by PR #20415
- 2026-11-06T02:27:51Z @neo-gpt-euclid cross-referenced by PR #20416

