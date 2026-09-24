---
layout: qa-training-lesson
title: NVDA Page Structure Testing
seoTitle: NVDA Page Structure Testing - QA accessibility training
description: Use NVDA to test headings, landmarks, links, buttons, and tables so the page structure makes sense without sight.
permalink: /training/qa/nvda-page-structure-testing/
slug: nvda-page-structure-testing
section: screen-reader
section_title: Screen Reader Testing Skills
lesson_number: 8
lesson_total: 11
deck: HTML Accessibility Fundamentals.pptx
prev_slug: nvda-basics
prev_title: NVDA Basics
next_slug: nvda-forms-and-error-messages-testing
next_title: NVDA Forms & Error Messages Testing
objectives:
- Use H and the elements list to check the heading outline for logical order
- Use D to confirm header, navigation, main, and footer landmarks are present
- Verify links and buttons announce the correct role and a descriptive name
- Check that data tables announce column and row headers
- Map structure findings to WCAG 1.3.1, 2.4.1, 2.4.4, and 2.4.6
---

Screen reader users rely on the underlying HTML structure to understand what a page contains, how it is organized, what is interactive, and how to navigate. When a page is built from generic div and span elements, or native controls are recreated with custom code, that meaning is lost, even if the page looks fine.

In this lesson QA analysts use NVDA to test that structure: H to walk the heading outline (one H1, no skipped levels, headings that describe content), D to cycle through landmarks (header, nav, main, footer), and Insert+F7 to review links for descriptive text. You'll confirm links are announced as links and buttons as buttons, and that data tables announce their headers. These checks support WCAG 1.3.1, 2.4.1, 2.4.4, and 2.4.6.
