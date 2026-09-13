---
layout: training-lesson
title: Axe DevTools Basics
seoTitle: Axe DevTools Basics - Accessibility training
description: Install Axe DevTools, run a scan, interpret and prioritize results, and document findings — plus why manual testing still matters.
permalink: /training/axe-devtools-basics/
section: core-testing
section_title: Core Testing Skills
lesson_number: 9
lesson_total: 16
deck: Axe DevTools Basics.pptx
prev_slug: text-spacing
prev_title: Text Spacing
next_slug: nvda-basics
next_title: NVDA Basics
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
quiz:
- q: What are the three result categories Axe DevTools reports?
  options:
  - Errors, Warnings, Info
  - Violations, Needs review, Best practices
  - Critical, Major, Minor
  - Pass, Fail, Skip
  answer: 1
  explain: Violations must be fixed; Needs review requires human judgment; Best practices may not map directly to WCAG.
- q: Roughly what share of accessibility issues does Axe catch on its own?
  options:
  - About 30 to 40 percent
  - About 90 percent
  - 100 percent
  - Less than 5 percent
  answer: 0
  explain: Automated scanning is a starting point. Manual keyboard, screen reader, zoom, and color testing cover the rest.
- q: Which of these is a high-impact issue that should be fixed first?
  options:
  - A redundant role
  - A minor semantic problem
  - A keyboard trap or missing label
  - A best-practice recommendation
  answer: 2
  explain: Keyboard traps, missing labels, missing alt text, and unidentifiable elements block users entirely.
- q: What should a documented Axe finding include?
  options:
  - Only a screenshot
  - The violation name, WCAG reference, screenshot or highlighted element, steps to reproduce, and expected behavior
  - Just the URL
  - The developer's name
  answer: 1
  explain: Clear reporting helps developers fix issues faster and keeps standards consistent across DOT applications.
---

## Introduction

Hello everyone, and welcome. In this session, we’re going to walk through how to install Axe DevTools, how to run an accessibility scan, and how to interpret the results so you can identify issues early in development or during QA testing.

Axe DevTools is one of the core tools we use at MNIT DOT because it aligns with WCAG 2.1 AA and helps us catch a significant portion of accessibility issues quickly. Let’s get started.

## Section 1 – Installing Axe DevTools

First, let’s make sure Axe DevTools is installed.

Open your browser, Chrome or Edge works best  and go to the extension store. Search for ‘Axe DevTools’ and install the extension. Once it’s installed, open your Developer Tools. You’ll see a new tab labeled ‘Axe DevTools.’

If you see that tab, you’re ready to begin scanning. If you don’t see it, double-check that the extension is enabled.

If you want more detail on installation later, you can explore installation basics.

## Section 2 – Running an Axe Scan

Now let’s run our first scan.

With Developer Tools open, select the Axe DevTools tab. You’ll see a button that says ‘Scan all of my page.’ Go ahead and click that. Axe will analyze the page and return a list of violations.

You’ll notice three categories:

- Violations
- Needs review
- Best practices

Violations are the issues you must fix. ‘Needs review’ means Axe found something that might be a problem but needs human judgment. ‘Best practices’ are recommendations that improve accessibility but may not map directly to WCAG.

If you want to revisit this later, you can look at running a scan.

## Section 3 – Interpreting Axe Results

Let’s take a closer look at the results.

Click on any violation. Axe will show you:

- The WCAG success criterion
- A plain-language explanation of why the issue matters
- A code snippet showing the failing element
- A ‘Highlight’ button that visually marks the issue on the page

This is extremely helpful because it shows you exactly where the problem is and why it needs to be fixed.

For example, if Axe reports ‘Buttons must have discernible text,’ you’ll see the button element in the code and Axe will highlight it on the page.

If you want more guidance on interpreting results, you can explore interpreting Axe results.

## Section 4 – Prioritizing Issues

Not all issues have the same impact.

High-impact issues include things like keyboard traps, missing labels, missing alt text, or elements that screen readers can’t identify. These should be fixed first.

Medium-impact issues include color contrast or ARIA misuse. Low-impact issues include redundant roles or minor semantic problems.

When you’re working with developers or writing QA reports, always call out the highest-impact issues first.

If you want more detail on prioritization, you can explore issue prioritization.

## Section 5 – Combining Automated and Manual Testing

Axe DevTools is powerful, but it only catches about 30 to 40 percent of accessibility issues.

That means we always combine automated testing with manual testing. Manual testing includes:

- Keyboard navigation
- Screen reader behavior
- Focus order
- Zoom and magnification
- Color alone testing

Axe helps us identify structural issues quickly, but manual testing ensures we catch everything else.

You can learn more about this in combined testing.

## Section 6 – Documenting Axe Findings

Finally, let’s talk about reporting.

When you document an accessibility issue found by Axe, make sure your defect includes:

- The violation name
- The WCAG reference
- A screenshot or highlighted element
- Steps to reproduce
- The expected behavior

Clear reporting helps developers fix issues faster and ensures we maintain consistent accessibility standards across DOT applications.

If you want more guidance on writing defects, explore writing accessibility defects.

## Conclusion

That’s the end of our Axe DevTools microtraining. You now know how to install Axe, run a scan, interpret results, prioritize issues, combine automated and manual testing, and document findings clearly.

Thank you for joining me. If you have questions or want to dive deeper into any of these topics, feel free to reach out or explore the linked microtrainings.
