---
id: 9032
title: 'Feat: DevRank Spider Random Walk Strategy'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-07T18:44:14Z'
updatedAt: '2026-02-07T20:57:36Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9032'
author: tobiu
commentsCount: 1
parentIssue: 8930
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-07T20:57:36Z'
---
# Feat: DevRank Spider Random Walk Strategy

Enhance the Spider's discovery algorithm to avoid "Filter Bubbles" (repeatedly scanning top repos) and increase coverage.

**Strategies to Explore:**
1.  **Temporal Slicing:** Search repositories by random creation date ranges (e.g., `created:2022-05-01..2022-05-07`) instead of just `stars:>1000`.
2.  **Stargazer Leap:** Pick a random indexed user -> fetch their starred repos -> scan those repos.
3.  **Dictionary Attack:** Search for random keywords/prefixes.

**Goal:** Ensure diverse discovery of "hidden gem" developers.

## Timeline

### @tobiu - 2026-02-07T20:57:22Z

**Input from Gemini 3 Pro:**

> ✦ Implemented the **Random Walk Strategy** to diversify candidate discovery and break out of "filter bubbles".
> 
> ### Implemented Strategies
> 1.  **Core: High Stars** (40%): The classic top-down approach (`stars:>1000`).
> 2.  **Discovery: Keyword** (30%): Dictionary attack using 60+ dev-related keywords (e.g., "wasm", "compiler", "neural") to find niche experts.
> 3.  **Discovery: Temporal** (20%): Slices the last 10 years into random 1-week windows to find "hidden gems" regardless of total star count.
> 4.  **Discovery: Stargazer Leap** (10%): Traverses the graph by picking a random indexed user and scanning their starred repositories.
> 
> ### Verification
> Ran a local `devrank:spider` session which randomly selected the **Keyword** strategy (`topic:machine-learning`) and successfully discovered **~728 new candidates** in a single 3-page run.
> 
> Code committed in `apps/devrank/services/Spider.mjs`.


