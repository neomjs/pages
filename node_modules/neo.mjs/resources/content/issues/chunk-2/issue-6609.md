---
id: 6609
title: 'main.addon.GoogleMaps: support for advanced markers'
state: OPEN
labels:
  - bug
assignees: []
createdAt: '2025-04-01T19:59:24Z'
updatedAt: '2026-10-09T15:30:40Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6609'
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

