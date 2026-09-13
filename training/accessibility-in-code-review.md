---
layout: training-lesson
title: Accessibility in Code Review
seoTitle: Accessibility in Code Review - Accessibility training
description: What to check during pull request review — structure, forms, keyboard, focus, ARIA, contrast — and the fixes reviewers ask for most.
permalink: /training/accessibility-in-code-review/
slug: accessibility-in-code-review
section: workflow
section_title: Developer Workflow Integration
lesson_number: 16
lesson_total: 16
deck: Accessibility in Code Review.pptx
prev_slug: accessibility-in-sdlc
prev_title: Accessibility in SDLC
slides:
- type: title
  title: Accessibility in Code Review
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Accessibility in Code Review
  items:
  - Why accessibility in code review matters
  - 'Core checks: structure and forms'
  - 'Core checks: keyboard, focus, and ARIA'
  - Testing interactive elements in PR review
  - Common accessibility issues found in PRs
  - Example fixes reviewers should look for
  - Reviewing custom components
- type: definitions
  title: Supports Several WCAG Criteria
  items:
  - term: Info and Relationships (1.3.1)
    desc: Semantic structure that assistive tech can interpret correctly.
  - term: Keyboard & Focus (2.1.1, 2.1.2, 2.4.3, 2.4.7)
    desc: Every element operable, with visible, predictable focus.
  - term: Contrast (1.4.1, 1.4.3, 1.4.11)
    desc: Text, UI, and color-only indicators all meet WCAG minimums.
  - term: Name, Role, Value (4.1.2)
    desc: Components expose accurate information to assistive technology.
- type: body
  title: Why Accessibility in Code Review Matters
  groups:
  - header: What Review Ensures
    items:
    - Users can understand content structure, navigate with a keyboard, and interact with components
    - Users can complete forms, receive clear feedback, and use assistive technologies effectively
    - Code review is one of the earliest points where accessibility issues can be caught
- type: body
  title: 'Core Checks: Structure and Forms'
  groups:
  - header: Semantic Structure
    items:
    - Headings must follow a logical order, and landmarks must be used correctly
    - Content must not rely on <div> elements alone
  - header: Forms and Labels
    items:
    - Every input needs a visible, programmatically associated label
    - Error messages must be tied to inputs; required fields can't rely on color alone
- type: body
  title: 'Core Checks: Keyboard, Focus, and ARIA'
  groups:
  - header: Keyboard Operability & Focus
    items:
    - Tab, Shift+Tab, Enter, Space, arrow keys, and Escape must all work as expected
    - Focus must always be visible, high-contrast, and move in a predictable order
  - header: ARIA Usage
    items:
    - 'Correct: states like aria-expanded, relationships like aria-describedby, roles added only when necessary'
    - 'Incorrect: redundant roles, ARIA on native elements, or fake controls with no keyboard support'
- type: body
  title: Testing Interactive Elements in PR Review
  groups:
  - header: What to Verify
    items:
    - 'Buttons and links: Tab to the element, press Enter or Space, confirm the action works'
    - 'Form fields: Tab in, enter text, use arrow keys and Space, confirm errors appear correctly'
    - 'Dropdowns and modals: keyboard open, close, and navigate, with correct focus management'
- type: body
  title: Common Accessibility Issues Found in PRs
  groups:
  - header: What Reviewers Catch
    items:
    - Missing labels, incorrect ARIA, and keyboard traps
    - Invisible focus indicators and low-contrast text or UI
    - Modals without focus management and custom controls without keyboard support
- type: body
  title: Example Fixes Reviewers Should Look For
  groups:
  - header: Labels, Errors, and Focus
    items:
    - A <label for> tied to its <input> by id — not a placeholder standing in for a label
    - An error message linked with aria-describedby and role="alert"
    - A modal that moves focus to its first focusable element when it opens
  - header: Skip Links
    items:
    - A skip link should appear when focused, move focus to the correct section, and sit at the top of the page
- type: body
  title: Reviewing Custom Components
  groups:
  - header: They Don't Inherit Native Behavior
    items:
    - Custom dropdowns, sliders, tabs, accordions, carousels, and tooltips all need extra scrutiny
    - Verify keyboard access, ARIA roles and states, and focus behavior
    - Verify Escape closes the component and arrow keys behave correctly
- type: list
  title: Recap
  header: Accessibility in Code Review, Review
  items:
  - Code review is one of the earliest, cheapest points to catch accessibility issues
  - Check structure, forms, keyboard operability, focus, ARIA, and contrast every time
  - Test interactive elements the same way a keyboard-only user would
  - Custom components need extra scrutiny since they don't inherit native behavior
- type: list
  title: Key Takeaways
  header: Accessibility in Code Review
  items:
  - Reviewers who know what to look for prevent issues before they reach QA
  - A short set of consistent checks catches most common accessibility defects
  - Skip links, modal focus management, and label association are the fixes reviewers ask for most
  - 'Up next: Accessible Component Patterns'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/code-review-checklist/
---

Pull request review is one of the earliest and cheapest points to catch accessibility issues — when reviewers know what to look for. This lesson gives reviewers a consistent set of checks and shows the fixes they should expect to see.

It covers semantic structure, forms and labels, keyboard operability, focus indicators and focus order, correct (and incorrect) ARIA usage, and color and contrast. You'll test interactive elements the way a keyboard user would, recognize the most common issues found in PRs, and review example fixes for label association, accessible error messaging, modal focus management, and skip links — with extra attention to custom components that don't inherit native behavior.

### You'll learn to

- Run a consistent accessibility check on every pull request
- Verify structure, labels, keyboard access, focus, ARIA, and contrast in code
- Test buttons, forms, dropdowns, and modals during review
- Recognize the accessibility issues that appear most often in PRs
- Ask for the right fixes, from `label for` to modal focus management
