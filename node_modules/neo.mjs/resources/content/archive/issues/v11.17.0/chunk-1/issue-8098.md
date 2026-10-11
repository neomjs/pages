---
id: 8098
title: 'Calendar: Fix YearComponent state regression & enhance State Provider'
state: CLOSED
labels:
  - bug
  - ai
  - regression
assignees:
  - tobiu
createdAt: '2025-12-12T21:17:19Z'
updatedAt: '2025-12-12T21:18:43Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8098'
author: tobiu
commentsCount: 0
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
closedAt: '2025-12-12T21:18:43Z'
---
# Calendar: Fix YearComponent state regression & enhance State Provider

## Description
The calendar's `YearComponent` exhibited a regression where changing the year resulted in visual artifacts or reverted state. This was caused by in-place mutation of `Date` objects which are shared by reference with the `StateProvider`.

## Changes
1.  **YearComponent.mjs**: Updated `onNavButtonClick` and `onWheel` to use `stateProvider.setData()` instead of modifying the local config.
2.  **State Provider**: Enhanced `Neo.state.Provider` to automatically clone `Date` objects when setting data. This ensures the provider maintains a clean source of truth and prevents mutation-by-reference bugs.
    -   Added protected `adjustValue(value)` method.
    -   Updated `processDataObject` and `#setConfigValue` to use `adjustValue`.

## Acceptance Criteria
-   `YearComponent` navigation works correctly (no double logs, no reverted state).
-   `StateProvider` clones `Date` objects on set.

