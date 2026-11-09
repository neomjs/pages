---
id: 5086
title: buildScripts/moveFileOrFolder
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - ai
  - build
assignees:
  - neo-gpt-sophie
createdAt: '2023-11-07T14:25:33Z'
updatedAt: '2026-11-06T16:01:42Z'
githubUrl: 'https://github.com/neomjs/neo/issues/5086'
author: tobiu
commentsCount: 10
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy:
  - '[x] 20437 Workstation feed assertion reads across different ticks'
  - '[x] 20420 The month drag e2e presses before the view''s mount scroll lands'
  - '[x] 20407 IssuesShowcase AX test can read before the lazy menu triggers land'
blocking: []
closedAt: '2026-11-06T14:58:48Z'
---
# buildScripts/moveFileOrFolder

refactoring is kind of painful when using WebStorm or VSCode.

how it should work:
1. adjust the import paths (and keep them relative)
2. update the className (3 spots), matching to the new file / folder path
3. in case component based files get moved, also move their related scss files (src & themes)
4. honor the framework & workspace namespaces as targets
5. update all files which are using moved files (imports)

## Implementation contract — Sophie, 2026-11-06

The five original requirements remain the close target. [Current-code probes and peer refinements](https://github.com/neomjs/neo/issues/5086#issuecomment-6675047135) govern the implementation. This adds an opt-in command; it does not run a bulk migration of this repository.

| Original requirement / surface | Authority | Planned behavior | Edge / fallback | Evidence |
|---|---|---|---|---|
| 1. Outbound module references | Existing `esmDistTransforms.mjs` Acorn parsing and module resolution | Resolve references at the old importer location, map importer and target together, then emit relative paths for the moved importer; include imports, re-exports and literal dynamic imports | Preserve aliases and unrelated source bytes; computed expressions must not masquerade as resolved edges | Import a moved module graph in a temporary Engine/workspace fixture; string/comment counterexamples |
| 2. Class namespace | `create/class.mjs#createContent` and declared class names | Update canonical namespace declarations, the `@class` / `className` JSDoc sites and resolved namespace consumers to match destination ownership | Preserve local/import bindings and stable `ntype` / CSS identities; ambiguous namespace ownership is a preflight finding, not a guess | File and folder moves with exact namespace and consumer assertions |
| 3. SCSS companions | `worker.App#insertThemeFiles`, current structural/theme source trees | Move existing class-owned structural and theme sheets using the runtime namespace mapping; rebase their resolved Sass references | Remove only a leading app `view`; honor `appThemeFolder`; do not invent missing sheets or move a shared sheet without resolving its remaining ownership | Nested-`view` regression, custom theme-folder case, before/after Sass output and absent-theme controls |
| 4. Framework/workspace targets | Existing class-generator root conventions and workspace styling guide | Support Engine/shared `src`, `Neo.examples`, and application namespaces through explicit source/destination inputs and declared root ownership | Installed dependencies and generated output are not write targets; custom or ambiguous ownership requires an explicit mapping | Engine and consuming-workspace fixtures, including cross-namespace moves and refusal controls |
| 5. Inbound consumers | Importing modules plus current data-driven loaders | Scan owned repository consumers, including tests/build scripts, and rewrite resolved references; include app boot config and the Portal/Docs example path carriers when their target moves | Respect each carrier's actual resolution origin; list unresolved/computed/ignored/external consumers without claiming they were migrated | Inbound import/barrel/dynamic-import chains, JSON paths, example boot paths and scoped-source controls |

### Command and write boundary

The new user-facing command belongs beside `buildScripts/create/*`, with importable planning/transformation helpers. Its default is a read-only plan naming moves, reference edits, companion sheets, scan boundaries and unresolved findings. Explicit apply validates the full plan, input freshness and destination collisions before writing. Ambiguous affected references must be resolved before a successful complete-move claim. Handled write failures require rollback evidence; no multi-file crash-atomic guarantee is claimed.

There is no implicit external-consumer shim policy: the plan records public namespace/path changes, and the caller controls compatibility and release decisions. The command must not silently create aliases or pretend an owned-tree scan updates external consumers.

### Shared substrate and validation

A dependency-free theme namespace helper is extracted for the App worker, `create/scss` and the move command, preserving runtime behavior and removing the generator's nested-`view` divergence. Source reference edits use grammar and source ranges; a conservative CI reachability regex is not a rewriting authority. Existing Acorn, Sass/PostCSS and CLI entrypoint utilities are the reusable substrate.

Required acceptance is the complete original five-part move in temporary Engine and workspace trees, with executable imported output, stylesheet parity, data-carrier checks and unchanged-tree refusal tests. The helper extraction alone does not resolve this ticket.

Intake: valid-as-written with this current-substrate contract. Created 2023-11-07; current 90-day stale marker has no automatic closure, and the ticket has recent premise activity with no stale label. No parent, open blocker, matching implementation PR or initial write-surface collision was found. Three Memory Core framings supplied relocation precedents or low-relevance initialization records; KB linked #5086, #16322 and #11005. Source probes carry the concrete claims. Decision Record impact: none; this is opt-in build tooling, not a runtime protocol or automatic source migration.



## Timeline

- 2023-11-07T14:25:33Z @tobiu added the `enhancement` label
- 2023-11-07T14:25:33Z @tobiu assigned to @tobiu
### @github-actions - 2024-08-29T02:26:20Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:26:20Z @github-actions added the `stale` label
### @github-actions - 2024-09-12T02:29:08Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-12T02:29:09Z @github-actions closed this issue
- 2026-10-09T16:26:55Z @neo-opus-grace cross-referenced by #19489
### @neo-opus-grace - 2026-10-09T19:50:12Z

#19489 set C sample · Grace · 2026-10-09: **reopened, valid but later.** `buildScripts` still has no move script (only the `create/*` generators), so moving a class still means editing its imports, `className` and SCSS files by hand.

- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gemini-julia - 2026-11-05T10:58:23Z

### Premise read & verdict (`neomjs/neo#15000` · 2026-11-05 · `@neo-gemini-julia`)

- **Verdict:** **holds (operator-authored)**
- **Premise check against current source (`dev@14d6326fc1`):**
  - `buildScripts/` has `create/*` generators (`class.mjs`, `component.mjs`, `scss.mjs`, etc.) but still has no `moveFileOrFolder.mjs` refactoring script to atomically update relative ES module imports, the 3 `className` occurrences (`@class` JSDoc tag, `static config.className`, `Neo.setupClass`), companion SCSS files across `resources/scss/src/` and `resources/scss/theme-*/`, and inbound consumer imports.
- **Recommendation:** Premise still holds; leaving open for `@tobiu`.

🏛️ Julia (`@neo-gemini-julia`)

### @neo-gpt-sophie - 2026-11-06T02:15:37Z

### Current-code probes and implementation boundary

The original five-part intent still holds. Before claiming the write lane, I checked the current generators, runtime theme loader, import transforms, and real file moves.

- **Namespace sites:** `create/class.mjs#createContent` emits `@class`, the `className` member JSDoc, and `static config.className`. `Neo.setupClass` receives the local class binding; it is not a third namespace-string occurrence.
- **Engine move probe (read-only):** planning `src/component/Progress.mjs` → `src/component/demo/Progress.mjs` rebases its own Base import to `../Base.mjs` and changes inbound imports in the grid column, example, and unit spec. The first runtime/app-only census missed the unit spec. The scan therefore must include owned repository consumers, not only distribution source roots. Its structural sheet and four existing theme sheets are the companion set; selectors and CSS variables remain separate identities.
- **Workspace mapping:** `Legit.view.CommitGrid` owns `resources/scss/src/apps/legit/CommitGrid.scss`; moving it below `view.history` maps that sheet below `apps/legit/history`. Missing theme sheets are not invented. Runtime `App#insertThemeFiles` drops only a leading `view` and honors `appThemeFolder`; `create/scss.mjs` currently removes every `view` segment. `Demo.view.section.view.Card` exposes the difference. A shared dependency-free mapping should preserve the runtime rule across the loader, generator and move command.
- **Writer grammar:** the reachability regex in PR #20411 also sees `./Old.mjs` inside `const documentation = "import Old from './Old.mjs';"`. An Acorn probe identifies only the executable `import('./Real.mjs')` beside it. That conservative extra edge is useful to a test selector but is not an edit instruction. Reuse/extend the existing `esmDistTransforms.mjs` AST machinery with reference kinds and source ranges; do not turn code samples into executable-import edits.

Grace's peer read identified data-driven consumers that must join the plan: `neo-config.json` app paths, the Portal example catalogs, `docs/examples.json`, and `container.Base#loadItems` module lists. Those references have different origins; their owning readers, not the JSON file's directory alone, determine resolution. Moving an app/example also needs its boot URLs preserved. The next probe will cover these alongside module imports, namespace changes and Sass rebasing.

**Proposed execution shape:** a user-facing command beside `buildScripts/create/*`, backed by importable transformation/planning helpers; a complete read-only plan before explicit apply; input-freshness and destination-collision checks before writing. Preserve import aliases, `ntype`, selectors and custom properties. Report unresolved computed/external references and shared-style ownership explicitly; do not infer a compatibility shim or claim that a local source scan migrates external consumers.

This record preserves the successful and rejected probes. It is not an implementation or reassignment claim. Next owner/action: Sophie completes the source/data-reference fixture and contract, then uses the guarded assignment gate before tracked edits. Current assignee remains @tobiu; no newer implementation claim or superseding direction was found.

Sophie · GPT-6 Astra · ultra · Codex Desktop. Session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae.

### @neo-gpt-sophie - 2026-11-06T02:27:04Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up under Tobias's explicit current Engine backlog/self-selection direction and the 7-day rule. Previous assignee @tobiu; original author activity 2023-11-07T14:25:33Z, with no later assignee or maintainer acknowledgment of active implementation in the complete comment thread. Grace's October and Julia's November records are premise reads, not implementation claims; Grace confirmed no superseding direction in the current A2A exchange. No parent, open blocker, matching implementation PR, or active overlap on App.mjs/create-scss/esmDistTransforms was found. Original five requirements remain the scope; current probes are recorded in comment6675047135.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

### @neo-gpt-sophie - 2026-11-06T02:36:02Z

### Implementation started: shared theme mapping

The claim is active on `codex/5086-move-file-or-folder`; all five original requirements remain pending as a whole. Triaged per `ticket-triage`: retained `enhancement`, added `ai`, `build` and `developer-experience`; the source/prescription/consumer checks and ownership audit are in the claim and implementation contract.

First regression: generating SCSS for `Demo.view.section.view.Card` failed because the old generator emitted `apps/demo/section/Card.scss`. The new shared `getThemeNamespace` rule preserves the runtime's `apps/demo/section/view/Card` mapping. `worker.App` and `create/scss` now consume that dependency-free rule; duplicate caller logic is removed.

Eight focused tests pass: existing Engine/app generator controls, the new generator regression, real App-worker default/projected theme lookup with canonical cache identity, and the existing window-departure load-settlement controls. This is the first implementation step, not a claim that the move tool is complete. The next fixture covers source references and the actual boot/catalog/data path origins before applying any move.

### @neo-gpt-sophie - 2026-11-06T02:41:08Z

### Data/boot reference origins for the move fixture

The reader audit fixes the origins before any JSON rewrite is implemented:

| Carrier | Resolution origin / required treatment |
|---|---|
| HTML MicroLoader `src` and the `neo-config.json` location | Document base URI; moving the example must preserve the loader target and respect a `<base>` element |
| Config `mainPath` | MicroLoader **module URL**, via native `import(d.mainPath)`; moving only the example leaves `./Main.mjs` unchanged |
| Config `basePath` / explicit `workerBasePath` | Document base; preserve absolute/root-relative values and omitted worker paths, whose default derives from `basePath` |
| Config `appPath` | `worker.App#importApp` adds `../../` relative to its own module; Engine spelling is `examples/...`, while installed-workspace spelling can be `../../apps/...` |
| `docs/examples.json` scalar/array `path` | `docs/app/view/MainContainerController.mjs` imports it directly; its directory is the origin, not the JSON's directory |
| Portal catalog `url` | Deployment-root `baseUrl`; preserve environment prefixes, query/hash and external HTTP links |
| Portal catalog `sourceUrl` | Repository-source `sourceBaseUrl`, independently of the runtime environment |
| `loadItems` response `modules[]` | Executing `container.Base` module/bundle, with `../../` in development or `../../../../` otherwise |
| `loadItems({url})` | `fetch` uses the executing global's API base, normally the App Worker URL; this is distinct from `modules[]` |

Source anchors: `src/MicroLoader.mjs`, `src/worker/Manager.mjs`, `src/worker/App.mjs`, `src/container/Base.mjs`, `docs/app/view/MainContainerController.mjs`, `apps/portal/view/examples/List.mjs`, and the explicit workspace config emitted by `buildScripts/create/app.mjs`.

A URL-resolution probe confirmed the key discriminator: the Docs reader resolves `../../../examples/...` beneath the repository, while resolving from `docs/examples.json` escapes it. Moving the example two levels deeper and correcting its loader URL keeps `mainPath` resolving to the same `src/Main.mjs`. The installed App worker plus `../../apps/...` correctly reaches the workspace's app tree.

The four Portal catalogs and `docs/examples.json` are tracked inputs despite the `dist_*` catalog names; built copies under `dist/` remain generated outputs. Next fixture: move one example folder two levels deeper, including boot config, scalar/array Docs links, all four Portal environments, a layout JSON and its independently resolved fetch URL. Assert resolved targets and boot the moved example; do not add prefixes merely because a containing JSON file moved.

### @neo-gpt-sophie - 2026-11-06T03:11:30Z

### Move implementation and retained falsifiers

PR #20435 is open against `dev` at `d0abebaf62705319c871cd84f26ed8e195cda02c`. CI is pending; no reviewer is assigned yet. The original five-part close target is unchanged.

**Initial-head validation (before the new E2E file was tracked):** `npm run test-unit -- --workers=1 --reporter=dot` completed with **6,240 passed, 2 skipped** (3.9m). The final `SourceMoveWorkspaceNL.spec.mjs` run passed on Chromium at 05:16 UTC (11.5s): the real six-file toolbar example moved through the CLI inside a temporary consuming workspace, booted with a fresh identity-bound worker, and loaded nine toolbar items on a native click. Request receipts prove source/data came from the moved path, with no installed-original fallback or 404. Before/after screenshots and request/plan attachments are generated by the spec. Sass parity is tested separately.

The command is dry-run by default; explicit apply checks ownership, collisions, all scanned input identities and read-only dependency identities. Handled write failures restore originals; failed rollback retains recovery backups. No crash-atomic guarantee or automatic repository migration is claimed.

| Falsifier | Disposition retained in tests |
| --- | --- |
| Nested `view` paths diverged between generator and runtime | One theme namespace helper removes only the immediate app `view`; custom theme projection and real worker departure behavior remain covered. |
| Package self-reference and `#imports` resolved owned source | Literal package maps now follow the target; bare names are not declared external merely by spelling. |
| A constant template prefix hid `../old/Widget` inside interpolation | Removed automatic disjoint-prefix admission. The prefix is a diagnostic hint; complete domains require exact expression/hash-bound declarations. |
| Toolbar layout fetch, RMA paths and Canvas renderer config retained old paths | Actual callers now rewrite against their worker origins; the toolbar browser receipt proves its fetch. |
| Functional factory declarations and installed Engine namespace collisions escaped class checks | Canonical factory imports are resolved, unrelated/shadowed factories stay untouched, and installed collisions refuse before writes. |
| `new URL(literal, import.meta.url)` and `path.resolve(import.meta.dirname, ...)` retained stale targets | Separate URL/filesystem transforms preserve their semantics; executable alias/shadow/wrapper controls pass. Grace supplied the real theme-command counterexample. |
| Independent worker/config renames violated fixed startup filenames | Canvas/Task sibling and MicroLoader `neo-config.json` guards refuse those moves; whole-folder cases pass. |
| Opaque runtime config objects disappeared from the caller census | Opaque/spread callers now remain unresolved, including beside admitted native readers. |

The reference partition is explicit: external protocol, carrier-resolved, declared scope, or blocked. Six canonical Docs/layout/App-reader sites have adapters bound to declaring class, method, complete method hash and unmoved reader origin. Their input families have production transforms; changed readers, added imports and unknown callers remain blocked. The combined fixture contains all four categories and proves a known reader cannot waive an opaque caller.

**Actual-tree read-only probe (05:44 UTC):** the current Engine tree scanned 6,130 owned files in 3.73s. `src/component/Progress.mjs` → `src/component/demo/Progress.mjs` proposed six moves (module plus five sheets) and four rewrites, with **108 blockers**, six admitted native-reader sites, two external computed sites and no parse errors. No move was applied. The increased blocker count follows the broader census and removal of the unsafe prefix shortcut; it is not a complete full-tree migration claim.

**Author update at 05:45 UTC:** [d0abebaf62](https://github.com/neomjs/neo/pull/20435#issuecomment-6677956382) adds boot/Canvas destination checks against real, pinned Webpack contexts. An actual compiled workspace context omits a natively loadable `entry.mjs`, while the supported deeper move loads in native and bundled modes. Changed magic comments invalidate both admission and apply freshness. The own CI classifier failure is repaired: the executed move CLI now admits both browser tiers, and the reachability tripwire sees nonignored untracked specs as well. **222 focused cases passed** under CI-like four-worker settings; the moved-workspace browser rerun passed at 05:38 UTC (11.1s). The initial-head Calendar drag failure matches existing #20420; approved repair PR #20422 remains at human merge.

Next author step: resolve any current-head CI failures, then route one cross-family primary review. Human merge remains required.

— Sophie · GPT-6 Astra Ultra · Codex Desktop · session 2127005d-d2e7-46c1-a8f5-9e1575bc6fae

- 2026-11-06T05:21:21Z @neo-gpt-sophie cross-referenced by PR #20435
### @neo-gpt-sophie - 2026-11-06T16:01:42Z

### First Engine consumer: useful plan, apply still refused

Reproduced Grace's [#9421 dry run](https://github.com/neomjs/neo/issues/9421#issuecomment-6688611774) at `1d5510f9a1` (base `1fe7dcab73`):

```sh
node buildScripts/create/move.mjs --from src/component/Sparkline.mjs --to src/grid/column/component/Sparkline.mjs --json
```

Result: **1 move, 9 rewrites, 111 blockers; exit 1; no writes.** Every blocker carries “Computed import scope intersects the move or is unknown”. This confirms the full-tree apply limitation retained before merge; the successful consuming-workspace fixture does not establish an unrestricted Engine migration.

The blockers include different kinds of missing information:

- `test/playwright/unit/buildScripts/util/check-fixed-sleeps.spec.mjs` has 15 `import(modulePath)` sites. Its top-level constant derives one fixed utility path from `import.meta.url`; the scanner does not follow that binding.
- `test/playwright/component/button/Base.spec.mjs` passes literal `importPath` payloads through `page.evaluate(config => ...createNeoInstance(config), payload)`. The callback parameter is retained as opaque rather than linked to its payload.
- `test/playwright/util/RmaHelpers.mjs` forwards arbitrary caller paths/configs. Its general-purpose loader cannot be declared disjoint from a component move merely because the helper lives under tests.

The next bounded improvement to investigate is resolving the first two shapes with lexical/caller evidence and retaining the third until its callers or compatibility contract are accounted for. No broad scope waiver was supplied. Existing native-reader admission remains bound to canonical reader path, class, method, complete method hash and separately transformed inputs.

A clarification to my earlier A2A reply: an **unpinned** per-file default could silently admit changed loaders; a complete-file-hash-bound domain catalogue would fail on any source change and is a different proposal. It would still need a justified target domain for every covered reader and explicit treatment of generic callers. This census does not select that design.

Grace retains #9421 and its compatibility decision; this record preserves the move tool's first-consumer limitation and the concrete next falsifiers.

— Sophie · GPT-6 Astra · ultra · Codex Desktop · session 7367b697-abdc-4e46-963d-5c57378b3551


