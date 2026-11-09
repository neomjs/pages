---
id: 6997
title: Implement Effect Memoization
state: CLOSED
labels:
  - enhancement
  - no auto close
  - ai
  - core
assignees:
  - neo-gemini-julia
createdAt: '2025-07-09T10:57:37Z'
updatedAt: '2026-11-05T17:48:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6997'
author: tobiu
commentsCount: 3
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
closedAt: '2026-11-05T17:48:58Z'
---
# Implement Effect Memoization

### 1. Summary

Enhance the `Neo.core.Effect` system (or provide a utility around it) to support memoization for VDOM-generating methods. This will significantly improve rendering performance by caching the VDOM output and preventing unnecessary re-executions when component configs (inputs) have not changed.

### 2. Rationale

Functional components, driven by `Neo.core.Effect`, re-generate their VDOM whenever a tracked config changes. While efficient, re-generating complex VDOM trees can still be computationally intensive. By memoizing the output of pure VDOM-generating methods, we can avoid redundant work. If the inputs to `createVdom()` are the same as the last execution, the cached VDOM can be returned directly, bypassing the VDOM generation and worker communication steps.

### 3. Scope & Implementation Plan

1.  **Memoization Mechanism:** Design and implement a caching layer for `Neo.core.Effect` instances (or a new `MemoizedEffect` class). This mechanism will:
    *   Store the last computed VDOM output.
    *   Efficiently compare current inputs (tracked configs) with previous inputs to determine if re-execution is necessary.
    *   Invalidate the cache when inputs change.
2.  **Integration:** Determine how developers will opt-in to memoization (e.g., a config on `FunctionalBase`, a decorator, or a utility function).
3.  **Performance Testing:** Create benchmarks to measure the performance gains achieved through memoization, especially for components with complex VDOM structures or frequently updated but unchanged inputs.

### 4. Definition of Done

-   A memoization mechanism for `Neo.core.Effect` is implemented.
-   Functional components can leverage memoization to improve rendering performance.
-   Performance benchmarks demonstrate measurable gains.

### 5. Contract Ledger (Intake-Derived)

| Target Surface | Source of Authority | Proposed Behavior | Fallback / Edge Case | Docs | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Neo.functional.useMemo(fn, dependencies)` (`src/functional/useMemo.mjs`, re-exported via `src/functional/_export.mjs`) | Issue `#6997` · Epic `#6992` · `src/functional/useConfig.mjs` (`Symbol.for('hooks')` / `Symbol.for('hookIndex')` slot convention) | Memoizes the return value of `fn()` in `component[Symbol.for('hooks')][hookIndex++]`.<br>• **Explicit mode** (`Array.isArray(dependencies)`): inputs are `dependencies ∪ trackedConfigs`; reuses cached value when `dependencies.length` matches, every element passes `Object.is(next, prev) \|\| Neo.isEqual(next, prev)`, and every `Neo.core.Config` read inside `fn` passes `Object.is(cfg.get(), prevVal) \|\| cfg.isEqual(cfg.get(), prevVal)` (re-registering each config on the active `Effect`).<br>• **Automatic mode** (`dependencies === undefined`): tracks `Neo.core.Config` reads inside `fn` via `EffectManager` collector (`trackedConfigs.size > 0`) and reuses cached value when all tracked configs still pass `Object.is(cfg.get(), prevVal) \|\| cfg.isEqual(cfg.get(), prevVal)`. | • Throws `Error("useMemo must be called from within a functional component's createVdom method.")` when no active `Effect` or owning component exists.<br>• Calling other hooks (`useConfig`, `useEvent`, `useMemo`) inside `fn` is forbidden (cache hits skip `fn`, shifting subsequent hook slot indices).<br>• In automatic mode, plain outer-scope variables captured from `createVdom` are not tracked unless passed in `dependencies`. | Yes (`src/functional/useMemo.mjs` JSDoc, `learn/comparisons/NeoVsReact.md`) | `test/playwright/unit/functional/UseMemo.spec.mjs` (6 Playwright unit tests including child-component VDOM reconciliation, explicit+Config invalidation, and 8,000-item sort/checksum 30-update interleaved benchmark) |
| `Neo.functional.component.Base#processVdomForComponents` & `#generateIds` (`src/functional/component/Base.mjs`) | Issue `#6997` · `src/functional/component/Base.mjs:403-547` | Preserves existing child component instances in `#nextChildComponents` when encountering `{componentId}` references inside cached/memoized VDOM subtrees, and tracks auto-generated VDOM IDs via `Symbol.for('vdomAutoId')` so `generateIds` never overwrites `{componentId}` placeholders on cached renders. | Unreferenced child components absent from `#nextChildComponents` continue to be destroyed in cleanup step 6. | Yes (`src/functional/component/Base.mjs` JSDoc) | `test/playwright/unit/functional/UseMemo.spec.mjs` (`preserves child component instances inside a memoized VDOM subtree across unrelated parent re-renders`) |



## Timeline

- 2025-07-09T10:57:38Z @tobiu added parent issue #6992
- 2025-07-09T10:57:39Z @tobiu added the `enhancement` label
### @github-actions - 2025-10-08T02:38:37Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-10-08T02:38:38Z @github-actions added the `stale` label
- 2025-10-08T09:42:47Z @tobiu removed the `stale` label
- 2025-10-08T09:42:47Z @tobiu added the `help wanted` label
- 2025-10-08T09:42:48Z @tobiu added the `good first issue` label
- 2025-10-08T09:42:48Z @tobiu added the `no auto close` label
- 2025-10-08T09:42:48Z @tobiu added the `hacktoberfest` label
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-julia - 2026-11-05T10:31:42Z

### Backlog Premise Read (`2026-11-05` · `neomjs/neo#15000`)

- **Verdict:** **holds**
- **Premise check against `dev`:**
  - `src/functional/component/Base.mjs` executes `createVdom(config)` inside `me.vdomEffect = new Effect(...)` (`line 84`) and manages indexed hook slots (`me.hooks`, `me.hookIndex`) consumed by `useConfig` (`src/functional/useConfig.mjs:15-46`) and `useEvent` (`src/functional/useEvent.mjs:17-26`).
  - `useMemo(fn, dependencies)` has not been added yet under `src/functional/`. The hook contract proposed in this ticket (`EffectManager.getActiveEffect()`, reading/storing `{value, dependencies}` at `component.hooks[component.hookIndex++]` while `EffectManager.pause()`/`resume()` brackets non-tracked book-keeping) aligns cleanly with the current `src/functional/` implementation.

🏛️ **Julia** (`@neo-gemini-julia` · Gemini 4 Argon · Antigravity)

### @neo-gemini-julia - 2026-11-05T13:03:58Z

### Triage & Intake (`2026-11-05` · `neomjs/neo#15000` backlog execution)

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`, removed `needs-re-triage`). Stage retrospective passed.

- **Ticket reality classification:** `valid-as-written` (`Ticket age`: `createdAt 2025-07-09T10:57:37Z`, `updatedAt 2026-11-05T10:31:42Z`; `Bot stale-band`: `post-stale-with-exemption` with `no auto close`).
- **Prescription & Core-Idiom Pre-Flight (`src/Neo.mjs`, `src/core/Base.mjs`):**
  - `Prescription checked: src/functional/useMemo.mjs`, `src/functional/_export.mjs`, and `src/functional/component/Base.mjs — own the concern`.
  - Pre-Flight (structural fast-path): authoring `src/functional/useMemo.mjs` matches sibling pattern of `src/functional/useConfig.mjs` and `src/functional/useEvent.mjs` in `src/functional/`; sibling-file-lift applies; no novel directory choice.
  - Pre-Flight (structural fast-path): authoring `test/playwright/unit/functional/UseMemo.spec.mjs` matches sibling pattern of `test/playwright/unit/functional/Button.spec.mjs` in `test/playwright/unit/functional/`; sibling-file-lift applies; no novel directory choice.
- **Contract Ledger (Intake-Derived):**
  - Appended `### 5. Contract Ledger (Intake-Derived)` to the ticket body covering `Neo.functional.useMemo(fn, dependencies)` (signature, explicit `dependencies ∪ trackedConfigs` mode, automatic `trackedConfigs` mode, `Object.is` + `Neo.isEqual` / `cfg.isEqual` equality, no-hooks-inside-`fn` rule, error thrown outside `createVdom`) and `Neo.functional.component.Base#processVdomForComponents` / `#generateIds` (cached `{componentId}` preservation and `Symbol.for('vdomAutoId')` tracking).

🏛️ **Julia** (`@neo-gemini-julia` · Gemini 4 Argon · Antigravity)

- 2026-11-05T13:08:15Z @neo-gemini-julia cross-referenced by PR #20323

