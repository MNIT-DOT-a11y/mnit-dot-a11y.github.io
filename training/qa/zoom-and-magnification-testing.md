---
layout: qa-training-lesson
title: Zoom & Magnification Testing
seoTitle: Zoom & Magnification Testing - QA accessibility training
description: Test layouts at 200 and 400 percent browser zoom and with Windows Magnifier for resize and reflow issues.
permalink: /training/qa/zoom-and-magnification-testing/
slug: zoom-and-magnification-testing
section: manual-testing
section_title: Core Manual Testing Skills
lesson_number: 5
lesson_total: 11
deck: Zoom and Magnification.pptx
prev_slug: color-contrast-testing
prev_title: Color Contrast Testing
next_slug: text-spacing-bookmarklet-testing
next_title: Text Spacing Bookmarklet Testing
objectives:
- Explain the difference between browser zoom and screen magnification
- Test at 200 percent for clipped text, overlap, and missing controls
- Test at 400 percent for a single-column layout without horizontal scrolling
- Use Windows Magnifier to find issues browser zoom cannot show
- Recognize common zoom failures such as fixed-width containers and oversized sticky headers
---

Many users with low vision enlarge content with browser zoom or screen magnifiers. Layouts must stay readable, avoid clipping and overlap, keep controls reachable, and avoid horizontal scrolling. These checks map to WCAG 1.4.4 (Resize Text) and 1.4.10 (Reflow).

This lesson explains how browser zoom (which reflows content) differs from screen magnification (which enlarges pixels and forces panning), and gives QA a test routine for each. You'll check pages at 125, 150, 200, and 400 percent zoom, then use Windows Magnifier in full-screen mode at 200 and 300 percent to catch sticky headers that dominate the view, hover-only interactions, and controls that become unreachable.
