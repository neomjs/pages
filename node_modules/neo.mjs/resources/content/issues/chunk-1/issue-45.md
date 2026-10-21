---
id: 45
title: 'Docs App: Theme button texts'
state: OPEN
labels:
  - enhancement
assignees: []
createdAt: '2019-11-18T01:12:19Z'
updatedAt: '2026-10-09T21:01:13Z'
githubUrl: 'https://github.com/neomjs/neo/issues/45'
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
# Docs App: Theme button texts

the texts should automatically adjust to not match the theme the app was started with.

## Timeline

- 2019-11-18T01:12:19Z @tobiu added the `enhancement` label
### @github-actions - 2024-09-15T02:37:09Z

This issue is stale because it has been open for 90 days with no activity.

- 2024-09-15T02:37:09Z @github-actions added the `stale` label
### @github-actions - 2024-09-29T02:38:54Z

This issue was closed because it has been inactive for 14 days since being marked as stale.

- 2024-09-29T02:38:54Z @github-actions closed this issue
- 2026-09-04T04:34:16Z @neo-opus-vega cross-referenced by PR #18260
- 2026-09-08T07:53:11Z @neo-opus-grace cross-referenced by PR #18466
- 2026-09-08T09:37:22Z @tobiu referenced in commit `ad3fbc9` - "ci(baseline): adopt the published skills release this repo's pin predates (#18465) (#18466)

The pin named e409dea5dc -- the skills #45 merge -- which installs
neo-agent-skills@0.1.3 at all three of the reusable baseline's install sites.
So every PR here has been running its baseline guards from the version the
0.1.4 release exists to retire. Nothing was broken: 0.1.3 still resolves, so
the jobs passed. Green was not evidence of currency.

Ordering respected rather than assumed. skills#27 records the live failure
mode -- a baseline naming a SKILLS_VERSION absent from the registry -- and its
trigger is a caller REACHING such a baseline, not a merge. That is exactly
this edit, so it is safe now and would not have been an hour ago.
`npm view neo-agent-skills@0.1.4` re-checked immediately before the change.

Job set is byte-identical across the bump (pr-base, skills-materialized,
source-comment-archaeology, substrate-size, pr-body), which is what keeps this
a one-line adoption rather than a CI change.

skills#56 still owns automating the hop; doing it by hand does not discharge it."
### @neo-opus-grace - 2026-10-09T20:02:07Z

#19489 set C · T1 · Grace · 2026-10-09: **confirm-close (obsolete).** The Docs app is gone from `apps/`; the Portal replaced it.

- 2026-10-09T20:02:45Z @neo-opus-grace cross-referenced by #19489
- 2026-10-09T21:01:10Z @neo-opus-grace reopened this issue
- 2026-10-09T21:01:11Z @neo-opus-grace removed the `stale` label
### @neo-opus-grace - 2026-10-09T21:01:13Z

#19489 set C · correction · Grace · 2026-10-09: **Correction.** My earlier note here said the Docs app is gone. It is not: it lives at `docs/`, and the Portal embeds it at `/docs` (`apps/portal/view/Viewport.mjs`). **Reopened, valid.** Checked today on neomjs.com: the embedded Docs app renders dark while its buttons still offer "Theme Dark" and "Source View Theme Dark", since the texts are hardcoded (`docs/app/view/HeaderContainer.mjs`).


