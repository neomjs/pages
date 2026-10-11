---
id: 9118
title: 'DevIndex: Enhance Updater with Private Contributions & Metadata'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-12T20:04:10Z'
updatedAt: '2026-02-12T20:09:24Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9118'
author: tobiu
commentsCount: 2
parentIssue: 9106
subIssues: []
subIssuesCompleted: 0
subIssuesTotal: 0
contentTrust:
  projected: true
  quarantined: 0
  signals: []
blockedBy: []
blocking: []
closedAt: '2026-02-12T20:09:24Z'
---
# DevIndex: Enhance Updater with Private Contributions & Metadata

This task covers the enhancement of the DevIndex `Updater` service to improve data accuracy and enrich the user index with valuable metadata.

**Problem:**
1.  **Data Integrity:** Users with significant private contributions (but low public activity) were being pruned from the index because the previous logic only counted public contributions.
2.  **Missing Metadata:** The index lacked professional signals like "Hireable" status, "Sponsors", and direct links (Website, Twitter), which are high-value for recruiters and analysis.

**Changes:**
1.  **Private Contributions:** The `Updater` now fetches `restrictedContributionsCount` (private contributions) from the GitHub GraphQL API.
2.  **New Data Fields:**
    -   `py` (Private Years): An array storing private contribution counts per year.
    -   `tc` (Total Contributions): Now correctly includes private contributions.
    -   `y` (Yearly Totals): Now represents the sum of Public + Private contributions.
3.  **Metadata Enrichment:** The `Updater` now captures and maps:
    -   `h` (isHireable): Boolean (1/0).
    -   `s` (hasSponsorsListing): Boolean (1/0).
    -   `t` (twitterUsername): String.
    -   `w` (websiteUrl): String.

**Impact:**
-   Prevents pruning of high-value enterprise/private contributors.
-   Enables new frontend features: "Private Mode" toggle, "Hireable" filter, and direct social links.


## Timeline

### @tobiu - 2026-02-12T20:06:02Z

**Input from Gemini 3 Pro:**

> ✦ I have enhanced the `Updater` service to include private contributions and professional metadata.
> 
> **Changes:**
> -   **Private Contributions:** Added `restrictedContributionsCount` to the GraphQL query.
> -   **New Data Fields:**
>     -   `py`: Array of private contribution counts per year.
>     -   `tc`: Total contributions now includes private counts.
>     -   `y`: Yearly totals now sum public + private.
> -   **Metadata:** Added mapping for `h` (isHireable), `s` (hasSponsorsListing), `t` (twitterUsername), and `w` (websiteUrl).
> 
> This update ensures high-value users are not pruned due to private activity and provides rich data for the frontend.

### @tobiu - 2026-02-12T20:06:19Z

**Input from Gemini 3 Pro:**

> ✦ I have also investigated and fixed the data integrity issue where 869 users were missing from `tracker.json`.
> 
> **Root Cause:** The previous exclusion of private contributions caused these users to fail the contribution threshold, leading to them being pruned from the tracker but not the rich data store.
> 
> **Fix:**
> -   Created and ran `apps/devindex/services/fixTrackerConsistency.mjs` to restore the missing users to `tracker.json`.
> -   The enhanced `Updater` logic (above) will now correctly calculate their total contributions, preventing future false-positive pruning.
> -   Added `missing_users.json` (temporarily) to track the affected accounts.
> 
> This task is now complete.


