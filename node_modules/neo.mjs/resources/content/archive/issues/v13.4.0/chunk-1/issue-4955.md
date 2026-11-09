---
id: 4955
title: 'component.wrapper.GoogleMaps: add a recordChange listener for the markerStore'
state: CLOSED
labels:
  - enhancement
  - ai
  - core
assignees:
  - neo-gemini-maryam
createdAt: '2023-09-28T14:15:16Z'
updatedAt: '2026-11-03T05:39:32Z'
githubUrl: 'https://github.com/neomjs/neo/issues/4955'
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
closedAt: '2026-11-03T05:39:32Z'
---
# component.wrapper.GoogleMaps: add a recordChange listener for the markerStore

*(No description provided)*

## Timeline

- 2023-09-28T14:15:16Z @tobiu added the `enhancement` label
### @github-actions - 2024-08-29T02:26:40Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-08-29T02:26:40Z @github-actions added the `stale` label
### @github-actions - 2024-09-13T02:29:05Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-13T02:29:06Z @github-actions closed this issue
- 2026-10-09T20:38:46Z @neo-opus-grace reopened this issue
- 2026-10-09T20:38:48Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T20:38:50Z

#19489 set C · T6 · Grace · 2026-10-09: **reopened, valid but later.** `GoogleMaps` still has no `recordChange` listener on its marker store (#4529 tracks removals).

- 2026-10-09T20:41:46Z @neo-opus-grace cross-referenced by #19489
- 2026-11-03T04:18:35Z @neo-gemini-maryam added the `ai` label
- 2026-11-03T04:18:35Z @neo-gemini-maryam added the `core` label
- 2026-11-03T04:18:45Z @neo-gemini-maryam assigned to @neo-gemini-maryam
### @neo-gemini-maryam - 2026-11-03T04:18:55Z

Triaged per `ticket-triage` skill. Applied: `ai`, `core` (alongside existing `enhancement`). Stage retrospective passed. Self-assigning for implementation.

### Ticket Intake & Contract Ledger (`ticket-intake` §0 / §1.7 / §1.8 / §1.9.6)

- **Prescription check (`§0`):** `src/component/wrapper/GoogleMaps.mjs` (`afterSetMarkerStore`, `onMarkerRecordChange`) — owns the concern.
  - `afterSetMarkerStore(value, oldValue)` subscribes to `recordChange: me.onMarkerRecordChange` alongside `load: me.onMarkerStoreLoad`.
  - `onMarkerRecordChange({record})` removes the previous marker for `record.id` via `me.removeMarker(record.id)` and re-adds the updated marker via `me.addMarker({ mapId: me.id, ...(record.toJSON?.() || record) })`.
- **Core-Idiom Pre-Flight (`§1.9.6`):** Verified against `src/core/Base.mjs`, `src/Neo.mjs`, `src/state/Provider.mjs`, `src/data/Store.mjs`, and `src/data/RecordFactory.mjs`.

#### Contract Ledger

| Surface | Path / Symbol | Contract |
|---|---|---|
| Wrapper Store Listener | `src/component/wrapper/GoogleMaps.mjs#afterSetMarkerStore` | Subscribes to both `load: me.onMarkerStoreLoad` and `recordChange: me.onMarkerRecordChange` on `markerStore`. |
| Wrapper Record-Change Handler | `src/component/wrapper/GoogleMaps.mjs#onMarkerRecordChange` | Removes and re-adds the updated marker (`...(record.toJSON?.() || record)`) via `removeMarker(record.id)` + `addMarker({ mapId: me.id, ... })`. |
| Unit Test Spec | `test/playwright/unit/component/GoogleMapsRecordChange.spec.mjs` | Verifies in-place `recordChange` synchronization with `Neo.main.addon.GoogleMaps`. |

#### Ticket Reality Classification (`§1.8`)

- **Ticket age:** `createdAt: 2023-09-12`, `updatedAt: 2026-10-09T20:38:50Z` (reopened and validated in `#19489` set C · T6).
- **Bot stale-band:** `post-stale-with-exemption` (reopened after #19489 audit).
- **Currency / successor-risk evidence:** Verified live `src/component/wrapper/GoogleMaps.mjs`; sibling ticket #4529 (PR #20209) handles `onMarkerStoreLoad` & `destroyMarkers` removals.
- **Verdict:** `valid-as-written`

— Maryam 🧭

- 2026-11-03T04:18:59Z @neo-gemini-maryam cross-referenced by #4529
- 2026-11-03T04:34:02Z @neo-gemini-maryam cross-referenced by PR #20210
- 2026-11-03T04:45:59Z @neo-opus-vega cross-referenced by #20211
- 2026-11-03T04:46:26Z @neo-opus-vega cross-referenced by PR #20209
- 2026-11-03T05:15:12Z @neo-gemini-maryam referenced in commit `635c18e` - "fix(component): replace existing marker inside GoogleMaps addMarker (#4955)"
- 2026-11-03T05:39:32Z @tobiu referenced in commit `bb9f031` - "feat(component): add recordChange listener for GoogleMaps markerStore (#4955) (#20210)

* feat(component): add recordChange listener for GoogleMaps markerStore (#4955)

* fix(component): replace existing marker inside GoogleMaps addMarker (#4955)"
- 2026-11-03T05:39:33Z @tobiu closed this issue

