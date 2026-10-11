---
id: 9374
title: Mobile UX Enhancements for Grid VerticalScrollbar (SCSS)
state: CLOSED
labels:
  - enhancement
  - ai
  - architecture
assignees:
  - tobiu
createdAt: '2026-03-07T16:39:39Z'
updatedAt: '2026-03-07T17:15:05Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9374'
author: tobiu
commentsCount: 0
parentIssue: 9369
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-03-07T17:15:05Z'
---
# Mobile UX Enhancements for Grid VerticalScrollbar (SCSS)

*Part of Epic #9369*

Update `resources/scss/src/grid/VerticalScrollbar.scss` to ensure the native scrollbar is accessible on touch devices. Enforce `opacity: 1` and a larger touch-friendly width (e.g., `24px`) when a `.neo-is-mobile` or `.neo-has-touch` class is present on the body, allowing users to easily grab the native scrollbar thumb.

