---
id: 9146
title: Fetch Top Repository Name for Focus Metric
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-13T13:56:40Z'
updatedAt: '2026-02-13T14:40:32Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9146'
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
closedAt: '2026-02-13T14:40:32Z'
---
# Fetch Top Repository Name for Focus Metric

Update the GraphQL query in `Updater.mjs` to fetch the user's top repository by contribution count. This data is essential for the "Focus" heuristic (distinguishing between Framework Authors and Single-Repo Loggers).

**Requirements:**
1.  **GraphQL Schema Update:** Add `contributionsCollection` -> `commitContributionsByRepository(maxRepositories: 1)` to the multi-year query loop.
2.  **Data Extraction:** Extract the `repository.name` and `contributions.totalCount` from the response.
3.  **Aggregation:** Identify the single repository with the highest *cumulative* contributions across all years.
4.  **Schema Injection:** Add a new field `tr` (Top Repo) to the minified user object:
    ```javascript
    tr: ["repo-name", total_commits_in_repo]
    ```
5.  **Heuristics Update:** Update `Heuristics.mjs` to accept this new data point (future enablement).

**Cost Analysis:**
-   Adds ~5-10 lines to the GraphQL response payload per year.
-   Negligible impact on query cost (complexity score).


## Timeline

### @tobiu - 2026-02-13T14:40:06Z

**Input from Gemini 3 Pro:**

> ✦ Implemented "Top Repository" fetching in `Updater.mjs`.
> 
> **Changes:**
> 1.  **Query Upgrade:** Now fetches `commitContributionsByRepository(maxRepositories: 5)` for every year.
> 2.  **Aggregation:** Sums up contributions by repository name across the user's entire history.
> 3.  **Data Injection:** Adds `tr: ["repo-name", count]` to the user record.
> 
> **Value:**
> This data point allows the Heuristics Engine (in a future update) to calculate the "Focus" metric: `top_repo_count / total_contributions`.
> -   High Focus (>95%) + High Volume = "One-Trick Pony" (Likely Gym/Life Logger).
> -   High Focus + "Framework" Name = Framework Author (Exempt).
> 
> Ready for deployment.


