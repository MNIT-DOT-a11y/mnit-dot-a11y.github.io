---
layout: training-lesson
title: Accessible Component Patterns
seoTitle: Accessible Component Patterns - Accessibility training
description: The core principles and reusable patterns for buttons, links, modals, tabs, accordions, and menus that work across every stack.
permalink: /training/accessible-component-patterns/
slug: accessible-component-patterns
section: patterns
section_title: Technology-Agnostic Accessibility Patterns
lesson_number: 13
lesson_total: 16
deck: Accessible Component Patterns.pptx
prev_slug: java-accessibility-integration
prev_title: Java Accessibility Integration
next_slug: error-messaging-and-focus-patterns
next_title: Error Messaging & Focus Interaction Patterns
objectives:
- 'Apply the five core principles to any UI component'
- 'State the required behaviors for buttons, links, modals, tabs, accordions, and menus'
- 'Recognize when a component is missing a role, name, or state announcement'
- 'Test a component against the shared checklist'
- 'See how these patterns feed the future Accessibility Pattern Playbook'
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
---

Shared component patterns make accessibility predictable, testable, and easier to maintain across every stack at MNIT DOT — Angular, C#, Java, and beyond. When every button, modal, or tab behaves the same way, users know what to expect and QA knows what to check.

This lesson lays out the five principles every accessible component shares (accessible name, correct role, keyboard operability, visible focus, and state announcements) and applies them to the most common component types: buttons, links, modals, tabs, accordions, and menus. It ends with a short checklist for testing any component before it reaches QA.
