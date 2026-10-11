---
id: 6033
title: 'examples/button/Base: opening the menu list does no longer allow using the arrow keys to navigate right away'
state: CLOSED
labels:
  - bug
  - epic
  - no auto close
assignees:
  - tobiu
createdAt: '2024-10-15T22:45:26Z'
updatedAt: '2026-09-16T18:08:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/6033'
author: tobiu
commentsCount: 5
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
closedAt: '2026-09-16T18:08:39Z'
---
# examples/button/Base: opening the menu list does no longer allow using the arrow keys to navigate right away

* looks like a regression bug to me. might be related to the `main.addon.Navigator` introduction
* most likely just a missing focus() call

## Timeline

- 2024-10-15T22:45:26Z @tobiu added the `bug` label
- 2024-10-15T22:45:26Z @tobiu assigned to @tobiu
### @soumajit23 - 2024-10-18T07:18:55Z

Hello @tobiu , I would like to work on this issue.

### @tobiu - 2024-10-18T09:10:02Z

hi @soumajit23,

while contributions are welcome, i am afraid that this ticket is way too difficult for a first item to work on. you could easily spend a full week on it, since it requires in depth knowledge about the framework mechanics and change history.

My first thought was that it is related to @ThorstenRaab's commit, where he removed the focus() call when showing the button menu:
https://github.com/neomjs/neo/commit/342afbbb50d82dd5b4c1230885b6933be9a40e85#diff-e2256fc11cf65d84943c3bd398132cb7e134ddba3a4af65cda9234874bf93b58R547

(i have no clue why this commit had no ticket and description, since it did breaks things)

digging deeper, it is definitely also related to @ExtAnimal's changes on selection models (separating selections and focus of items).

best regards,
tobias

- 2024-10-18T09:10:11Z @tobiu added the `epic` label
### @soumajit23 - 2024-10-18T09:49:38Z

@tobiu thank you for clarifying! Looking into it, I see that it is definitely quite difficult to work on. I suppose I will look into other issues to work on for the time being.

### @github-actions - 2025-01-17T02:27:36Z

This issue is stale because it has been open for 90 days with no activity.

- 2025-01-17T02:27:36Z @github-actions added the `stale` label
- 2025-01-18T21:36:36Z @tobiu removed the `stale` label
- 2025-01-18T21:36:36Z @tobiu added the `no auto close` label
- 2026-09-16T13:50:46Z @neo-opus-ada cross-referenced by #18803
- 2026-09-16T13:52:55Z @neo-opus-ada cross-referenced by PR #18804
### @neo-opus-ada - 2026-09-16T13:53:13Z

**Fixed on `dev`, measured; a regression arm is in review in #18804.**

Probe of `examples/button/base` at `5d375d9722`, real Chromium through the e2e harness, on the "Hello World" button menu:

| opened by | focus right after opening | ArrowDown | ArrowDown |
|---|---|---|---|
| click | `Item 1` | `Item 2` | `Item 3` (a parent; its submenu previews) |
| Enter on the focused button | `Item 1` | `Item 2` | `Item 3` |
| Space on the focused button | `Item 1` | `Item 2` | `Item 3` |
| control: no menu opened | `BODY` | no menu | |

Your guess was the mechanism: it is a focus call. `component.Base#afterSetMounted` focuses a floating component when it mounts, unless its `focusOnMount` config is false. That config was added this week so a hover-previewed submenu does not steal focus.

Nothing guarded it, though: the nearest menu arm focuses the first item itself before pressing a key. #18803 / PR #18804 adds three component arms (open by click, Enter, Space, then ArrowDown with no focus call in between). With that focus call disabled, all three fail with focus outside the menu.

I'd close this once #18804 merges. It carries `epic`, so a PR cannot close it through `Resolves`.

⚖️ **Ada** · `@neo-opus-ada` · Claude Opus 5 · Claude Code


- 2026-09-16T18:08:39Z @tobiu referenced in commit `cf7aa3d` - "test(button): a menu opened by click, Enter or Space takes focus, so arrow keys move right away (#18803) (#18804)

#6033 reported that arrow keys stopped navigating a button menu right after
it opened. That works on dev today, through component.Base#afterSetMounted
focusing a floating component unless focusOnMount is false, but nothing
guarded it: the nearest menu arm focuses the first item itself before it
presses a key.

Three arms open a Button's menu by click, Enter and Space, then press
ArrowDown with no focus call in between, and assert focus moved from the
first item to the second. With the floating focus-on-mount call removed,
all three fail with focus outside the menu."
- 2026-09-16T18:08:39Z @tobiu closed this issue

