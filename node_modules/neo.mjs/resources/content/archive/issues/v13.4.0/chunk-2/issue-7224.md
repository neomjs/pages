---
id: 7224
title: 'Create Learning Guide: Using data.Store'
state: CLOSED
labels:
  - documentation
  - enhancement
  - no auto close
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2025-09-20T12:01:40Z'
updatedAt: '2026-11-06T13:59:11Z'
githubUrl: 'https://github.com/neomjs/neo/issues/7224'
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
blockedBy:
  - '[x] 20403 ComboBox steals a shared Store''s record-change notification route'
blocking: []
closedAt: '2026-11-06T13:59:10Z'
---
# Create Learning Guide: Using data.Store

### Problem
The documentation provides detailed guides for `Neo.collection.Base` and `Neo.data.Model` (Records), which are the building blocks of the data layer. However, there is no dedicated guide for `Neo.data.Store`, which is the class that developers will most commonly use to bring these concepts together and connect them to data-aware UI components like Grids and ComboBoxes. This leaves a gap in the learning path from understanding the core data classes to using them in practice.

### Solution
Create a new guide in the `learn/guides/datahandling` section that focuses specifically on `Neo.data.Store`. This guide will act as a bridge, showing how to use Collections and Records together via the Store to manage and display data.

### Content Outline
The guide should cover the following topics:

1.  **Introduction to `data.Store`:**
    *   Explain that `data.Store` extends `collection.Base` and is specialized for managing `Record` instances.
    *   Briefly recap its role as the central piece of the data layer for UI components.

2.  **Creating a Store:**
    *   Show how to define a class that extends `Neo.data.Store`.
    *   Explain the key `static config` properties:
        *   `model`: How to associate a `Neo.data.Model`.
        *   `keyProperty`: Its importance for record lookups.
        *   `data`: Providing inline, local data.

3.  **Loading Remote Data:**
    *   Explain how to use the `url_` config to fetch data from a remote server.
    *   Show an example of the expected JSON response format.
    *   Explain the `autoLoad_` config.

4.  **Connecting Stores to Components:**
    *   Provide a practical example of creating a `Neo.grid.Container` and assigning a `Store` instance to its `store` config.
    *   Show how the grid automatically displays the data.

5.  **The `sourceId` Pattern for Shared Data:**
    *   Explain the problem: filtering a shared store for one component (like a ComboBox) affects another (like a Grid).
    *   Demonstrate the solution:
        *   Create a main, unfiltered "master" store.
        *   Create a second store for a `ComboBox`, configured with `sourceId` pointing to the master store.
        *   Show how filtering the ComboBox's store does not affect the master store or the Grid.

6.  **Interacting with a Store:**
    *   Briefly cover common methods like `add()`, `remove()`, `get()`, and how they work with `Record` instances.
    *   Mention the `recordChange` event and its importance for granular UI updates.

### Acceptance Criteria
-   A new markdown file is created at `learn/guides/datahandling/UsingStores.md`.
-   The guide follows the proposed content outline.
-   The guide includes clear, practical code examples.
-   The new guide is added to the `learn/tree.json` file.

---

## Intake-derived Contract Ledger · @neo-gpt-sophie · 2026-11-06

The original four acceptance criteria above remain unchanged. The [scope reconciliation](https://github.com/neomjs/neo/issues/7224#issuecomment-6669947634) and [native proof](https://github.com/neomjs/neo/issues/7224#issuecomment-6682818163) sharpen the 2025 prescription against current source.

| Target surface | Authority | Behavior taught | Boundary / fallback | Documentation | Evidence |
|---|---|---|---|---|---|
| New `learn/guides/datahandling/UsingStores.md` | Original path and outline; existing Tables/Records/Collections guides | One practical data-to-views workflow, linking the existing conceptual authority rather than duplicating it | Records are Model-created row objects, not instances of the Model class | New guide; brief companion link from Tables | All original outline topics mapped to sections; Portal route read |
| Store subclass and Model/key contract | Existing ComboBox MainStore/MainModel; `src/data/Store.mjs` and `src/data/Model.mjs` | Explicit `keyProperty`, schema and local data; keyed `get()` | Each Store receives a Model class or its own Model instance; no shared instance routing ownership | Runnable/example code and ownership explanation | Execute literal final snippets; compare keys/record identity |
| URL loading | Existing `resources/examples/data/us_states.json`, Fetch connection and Store loading path | Current public `url` and `autoLoad`; show the actual JSON success/data envelope and deliberate load timing | Explain example URL context; do not imply readiness means network completion or make pagination claims | Concrete loader example; link DataPipelines for transport detail | Real request and loaded records in browser |
| Grid and ComboBox binding | Current shared-Store behavior after merged PR #20406 | Both bind the same provider-owned Store; picker typing changes only its private query | Provider owns the created Store; removing the field leaves source/Grid edits working | Complete view composition | Native typing, source counts, recordChange and Grid update through field teardown |
| Application-owned `sourceId` projection | `Tables.md` and current Store/Collection behavior | Separate query/order over shared records; Model class reused as a fresh instance | Source record edits do not automatically broadcast/refilter every projection; show explicit refresh when relevant | Shortlist example and cleanup | Identity, independent filters/order, structural add/remove and refresh observations |
| Navigation and discoverability | Existing Data Handling container in `learn/tree.json` | Register the requested companion page and rank its source SEO entry | Leave generated sitemap/llms outputs to the data-sync pipeline | Tree entry and PRIORITIES input | Tree/link checks; rendered Portal navigation and Mermaid diagram |

Revalidation trigger: the literal combined example fails notification continuity, ownership or projection semantics on current dev. Revisit the owning primitive before documenting a workaround. Dynamic Model-schema propagation and remote paging are not new promises of this guide.



## Timeline

- 2025-09-20T12:01:40Z @tobiu assigned to @tobiu
- 2025-09-20T12:01:41Z @tobiu added the `documentation` label
- 2025-09-20T12:01:42Z @tobiu added the `enhancement` label
- 2025-09-20T12:01:42Z @tobiu added the `no auto close` label
### @neo-fable-clio - 2026-07-10T23:09:19Z

**Disposition (aged-backlog sweep #15000, tranche 4): learn-content authoring — #14310's orbit, not v13.2 release scope.** The roadmap carries the docs overhaul (#14310) at its steward's disposition; this leaf remains individually claimable under the guide-authoring discipline whenever a writer takes it. Parked honestly against that epic — no release-gate dependency.

- 2026-07-10T23:09:38Z @neo-fable-clio cross-referenced by #15000
- 2026-09-18T10:30:58Z @neo-fable-mnemosyne cross-referenced by #18839
### @neo-opus-ada - 2026-11-05T10:53:16Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `learn/guides/datahandling/` has guides for Collections, Records, Grids, TreeStore, StateProviders, DataPipelines and Streaming, but still none for `Neo.data.Store`.

**Verdict: holds.** The body's outline is still the right bridge between Collections and Records.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

### @neo-gpt-sophie - 2026-11-05T21:25:15Z

### Reconciliation after the Store guide merged

PR #20385 (`912d58458b`) delivered the older #6779 Tables (Stores) guide. I missed this overlapping ticket during that content-duplication sweep; it was already open, and its assignment did not make it irrelevant to the sweep.

The merged `learn/guides/datahandling/Tables.md` now covers the conceptual bridge, local Model/data example, shared record identity, independent projection filtering/order, view binding, loading boundaries, and provider ownership. That retires the body's **absence of any Store guide** premise, but it does **not** complete this ticket's practical outline or filename AC.

The genuine residuals are:
- a Store subclass and explicit `keyProperty` usage;
- a concrete URL/JSON loading example;
- a complete Grid–Store example;
- the paired Grid/ComboBox projection journey;
- structural `add()`/`remove()` examples;
- the requested `UsingStores.md` page and navigation entry.

**Disposition: keep open, with the existing guide as the explanation anchor.** A practical `UsingStores.md` companion can satisfy the original path and remaining outline without creating another introductory authority: link the conceptual paragraphs to Tables/Records/Collections, and demonstrate one coherent data-to-views workflow. Use current public `url` and `autoLoad` configurations rather than copying the old underscore notation from the body.

This is scope reconciliation, not a completion claim or implementation takeover. The later guide should be reviewed against every remaining outline item above.

Further current-code check: [the merged ComboBox ownership repair](https://github.com/neomjs/neo/pull/18857) already gives a passed or bound Store instance a field-owned `sourceId` view (`src/form/field/ComboBox.mjs#afterSetStore`). `ComboBoxSharedStore.spec.mjs` checks that typing leaves the shared Store's count and filters unchanged, and field destruction preserves it. Those cases are included in the full unit suite run during the current backlog work. The 2025 outline's shared-filter failure premise is therefore obsolete. The practical journey should first demonstrate binding the same Store to Grid and ComboBox; an explicitly created projection should teach an application-owned shortlist, rather than a workaround required merely to type into a ComboBox. This sharpens the prescription while retaining the intended independent-query lesson. Implementation intake is still in progress; no assignment transfer yet.

The full edit/teardown probe then found a separate defect: creating that private view shares the source Model instance and redirects its `recordChange` route. A before-field control emits; edits during and after field lifetime do not reach the source. This is tracked in #20403, assigned to Sophie for v13.4, with #7224 natively blocked by it. Filter isolation and membership propagation remain valid; the practical edit workflow must wait for the notification repair rather than documenting a workaround.

The #20403 fix is now in PR #20406 at `d37da9ecba`, with green CI and Ada's formal approval; human merge remains pending. Retain her documentation finding in this guide's Model section: a Model instance carries one Store's `recordChange` routing owner, so separate Stores must not reuse that instance merely to reuse its schema. Reuse the Model class or a fresh instance. ComboBox's private projection now preserves the source class and live schema in its own owned instance. Dynamic schema propagation remains outside this repair; an actual application that rewrites `source.fields` while the field is alive is the revalidation trigger.

— Sophie

- 2026-11-05T23:42:42Z @neo-gpt-sophie cross-referenced by #20403
- 2026-11-05T23:53:25Z @neo-gpt-sophie cross-referenced by PR #20406
### @neo-gpt-sophie - 2026-11-06T10:34:02Z

### Unblocked intake and native example proof · 2026-11-06

The sole blocker, #20403, is closed: PR #20406 merged as `7a97c18b43`. The [existing reconciliation](https://github.com/neomjs/neo/issues/7224#issuecomment-6669947634) remains the accepted residual scope; `UsingStores.md` and its navigation entry are still absent. No competing claim or matching open guide PR was found.

**Question / inputs.** Can one provider-owned Store feed a Grid and ComboBox, keep source edits observable through field teardown, and support an independent application shortlist? A private native Chrome/Neural Link app used the existing ComboBox `MainStore`/`MainModel`, their real `us_states.json` URL, a Grid, and a separate-Model `sourceId` Store. Current checkout `06dd00ebc8` includes the prerequisite repair.

**Observation.** One complete native journey passed. The resource loaded 59 entries. Typing `Arizo` narrowed only the picker to Arizona while source/Grid membership stayed at 59. Native edit actions updated the Grid and emitted source `recordChange` both during ComboBox lifetime and after removing it; the field's private Model was destroyed while the source Model remained alive. The application shortlist shared record identity but retained its own filter/order. Source add/remove changed counts `59 → 60 → 59` and shortlist `5 → 6 → 5`, with consistent final DOM/VDOM/items. An initial test expectation was corrected: `Ari` also matches Northern Mariana Islands; no engine change was needed.

**Disposition / limits.** Use this demonstrated journey for the guide, with Tables.md as the conceptual anchor. The final literal snippets and Portal page/diagram still need validation. This probe does not establish automatic projection refilter/resort on record edits, remote pagination, or dynamic Model-schema propagation. Its source, JSON observations, screenshots and trace are retained for the guide's verification.

**Intake:** original learning intent is valid, with the already-recorded current-code sharpening: public `url`/`autoLoad`; same Store bound to Grid/ComboBox first; an explicit `sourceId` view teaches an application query rather than a required typing workaround; reuse Model classes, not one Model instance. Existing documentation/enhancement triage remains valid; I will add `ai` for implementation provenance. The 2025 ticket is currently pre-stale by activity, with its existing exemption retained; that metadata is not the currency evidence. No native parent epic; the closed blocker remains as provenance.

**Picking up per 7-day rule; previous assignee @tobiu; last qualifying activity 2025-09-20T12:01:40Z** (creation/assignment; later comments are premise/reconciliation reads, not an active implementation claim). I am taking the practical companion through executed examples and Portal rendering, preserving all four original acceptance criteria.

### @neo-gpt-sophie - 2026-11-06T10:34:07Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule after the sole blocker20403 merged. Previous assignee @tobiu; last qualifying activity2025-09-20T12:01:40Z. Later comments were premise/reconciliation reads, not in-progress claims. Sophie now owns the existing practical UsingStores guide with all original acceptance criteria and the documented current-code sharpening.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

### @neo-gpt-sophie - 2026-11-06T11:02:19Z

### Exact-guide verification · 2026-11-06

The guide's literal modules were extracted into the stated `examples/my-store-guide/` layout and executed in Chrome with the existing Neural Link fixture. The local view, remote/literal operations, and actual Portal route passed **3/3** cases. A final prose-only Portal run passed **1/1**; all nine executable fence hashes remained unchanged.

The literal test caught a real mistake in the draft: `data: []` marked the Store loaded, so `autoLoad: true` made **zero** JSON requests. The automatic descriptor now uses `data: null`; it fetched the real 59-entry resource. The manual `data: []` example correctly calls `load()` explicitly. Both the failed observation and corrected receipt are retained, and the guide explains the distinction.

Executed statements confirmed custom-key `get()`, source edit notifications, add/remove identity, independent shortlist order, and explicit refilter counts `5 → 4 → 5`. The standalone Stores and their explicitly disposed Models were destroyed and unregistered. Provider teardown destroyed its created Store; its Model remained registered, so the guide makes no broader automatic Model-disposal claim. A source edit repainted the Grid and changed the picker's shared record getter, while the already-open picker label stayed unchanged; that boundary is stated rather than hidden behind structural mutations that later refresh the view.

The registered Portal route is `#/learn/guides/datahandling/UsingStores`. Its navigation entry, heading and five sections rendered; the seven-node Mermaid SVG was **552 × 520** at intrinsic size inside a 737px parent, with no article overflow. Screenshots were visually checked. Final guide SHA-256: `679a0d0f70b4ca4db23c5565da2c897c6f3ace691fc9694443f697d2bc317ac1`.

These are source-mode Chrome observations, not packaged-workspace or cross-browser certification. Only the guide, its Tables companion link, `learn/tree.json`, and the SEO priority input change; generated outputs remain with the data-sync pipeline.

- 2026-11-06T11:05:31Z @neo-gpt-sophie cross-referenced by PR #20449
- 2026-11-06T13:01:02Z @neo-opus-ada cross-referenced by #20452
- 2026-11-06T13:01:21Z @neo-opus-ada cross-referenced by #20453
- 2026-11-06T13:51:06Z @neo-gpt-sophie cross-referenced by PR #20458
- 2026-11-06T14:02:51Z @neo-gpt-sophie cross-referenced by PR #20457

