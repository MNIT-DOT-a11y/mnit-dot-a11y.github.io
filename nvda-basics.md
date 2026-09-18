---
layout: training-lesson
title: NVDA Basics
seoTitle: NVDA Basics - Accessibility training
description: Use the NVDA screen reader to test headings, landmarks, links, buttons, forms, error messages, and dynamic content.
permalink: /training/nvda-basics/
slug: nvda-basics
section: core-testing
section_title: Accessibility Testing
lesson_number: 10
lesson_total: 16
deck: NVDA Basics.pptx
prev_slug: axe-devtools-basics
prev_title: Axe DevTools Basics
next_section: language-specific
next_section_title: Language-Specific Accessibility Integration
objectives:
- 'Launch NVDA and interpret what it announces about focus, role, name, and state'
- 'Use NVDA commands to move through headings, landmarks, and interactive elements'
- 'Test forms and error messages for correct labels and announcements'
- 'Check that dynamic updates use `aria-live` appropriately'
- 'Recognize the common failures NVDA reveals and how to design around them'
slides:
- type: title
  title: NVDA Basics
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: NVDA Basics
  items:
  - What NVDA does
  - Launching NVDA and essential commands
  - Testing headings and landmarks
  - Testing links, buttons, and forms
  - Testing error messages and dynamic content
  - Common NVDA testing issues
- type: definitions
  title: Essential NVDA Commands
  items:
  - term: Tab / Shift+Tab
    desc: Move forward and backward through interactive elements.
  - term: H and D
    desc: Jump through headings and landmarks.
  - term: Insert+F7
    desc: Open the element list.
  - term: Insert+F1
    desc: Show information about the current element.
- type: body
  title: What NVDA Does
  groups:
  - header: Reveals How Assistive Tech Sees Your App
    items:
    - Reads content aloud and announces structure, roles, labels, and relationships
    - Reveals whether your application is built with proper semantics and predictable interactive elements
    - 'Exposes issues that aren''t visible: missing labels, incorrect roles, broken focus order, and inaccessible error messages'
- type: body
  title: Launching NVDA
  groups:
  - header: Listen for These Details
    items:
    - The current focus and the role of the element
    - The accessible name, the state or value, and the position in a set
- type: body
  title: Testing Headings and Landmarks
  groups:
  - header: Headings
    items:
    - Press H to jump through headings — check for correct levels, logical hierarchy, and missing headings
    - Watch for styled text pretending to be a heading, or unexpected heading jumps
  - header: Landmarks
    items:
    - Press D to cycle through landmarks — check for header, nav, main, and footer
    - Watch for a missing or duplicated main region, or landmarks that don't match the visual layout
- type: body
  title: Testing Links, Buttons, and Forms
  groups:
  - header: Links and Buttons
    items:
    - Real buttons instead of divs, and real links instead of styled spans
    - Correct accessible names, predictable keyboard behavior, and correct announcement of state
  - header: Forms
    items:
    - Programmatically associated labels, and inputs that announce correctly
    - Placeholders that don't replace labels, and required fields that announce as required
- type: body
  title: Testing Error Messages and Dynamic Content
  groups:
  - header: Error Messages
    items:
    - Errors near the field, connected with aria-describedby, in clear and specific language
    - Announced correctly when triggered, and visible and readable
  - header: Dynamic Content
    items:
    - Correct use of aria-live, and polite versus assertive updates
    - Announcements that trigger automatically, without interrupting the user's flow
- type: body
  title: Common NVDA Testing Issues
  groups:
  - header: Issues NVDA Exposes Quickly
    items:
    - Missing labels, incorrect roles, and improvised buttons
    - Broken focus order and unannounced error messages
    - Dynamic content that doesn't announce, and headings or landmarks that are missing or out of order
- type: list
  title: Recap
  header: NVDA Basics Review
  items:
  - NVDA announces structure, roles, labels, and relationships as it reads your app aloud
  - H jumps through headings; D cycles through landmarks
  - Links, buttons, and forms all need correct semantics to announce properly
  - Error messages and dynamic content must be connected and announced automatically
- type: list
  title: Key Takeaways
  header: NVDA Basics
  items:
  - NVDA reveals issues that aren't visible on screen — semantics, focus order, and announcements
  - Testing with a real screen reader is what automated scans like Axe can't fully replace
  - Semantic HTML and correct ARIA are what make NVDA testing pass
  - This wraps our core testing skills training series
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/screen-readers/
---

NVDA is a free screen reader that shows you how users who are blind or visually impaired experience your application. It announces structure, roles, labels, and relationships — and exposes issues that are invisible on screen, like missing labels, incorrect roles, broken focus order, and error messages that never get announced.

The lesson covers what to listen for when NVDA launches, the essential commands for testing (Tab, arrow keys, H for headings, D for landmarks, Insert+F7 for the element list), and how to test headings, landmarks, links and buttons, forms, error messages, and dynamic content. It finishes with the issues NVDA surfaces most often and the semantic-HTML habits that prevent them.
