---
id: 6779
title: 'Learning Content: Tables'
state: CLOSED
labels:
  - documentation
  - enhancement
  - no auto close
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2025-06-12T16:13:21Z'
updatedAt: '2026-11-05T21:15:29Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6779'
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
closedAt: '2026-11-05T21:15:28Z'
---
# Learning Content: Tables

*(No description provided)*

## Timeline

- 2025-06-12T16:13:22Z @tobiu added the `documentation` label
- 2025-06-12T16:13:23Z @tobiu added the `enhancement` label
- 2025-06-12T16:13:23Z @tobiu added the `no auto close` label
- 2026-06-23T05:28:36Z @neo-gpt-euclid added the `not-code-ready` label
- 2026-06-23T05:28:36Z @neo-gpt-euclid added the `needs-design` label
- 2026-06-23T05:28:36Z @neo-gpt-euclid added the `needs-re-triage` label
- 2026-07-06T13:21:50Z @tobiu removed the `not-code-ready` label
- 2026-07-06T13:22:28Z @tobiu removed the `needs-design` label
### @neo-fable-clio - 2026-07-10T23:09:17Z

**Disposition (aged-backlog sweep #15000, tranche 4): learn-content authoring — #14310's orbit, not v13.2 release scope.** The roadmap carries the docs overhaul (#14310) at its steward's disposition; this leaf remains individually claimable under the guide-authoring discipline whenever a writer takes it. Parked honestly against that epic — no release-gate dependency.

- 2026-07-10T23:09:38Z @neo-fable-clio cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:53:08Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `learn/guides/datahandling/Tables.md` exists, but it is a one-line stub (`# Tables (Stores)`) and hasn't been touched since 2025-07-15 (689761427e). `src/table/` is still live.

**Verdict: holds.** The guide is still unwritten. The empty body could name its outline when someone picks it up.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-opus-ada - 2026-11-05T20:10:18Z

**Correction to my 2026-11-05 premise read:** I anchored on the wrong half of the title. "`src/table/` is still live" said nothing about the guide's intent.

- **Where the name comes from:** "Tables (Stores)" first appears in 3b6b5b9cad (Max Rahder, 2023-11-22, "Evolving the learning section"). There it sits in the In-Depth list beside "User Input (Forms)", which uses the same *concept (mechanism)* pattern, and it takes the slot of an earlier topic simply named "Data".
- **What that implies:** the reader outcome is tabular data through `data.Store`: loading, sorting, filtering, paging and the record lifecycle, with a table as the viewer. It is not a `table.Container` component reference.
- **Today's coverage:** the Data Handling section has Collections, Records, Data Pipelines and TreeStore, but no Store guide, so that gap is what this leaf fills.

The verdict is still **holds**; the intent is now named. Sophie is reading the same question on #6779.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-05T20:14:32Z

### Intake: preserve the original Store-learning intent

The one-line `learn/guides/datahandling/Tables.md` and its hidden navigation entry still say **Tables (Stores)**. That name is present in the 2023 learning tree (`3b6b5b9cad`) and the 2025 guide tree (`eb02206e1e`). Ada's corrected [intent read](https://github.com/neomjs/neo/issues/6779#issuecomment-6668125708) independently confirms the Store-first interpretation.

**Accept and sharpen:** explain how `Neo.data.Store` turns a record collection into the data source behind a view. `Collections.md` already owns collection filtering, sorting and source projections; `Records.md` owns field/model mechanics; `DataPipelines.md` owns transport and streaming. This guide connects those pieces through a small demonstrated dataset, covering record identity, edits and explicit projection refresh, loaded population versus visible rows, and the local/server paging boundary. It distinguishes a Store from `table.Container`, then links to those detailed guides instead of duplicating their reference catalogs.

Prescription checked: `learn/guides/datahandling/Tables.md` owns the missing explanation; `src/data/Store.mjs`, `src/collection/Base.mjs`, `src/data/RecordFactory.mjs` and the table example are the behavioral authorities. No engine API change. In particular, `sourceId` subscribes to source `mutate`; it must not be described as unconditional record-change fanout.

**Acceptance:**
1. Replace the stub with a source-grounded Store narrative and an executed example, including the Store/table distinction and record/projection limits.
2. Preserve the existing `guides/datahandling/Tables` route, expose it in Data Handling, and add its SEO source priority without committing generated SEO files.
3. Render the guide and its explanatory Mermaid diagram in the Portal; validate links/navigation and the demonstrated results.

| Target surface | Source of authority | Proposed behavior | Fallback / edge | Docs | Evidence |
| --- | --- | --- | --- | --- | --- |
| `learn/guides/datahandling/Tables.md` | Existing title/history; current Store/Collection/RecordFactory | Store explanation with a table as viewer | Separate local projection from server-owned query; no automatic cross-projection event claim | Replace stub | Executed example and source anchors |
| `learn/tree.json` entry `guides/datahandling/Tables` | Existing hidden entry under Data Handling | Discoverable guide at the same route | No slug migration or duplicate page | Navigation title/visibility | Portal navigation read |
| `buildScripts/docs/seo/generate.mjs` `PRIORITIES` | Existing guide-priority map | Rank this guide alongside data-handling peers | Generated sitemap/llms outputs stay pipeline-owned | Source input only | Lint/diff and Portal rendering |

Created 2025-06-12; last updated today. No assignee, parent, open blocker, or matching PR found. Current automation marks inactivity at 90 days and never auto-closes; no stale label is set. Recent Store changes reinforce the need to demonstrate today's behavior rather than reuse old snippets. Three semantic memory queries returned no relevant history; live issue/source/history supply the evidence. The graph pre-brief could not resolve this ticket identifier. Scope is a documentation leaf under the existing #15000 backlog effort, not a reopened release epic.

— Sophie

- 2026-11-05T20:15:23Z @neo-gpt-sophie added the `ai` label
- 2026-11-05T20:15:25Z @neo-gpt-sophie removed the `needs-re-triage` label
- 2026-11-05T20:15:27Z @neo-gpt-sophie assigned to @neo-gpt-sophie
### @neo-gpt-sophie - 2026-11-05T20:23:44Z

### Demonstration and rendering receipt

**Question:** can the guide show two views of the same records without promising automatic record-change propagation that `sourceId` does not provide?

**Inputs:** current `dev` base `409723569e`; one Model class, a three-record Store and a filtered/sorted Store whose `sourceId` points to it. The two complete JavaScript blocks were extracted from `Tables.md` and executed unchanged apart from resolving their documented relative imports in an isolated Node engine environment.

**Observed:** source ids `[1,2,3]`, projection ids `[2,1]`, and strict record identity `true`. After changing record1's priority to0, the projection reads0 but stays `[2,1]`; explicit `filter()` produces `[1,2]`. Marking record1 done and refreshing leaves source count3, projection count1 and ids `[2]`. Local `totalCount` remains0. Both Stores were destroyed after the probe.

**Disposition:** retain the measured identity/notification distinction in the narrative. Link to existing collection and pipeline reference rather than imply another data API. No engine changes.

**Portal:** the actual `/apps/portal/index.html#/learn/guides/datahandling/Tables` route shows the heading and the new Data Handling entry. Its seven-node SVG has `aria-roledescription="flowchart-v2"`, intrinsic width360px inside a454px parent, with readable text in the live narrow viewport. The Records link opens Records; opening the navigation drawer and selecting Tables returns to this guide. All seven internal guide links resolve to present files and registered tree rows. `lintGuide` plus `checkTicketIds` reports no findings; SEO source syntax and `git diff --check` pass.

**Limits / next consumer:** this proves the local Store example and Portal presentation, not a remote backend's pagination contract. The guide describes that boundary from `Store#load`; the PR reviewer should check the complete narrative against the three intake acceptance points.

Final validation repeated on `7d08b4eda0`, rebased over `a35a4b27e7`: literal outputs unchanged; final Portal wording and seven-node SVG verified again (360px inside447px). Source audit tightened provider-created versus borrowed Store ownership and scoped load replacement/append claims to the relevant transport paths. PR #20385 contains the three-file documentation change.

- 2026-11-05T20:27:40Z @neo-gpt-sophie cross-referenced by PR #20385
- 2026-11-05T21:25:17Z @neo-gpt-sophie cross-referenced by #7224

