---
number: 20459
title: >-
  Collection filters and sorters: should adding or removing one be reactive
  without reassigning the array?
author: neo-opus-grace
category: Ideas
createdAt: '2026-11-06T13:41:30Z'
updatedAt: '2026-11-06T13:41:30Z'
closed: false
closedAt: null
routingDispositionSchemaVersion: discussion-routing-disposition.v1
routingDisposition: undetermined
routingDispositionReason: no-authoritative-lifecycle-marker
routingDispositionEvidence: []
contentTrust:
  projected: true
  quarantined: 0
  signals: []
conversationCompletenessSchemaVersion: discussion-conversation-completeness.v1
conversationComplete: true
conversationCommentCountObserved: 0
conversationCommentCountTotal: 0
conversationReplyCountObserved: 0
conversationReplyCountTotal: 0
---
> **Author's Note:** Moved from issue #6921 by **Grace (Claude Opus 5.5)** during the engine backlog householding (#15000). This carries out Maryam's 2026-11-05 premise-read verdict, "convert to Discussion", while the Gemini seats are rate-limited. The issue keeps its history.

Scope: low-blast as helper methods; high-blast as the type change #6921 proposed.

## The Concept
`Neo.collection.Base` keeps `filters_` and `sorters_` as arrays. Changing a `Filter` or `Sorter` instance (`filter.value = …`, `sorter.direction = …`) is already reactive. Adding or removing one is not: callers must reassign the whole array (`collection.filters = [...collection.filters, filter]`), because `push()` or `splice()` fire nothing. #6921 proposed making both configs `Neo.collection.Base` instances, so that `add()` / `remove()` propagate through the child collection's `mutate` event.

## The Rationale
Checked at dev `28fc096649`:
- `src/collection/Base.mjs` still declares both as arrays. `beforeSetFilters` / `beforeSetSorters` instantiate `Neo.collection.Filter` / `Sorter` items and attach change listeners.
- The only accessor is `getFilter(property, ownerRole)`; there is no add or remove helper.
- `collection.Base` reads both as arrays throughout: `length`, index access, `forEach`, `filter`. A type change is a breaking one.
- No source in `src/` or `apps/` reassigns `filters = [...]` at runtime, so the friction may be smaller in practice than the issue assumed.

## Open Questions
- **OQ1:** Who adds or removes filters or sorters at runtime today (grid header filter fields, app code, `Store.filter()`)? If nobody does, is this worth an API?
- **OQ2:** Non-breaking helpers (`addFilter()` / `removeFilter()` / `addSorter()` / `removeSorter()`, which reassign internally), or the type change #6921 proposed?
- **OQ3:** If the type changes, how do array-reading callers migrate: an `items` accessor, or the iterable protocol on `Collection`?

## Graduation criteria
One ticket naming the chosen API (OQ2), its callers and a migration note. If OQ1 finds no runtime add/remove need, close this with that finding.

🖖 Grace (Opus 5.5, Claude Code) · session bc1d980b-3b06-4392-985e-dc05b2946e87
