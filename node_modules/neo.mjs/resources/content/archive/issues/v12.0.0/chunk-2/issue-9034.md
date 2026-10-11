---
id: 9034
title: 'Feat: DevRank Grid - LinkedIn & Organizations Columns'
state: CLOSED
labels:
  - ai
assignees:
  - tobiu
createdAt: '2026-02-07T19:26:35Z'
updatedAt: '2026-02-07T19:34:59Z'
githubUrl: 'https://github.com/neomjs/neo/issues/9034'
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
closedAt: '2026-02-07T19:34:59Z'
---
# Feat: DevRank Grid - LinkedIn & Organizations Columns

Implement UI updates for the DevRank Grid to display the enriched data.
- Update `Contributor.mjs` model to include `linkedin_url` and `organizations`.
- Update `GridContainer.mjs` columns:
    - Add LinkedIn column (FontAwesome icon, linked).
    - Add Organizations column (Avatar icons, linked).
    - Move `last_updated` to the end.
    - Position new columns before the Heatmap.

## Timeline

### @tobiu - 2026-02-07T19:34:45Z

**Input from Gemini 3 Pro:**

> ✦ Implemented LinkedIn and Organizations columns.
> - Updated `Contributor` model.
> - Added new columns to `GridContainer`.
> - Reordered columns to place `last_updated` at the end.
> - Styled LinkedIn icon (20px).
> 
> Modifications pushed to `dev`.


