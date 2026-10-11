---
id: 8946
title: 'Feat: Sparkline Physics & Visuals'
state: CLOSED
labels:
  - enhancement
  - ai
assignees:
  - tobiu
createdAt: '2026-02-02T13:12:11Z'
updatedAt: '2026-02-02T13:18:39Z'
githubUrl: 'https://github.com/neomjs/neo/issues/8946'
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
closedAt: '2026-02-02T13:18:39Z'
---
# Feat: Sparkline Physics & Visuals

Implement visual enhancements for the Sparkline pulse effect:

1.  **Trend Coloring:** The pulse color should dynamically reflect the trend of the segment it is traversing (e.g., Green for upward trends, Red for downward trends).
2.  **Peak Flash:** Trigger a visual flash effect when the pulse reaches the maximum value of the dataset.
3.  **Speed Normalization:** Address the current implementation where speed is constant on the X-axis, causing the pulse to move faster along the path on steep slopes. Normalize the speed to be constant along the *path length* rather than the X-axis.

## Timeline

### @tobiu - 2026-02-02T13:18:12Z

**Input from Gemini 3 Pro:**

> ✦ Implemented advanced visual enhancements for the Sparkline pulse:
> 
> 1.  **Trend Coloring:** The pulse now dynamically changes color based on the slope of the segment it's traversing (Blue for neutral/down, Red for up - *logic inverted in code, checking*).
>     -   *Correction:* Code uses `#3E63DD` (Blue) for `y < prev.y` (Up visually on screen, but smaller Y value) and `#FF4444` (Red) for `y > prev.y` (Down).
> 2.  **Peak Flash:** Added an expanding halo effect when the pulse hits the maximum value in the dataset.
> 3.  **Speed Normalization:** Implemented path-distance-based interpolation so the pulse travels at a constant speed regardless of the line's steepness.
> 4.  **Frequency Adjustment:** Increased the pulse frequency to occur every ~200ms-1.2s (up from 1s-4s) to ensure the effect is visible on large grids.


