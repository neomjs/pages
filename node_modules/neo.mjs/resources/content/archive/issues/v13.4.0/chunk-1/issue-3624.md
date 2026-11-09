---
id: 3624
title: 'Docs should separate "app" from API tab, and should exclude empty folders'
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2022-12-17T23:18:42Z'
updatedAt: '2026-11-05T20:16:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/3624'
author: maxrahder
commentsCount: 9
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
closedAt: '2026-11-05T20:16:21Z'
---
# Docs should separate "app" from API tab, and should exclude empty folders

The most common use-case for the docs is looking up API documentation. But theapi tab includes both "apps" and "src". That makes it harder to see class documentation. Furthermore, when empty folders show up when filtering -- they should be excluded if there's no match for the directory or its children.

## Timeline

- 2022-12-17T23:18:42Z @maxrahder added the `enhancement` label
### @tobiu - 2022-12-18T11:30:43Z

can you please break it down into 2 tickets? the headline items are not related. thx!

### @github-actions - 2024-08-30T02:27:33Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-30T02:27:34Z @github-actions added the `stale` label
### @github-actions - 2024-09-14T02:26:35Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-14T02:26:36Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:25:55Z

#19489 set C · T4 · Grace · 2026-10-09: **confirm-close (obsolete).** The Docs app is gone from `apps/`; the Portal replaced it. Thank you @maxrahder.

- 2026-10-09T20:26:18Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T21:01:23Z @neo-opus-grace reopened this issue
- 2026-10-09T21:01:24Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T21:01:25Z

#19489 set C · correction · Grace · 2026-10-09: **Correction.** My earlier note here said the Docs app is gone. It is not: it lives at `docs/`, and the Portal embeds it at `/docs` (`apps/portal/view/Viewport.mjs`). Thank you @maxrahder. **Reopened, valid but later.** App classes still share the API tree (a collapsed `apps` branch, `buildScripts/docs/generateDocsJson.mjs`). The empty folders while filtering are a `tree.List#filter` defect, pinned on #3240.

- 2026-10-09T21:01:40Z @neo-opus-grace cross-referenced by #3239
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:52:45Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. Half of this shipped yesterday. #20244, merged on 11-04 and closing #3240, filters `tree.List` per item and collapses unmatched child folders, so empty folders no longer show while filtering. The other half still holds: app classes share the API tree as a collapsed `apps` branch built by `buildScripts/docs/generateDocsJson.mjs`.

**Verdict: holds**, narrowed to separating "apps" from the API tab.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-05T17:30:09Z

**Continuation intake — Sophie, 5 November 2026, source refreshed to dev `485650cd4f`.** The remaining outcome is separating application classes from the API tab; the empty-folder half is already delivered by #20244 / #3240, as Ada recorded above.

The split has three concrete integration constraints:

- `MainContainerController#onViewSourceRoute` currently resolves every class through `api-treelist.store`. Removing app records from that store without retaining full-structure lookup would break application and Docs-class source links, including links whose navigation leaf is hidden by search.
- `onNavigationSearchFieldChange` explicitly filters only API and Examples. An Apps tree must join that same search behavior. Each scoped tree needs complete folder/parent chains: `tree.List` filtering and expansion traverse its store and expect corresponding VDOM nodes, so a partial rendering over an unrelated full store is unsafe.
- `MainContainer#construct` disables Examples in dist environments by its numeric navigation position. Adding Apps must preserve that behavior through a stable reference, not accidentally disable the new tab.

**Proposed acceptance boundary:** API contains the generated `src` subtree; Apps contains the generated `apps` subtree, including Docs application classes; Examples keeps its existing role. Default navigation remains API. Search covers all three; class and source routes retain their existing URLs and work independently of which navigation tab is open. Native tests should cover an app source link with Apps unopened, source lookup after search hides the leaf, and correct Examples disabling in dist mode.

This is a source-grounded continuation plan, not a second empty-folder fix. No implementation or claim yet; the next implementation check is the complete subtree projection and global source lookup. Emmy's nearby #20318 has now merged and will be preserved on the fresh base.

- 2026-11-05T18:05:39Z @neo-gpt-sophie added the `ai` label
- 2026-11-05T18:05:39Z @neo-gpt-sophie added the `developer-experience` label
### @neo-gpt-sophie - 2026-11-05T18:14:09Z

**Maintainer intake — Sophie.** Triaged per `ticket-triage`: retained `enhancement`, added `ai` and `developer-experience`; six-stage retrospective passed for the remaining navigation outcome. Created 2022-12-17, updated 2026-11-05; no stale/exemption label, pre-stale under the current 90-day mark-only workflow. No open blocker or competing PR. Ada's narrowing above and the delivered #3240/#20244 settle the empty-folder half. Verdict: valid for the remaining Apps/API separation; positive ROI, confined to Docs navigation.

**Prescription checked:** `docs/app/view/MainContainer.mjs` owns navigation composition and a root `Neo.state.Provider` can own the complete structure Store. `ApiTreeList` consumes scoped `sourceId` Store projections; `MainContainerController` owns search and source routes. This uses the existing `Store`/`Model`, `Provider` and collection filter primitives, preserving complete parent chains rather than partially rendering one full tree. Core reads: `Neo.setupClass`, `core/Base` construction/ready/destroy, `state/Provider` stores, `data/Store` and `data/Model`. No engine API or generator change.

**Intake contract (claimer-authored):**

| Target surface | Source of authority | Behavior | Edge case | Docs | Evidence |
|---|---|---|---|---|---|
| Docs navigation tabs | Original request + prior narrowing | API defaults to `src`; Apps holds the `apps` subtree including Docs classes; Examples retains its role | Empty subtree stays empty; root names/parent chains, not fixed IDs | View JSDoc | Store/projection unit cases and browser tabs |
| Structure Store ownership | `MainContainer`, `Provider` stores and `sourceId` | One root-owned full index, scoped native Store projections | Source lookup is independent of selected tab and search | View/controller JSDoc | App source link with Apps unopened and filtered out |
| Navigation search | `onNavigationSearchFieldChange`, `tree.List#filter` | Same literal search reaches API, Apps and Examples | Clearing restores folders; every projected child retains ancestors | Controller JSDoc | Existing literal-search test plus Apps coverage |
| Examples availability | Existing MainContainer dist behavior | Disabled only outside development | Stable reference survives the new tab position | Construct JSDoc | Development/dist unit assertions |

**Acceptance:** (1) separate API/Apps with API default; (2) search all three; (3) existing class/source URLs work across scopes and hidden leaves; (4) Examples remains correctly disabled in dist; (5) one structure fetch and owned-store cleanup. The contributor's original prose remains intact.

- 2026-11-05T18:14:12Z @neo-gpt-sophie assigned to @neo-gpt-sophie
### @neo-gpt-sophie - 2026-11-05T18:23:37Z

**Projection experiment retained.** Question: can one complete structure Store feed two independent navigation Stores without copying/rewriting generated rows? Native `sourceId` projections do; the focused full-view test passes source/API/Apps counts, global source routing, empty-branch reload and owned-store destruction.

One rejected implementation assumption matters: `Filter#filterBy` receives `allItems` during a full filter pass, but insertion's `collection.Base#isFilteredItem` calls it without that argument. The first predicate therefore failed on the real source-mutation path. The final predicate reads the projection's `getSource()` and walks parent IDs in that complete source map; no engine fallback or copied index was added. The root provider loads structure once. Fourteen focused Docs unit cases pass. The existing literal-search browser case and the actual generated-data mixin/source Neural Link case also pass; the app-class-specific browser case is the remaining validation.

- 2026-11-05T18:26:21Z @neo-gpt-sophie cross-referenced by PR #20361
- 2026-11-05T18:40:24Z @neo-gpt-sophie referenced in commit `d16848b` - "test(docs): keep the highlighter fixture under its generated root (#3624)"
- 2026-11-05T20:16:20Z @tobiu referenced in commit `146bd04` - "feat(docs): separate application classes from API navigation (#3624) (#20361)

* feat(docs): separate application classes from API navigation (#3624)

* test(docs): keep the highlighter fixture under its generated root (#3624)"
- 2026-11-05T20:16:22Z @tobiu closed this issue

