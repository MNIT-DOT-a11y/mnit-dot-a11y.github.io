---
layout: training-lesson
title: Axe DevTools Basics
seoTitle: Axe DevTools Basics - Accessibility training
description: Install Axe DevTools, run a scan, interpret and prioritize results, and document findings — plus why manual testing still matters.
permalink: /training/axe-devtools-basics/
slug: axe-devtools-basics
section: core-testing
section_title: Accessibility Testing
lesson_number: 9
lesson_total: 16
deck: Axe DevTools Basics.pptx
prev_slug: text-spacing
prev_title: Text Spacing
next_slug: nvda-basics
next_title: NVDA Basics
objectives:
- 'Install Axe DevTools and run a full-page scan'
- 'Interpret each violation and locate the failing element'
- 'Prioritize findings by impact'
- 'Combine automated scans with keyboard, screen reader, zoom, and color testing'
- 'Write a defect with the violation name, WCAG reference, and steps to reproduce'
slides:
- type: title
  title: Axe DevTools Basics
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Axe DevTools Basics
  items:
  - Installing Axe DevTools
  - Running an Axe scan
  - Interpreting Axe results
  - Prioritizing issues
  - Combining automated and manual testing
  - Documenting Axe findings
- type: definitions
  title: Three Result Categories
  items:
  - term: Violations
    desc: Issues you must fix.
  - term: Needs Review
    desc: Axe found something that might be a problem but needs human judgment.
  - term: Best Practices
    desc: Recommendations that improve accessibility but may not map directly to WCAG.
- type: body
  title: Installing Axe DevTools
  groups:
  - header: Getting Set Up
    items:
    - Open Chrome or Edge and search the extension store for “Axe DevTools”
    - Install the extension, then open Developer Tools
    - Look for a new “Axe DevTools” tab — if you see it, you're ready to scan
- type: body
  title: Running an Axe Scan
  groups:
  - header: Your First Scan
    items:
    - With Developer Tools open, select the Axe DevTools tab
    - Click “Scan all of my page”
    - Axe analyzes the page and returns a list of violations, grouped by category
- type: body
  title: Interpreting Axe Results
  groups:
  - header: What Each Violation Shows
    items:
    - The WCAG success criterion and a plain-language explanation of why it matters
    - A code snippet showing the failing element
    - A “Highlight” button that visually marks the issue on the page
  - header: Example
    items:
    - “Buttons must have discernible text” shows the button element in the code, highlighted right on the page
- type: body
  title: Prioritizing Issues
  groups:
  - header: Fix High-Impact Issues First
    items:
    - 'High impact: keyboard traps, missing labels, missing alt text, elements screen readers can''t identify'
    - 'Medium impact: color contrast or ARIA misuse'
    - 'Low impact: redundant roles or minor semantic problems'
- type: body
  title: Combining Automated and Manual Testing
  groups:
  - header: Axe Only Catches Part of the Picture
    items:
    - Axe DevTools catches roughly 30 to 40 percent of accessibility issues
    - 'Manual testing covers the rest: keyboard navigation, screen reader behavior, focus order, zoom and magnification, and color alone testing'
- type: body
  title: Documenting Axe Findings
  groups:
  - header: What a Good Defect Includes
    items:
    - The violation name and the WCAG reference
    - A screenshot or highlighted element
    - Steps to reproduce and the expected behavior
- type: list
  title: Recap
  header: Axe DevTools Review
  items:
  - Install the extension, open Developer Tools, and scan from the Axe DevTools tab
  - Violations, Needs Review, and Best Practices are three different things
  - Prioritize high-impact issues — keyboard traps and missing labels — first
  - Axe only catches 30-40% of issues, so manual testing is still required
  - Clear defects include the violation name, WCAG reference, and reproduction steps
- type: list
  title: Key Takeaways
  header: Axe DevTools Basics
  items:
  - Axe DevTools is fast, but it's a starting point, not a complete accessibility test
  - Always pair automated scans with manual keyboard, screen reader, and zoom testing
  - Clear, well-documented findings help developers fix issues faster
  - 'Up next: NVDA Basics'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/axe/
---

Axe DevTools is one of the core tools we use at MNIT DOT because it aligns with WCAG 2.1 AA and finds a large share of common issues in seconds. This lesson takes you from installing the browser extension to running your first scan and reading the results.

You'll learn the difference between Violations, Needs Review, and Best Practices; how each finding shows the WCAG criterion, an explanation, the failing code, and a highlight on the page; and how to prioritize high-impact issues like keyboard traps and missing labels. Because Axe only catches roughly 30–40% of accessibility problems, the lesson also covers pairing it with manual testing and documenting findings so developers can act on them.
