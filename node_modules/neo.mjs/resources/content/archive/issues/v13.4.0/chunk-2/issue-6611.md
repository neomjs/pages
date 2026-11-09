---
id: 6611
title: 'Earthquakes Tutorial: Add a new maps provider'
state: CLOSED
labels:
  - documentation
  - enhancement
  - ai
assignees:
  - neo-gpt-sophie
createdAt: '2025-04-01T20:02:40Z'
updatedAt: '2026-11-06T22:50:57Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6611'
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
  - '[x] 20489 Xhr appends a second ? to a URL that already has a query'
  - '[x] 6610 main.addon.OpenStreetMaps'
blocking: []
closedAt: '2026-11-06T22:50:57Z'
---
# Earthquakes Tutorial: Add a new maps provider

related to: https://github.com/neomjs/neo/issues/6610

## Intake contract — Sophie, 2026-11-06

Retained intent: a reader reaches a keyless Iceland map using the tutorial's live earthquake feed and the same Store as its table. #6610 is delivered by #20474; its blocked-by edge remains as provenance. The original description above is preserved.

| Target surface | Source of authority | Behavior | Edge / fallback | Docs | Evidence |
| --- | --- | --- | --- | --- | --- |
| Map addon setup | `src/Main.mjs#importAddonModule`, `src/main/addon/OpenStreetMaps.mjs#loadFiles` | Load built-in `OpenStreetMaps`; remove custom-source download, `WS/GoogleMaps`, API-key and billing steps | Requires network access to the live feed, OpenLayers CDN and OSM tiles; do not claim offline operation | Existing Earthquakes map lab | Real installed-package browser load, successful library/tile requests and attribution |
| Marker model | Live endpoint returns `data[]` with string `lat`, `lng`, `location`; `src/data/RecordFactory.mjs#parseRecordValue` supplies `calculate(data, field)`; `Store#createRecord` generates missing keys | Declare `id` to retain the generated key, `lat` and `lng` as Float fields; derive `position: {lat, lng}` from data; map `title` from `location` | Retain actual live feed; never silently substitute fixtures or claim their data is current | Existing field recipe | Live finite coordinates and marker count matching Store |
| Shared Store and click | `src/component/wrapper/OpenStreetMaps.mjs#onMarkerStoreLoad` / `#parseMarkerClick`, `src/data/Store.mjs#onCollectionMutate` | Bind map and table to `stores.earthquakes`; marker click yields the same Store record | Empty feed means no markers; reload must not duplicate them; no second hand-mapped Store | Map and event labs; essential adjacent path/API corrections | Identity checks, reload, actual pointer click and table event |
| Reader presentation | Existing `learn/tutorials/Earthquakes.md`, `learn/tree.json` tutorials entry | Explain worker wrapper versus main-thread renderer through the concrete map lab; retire obsolete warning and Google screenshots | Preserve unrelated labs and the existing narrative; no front-door/nav additions | Same registered page | Portal rendering and literal snippets in a consuming workspace |

### Acceptance

1. Follow the revised map/model/event snippets in a workspace with the actual packaged engine containing #20474; no engine symlink, copied addon, key or billing setup.
2. Real OpenLayers map and OpenStreetMap attribution render; live feed coordinates are finite and markers match the shared Store.
3. The StateProvider, table and map reference one Store; a real marker click identifies that Store's record. A reload preserves the marker count without duplication. The table's `rowClick` listener receives its clicked record.
4. The existing portal page renders the revised explanation and any diagram without errors or unreadable scaling. Scope is the keyless map lab and necessary adjacent repairs, not synchronized selection or a new map abstraction.

### Native acceptance blocker found during implementation

The packed consumer with the normal generated Viewport reaches the real OpenLayers library and OSM tiles, but `Store.url` invokes Xhr with pagination parameters. At dev `d7e91ec544`, `Xhr#request` appends a second `?` to a URL already containing a query. The resulting `...?fn=earthquakes?page=1&pageSize=0` returns HTTP 200 text `earthquakes?page=1 is not a function.` rather than JSON. The original endpoint returns valid JSON. Ada's #20490 is merged and #20489 is closed; the blocked-by edge remains as provenance. Tutorial PR #20491 is now ready after merged-engine acceptance.

A separate diagnostic URL-correction control loads 76 live records and exposed the missing public `id` in the old model (76 records collapsed to one marker). The tutorial now retains the Store-generated key. Diagnostic controls are not acceptance. A direct-MainView experiment bypassed the generated Viewport and produced zero sizing; that was a test-setup variant, not a tutorial defect, and no sizing workaround is retained.

Final acceptance passed with a fresh actual npm package from merged dev `2f6e04b2ad4832610c1350ad1f308d6218046e6c`, with no interception: 79 live rows, 79 unique markers, native map/table pointer clicks returning the same Store record, and a second real load retaining 79 unique markers. Real OpenLayers and OSM tiles loaded; no browser/network errors. #20491 carries the merged-engine and portal receipts; its independent review and human merge remain.


## Timeline

- 2025-04-01T20:02:41Z @tobiu added the `enhancement` label
- 2025-04-01T20:02:41Z @tobiu assigned to @tobiu
- 2025-04-01T20:03:20Z @tobiu cross-referenced by #6607
### @github-actions - 2025-07-01T03:13:29Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-07-01T03:13:29Z @github-actions added the `stale` label
### @github-actions - 2025-07-16T03:10:29Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2025-07-16T03:10:30Z @github-actions closed this issue
- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T15:30:41Z @neo-opus-grace reopened this issue
- 2026-10-09T15:30:43Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T15:30:44Z

#19489 set B · other · Grace · 2026-10-09: **reopened, valid.** Since #18830 the Earthquakes tutorial requires the reader's own Google Maps key, the "too much of a barrier" this ticket and #6609 set out to avoid. No alternative provider exists for it; mapbox-gl appears only in the covid app.

- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
- 2026-11-05T10:35:51Z @neo-opus-ada cross-referenced by #6609
- 2026-11-05T10:35:54Z @neo-opus-ada cross-referenced by #6610
### @neo-opus-ada - 2026-11-05T10:35:55Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. Since #18830, the Earthquakes tutorial asks readers for their own Google Maps key, which is the barrier this ticket set out to remove. The keyless provider (#6610) still can't place markers.

**Verdict: holds**, blocked on markers in #6610.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-06T17:47:52Z @neo-gpt-sophie marked this issue as being blocked by #6610
### @neo-gpt-sophie - 2026-11-06T17:47:53Z

**Intake, 2026-11-06: valid intent; prerequisite delivered.** #6610 is closed through merged #20474 (`a0f909f9d8`). The blocked-by edge remains as provenance. At `dev d7e91ec544`, the tutorial still asks for copied Google Maps source and a billing-bound key; the built-in OpenStreetMaps addon now owns markers and click forwarding. Prescription checked: `learn/tutorials/Earthquakes.md` owns the reader journey; `src/component/wrapper/OpenStreetMaps.mjs`, `src/main/addon/OpenStreetMaps.mjs`, `src/Main.mjs#importAddonModule` and `src/data/RecordFactory.mjs#parseRecordValue` supply the existing contracts. No engine API change is needed.

The live tutorial endpoint returned HTTP 200 and 76 rows at 21:27 UTC, with string `lat`/`lng` fields. The old calculator instead names absent `latitude`/`longitude` and a nonexistent third callback argument. The repair must declare numeric `lat`/`lng`, calculate `position` from the first argument, correct the installed-package imports, retain the shared Store, and exercise a real marker click. Table/marker selection logging remains the lab's scope; synchronized selection is not added. No fabricated data or replacement service.

Created 2025-04-01; updated today. Current inactive workflow marks after 90 days and never auto-closes; neither `stale` nor `no auto close` is present. Same-day source/history and the open PR queue show the addon implementation as the prerequisite, not a completed tutorial replacement. No ADR change. KB still describes the older missing-provider state; live source controls this verdict.

Triaged per `ticket-triage`: retained `enhancement`, added `ai` and `documentation`. Stage retrospective passed: developer tutorial, existing engine boundary, no new abstraction or credential burden. Positive return comes from a runnable keyless lab, proven in an actual packed consumer and rendered portal.

Picking up per 7-day rule; previous assignee @tobiu; assignment was 2025-04-01T20:02:41Z, with no later qualifying in-progress activity in the full conversation/timeline. Recent maintainer comments are premise/blocker observations. An intake-owned Contract Ledger will be appended without replacing the original body.

— Sophie · GPT-6 Astra · ultra · Codex Desktop · session 7367b697-abdc-4e46-963d-5c57378b3551

- 2026-11-06T17:55:06Z @neo-opus-ada cross-referenced by PR #20474
- 2026-11-06T21:28:00Z @neo-gpt-sophie added the `ai` label
- 2026-11-06T21:28:00Z @neo-gpt-sophie added the `documentation` label
- 2026-11-06T21:28:05Z @neo-gpt-sophie assigned to @neo-gpt-sophie
- 2026-11-06T21:28:05Z @neo-gpt-sophie unassigned from @tobiu
### @neo-gpt-sophie - 2026-11-06T21:28:06Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `@me`
**Reason:** Picking up per 7-day rule for the authorized Engine householding goal. Previous assignee @tobiu assigned 2025-04-01T20:02:41Z; full current conversation/timeline has no later qualifying in-progress activity. Recent maintainer comments only record premise/blocker observations. #6610 has now merged via #20474; Sophie owns the bounded keyless tutorial repair and native acceptance.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-06T21:38:12Z @neo-opus-ada cross-referenced by #20489
- 2026-11-06T21:38:18Z @neo-opus-ada marked this issue as being blocked by #20489
- 2026-11-06T21:39:21Z @neo-opus-ada cross-referenced by PR #20490
- 2026-11-06T21:44:07Z @neo-gpt-sophie cross-referenced by PR #20491
- 2026-11-06T21:57:33Z @neo-gpt-sophie cross-referenced by #20492
- 2026-11-06T22:12:08Z @neo-gpt-sophie cross-referenced by #20493
- 2026-11-06T22:44:15Z @neo-fable-mnemosyne cross-referenced by #20498
- 2026-11-06T22:50:57Z @tobiu referenced in commit `d6358f5` - "docs(tutorial): use the keyless shared-store map (#6611) (#20491)"
- 2026-11-06T22:50:57Z @tobiu closed this issue

