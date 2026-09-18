---
layout: training-lesson
title: Keyboard Testing
seoTitle: Keyboard Testing - Accessibility training
description: 'Test every interactive element without a mouse: commands, focus indicators, focus order, keyboard traps, skip links, and custom components.'
permalink: /training/keyboard-testing/
slug: keyboard-testing
section: core-testing
section_title: Accessibility Testing
lesson_number: 5
lesson_total: 16
deck: Keyboard Testing.pptx
prev_slug: forms-and-error-messages
prev_title: Forms & Error Messages
next_slug: color-alone-and-contrast
next_title: Color Alone & Color Contrast
objectives:
- 'Navigate and operate a page using only the keyboard'
- 'Judge whether focus indicators are visible and high-contrast'
- 'Verify that focus order follows the visual reading sequence'
- 'Detect keyboard traps and confirm skip links work'
- 'Test custom components for keyboard access, ARIA states, and Escape behavior'
slides:
- type: title
  title: Keyboard Testing
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Keyboard Testing
  items:
  - Why keyboard accessibility matters
  - Basic keyboard commands
  - Focus indicators and focus order
  - Testing interactive elements
  - Keyboard traps and skip links
  - Testing custom components
- type: definitions
  title: WCAG Criteria for Keyboard Access
  items:
  - term: Keyboard (2.1.1)
    desc: Every interactive element must be operable without a mouse.
  - term: No Keyboard Trap (2.1.2)
    desc: Users must always be able to Tab away.
  - term: Focus Order (2.4.3)
    desc: Focus must follow a logical, predictable sequence.
  - term: Focus Visible (2.4.7)
    desc: A visible focus indicator must always be present.
- type: body
  title: Why Keyboard Accessibility Matters
  groups:
  - header: Every Interactive Element, No Mouse
    items:
    - Navigate content, activate buttons and links, complete forms, open menus
    - Essential for motor disabilities, low vision, blindness, or keyboard preference
    - Screen readers rely heavily on keyboard commands
- type: body
  title: Basic Keyboard Commands
  groups:
  - header: Commands to Know
    items:
    - Tab moves forward; Shift + Tab moves backward
    - Enter activates buttons, links, and controls
    - Spacebar activates buttons and toggles
    - Arrow keys navigate menus, radio buttons, sliders, and lists
    - Escape closes dialogs, menus, and popups
- type: body
  title: Focus Indicators
  groups:
  - header: You Must See Where Focus Is
    items:
    - A clear visual indicator on every focused element
    - Must be visible, high-contrast, and not hidden by design
    - A visible outline, highlight, underline, or border change
  - header: If You Can't See It…
    items:
    - The component is not accessible
- type: body
  title: Logical Focus Order
  groups:
  - header: Focus Should Match the Visual Layout
    items:
    - Header, navigation, main content, sidebar, footer
  - header: Watch For…
    items:
    - Jumping into hidden content
    - Skipping important elements
    - Moving into ads or unrelated sections
    - Entering modals unexpectedly
- type: body
  title: Testing Interactive Elements
  groups:
  - header: Buttons, Links & Form Fields
    items:
    - Tab to the element, press Enter or Space, confirm the action works
    - Tab into fields, use arrow keys for radio buttons, Space for checkboxes
  - header: Dropdowns, Menus & Modals
    items:
    - Enter/Space to open, arrow keys to navigate, Escape to close
    - Focus should move into a modal automatically, and Tab should cycle within it
- type: body
  title: Keyboard Traps
  groups:
  - header: A Serious Accessibility Failure
    items:
    - Occurs when users enter a component and cannot leave it
    - Modals that don't release focus, custom widgets, iframes without escape paths
  - header: How to Test for a Trap
    items:
    - Tab into the component, then try Tab, Shift+Tab, and Escape to exit
    - If none of these work, the component contains a trap
- type: body
  title: Skip Links
  groups:
  - header: Bypass Repetitive Content
    items:
    - <a href="#main-content" class="skip-link">Skip to main content</a>
    - Should appear when focused
    - Should move focus to the correct section
    - Should be placed at the top of the page
- type: body
  title: Testing Custom Components
  groups:
  - header: They Don't Inherit Native Behavior
    items:
    - Custom dropdowns, sliders, tabs, accordions, carousels, tooltips
  - header: Verify…
    items:
    - Keyboard access, ARIA roles and states, focus behavior
    - Escape closes the component, arrow keys behave correctly
- type: body
  title: Common Keyboard Accessibility Issues
  groups:
  - header: Issues Developers Encounter
    items:
    - Missing focus indicators, incorrect focus order
    - Keyboard traps, elements that require a mouse
    - Modals without focus management, custom controls without ARIA
    - Hidden elements receiving focus
- type: list
  title: Recap
  header: Keyboard Testing Review
  items:
  - Every interactive element must work without a mouse
  - Focus indicators must always be visible
  - Focus order must match the visual layout
  - Watch for keyboard traps in modals and custom widgets
  - Skip links and custom components need their own verification
- type: list
  title: Key Takeaways
  header: Keyboard Testing
  items:
  - Test keyboard behavior early — before it reaches QA
  - If you can't see focus, the component isn't accessible
  - Custom components must behave like their native equivalents
  - This wraps our developer training series
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/keyboard-focus/
---

Every interactive element must work without a mouse. Keyboard testing is the fastest way to find the barriers that block people with motor disabilities, low vision, or blindness — and it catches many of the same defects a screen reader would.

This lesson teaches the core commands (Tab, Shift+Tab, Enter, Space, arrow keys, Escape), what a good focus indicator looks like, and how focus order should match the visual layout. You'll test buttons, links, form fields, dropdowns, and modals; check for keyboard traps; verify skip links; and give custom components the extra scrutiny they need because they don't inherit native behavior.
