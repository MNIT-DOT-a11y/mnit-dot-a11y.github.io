---
layout: training-lesson
title: NVDA Basics
seoTitle: NVDA Basics - Accessibility training
description: Use the NVDA screen reader to test headings, landmarks, links, buttons, forms, error messages, and dynamic content.
permalink: /training/nvda-basics/
section: core-testing
section_title: Core Testing Skills
lesson_number: 10
lesson_total: 16
deck: NVDA Basics.pptx
prev_slug: axe-devtools-basics
prev_title: Axe DevTools Basics
next_slug: csharp-accessibility-integration
next_title: C# Accessibility Integration
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
quiz:
- q: Which NVDA key jumps through headings?
  options:
  - D
  - H
  - Tab
  - Insert + F1
  answer: 1
  explain: H moves through headings, D cycles landmarks, Insert+F7 opens the element list, Insert+F1 shows element information.
- q: What does NVDA reveal that isn't visible on screen?
  options:
  - Color contrast ratios
  - Missing labels, incorrect roles, broken focus order, and unannounced errors
  - Page load time
  - CSS specificity
  answer: 1
  explain: A screen reader exposes whether your semantics and announcements actually work.
- q: When testing landmarks with NVDA, what should you check for?
  options:
  - That every section is a <div>
  - Presence of header, nav, main, and footer, with exactly one main region
  - That landmarks are hidden
  - That there are at least five main regions
  answer: 1
  explain: Landmarks must support predictable navigation and match the visual layout.
- q: How should dynamic content updates be exposed to NVDA?
  options:
  - With aria-live regions, using polite or assertive appropriately
  - With a page reload
  - With a tooltip
  - They can't be
  answer: 0
  explain: Live regions announce updates automatically without interrupting the user's flow.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on NVDA Basics, one of the most important tools for accessibility testing. NVDA is a free screen reader that allows us to understand how users who are blind or visually impaired experience our applications.

This training builds on the Text Spacing module you completed earlier. Now we will explore how NVDA interprets content, how users navigate interfaces, and how to ensure your application is accessible to screen reader users.

## What NVDA Does

NVDA reads content aloud and announces structure, roles, labels, and relationships. It reveals whether your application is built with proper semantics and whether interactive elements behave predictably. NVDA also exposes issues that are not visible, such as missing labels, incorrect roles, broken focus order, and inaccessible error messages.

NVDA supports WCAG requirements related to semantics, structure, navigation, and assistive technology compatibility.

## Launching NVDA

When NVDA starts, it immediately announces the current focus. This gives you an instant sense of how your application is interpreted.

As NVDA launches, listen for:

- The current focus
- The role of the element
- The accessible name
- The state or value
- The position in a set

These details help you understand how users experience your interface.

### Essential NVDA Commands

NVDA provides keyboard commands that allow users to navigate quickly. These commands are essential for testing.

- Tab to move forward
- Shift + Tab to move backward
- Arrow keys to explore content
- H to jump through headings
- D to jump through landmarks
- Insert + F7 to open the element list
- Insert + F1 to show element information

These commands help you test structure, focus order, and semantic correctness.

### Testing Headings

Headings are essential for navigation. NVDA allows users to jump through headings using the H key.

When testing headings, check for:

- Correct heading levels
- Logical hierarchy
- Missing headings
- Styled text pretending to be headings
- Unexpected heading jumps

NVDA will reveal issues immediately.

### Testing Landmarks

Landmarks help users jump to major regions of the page. NVDA allows users to cycle through landmarks using the D key.

When testing landmarks, check for:

- Presence of header, nav, main, and footer
- Correct landmark roles
- Missing main region
- Multiple main regions
- Landmarks that do not match visual layout

Landmarks must support predictable navigation.

### Testing Links And Buttons

NVDA announces interactive elements based on their semantic roles.

When testing links and buttons, check for:

- Real buttons instead of divs
- Real links instead of styled spans
- Correct accessible names
- Predictable keyboard behavior
- Correct announcement of state

NVDA will expose any improvised or incorrect elements.

### Testing Forms

Forms often reveal accessibility issues. NVDA announces labels, roles, and states.

When testing forms, check for:

- Programmatically associated labels
- Inputs that announce correctly
- Placeholders that do not replace labels
- Required fields that announce as required
- Correct grouping with fieldset and legend

Forms must remain usable for screen reader users.

### Testing Error Messages

Error messages must be announced when they appear. NVDA reveals whether error messages are connected to their fields.

When testing error messages, check for:

- Error messages near the field
- Error messages connected with aria-describedby
- Clear and specific language
- Correct announcement when triggered
- Visibility and readability

NVDA ensures users understand what went wrong and how to fix it.

### Testing Dynamic Content

Dynamic content must be announced automatically. NVDA uses live regions to announce updates.

When testing dynamic content, check for:

- Correct use of aria-live
- Polite versus assertive updates
- Announcements that trigger automatically
- Messages that do not interrupt user flow

Dynamic updates must be accessible.

### Common NVDA Testing Issues

Developers often encounter issues such as:

- Missing labels
- Incorrect roles
- Improvised buttons
- Broken focus order
- Unannounced error messages
- Dynamic content that does not announce
- Landmarks that are missing or incorrect
- Headings that are out of order

NVDA exposes these issues quickly.

### Designing For Screen Reader Compatibility

To support NVDA and other assistive technologies, use:

- Semantic HTML
- Correct roles
- Clear labels
- Predictable focus order
- Accessible error messaging
- Accessible dynamic updates
- Consistent structure
- Avoidance of improvised elements

Accessible design ensures that screen reader users can navigate and understand your application.

## Conclusion

NVDA is an essential part of accessibility testing. When you build applications that work correctly with NVDA, you support users who rely on screen readers for navigation, comprehension, and interaction. Testing early prevents issues and ensures your content remains accessible and predictable.
