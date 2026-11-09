---
id: 3255
title: 'buildScripts/createClass: generate data.Model => ask for data.Store'
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - ai
  - build
assignees:
  - neo-gemini-maryam
createdAt: '2022-07-03T22:27:06Z'
updatedAt: '2026-11-03T15:37:37Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3255'
author: tobiu
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
closedAt: '2026-11-03T15:37:37Z'
---
# buildScripts/createClass: generate data.Model => ask for data.Store

In case a user wants to generate a `data.Model`, we can then ask a question to automatically generate a `data.Store`, using the just generated model.

## Timeline

- 2022-07-03T22:27:06Z @tobiu added the `enhancement` label
- 2022-07-20T06:49:53Z @tobiu referenced in commit `aba2f69` - "#3255 todo"
### @github-actions - 2024-08-30T02:28:03Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:28:04Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:30:15Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:30:15Z @github-actions closed this issue
- 2026-10-09T20:23:34Z @neo-opus-grace reopened this issue
- 2026-10-09T20:23:36Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:23:37Z

#19489 set C · T4 · Grace · 2026-10-09: **reopened, valid but later.** `buildScripts/create/class.mjs` still carries the todo for this ("add a question for auto-generating a matching store").

- 2026-10-09T20:23:54Z @neo-opus-grace cross-referenced by #3602
- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T07:58:03Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T07:58:03Z @neo-gemini-maryam added the `build` label
- 2026-11-03T07:58:03Z @neo-gemini-maryam added the `developer-experience` label
- 2026-11-03T07:58:07Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T07:58:11Z

Triaged per `ticket-triage` skill. Applied: `ai`, `build`, `developer-experience` (alongside existing `enhancement`). Stage retrospective passed. Self-assigned for implementation.

### Ticket Intake & Contract Ledger (`ticket-intake` §0 / §1.7 / §1.8)

- **Prescription check (`§0`):**
  - `buildScripts/create/class.mjs` still carries `if (baseClass === 'data.Model') { // todo: add a question for auto-generating a matching store }` at `L252–254`.
  - In addition, inside `createClass()` (`case 'data.Store'` at `L500–502`), `if (importName.endsWith('ies')) { importName.replace(new RegExp('ies$'), 'y') }` fails to assign the result of `.replace(...)` back to `importName`, so stores ending in `ies` (e.g. `Companies` -> `Company`) fail to wire their matching `data.Model`.
  - Adding a `--createStore <value>` CLI option and an interactive prompt (`Do you want to create a matching data.Store?`, `yes`/`no`) when `baseClass === 'data.Model'` — which passes the newly written `modelFile` and `modelName` directly to `createClass({baseClass: 'data.Store', ...})` with collision-safe model import naming — plus fixing the `ies` singularization assignment in `case 'data.Store'`, completes the bidirectional `data.Model` <-> `data.Store` generator flow.

#### Contract Ledger

| Surface | Path / Symbol | Contract | Verification |
|---|---|---|---|
| `create-class` `data.Model` -> `data.Store` prompt & CLI flag | `buildScripts/create/class.mjs` | Prompts `Do you want to create a matching data.Store?` (or reads `-m, --createStore <value>`) when `baseClass === 'data.Model'`, derives the pluralized `.store.` class and folder, passes the exact generated `modelFile`/`modelName`, disambiguates collision-prone model identifiers (`Store` -> `StoreModel`), and generates the `data.Store` wired to the newly created `data.Model`. | `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` |
| `create-class` `data.Store` `ies` singularization | `buildScripts/create/class.mjs` (`case 'data.Store'`) | Assigns `importName = importName.replace(/ies$/, 'y')` so stores ending in `ies` resolve and import their matching `y`-ending `data.Model`. | `test/playwright/unit/buildScripts/createClassModelStore.spec.mjs` |

#### Ticket Reality Classification (`§1.8`)

- **Ticket age:** `createdAt: 2022-09-14`, `updatedAt: 2026-10-09T20:23:37Z` (reopened and validated in `#19489` set C · T4 by `@neo-opus-grace`).
- **Bot stale-band:** `post-stale-with-exemption` (reopened in `#19489`).
- **Currency / successor-risk evidence:** Verified against live `buildScripts/create/class.mjs` (`L252–254`, `L495–522`).
- **Verdict:** `valid-as-written`.

— Maryam 🧭

- 2026-11-03T08:13:54Z @neo-gemini-maryam cross-referenced by PR #20232
- 2026-11-03T09:08:53Z @neo-gemini-maryam referenced in commit `8236d91` - "fix(build): bind companion Store to exact Model and disambiguate Store model import (#3255)"
- 2026-11-03T15:37:37Z @tobiu referenced in commit `254c15a` - "feat(build): ask to generate matching data.Store when creating data.Model (#3255) (#20232)

* feat(build): ask to generate matching data.Store when creating data.Model (#3255)

* fix(build): bind companion Store to exact Model and disambiguate Store model import (#3255)"
- 2026-11-03T15:37:38Z @tobiu closed this issue
- 2026-11-03T17:53:48Z @neo-gemini-maryam cross-referenced by PR #20257

