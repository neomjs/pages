---
id: 3602
title: Enhance create class build script
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - ai
  - build
assignees:
  - neo-gemini-maryam
createdAt: '2022-12-15T16:33:30Z'
updatedAt: '2026-11-04T12:17:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3602'
author: Krytechs
commentsCount: 4
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
closedAt: '2026-11-04T12:17:47Z'
---
# Enhance create class build script

Is your feature request related to a problem? Please describe.
a strong dev tool helps new developers to see connections between different components of a framework

Describe the solution you'd like
When I use the create-class command line interface and want to create a store it should ask me whether I want to also implement a model.

The correct way of implementation depends on the driving part. What is the core in this store/model system which is the driving part? Depending on that this should be the master and requests if you want to add the slaves.

---

## Contract Ledger (`ticket-intake §1.7` claimer-authored sharpening)

| Target Surface | Source of Authority | Proposed Behavior | Fallback | Docs | Evidence |
|---|---|---|---|---|---|
| `neo-cc` (`package.json` `bin.neo-cc` -> `buildScripts/create/class.mjs`): `-M, --createModel <value>` CLI option & interactive prompt when `baseClass === 'data.Store'` | `#3602` + `@neo-opus-grace` `#19489 set C · T4` (`IC_kwDODSospM8AAAABaulfBw`) + review `5758186370` (`RA-2` / `RA-3`) | Single store->model resolver in `buildScripts/create/class.mjs`: when `baseClass === 'data.Store'`, derive the singularized model name (`-ies` -> `-y`, trailing `-s` -> singular) and `model` namespace (`store` -> `model` or `[...ns, 'model']`). If an existing model file is present at either `<modelClassFolder>/<modelName>.mjs` or beside the store (`<classFolder>/<modelName>.mjs`), wire it directly without prompting. Otherwise, check `-M, --createModel <value>` (`'yes'` \| `'no'`) or prompt `Do you want to create a matching data.Model?` (when `!isDrop`); when `'yes'`, generate the `data.Model` file at `<modelClassFolder>/<modelName>.mjs` and wire `import <Model> from '<relativePath>';` + `model: <Model>` into the generated `data.Store` (with `createClass`'s existing `while (importName === baseFileName \|\| importName === file)` loop aliasing `Store` -> `StoreModel`). | When `'no'`, or when `-d/--drop` is used without `-M yes` and no existing model file is found, only the `data.Store` class is created. | CLI `--help` option description (`-M, --createModel <value>`) in `buildScripts/create/class.mjs` | Unit tests in `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` (`6` tests in `#3602` describe block, `11/11` total across the file) |
| `neo-cc` (`package.json` `bin.neo-cc` -> `buildScripts/create/class.mjs`): `-m, --createStore <value>` CLI option & interactive prompt when `baseClass === 'data.Model'` (companion pair shipped in `#3255` / `PR #20232`) | `#3255` (`PR #20232`) + review `5758186370` (`RA-3`) | When `baseClass === 'data.Model'`, check `-m, --createStore <value>` (`'yes'` \| `'no'`) or prompt `Do you want to create a matching data.Store?` (when `!isDrop`). When `'yes'`, derive the pluralized store name (`[^aeiou]y$` -> `-ies`, else `-s`) and `store` namespace (`model` -> `store` or `[...ns, 'store']`), generate the companion `data.Store`, and pass `modelFile` + `modelName` into `createClass` so the store imports the new model. | When `'no'`, or when `-d/--drop` is used without `-m yes`, only the `data.Model` class is created. | CLI `--help` option description (`-m, --createStore <value>`) in `buildScripts/create/class.mjs` | Unit tests in `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` (`5` tests in `#3255` describe block, `11/11` total across the file) |


## Timeline

- 2022-12-15T16:33:30Z @Krytechs added the `enhancement` label
### @github-actions - 2024-08-30T02:27:37Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:37Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:39Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:39Z @github-actions closed this issue
- 2026-10-09T20:23:50Z @neo-opus-grace reopened this issue
- 2026-10-09T20:23:52Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:23:53Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid but later.** Thank you @Krytechs. `create/class.mjs` still does not offer a model when generating a store, nor the reverse (#3255).

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T17:47:52Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T17:47:52Z @neo-gemini-maryam added the `build` label
- 2026-11-03T17:47:52Z @neo-gemini-maryam added the `developer-experience` label
- 2026-11-03T17:47:56Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T17:48:00Z

### Ticket Triage & Intake (`#3602`)

Triaged per `ticket-triage` skill. Applied: `ai`, `build`, `developer-experience` alongside `enhancement`. Stage retrospective passed. Self-assigned for implementation.

#### Validation Sweep & Prescription Check (`ticket-intake §0` / `§1`)
- **Prescription checked:** `buildScripts/create/class.mjs` — owns the concern.
- **Ticket age & stale-band:** `updatedAt: 2026-10-09T20:23:53Z` (reopened and validated by `@neo-opus-grace` in `#19489 set C · T4`, `IC_kwDODSospM8AAAABaulfBw`); `pre-stale` (`stale: false`, `no auto close: false`).
- **Currency & Successor-Risk Evidence:** `PR #20232` (`#3255`) added the `data.Model -> data.Store` companion prompt (`-m, --createStore <value>`). In the `data.Store -> data.Model` direction (`#3602`), `createClass()` (`buildScripts/create/class.mjs:546-585`) already links an existing `data.Model` file into a generated `data.Store`, but `create/class.mjs` still does not offer to create the matching `data.Model` when generating a `data.Store` whose model file does not yet exist.
- **Verdict:** `valid-as-written`.

#### Contract Ledger (`ticket-intake §1.7` sharpening — `neo-cc` companion CLI options)

| Target Surface | Source of Authority | Proposed Behavior | Fallback | Docs | Evidence |
|---|---|---|---|---|---|
| `neo-cc` (`package.json` `bin.neo-cc` -> `buildScripts/create/class.mjs`): `-M, --createModel <value>` CLI option & interactive prompt when `baseClass === 'data.Store'` | `#3602` + `@neo-opus-grace` `#19489 set C · T4` (`IC_kwDODSospM8AAAABaulfBw`) + review `5758186370` (`RA-2` / `RA-3`) | Single store->model resolver in `buildScripts/create/class.mjs`: when `baseClass === 'data.Store'`, derive the singularized model name (`-ies` -> `-y`, trailing `-s` -> singular) and `model` namespace (`store` -> `model` or `[...ns, 'model']`). If an existing model file is present at either `<modelClassFolder>/<modelName>.mjs` or beside the store (`<classFolder>/<modelName>.mjs`), wire it directly without prompting. Otherwise, check `-M, --createModel <value>` (`'yes'` \| `'no'`) or prompt `Do you want to create a matching data.Model?` (when `!isDrop`); when `'yes'`, generate the `data.Model` file at `<modelClassFolder>/<modelName>.mjs` and wire `import <Model> from '<relativePath>';` + `model: <Model>` into the generated `data.Store` (with `createClass`'s existing `while (importName === baseFileName \|\| importName === file)` loop aliasing `Store` -> `StoreModel`). | When `'no'`, or when `-d/--drop` is used without `-M yes` and no existing model file is found, only the `data.Store` class is created. | CLI `--help` option description (`-M, --createModel <value>`) in `buildScripts/create/class.mjs` | Unit tests in `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` (`6` tests in `#3602` describe block, `11/11` total across the file) |
| `neo-cc` (`package.json` `bin.neo-cc` -> `buildScripts/create/class.mjs`): `-m, --createStore <value>` CLI option & interactive prompt when `baseClass === 'data.Model'` (companion pair shipped in `#3255` / `PR #20232`) | `#3255` (`PR #20232`) + review `5758186370` (`RA-3`) | When `baseClass === 'data.Model'`, check `-m, --createStore <value>` (`'yes'` \| `'no'`) or prompt `Do you want to create a matching data.Store?` (when `!isDrop`). When `'yes'`, derive the pluralized store name (`[^aeiou]y$` -> `-ies`, else `-s`) and `store` namespace (`model` -> `store` or `[...ns, 'store']`), generate the companion `data.Store`, and pass `modelFile` + `modelName` into `createClass` so the store imports the new model. | When `'no'`, or when `-d/--drop` is used without `-m yes`, only the `data.Model` class is created. | CLI `--help` option description (`-m, --createStore <value>`) in `buildScripts/create/class.mjs` | Unit tests in `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` (`5` tests in `#3255` describe block, `11/11` total across the file) |

Authored by Maryam (Gemini 4 Argon, Antigravity). Session `f6c28a82-1400-4f2c-9d74-e81b65cb73d8`. 🧭

- 2026-11-03T17:53:48Z @neo-gemini-maryam cross-referenced by PR #20257
- 2026-11-03T19:25:50Z @neo-gemini-maryam referenced in commit `fa33160` - "feat(build): prompt to create matching data.Model when generating data.Store (#3602)"
- 2026-11-03T19:25:50Z @neo-gemini-maryam referenced in commit `d9eeaef` - "fix(build): unify store-to-model resolution and remove dead collision branch (#3602)"
- 2026-11-04T12:17:47Z @tobiu referenced in commit `6507d7f` - "feat(build): prompt to create matching data.Model when generating data.Store (#3602) (#20257)

* feat(build): prompt to create matching data.Model when generating data.Store (#3602)

* fix(build): unify store-to-model resolution and remove dead collision branch (#3602)"
- 2026-11-04T12:17:48Z @tobiu closed this issue

