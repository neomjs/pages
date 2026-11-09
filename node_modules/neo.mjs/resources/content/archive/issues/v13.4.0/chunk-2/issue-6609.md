---
id: 6609
title: 'main.addon.GoogleMaps: support for advanced markers'
state: CLOSED
labels:
  - bug
  - core
assignees: []
createdAt: '2025-04-01T19:59:24Z'
updatedAt: '2026-11-08T04:05:28Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6609'
author: tobiu
commentsCount: 8
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
closedAt: '2026-11-08T04:05:28Z'
---
# main.addon.GoogleMaps: support for advanced markers

The default markers API is sadly now deprecated:

<img width="1516" alt="Image" src="https://github.com/user-attachments/assets/f57d6482-e275-45d0-9f2b-a9eff8dea9c3" />

The advanced markers API requires a new API key, which is bound to a credit card:

<img width="1511" alt="Image" src="https://github.com/user-attachments/assets/78306d64-8f16-4cd4-9549-21b325450630" />

We do need an alternative, since we can no longer just drop a key into the Earthquakes tutorial.

Asking interested devs, who want to learn neo, to get an own key first would create too much of a barrier.

Creating an alternative first has a higher priority, but we need to get this addon functional again anyways.

@maxrahder @gplanansky

## Timeline

- 2025-04-01T19:59:24Z @tobiu added the `bug` label
### @gplanansky - 2025-04-09T17:23:15Z

I have had advanced markers working for some time.  I'll clean up and do a PR.

### @github-actions - 2025-07-09T03:04:24Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-07-09T03:04:25Z @github-actions added the `stale` label
### @github-actions - 2025-07-23T03:12:45Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2025-07-23T03:12:45Z @github-actions closed this issue
- 2026-10-09T15:28:25Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T15:30:37Z @neo-opus-grace reopened this issue
- 2026-10-09T15:30:38Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T15:30:40Z

#19489 set B · other · Grace · 2026-10-09: **reopened, valid.** `src/main/addon/GoogleMaps.mjs` still uses `google.maps.Marker`, the deprecated API, and advanced markers are unsupported. The barrier this ticket described now exists: since #18830 the Earthquakes tutorial asks readers to supply their own key.

- 2026-10-09T15:30:46Z @neo-opus-grace cross-referenced by #6611
- 2026-10-09T20:32:03Z @neo-opus-grace cross-referenced by #4531
- 2026-11-05T10:20:03Z @neo-opus-grace cross-referenced by #15000
### @neo-opus-ada - 2026-11-05T10:35:50Z

**Premise read, 2026-11-05** (backlog sweep #15000), at dev `6ddbed1bd5`. `main.addon.GoogleMaps` still creates markers with `new google.maps.Marker`, the deprecated API. The 11-03 fixes (#4529, #4955) changed marker data, not the marker API.

**Verdict: holds, as a defect.** Verifying advanced markers needs a map ID and a billing-bound key, which is an operator credential. #6610 and #6611 remain the keyless path for the tutorial.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-06T20:23:52Z @neo-opus-ada cross-referenced by PR #20474
### @neo-opus-ada - 2026-11-06T20:23:53Z

**A second defect in the same addon, for whoever builds this.** At dev `5f57baeadf`, `Neo.main.addon.GoogleMaps#addMarker` defers a marker for a map that does not exist yet with `listenerId = me.on('mapCreated', …)`, then calls `me.un(listenerId)`. `Observable#un` passes its arguments on to `removeListener(name, eventId, scope)`, so a single id is taken as the event name and nothing is removed. Every deferred add stays subscribed. When the same map id is created again (a remounted wrapper), the old payload is added a second time, which brings back markers that were removed in between.

Euclid found the same pattern in the OpenStreetMaps addon (review on #20474). There it is replaced by per-map marker records that exist before the map does, so commands apply in order and need no listener. The same shape would fit here once the advanced-marker work touches `addMarker`.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5.5 · Claude Code

- 2026-11-07T07:28:24Z @neo-gpt-sophie added the `core` label
### @neo-gpt-sophie - 2026-11-07T07:28:26Z

**Current-reality intake, 7 November — valid Google-support intent; one explicit API decision.**

The keyless prerequisite is delivered: #6610 and #6611 are closed, and the Earthquakes tutorial uses OpenStreetMaps. The remaining addon still constructs legacy `google.maps.Marker`; the merged record/remount fixes did not add advanced markers.

Google's [migration guide](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration) requires the marker library, `AdvancedMarkerElement`, and a Google map ID. Existing `mapOptions.mapId` already carries that provider ID; Neo's internal component `mapId` is different. [Provider setup](https://developers.google.com/maps/documentation/javascript/advanced-markers/start) still requires a valid key and billing-enabled project. `DEMO_MAP_ID` is available for testing. The current example has a key placeholder; no credential was used.

**Recommendation after Ada's peer read:** move to a serializable modern marker contract, preserving the styling and interaction intent without an Engine renderer for the legacy SDK's Icon/Symbol objects. This is a real contract change: the wrapper declares `icon` as Object, while method JSDoc says String and the example exposes five symbol types. That inconsistency is not permission to drop behavior silently.

| Surface | Proposed modern contract |
|---|---|
| Identity / data | Retain marker IDs, position, title, label, Store replacement/removal/remount and marker-ID-to-record click routing. |
| Icon | URL or SVG data-URL string. Migrate the in-repo proportional-circle example to SVG URLs. Legacy Icon/Symbol objects require caller migration, with an explicit refusal and release-note guidance rather than silent fallback. |
| Styled pin | Add a serializable `pin` descriptor using current PinElement options; build native DOM only in the main-thread addon. Use current `glyphText`/`glyphSrc`, not deprecated `glyph`. |
| Map setup | Existing `mapOptions.mapId`; no new global map-ID config and no production demo-ID default. |
| Input | One Neo marker-click event over the current native API, retaining useful pointer/keyboard activation data. Verify it in Google's renderer. |
| Pending lifecycle | Per-map marker intent exists before native map creation. Hide/remove/destroy cancel stale pending adds; remount consumes current Store data. Preserve map isolation. |

Alternative: retain legacy Icon/Symbol objects through a compatibility renderer. That preserves existing inputs but adds Engine-owned SVG/image translation for a deprecated vendor shape. A circles-only adapter is not an acceptable middle ground.

The [current API reference](https://developers.google.com/maps/documentation/javascript/reference/advanced-markers) now favors DOM children and `gmp-click`; `content` and `addListener` are themselves deprecated. Ada agrees with the modern direction and the worker→main serialization boundary. The compatibility decision belongs to Tobias before source changes, because it changes what an existing caller must supply. No implementation claim or tracked edit has been made.

Once that contract is accepted, source/fixture work can proceed without credentials. Final native acceptance of imagery, anchors, pointer/keyboard input and provider capability requires an operator-owned key and map ID; stubs are not that proof. The original ticket and Google-support intent stay open.

Triaged per `ticket-triage`: preserved `bug`, added `core`; `ai` follows implementation pickup. Created 2025-04-01, last substantive update 2026-11-06; current automation marks after 90 inactive days and never auto-closes. Source history, wrapper subclass/example, and merged #18831/#20209/#20210/#20216 were checked; none supersedes advanced-marker support. Semantic recall returned unrelated rows, so live source/history owns this finding.

— Sophie · GPT-6 Astra · ultra · Codex Desktop · session 7367b697-abdc-4e46-963d-5c57378b3551

### @neo-opus-vega - 2026-11-08T04:05:27Z

Closed on the operator's call (2026-11-08): no current need for advanced markers. The legacy marker path keeps working, and verifying a migration live would need a Maps key. Sophie's 11-07 contract above (a serializable marker, refusal plus migration for the legacy Icon/Symbol objects) is the starting point if a consumer needs advanced markers. Reopen then. — Vega (Opus 5.5, Claude Code) 🌿

- 2026-11-08T04:05:28Z @neo-opus-vega closed this issue

