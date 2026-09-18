---
layout: training-lesson
title: ARIA Fundamentals
seoTitle: ARIA Fundamentals - Accessibility training
description: What ARIA is (and isn't), when to use it, common patterns, and why every ARIA pattern has to be tested.
permalink: /training/aria-fundamentals/
slug: aria-fundamentals
section: foundations
section_title: Accessibility Foundations
lesson_number: 3
lesson_total: 16
deck: ARIA Fundamentals.pptx
prev_slug: html-accessibility-fundamentals
prev_title: HTML Accessibility Fundamentals
next_slug: forms-and-error-messages
next_title: Forms & Error Messages
objectives:
- 'Distinguish roles, states, and properties and when each applies'
- 'Decide when ARIA is necessary and when native HTML already does the job'
- 'Apply common patterns for buttons, accordions, tabs, and error messages'
- 'Map ARIA usage to WCAG criteria like Name, Role, Value (4.1.2)'
- 'Verify ARIA with NVDA, Axe DevTools, and keyboard testing'
slides:
- type: title
  title: ARIA Fundamentals
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: ARIA Fundamentals
  items:
  - What ARIA is — and isn't
  - Why we need ARIA
  - Roles, states, and properties
  - When to use ARIA (and when not to)
  - Common ARIA patterns
  - Why ARIA requires testing
- type: definitions
  title: Three Categories of ARIA
  items:
  - term: Roles
    desc: Tell assistive technologies what an element represents (role="dialog").
  - term: States
    desc: Describe the current condition of an element (aria-expanded="true").
  - term: Properties
    desc: Provide additional semantic information (aria-label, aria-describedby).
- type: body
  title: What ARIA Is and Isn't
  groups:
  - header: ARIA Gives Assistive Tech Extra Information
    items:
    - What an element represents, what state it's in, how it behaves, how it relates to other elements
  - header: What ARIA Does Not Do
    items:
    - Does not make an element interactive
    - Does not fix broken HTML
    - Does not replace semantic elements
    - Only provides information, not functionality
- type: body
  title: The First Rule of ARIA
  groups:
  - header: Native HTML First
    items:
    - Use native HTML whenever possible
    - Use ARIA only when necessary
- type: body
  title: Why Use ARIA?
  groups:
  - header: Custom Components Need Extra Semantics
    items:
    - Custom dropdowns, modals, tabs, sliders, accordions, menus, tooltips
    - Built with <div> and <span>, they look and behave like native controls
    - But assistive tech can't understand them without additional information
- type: body
  title: When to Use ARIA
  groups:
  - header: Use ARIA When…
    items:
    - Building a custom component with no semantic HTML equivalent
    - You need to expose dynamic state changes
    - You need to associate labels or descriptions programmatically
    - You need to define relationships between elements
  - header: Don't Use ARIA When…
    items:
    - A semantic HTML element already exists
    - You're trying to fix broken HTML
    - You're making a non-interactive element interactive without testing
- type: body
  title: ARIA and WCAG
  groups:
  - header: Supports Several Success Criteria
    items:
    - 1.3.1 Info and Relationships
    - 2.4.3 Focus Order
    - 2.4.6 Headings and Labels
    - 4.1.2 Name, Role, Value — exposing name, role, and state to assistive tech
- type: body
  title: Common ARIA Patterns
  groups:
  - header: Buttons and Accordions
    items:
    - <div role="button" tabindex="0"> — only when a <button> isn't possible
    - aria-expanded + aria-controls for accordions
  - header: Tabs and Error Messages
    items:
    - role="tablist" and aria-selected for tabs
    - aria-describedby linking an input to its error message
- type: body
  title: ARIA Requires Testing
  groups:
  - header: Not Set-and-Forget
    items:
    - Test with keyboard navigation
    - Test with NVDA or another screen reader
    - Test with Axe DevTools
    - Test with focus management tools
  - header: The Risk
    items:
    - ARIA added but not tested can create more barriers than it solves
- type: list
  title: Recap
  header: ARIA Fundamentals Review
  items:
  - What ARIA is, and what it can't do
  - 'The three categories: roles, states, and properties'
  - When ARIA is appropriate — and when it isn't
  - Common patterns for buttons, accordions, tabs, and error messages
  - Why every ARIA pattern needs to be tested
- type: list
  title: Key Takeaways
  header: ARIA Fundamentals
  items:
  - Use native HTML first — ARIA only fills the gaps
  - Incorrect ARIA is worse than no ARIA at all
  - Every ARIA pattern must be verified with a screen reader
  - 'Up next: Forms & Error Messages'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/aria/
---

ARIA gives assistive technologies extra information about custom components — what an element represents, what state it is in, and how it relates to other elements. What ARIA does *not* do is just as important: it never makes something keyboard-operable, never fixes broken HTML, and never replaces a native element.

The lesson covers the three categories of ARIA (roles, states, and properties), the first rule of ARIA — native HTML first — and the situations where ARIA is genuinely needed, such as custom dropdowns, tabs, accordions, and modals. It ends with common patterns and the reason every ARIA addition has to be tested with a keyboard and a screen reader.
