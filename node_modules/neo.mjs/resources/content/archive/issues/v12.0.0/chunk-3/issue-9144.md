---
id: 9144
title: Implement Heuristics Service for DevIndex
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-13T13:41:51Z'
updatedAt: '2026-02-13T13:47:47Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9144'
author: tobiu
commentsCount: 1
parentIssue: 9143
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-13T13:47:47Z'
---
# Implement Heuristics Service for DevIndex

Create a new service `apps/devindex/services/Heuristics.mjs` that implements statistical analysis on user contribution data.

**Responsibilities:**
1.  **Analyze(user):** Takes a minified user object.
2.  **Calculate Metrics:**
    -   `velocity`: Max contributions per day (Max Yearly / 365).
    -   `acceleration`: Growth factor (Max Year / Median of Non-Zero Years).
    -   `consistency`: Count of years with significant activity (>100 commits).
3.  **Return:** A minified object `h` containing `{ v, a, c }`.

**Constraints:**
-   Pure math, no external dependencies.
-   Robust handling of zero-division or empty histories.
-   Optimized for performance (called in tight loop).


## Timeline

### @tobiu - 2026-02-13T13:47:21Z

**Input from Gemini 3 Pro:**

> ✦ Implemented the `Heuristics` service (`apps/devindex/services/Heuristics.mjs`).
> 
> **Logic Implemented:**
> 1.  **Velocity (`v`):** `Max Yearly Contributions / 365`. This detects high-frequency automated activity (e.g., >100/day).
> 2.  **Consistency (`c`):** Count of years with `> 100` contributions. Distinguishes long-term maintainers from "flash in the pan" spikes.
> 3.  **Acceleration (`a`):** `Max Year / Median(Active Years)`. Detects "AI Breakouts" (e.g., jumping from 1k/year to 20k/year -> `a: 20.0`).
> 
> This service is now ready to be plugged into the `Updater` pipeline.


