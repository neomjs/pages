---
id: 3256
title: 'buildScripts/createClass: generate view => ask for view controller & model'
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - ai
  - build
assignees:
  - neo-gemini-julia
createdAt: '2022-07-03T22:28:35Z'
updatedAt: '2026-11-05T16:23:04Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3256'
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
closedAt: '2026-11-05T16:23:04Z'
---
# buildScripts/createClass: generate view => ask for view controller & model

in case a user generates any class extending `component.Base`, we can ask to create a related `controller.Component` and `model.Component` as well, which get hooked into the just generated view file.

## Timeline

- 2022-07-03T22:28:35Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-30T02:28:02Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:28:03Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:30:13Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:30:13Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:23:41Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid but later.** Generating a view with `create/class.mjs` still asks nothing about a matching controller or state provider.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-julia - 2026-11-05T10:58:17Z

### Premise read & verdict (`neomjs/neo#15000` · 2026-11-05 · `@neo-gemini-julia`)

- **Verdict:** **rewrite (narrowed) / holds (operator-authored)**
- **Premise check against current source (`dev@14d6326fc1`):**
  - `buildScripts/create/class.mjs` supports `baseClass` values `'component.Base'`, `'controller.Component'`, and `'state.Provider'` (`lines 121–128`; note `model.Component` was superseded by `state.Provider` in v10+).
  - When generating a `controller.Component` or `state.Provider` directly, `adjustViews()` (`buildScripts/create/class.mjs:420-655`) already locates and hooks the generated class into the matching view file.
  - However, the reverse prompt — asking whether to also generate and wire a companion `controller.Component` and `state.Provider` when generating a view (`component.Base` / `container.Base` subclass) — is still absent (`lines 130–390` only prompt for a companion `data.Model` when `baseClass === 'data.Store'`).
- **Recommendation:** Keep open for `@tobiu` with `model.Component` updated to `state.Provider`; implementation can reuse `adjustViews()` in `buildScripts/create/class.mjs:420-655`.

🏛️ Julia (`@neo-gemini-julia`)

### @neo-gemini-julia - 2026-11-05T13:44:11Z

### Ticket Triage & Intake Classification (`neomjs/neo#3256`)

Triaged per `ticket-triage` skill. Applied: `ai`, `build`, `developer-experience` alongside existing `enhancement`. Stage retrospective passed. Self-assigned (`@neo-gemini-julia`) and proceeding to implementation.

- **Ticket age:** `createdAt: 2022-07-03T22:28:35Z`, `updatedAt: 2026-11-05T10:58:17Z` (validated and reopened in `#19489` by `@neo-opus-grace`, `IC_kwDODSospM8AAAABaulTNQ`; premise verified in `#15000` by `@neo-gemini-julia`, `IC_kwDODSospM8AAAABjL5R_w`).
- **Bot stale-band:** `pre-stale` (`stale: false`, `no auto close: false`).
- **Prescription checked:** `buildScripts/create/class.mjs` — owns the concern.
  - `buildScripts/create/class.mjs` already prompts to create and wire a companion `data.Model` when `baseClass === 'data.Store'` (`--createModel` / `-M`, `lines 247-315`) and a companion `data.Store` when `baseClass === 'data.Model'` (`--createStore` / `-m`, `lines 330-376`).
  - Furthermore, when `createClass` generates `controller.Component` (`lines 694-708`) or `state.Provider` (`lines 730-744`), it already locates the sibling view file (`${viewName}.mjs`) and invokes `adjustView()` (`lines 518-635`) to insert the import statement and wire `controller` / `stateProvider` into `static config`.
  - When generating any view class (`isViewBaseClass(baseClass)` — walking each `src/` class's `@extends Neo.<ns>` chain up to `component.Base`), `buildScripts/create/class.mjs` accepts `-C, --createController <value>` and `-p, --createStateProvider <value>` (and prompts interactively with default `'no'` when `!isDrop` and not targeting framework `src/` classes) to generate and wire `${file}Controller` (`controller.Component`) and/or `${file}StateProvider` (`state.Provider`).
  - In `adjustView()`, treating underscore-prefixed private/protected configs (`className.startsWith('_')`, e.g. `_vdom` on `component.Base`) as coming after alphabetical public configs (`controller`, `stateProvider`) ensures `controller` and `stateProvider` are placed before `_vdom`.
- **Verdict:** `valid-as-written` (with `model.Component` modernized to `state.Provider` per v10+ architecture).

### 5. Contract Ledger (Intake-Derived)

| Surface / Artifact | Producer / Owner | Consumer(s) | Contract / Invariant | Failure Mode if Drifted | Verification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `buildScripts/create/class.mjs` (`-C, --createController <value>`, `-p, --createStateProvider <value>`) | `buildScripts/create/class.mjs` | Developers & CLI callers (`npm run create-class`) | Accepts `'yes'` or `'no'`; when omitted for a view class (`isViewBaseClass(baseClass)`), prompts interactively with default `'no'` unless `--drop` (`isDrop`) or targeting framework `src/` (`root === 'Neo' && !className.startsWith('Neo.examples')`) | Interactive prompt hangs `--drop` or framework `src/` runs, or CLI flags are ignored | `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` |
| `buildScripts/create/class.mjs` (`isViewBaseClass(baseClass)`) | `buildScripts/create/class.mjs` | View companion generation block | Walks each `src/<ns>.mjs` file's `@extends Neo.<ns>` JSDoc tag up to `component.Base` so any `component.Base` descendant (including `-b form.Container`, `-b container.Panel`, etc., outside the 5 interactive choices) qualifies as a view | Explicit `-C yes` / `-p yes` on a `component.Base` descendant outside the 5 interactive choices is silently dropped | `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` (`-b form.Container`) |
| `buildScripts/create/class.mjs` (`createClass` / `adjustView` companion wiring) | `buildScripts/create/class.mjs` | Generated `<View>.mjs`, `<View>Controller.mjs`, `<View>StateProvider.mjs` | Creates `<View>Controller.mjs` (`controller.Component`) and/or `<View>StateProvider.mjs` (`state.Provider`), or reuses pre-existing sibling companion files without overwriting them; wires imports and `controller` / `stateProvider` configs alphabetically before underscore-prefixed configs (`_vdom`) using `lastIndexOf('Controller')` / `lastIndexOf('StateProvider')` | Companion files overwrite existing code, miss views whose name contains `Controller`, or place public configs after `_vdom` | `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` |

🏛️ Julia (`@neo-gemini-julia`)

- 2026-11-05T13:49:32Z @neo-gemini-julia cross-referenced by PR #20324

