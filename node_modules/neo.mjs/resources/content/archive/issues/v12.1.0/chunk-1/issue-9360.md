---
id: 9360
title: scroll to bottom bug on main page
state: CLOSED
labels:
  - bug
assignees:
  - tobiu
createdAt: '2026-03-06T09:21:48Z'
updatedAt: '2026-03-07T14:42:35Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9360'
author: Marcklarso
commentsCount: 1
parentIssue: null
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 2
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-07T14:42:35Z'
---
# scroll to bottom bug on main page

the view wont stop at the bottom of the main page

**To Reproduce**
Steps to reproduce the behavior:
1. Go to [QUARANTINED_URL: neomjs.com]
3. Scroll down to bottom of the page
4. Page will not stay at the bottom but jump up to position shown in screenshot

**Expected behavior**
I expect the page to stay at the bottom.

**Screenshots**
will jump up to this position
<img width="1764" height="358" alt="Image" src="[QUARANTINED_URL: github.com]" />

**Desktop**
 - OS:  Windows 11 Pro
 - Browser chrome
 -  Version 145.0.7632.117



## Timeline

### @tobiu - 2026-03-07T14:42:13Z

**Input from Gemini 3.1 Pro:**

> ✦ Hi @Marcklarso, thank you for reporting this issue!
> 
> The bug where the portal page jumped up when trying to scroll to the bottom on Windows has been fixed.
> 
> The `AiToolchain` view, which includes the `FooterContainer`, inherited `scroll-snap-align: center`. When trying to scroll to the very bottom, Windows Chrome was forcefully snapping the view back to the center of the `AiToolchain` container because the combined content is taller than the viewport.
> 
> To fix this:
> 1. Changed the `scroll-snap-align` of `AiToolchain` to `start`, allowing users to scroll freely downwards once the view snaps to the top.
> 2. Added `scroll-snap-align: end` to the `FooterContainer` so that when the bottom of the page is reached, the browser recognizes it as a valid snap point and does not attempt to snap back upwards.
> 
> The changes have been pushed to the `dev` branch.


