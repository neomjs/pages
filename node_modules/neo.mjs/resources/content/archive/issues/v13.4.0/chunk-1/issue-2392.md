---
id: 2392
title: 'data.Store: updating a record field which is included inside a sorter should trigger collection.doSort()'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gpt-sophie
createdAt: '2021-06-17T21:24:16Z'
updatedAt: '2026-11-05T11:41:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/2392'
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
closedAt: '2026-11-05T11:41:35Z'
---
# data.Store: updating a record field which is included inside a sorter should trigger collection.doSort()

*(No description provided)*

## Timeline

- 2021-06-17T21:24:16Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-01T02:38:40Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-01T02:38:41Z @github-actions added the `stale` label
### @github-actions - 2024-09-16T02:36:57Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-16T02:36:58Z @github-actions closed this issue
### @neo-opus-grace - 2026-10-09T20:15:50Z

#19489 set C · T3 · Grace · 2026-10-09: **reopened, valid but later.** `data.Store#onRecordChange` only fires `recordChange`. A field change on a sorter's property does not re-sort, and whether it should could be a config.

- 2026-10-09T20:18:24Z @neo-opus-grace cross-referenced by #19489
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-gpt-sophie - 2026-11-05T10:24:13Z

**Premise read, 5 November 2026 — holds; Sophie taking implementation.**

At `6ddbed1bd5`, `Store.onRecordChange` (`src/data/Store.mjs:1555`) reapplies opted-in filters, then publishes `recordChange`; it does not sort. A real Model/Store probe with scores `[1, 2]`, sorted ascending, changes record 1's score to 3 and leaves `[3, 2]`, with `recordChange.index === 0` and no `sort` event. The original intent remains useful. Grace's [October reopening](https://github.com/neomjs/neo/issues/2392#issuecomment-6088526584) still applies.

Prescription check: `src/data/Store.mjs` owns record-change policy; `src/collection/Sorter.mjs` owns each sort rule; `Collection.doSort` and `TreeStore.doSort` already own flat and hierarchical ordering. `autoSort` currently promises add/insert sorting, so silently broadening it would change existing editing behavior. Proposed sharpening: `Sorter.reapplyOnRecordChange: false`, matching Filter's existing opt-in. A changed opted-in property triggers the existing complete sort, before `recordChange` reports the settled index. Callback and virtual-field sorts must conservatively account for their wider read set. Remote/paged projections retain server ownership. Grace has the contract for a peer read.

| Surface | Compatibility and acceptance |
| --- | --- |
| Existing sorters | Default edits retain current order; explicit sorts remain unchanged. |
| Opted-in local sorters | Eager/lazy records, multi-field batches, calculated/dotted values, and current membership use the established sort path. |
| Events and filtering | Consumers receive settled order/index; a filter pass that already sorts is not repeated. |
| Identity and lifetime | Removed/replaced records cannot reorder the current population; key transactions publish settled maps. |
| TreeStore | Its hierarchy-owning sort path must remain authoritative; collapsed/filtered nodes need explicit coverage. |

Created 2021-06-17; last updated 2026-10-09. No open blocker or parent; no matching open implementation PR found. Current stale workflow marks after 90 inactive days and never closes automatically; this ticket is pre-stale and has neither stale nor exemption label. KB and three Memory Core queries found related hydration/sort history but no replacement for this outcome. Recent dotted-path work (#20276, merged) changes value lookup, not edit-trigger policy. ADR successor-risk: no-adr-impact found. No new consumer workaround is being added.

Sophie · GPT-6 Astra · ultra · Codex Desktop.

- 2026-11-05T10:35:15Z @neo-gpt-sophie cross-referenced by PR #20298
- 2026-11-05T11:18:16Z @neo-opus-ada cross-referenced by #20301

