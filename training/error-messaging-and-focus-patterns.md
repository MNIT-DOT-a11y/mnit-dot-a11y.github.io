---
layout: training-lesson
title: Error Messaging & Focus Interaction Patterns
seoTitle: Error Messaging & Focus Interaction Patterns - Accessibility training
description: Shared patterns for clear, announced error messages and predictable focus behavior in modals, tabs, and composite widgets.
permalink: /training/error-messaging-and-focus-patterns/
section: patterns
section_title: Technology-Agnostic Accessibility Patterns
lesson_number: 14
lesson_total: 16
deck: Error Messaging and Focus Interaction Patterns.pptx
prev_slug: accessible-component-patterns
prev_title: Accessible Component Patterns
next_slug: accessibility-in-sdlc
next_title: Accessibility in SDLC
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
quiz:
- q: Which is the correct error pattern?
  options:
  - Red border only
  - Red border, error icon, descriptive message, and aria-describedby association
  - A console.log message
  - A color change on the label
  answer: 1
  explain: Errors need text, association, and an announcement — never color alone.
- q: Where should focus go when a modal closes?
  options:
  - To the top of the page
  - Back to the element that triggered the modal
  - To the footer
  - Nowhere
  answer: 1
  explain: Returning focus to the trigger keeps navigation predictable for keyboard and screen reader users.
- q: What is 'roving tabindex' used for?
  options:
  - Hiding elements from screen readers
  - Managing focus within composite widgets like menus and tabs
  - Styling focus rings
  - Disabling keyboard access
  answer: 1
  explain: Roving tabindex lets one Tab stop enter a composite widget, with arrow keys moving focus inside it.
- q: Which WCAG criterion covers suggesting how to fix an error?
  options:
  - Error Identification (3.3.1)
  - Error Suggestions (3.3.3)
  - Focus Visible (2.4.7)
  - Keyboard (2.1.1)
  answer: 1
  explain: 3.3.1 says identify the error; 3.3.3 says tell the user how to correct it.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on Error Messaging & Focus Interaction Patterns, two critical areas that determine whether users can understand issues, recover from mistakes, and navigate your application efficiently.

Error messaging and focus interaction patterns apply across all technologies and are essential for creating predictable, usable interfaces. When developers follow shared patterns, users receive clear feedback and can operate components confidently.

This session builds on the Forms, Keyboard, and Component Patterns modules you completed earlier. Now we will shift our attention to error flows and interaction behaviors.

## Why Error Messaging & Focus Interaction Matter

These patterns ensure:

- users understand what went wrong
- errors are announced to screen readers
- focus moves logically
- focus is visible at all times
- users can recover from mistakes
- interactions follow WCAG and MNIT standards

These patterns support several WCAG criteria, including:

- Error Identification (3.3.1)
- Error Suggestions (3.3.3)
- Focus Visible (2.4.7)
- Keyboard (2.1.x)

## Error Messaging Patterns

Error messages must be clear, descriptive, and actionable.

Core Principles

- Errors must include text, not just color
- Errors must be programmatically associated with fields
- Errors must be announced to screen readers
- Errors must be visible at all magnification levels
- Errors must be consistent across the application

Correct Example

- Red border
- Error icon
- Descriptive error message
- ARIA association (aria-describedby)

Incorrect Example

- Red border only
- No text
- No icon
- No ARIA association

Consistent error patterns reduce confusion and improve usability.

## Focus Interaction Patterns

Focus interaction patterns ensure that users can navigate and operate components using the keyboard and assistive technologies.

Core Principles

- Focus must always be visible
- Focus must move logically
- Focus must be trapped inside modals
- Focus must return to the triggering element
- Components must support Space, Enter, and Arrow keys

Common Interaction Patterns

- Arrow key navigation for menus and tabs
- Space/Enter activation for buttons
- Escape key to close dialogs
- Roving tabindex for composite widgets
- Focus trapping for modals

These patterns ensure that all users can operate components efficiently.

## Unified Error & Focus Examples

Accessible Error Pattern

- Error message is descriptive
- Error is associated with the field
- Error is announced
- Error is visible at 200% and 400% zoom

Accessible Modal Pattern

- Focus moves into the modal
- Focus is trapped inside
- Escape closes the modal
- Focus returns to the trigger
- Modal has a clear accessible name

Accessible Tab Pattern

- Arrow keys move between tabs
- Tab panels have correct roles
- Active tab is announced
- Focus remains predictable

## Testing Error & Focus Patterns

Checklist:

- Are errors descriptive and associated?
- Are errors announced?
- Is focus visible and predictable?
- Does focus trap correctly in modals?
- Do components support keyboard interaction?
- Are state changes announced?

Testing early prevents issues from reaching QA.

## Conclusion

Error Messaging & Focus Interaction Patterns ensure that users receive clear feedback, can recover from mistakes, and can navigate your application confidently. When you apply shared patterns across your applications, you create interfaces that are predictable, usable, and accessible.

In the next training, we will move into Accessibility in SDLC, where you will learn how to embed accessibility into your development lifecycle and GitHub workflows.
