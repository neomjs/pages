---
id: 4529
title: Google Maps should update the Markers
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-07-10T11:46:59Z'
updatedAt: '2026-11-03T05:07:26Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4529'
author: Dinkh
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
closedAt: '2026-11-03T05:07:26Z'
---
# Google Maps should update the Markers

Running Google Maps does only add new markers, but does not reflect that markers might be deleted from the store.

## Timeline

- 2023-07-10T11:46:59Z @Dinkh added the `enhancement` label
### @github-actions - 2024-08-29T02:27:11Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:27:11Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:47Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:47Z @github-actions closed this issue
- 2026-10-09T20:31:55Z @neo-opus-grace reopened this issue
- 2026-10-09T20:31:57Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:31:58Z

#19489 set C · T5 · Grace · 2026-10-09: **reopened, valid.** Thank you @Dinkh. `component.wrapper.GoogleMaps` still listens only to the marker store's `load`, so removed records keep their markers.

- 2026-10-09T20:34:19Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T20:38:51Z @neo-opus-grace cross-referenced by #4955
- 2026-11-03T04:18:39Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T04:18:39Z @neo-gemini-maryam added the `core` label
- 2026-11-03T04:18:48Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T04:18:58Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigning for implementation.

### Ticket Intake & Contract Ledger (`ticket-intake` §0 / §1.7 / §1.8 / §1.9.6)

- **Prescription check (`§0`):** `src/component/wrapper/GoogleMaps.mjs` (`onMarkerStoreLoad`) and `src/main/addon/GoogleMaps.mjs` (`destroyMarkers`) — owns the concern.
  - Root cause 1: `Neo.data.Store#onCollectionMutate` fires `'load'` when records are removed from `markerStore`, invoking `GoogleMaps#onMarkerStoreLoad()`. However, `onMarkerStoreLoad()` passed `{ appName, id, windowId }` without `mapId: id`, while `Neo.main.addon.GoogleMaps#destroyMarkers(data)` looked up `me.markers[data.mapId]`, making `destroyMarkers` a no-op and leaving removed markers on the map.
  - Root cause 2: When `markerStore` uses `autoInitRecords: true` (default), `this.markerStore.forEach(item => ...)` yields `Neo.data.Record` instances whose field getters live on `Record.prototype`, so `{...item}` did not spread `id`, `position`, `title`, `label`, `icon`, or `anchorPoint`. Using `...(item.toJSON?.() || item)` supports both `Record` instances and raw objects.
- **Core-Idiom Pre-Flight (`§1.9.6`):** Verified against `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`, `src/data/Store.mjs`, and `src/data/RecordFactory.mjs`.

#### Contract Ledger

| Surface | Path / Symbol | Contract |
|---|---|---|
| Wrapper Store-Load Handler | `src/component/wrapper/GoogleMaps.mjs#onMarkerStoreLoad` | Calls `destroyMarkers({ appName, id, mapId: id, windowId })` and `addMarker({ appName, mapId: id, windowId, ...(item.toJSON?.() || item) })` for each store item so removed records destroy old markers and `Neo.data.Record` instances serialize their fields. |
| Main-Thread Addon | `src/main/addon/GoogleMaps.mjs#destroyMarkers` | Resolves `let mapId = data.mapId || data.id` before clearing `me.markers[mapId]`. |
| Unit Test Spec | `test/playwright/unit/component/GoogleMapsMarkerRemovals.spec.mjs` | Verifies initial store load and record removal synchronization with `Neo.main.addon.GoogleMaps`. |

#### Ticket Reality Classification (`§1.8`)

- **Ticket age:** `createdAt: 2023-06-08`, `updatedAt: 2026-10-09T20:31:58Z` (reopened and validated in `#19489` set C · T5).
- **Bot stale-band:** `post-stale-with-exemption` (reopened after #19489 audit).
- **Currency / successor-risk evidence:** Verified live `src/component/wrapper/GoogleMaps.mjs` and `src/main/addon/GoogleMaps.mjs`. Sibling ticket #4955 tracks in-place `recordChange` handling.
- **Verdict:** `valid-as-written`

— Maryam 🧭

- 2026-11-03T04:31:48Z @neo-gemini-maryam cross-referenced by PR #20209
- 2026-11-03T04:45:59Z @neo-opus-vega cross-referenced by #20211
- 2026-11-03T05:07:26Z @tobiu referenced in commit `4de3f3c` - "fix(component): pass mapId to destroyMarkers and serialize Record fields in GoogleMaps (#4529) (#20209)"
- 2026-11-03T05:07:27Z @tobiu closed this issue

