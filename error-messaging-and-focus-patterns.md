---
layout: training-lesson
title: Error Messaging & Focus Interaction Patterns
seoTitle: Error Messaging & Focus Interaction Patterns - Accessibility training
description: Shared patterns for clear, announced error messages and predictable focus behavior in modals, tabs, and composite widgets.
permalink: /training/error-messaging-and-focus-patterns/
slug: error-messaging-and-focus-patterns
section: patterns
section_title: Technology-Agnostic Accessibility Patterns
lesson_number: 14
lesson_total: 16
deck: Error Messaging and Focus Interaction Patterns.pptx
prev_slug: accessible-component-patterns
prev_title: Accessible Component Patterns
next_section: workflow
next_section_title: Developer Workflow Integration
objectives:
- 'Build error messages that are descriptive, associated, and announced'
- 'Distinguish a correct error pattern from a color-only one'
- 'Manage focus for modals: move in, trap, close on Escape, return to the trigger'
- 'Apply arrow-key navigation and roving tabindex to composite widgets'
- 'Test error and focus patterns against WCAG 3.3.1, 3.3.3, 2.4.7, and 2.1.x'
slides:
- type: title
  title: Error Messaging & Focus Interaction Patterns
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Error Messaging & Focus Interaction Patterns
  items:
  - Why these patterns matter
  - Error messaging core principles
  - Focus interaction core principles
  - Unified error and focus examples
  - Testing error and focus patterns
- type: definitions
  title: Supports Several WCAG Criteria
  items:
  - term: Error Identification (3.3.1)
    desc: Errors must be identified in text, not color alone.
  - term: Error Suggestions (3.3.3)
    desc: Error messages should explain how to fix the problem.
  - term: Focus Visible (2.4.7)
    desc: A visible focus indicator must always be present.
  - term: Keyboard (2.1.x)
    desc: Every component must support Space, Enter, and Arrow key interaction.
- type: body
  title: Why Error Messaging & Focus Interaction Matter
  groups:
  - header: What These Patterns Ensure
    items:
    - Users understand what went wrong and can recover from mistakes
    - Errors are announced to screen readers, and focus moves logically and stays visible
    - Interactions follow WCAG and MNIT standards
- type: body
  title: Error Messaging Patterns
  groups:
  - header: Core Principles
    items:
    - Errors must include text, not just color, and be programmatically associated with fields
    - Errors must be announced to screen readers and visible at all magnification levels
    - Errors must be consistent across the application
  - header: Correct vs. Incorrect
    items:
    - 'Correct: red border, error icon, descriptive message, and an aria-describedby association'
    - 'Incorrect: a red border alone, with no text, icon, or ARIA association'
- type: body
  title: Focus Interaction Patterns
  groups:
  - header: Core Principles
    items:
    - Focus must always be visible and move logically
    - Focus must be trapped inside modals and return to the triggering element
    - Components must support Space, Enter, and Arrow keys
  - header: Common Interaction Patterns
    items:
    - Arrow key navigation for menus and tabs, Space/Enter activation for buttons
    - Escape to close dialogs, roving tabindex for composite widgets, and focus trapping for modals
- type: body
  title: Unified Error and Focus Examples
  groups:
  - header: Accessible Error Pattern
    items:
    - Descriptive, associated, announced, and visible at 200% and 400% zoom
  - header: Accessible Modal Pattern
    items:
    - Focus moves into the modal and is trapped inside; Escape closes it and returns focus to the trigger; the modal has a clear accessible name
  - header: Accessible Tab Pattern
    items:
    - Arrow keys move between tabs, panels have correct roles, the active tab is announced, and focus stays predictable
- type: body
  title: Testing Error and Focus Patterns
  groups:
  - header: Checklist
    items:
    - Are errors descriptive, associated, and announced?
    - Is focus visible and predictable, and does it trap correctly in modals?
    - Do components support keyboard interaction, and are state changes announced?
- type: list
  title: Recap
  header: Error Messaging & Focus Review
  items:
  - Error messages need text, association, and an announcement — never color alone
  - Focus must always be visible, move logically, and trap correctly inside modals
  - Modals, tabs, and error flows each have their own predictable interaction pattern
  - Testing early against the checklist prevents issues from reaching QA
- type: list
  title: Key Takeaways
  header: Error Messaging & Focus Interaction Patterns
  items:
  - Consistent error and focus patterns reduce user confusion across every application
  - A modal isn't accessible until focus traps, returns to the trigger, and Escape closes it
  - Every pattern here maps directly to a specific WCAG success criterion
  - 'Up next: Accessibility in SDLC'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/keyboard-focus/
---

Whether users can understand a problem, recover from a mistake, and keep moving through an application comes down to two things: how errors are communicated and how focus behaves. This lesson defines shared patterns for both so every application gives consistent, accessible feedback.

Error messages must include text (not just color), be programmatically associated with their field, be announced to screen readers, and remain visible at every magnification level. Focus must stay visible, move logically, trap correctly inside modals, and return to the triggering element. The lesson brings these together in unified examples for errors, modals, and tabs, plus a testing checklist.
