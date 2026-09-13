---
layout: training-lesson
title: Accessible Component Patterns
seoTitle: Accessible Component Patterns - Accessibility training
description: The core principles and reusable patterns for buttons, links, modals, tabs, accordions, and menus that work across every stack.
permalink: /training/accessible-component-patterns/
section: patterns
section_title: Technology-Agnostic Accessibility Patterns
lesson_number: 13
lesson_total: 16
deck: Accessible Component Patterns.pptx
prev_slug: java-accessibility-integration
prev_title: Java Accessibility Integration
next_slug: error-messaging-and-focus-patterns
next_title: Error Messaging & Focus Interaction Patterns
slides:
- type: title
  title: Accessible Component Patterns
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Accessible Component Patterns
  items:
  - Why shared component patterns matter
  - Core principles every component follows
  - Patterns for buttons, links, modals, and tabs
  - Patterns for accordions and menus
  - Testing accessible components
- type: definitions
  title: Core Principles of Accessible Components
  items:
  - term: Accessible Name
    desc: Every component must have a clear, descriptive name.
  - term: Correct Role
    desc: Components must expose the correct semantic role.
  - term: Keyboard Operability
    desc: Components must support Space, Enter, and Arrow keys.
  - term: Visible Focus
    desc: Focus must be clearly visible at all times, and state changes must be announced.
- type: body
  title: Why Accessible Component Patterns Matter
  groups:
  - header: What Shared Patterns Ensure
    items:
    - Consistent behavior across applications and predictable keyboard interaction
    - Correct roles and states, clear accessible names, and visible focus
    - Meaningful announcements for screen readers
  - header: Supports Several WCAG Criteria
    items:
    - Keyboard (2.1.x)
    - Focus Visible (2.4.7)
    - Name, Role, Value (4.1.2)
    - Error Identification (3.3.1)
- type: body
  title: Buttons and Links
  groups:
  - header: Buttons
    items:
    - Must use <button>, support Enter and Space, have visible focus, and have an accessible name
  - header: Links
    items:
    - Must use <a> with an href, be visually distinct, and never be used as a button
- type: body
  title: Modals and Tabs
  groups:
  - header: Modals
    items:
    - Must trap focus, return focus to the trigger, and have a clear accessible name
  - header: Tabs
    items:
    - Must support arrow key navigation, expose correct roles (tab, tabpanel), and announce the active tab
- type: body
  title: Accordions and Menus
  groups:
  - header: Accordions
    items:
    - Must support Space/Enter, expose expanded/collapsed states, and have descriptive labels
  - header: Menus
    items:
    - Must support arrow keys, expose correct roles, and announce selection
- type: body
  title: Testing Accessible Components
  groups:
  - header: Checklist
    items:
    - Does the component have an accessible name and expose the correct role?
    - Does it support keyboard interaction, with focus that's visible and predictable?
    - Are state changes announced, and does it behave consistently across pages?
- type: list
  title: Recap
  header: Component Patterns Review
  items:
  - Every component needs an accessible name, a correct role, and visible focus
  - Buttons, links, modals, tabs, accordions, and menus each have their own required behaviors
  - Shared patterns apply across Angular, C#, Java, and every other MNIT DOT stack
  - Testing early against the checklist prevents issues from reaching QA
- type: list
  title: Key Takeaways
  header: Accessible Component Patterns
  items:
  - These patterns form the backbone of the future Accessibility Pattern Playbook
  - Consistent components make accessibility predictable and easier to test
  - When in doubt, check the component against all five core principles
  - 'Up next: Error Messaging & Focus Interaction Patterns'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/components/intro.html
quiz:
- q: Which of these is NOT one of the core principles of accessible components?
  options:
  - Accessible name
  - Correct role
  - Keyboard operability
  - Animated transitions
  answer: 3
  explain: The five principles are accessible name, correct role, keyboard operability, visible focus, and state announcements.
- q: What must an accessible modal do?
  options:
  - Trap focus, return focus to the trigger, and have a clear accessible name
  - Open in a new tab
  - Disable the keyboard
  - Auto-close after 5 seconds
  answer: 0
  explain: Modals must manage focus in, within, and out — and be named so users know what opened.
- q: How should tabs be navigated by keyboard?
  options:
  - Only with the mouse
  - With arrow keys, exposing tab and tabpanel roles
  - With the Escape key
  - With Ctrl + number
  answer: 1
  explain: Arrow keys move between tabs, roles identify the pattern, and the active tab is announced.
- q: Why do shared component patterns matter across Angular, C#, and Java teams?
  options:
  - They reduce bundle size
  - They make accessibility predictable, testable, and easier to maintain
  - They are required by the browser
  - They replace testing
  answer: 1
  explain: Consistent patterns mean consistent behavior for users and a shared checklist for developers and QA.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on Accessible Component Patterns, a foundational set of reusable patterns that ensure your UI components behave consistently, communicate clearly, and remain fully operable for all users.

Accessible component patterns apply across all technologies — Angular, C#, Java, and any other stack used across MNIT DOT. When developers follow shared patterns, accessibility becomes predictable, testable, and easier to maintain.

This session builds on the HTML, ARIA, Forms, and Keyboard modules you completed earlier. Now we will shift our attention to reusable component patterns that form the backbone of accessible design.

## Why Accessible Component Patterns Matter

Accessible components ensure:

- consistent behavior across applications
- predictable keyboard interaction
- correct roles and states
- clear accessible names
- visible focus
- meaningful announcements for screen readers

These patterns support several WCAG criteria, including:

- Keyboard (2.1.x)
- Focus Visible (2.4.7)
- Name, Role, Value (4.1.2)
- Error Identification (3.3.1)

When developers use shared patterns, accessibility becomes easier to implement and easier to test.

## Core Principles of Accessible Components

All accessible components share these principles:

- Accessible Name – every component must have a clear, descriptive name
- Correct Role – components must expose the correct semantic role
- Keyboard Operability – components must support Space, Enter, and Arrow keys
- Visible Focus – focus must be clearly visible at all times
- State Announcements – changes in state must be announced to assistive technologies

These principles apply to every component type.

## Common Accessible Component Types

Buttons

- Must use &lt;button&gt;
- Must support Enter and Space
- Must have visible focus
- Must have an accessible name

Links

- Must use &lt;a&gt; with href
- Must be visually distinct
- Must not be used as buttons

Modals

- Must trap focus
- Must return focus to the trigger
- Must have a clear accessible name

Tabs

- Must support arrow key navigation
- Must expose correct roles (tab, tabpanel)
- Must announce active tab

Accordions

- Must support Space/Enter
- Must expose expanded/collapsed states
- Must have descriptive labels

Menus

- Must support arrow keys
- Must expose correct roles
- Must announce selection

These patterns ensure predictable behavior across all applications.

## Testing Accessible Components

Checklist:

- Does the component have an accessible name?
- Does it expose the correct role?
- Does it support keyboard interaction?
- Is focus visible and predictable?
- Are states announced?
- Does the component behave consistently across pages?

Testing early prevents issues from reaching QA.

## Conclusion

Accessible Component Patterns ensure that components behave consistently, communicate clearly, and remain fully operable for all users. When you apply shared patterns across your applications, you create interfaces that are predictable, usable, and accessible.

In the next training, we will move into Error Messaging & Focus Interaction Patterns, where you will learn how to build predictable error flows and consistent interaction behaviors.
