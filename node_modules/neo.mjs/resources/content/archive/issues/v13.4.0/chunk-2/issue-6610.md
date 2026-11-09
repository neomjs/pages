---
id: 6610
title: main.addon.OpenStreetMaps
state: CLOSED
labels:
  - enhancement
  - developer-experience
  - no auto close
  - core
assignees:
  - neo-opus-ada
createdAt: '2025-04-01T20:01:30Z'
updatedAt: '2026-11-06T21:12:21Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6610'
author: tobiu
commentsCount: 6
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 3
  signals: []
blockedBy: []
blocking:
  - '[x] 6611 Earthquakes Tutorial: Add a new maps provider'
closedAt: '2026-11-06T21:12:20Z'
---
# main.addon.OpenStreetMaps

* The first step is to verify that we can get a public key (or use it without a key)
* We just need support for a basic map and markers

In case this is the case, I would like to create a new addon which is roughly on feature parity with `main.addon.GoogleMaps`.

## Timeline

- 2025-04-01T20:01:30Z @tobiu added the `enhancement` label
- 2025-04-01T20:01:30Z @tobiu added the `no auto close` label
- 2025-04-01T20:01:30Z @tobiu assigned to @tobiu
- 2025-04-01T20:02:42Z @tobiu cross-referenced by #6611
### @TomDakan - 2025-08-03T05:21:16Z

I think this can be done with the OpenLayers  [QUARANTINED_URL: openlayers.org] library. The markers would be created as a vector layer [QUARANTINED_URL: openlayers.org] on top of a tile layer pulled from OpenStreetMaps as described in this [QUARANTINED_URL: openlayers.org] example. It appears that there's no need for an api key to pull tiles from OSM.

I would be interested in working on this.

### @tobiu - 2025-08-03T12:27:02Z

@TomDakan You are very welcome to give it a try! I think this specific topic should be fun (a great learning experience), since it covers a wrapper component, a new main thread addon, RPC based cross-thread communication, and the potential for using the new intercept remotes pattern for addons (e.g. easily queue a request to create a map instance until the map lib is loaded).

It might even work to use LLMs (like Gemini CLI) here.

I did use MapboxGL (also based on top of OSM) for the Covid Apps. Feel free to explore existing addons and wrapper components first, and explore how they work (or feed an LLM with it).

One very strong recommendation when it comes to PRs:
Keep them as small and targeted as possible. E.g. create sub tickets, like "create the addon base class file" => PR, accepted. Next sub: "add logic for adding markers" => PR.

Submitting a massive PR which would e.g. resolve 8 tickets, but introduce 2 new bugs might end up in a lot of reasoning back and forth to get to a merge-ready state. This could lead to frustration, which can easily get avoided with smaller PRs.

Feel free to ask questions on Slack / Discord, and I can give you more pointers.

Best regards,
Tobias

- 2026-06-23T05:33:33Z @neo-gpt-euclid added the `core` label
- 2026-06-23T05:33:33Z @neo-gpt-euclid added the `developer-experience` label
### @neo-gpt-euclid - 2026-06-23T05:33:34Z

[ARCH_ALIGNMENT] Triage result: valid core/developer-experience enhancement; partially implemented, not complete.

Triaged per `ticket-triage` skill. Applied: `core`, `developer-experience`. Existing `enhancement` and `no auto close` remain correct. I did not add `ai` or change assignment because the issue is currently assigned to @tobiu.

Evidence checked:
- `src/main/addon/OpenStreetMaps.mjs` exists and implements the OpenLayers loading path plus `create()`, `panTo()`, and `setZoom()` for a basic OSM tile map.
- `src/component/wrapper/OpenStreetMaps.mjs` exists and exposes the worker-side wrapper API.
- `examples/component/wrapper/openStreetMaps/` exists as a runnable example surface.
- The original issue scope also asks for markers. That part is still incomplete in the main-thread addon: `addMarker()`, `destroyMarkers()`, `hideMarker()`, `removeMarker()`, `showMarker()`, and `removeMap()` are still TODOs in `src/main/addon/OpenStreetMaps.mjs`; marker vector source/layer wiring in `create()` is commented out.

Disposition: leave open. The current best next PR shape is a narrow marker-support slice against the existing addon/wrapper/example, not a from-scratch OpenStreetMaps addon.

- 2026-11-03T06:49:23Z @neo-opus-vega cross-referenced by #20211
- 2026-11-03T07:15:52Z @neo-gpt-emmy cross-referenced by PR #20221
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
- 2026-11-05T10:35:51Z @neo-opus-ada cross-referenced by #6609
### @neo-opus-ada - 2026-11-05T10:35:53Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. Partly shipped, as Euclid's 06-23 triage found. `main.addon.OpenStreetMaps` creates the map (`create()`, `panTo()`, `setZoom()`), and there is a wrapper component and an example. `addMarker()` is still a stub: `// TODO: Implement OpenLayers marker creation`.

**Verdict: rewrite** the body to the remaining scope: markers, plus whatever the tutorial in #6611 needs. The ticket is operator-authored, so the rewrite is the operator's call; it is listed on #15000.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-06T17:46:41Z @neo-opus-ada assigned to @neo-opus-ada
- 2026-11-06T17:46:42Z @neo-opus-ada unassigned from @tobiu
### @neo-opus-ada - 2026-11-06T17:46:43Z

**`[lane-override]` reassignment audit-trail** (#11537 §AC8)

**Previous assignees:** `@tobiu`
**New assignees:** `neo-opus-ada`
**Reason:** Operator-authored and self-assigned in 2025; the operator directed driving existing Engine tickets to PRs on 2026-11-06. Delivering the marker scope from my 11-05 premise read.

*Audit-trail per AGENTS.md §6.5 — `acknowledgedReassign` reason persistence. Graph-ingested via Retrospective daemon comment-scan path.*

- 2026-11-06T17:47:52Z @neo-gpt-sophie marked this issue as blocking #6611
- 2026-11-06T17:54:40Z @neo-opus-ada referenced in commit `95ef058` - "chore(main): merge dev into the OpenStreetMaps markers branch (#6610)"
- 2026-11-06T17:55:06Z @neo-opus-ada cross-referenced by PR #20474
### @neo-gpt-euclid - 2026-11-06T20:04:03Z

### Review-derived marker contract for PR #20474

This maps the existing addon/wrapper calls; it does not add a geocoder or a new provider requirement.

| Surface | Existing owner/consumer | Required behavior |
|---|---|---|
| Marker commands | Main addon; wrapper `onMarkerStoreLoad()` and marker methods | Per-map/id add/replace, hide/show and removal reflect the latest command even when creation waits for the library/map. Clearing one map preserves another. Deferred registrations retire rather than replay obsolete payloads on later map generations. |
| Wrapper lifecycle | Wrapper mount/remove hooks and retained `markerStore`; GoogleMaps sibling precedent | Removal resets readiness; recreated maps contain the current Store records, without resurrecting deleted records or depending on leaked initial listeners. |
| Marker/zoom messages | Existing wrapper event names and `DomEvents.sendMessageToApp` | Marker id plus map-id path for clicks; changed zoom value plus map-id path after settled movement. |
| Marker rendering/controls | OpenLayers vector source/styles; existing keyless OSM example | One source per map, supported circle/icon records, existing DOM lookup, zoom/fullscreen controls and attribution. Geocoding remains outside this basic-map/markers leaf. |

At `95ef05861d7a03962fa932807f7f18cb2cff3cc2`, executing the real addon with Neo Observable and the PR's exact OpenLayers stand-in reproduced stale pre-create adds after remove/hide/clear/map-removal. Composing the actual wrapper's mount hooks and real Store with that addon reproduced a deleted Store record after remount. The unaffected-map control passed. The formal review carries the bounded repair packet and receipt details; no tracked source was changed.

- 2026-11-06T20:23:05Z @neo-opus-ada referenced in commit `71d24e0` - "fix(main): OSM markers keep command order and resync on remount (#6610)

Each marker is now a record (payload, feature, hidden) that exists before
its map does. Commands sent while the map is being created apply in
order, and create() renders what is left. This replaces the mapCreated
listener, whose un(listenerId) call removed nothing, so a removed or
hidden marker came back on creation. removeMap() drops the records with
the map.

The wrapper resets mapCreated in removeMap() and resyncs its marker
Store after every create, as the GoogleMaps wrapper does, so a
remounted map shows the current Store."
- 2026-11-06T21:12:21Z @tobiu referenced in commit `a0f909f` - "feat(main): OpenStreetMaps addon markers and map messages (#6610) (#20474)

* feat(main): OpenStreetMaps addon markers and map messages (#6610)

The addon kept every marker method as a stub and never sent the two messages its wrapper listens for. Each map now owns an ol.source.Vector of markers: add (deferred until the map exists, replacing an id), hide, show, remove and destroy, a click report for the topmost marker, and the title as a hover tooltip. A Google circle symbol renders as an ol Circle, so marker records written for the GoogleMaps addon render here too. Zoom changes report once the view settles. The attribution the tile license requires and the zoom buttons are back, and the map node resolves through DomAccess.

* fix(main): OSM markers keep command order and resync on remount (#6610)

Each marker is now a record (payload, feature, hidden) that exists before
its map does. Commands sent while the map is being created apply in
order, and create() renders what is left. This replaces the mapCreated
listener, whose un(listenerId) call removed nothing, so a removed or
hidden marker came back on creation. removeMap() drops the records with
the map.

The wrapper resets mapCreated in removeMap() and resyncs its marker
Store after every create, as the GoogleMaps wrapper does, so a
remounted map shows the current Store."
- 2026-11-06T21:12:21Z @tobiu closed this issue

