---
layout: training-lesson
title: Forms & Error Messages
seoTitle: Forms & Error Messages - Accessibility training
description: Labels, instructions, required fields, accessible error messages, and focus management for forms users can actually complete.
permalink: /training/forms-and-error-messages/
slug: forms-and-error-messages
section: foundations
section_title: Accessibility Foundations
lesson_number: 4
lesson_total: 16
deck: Forms and Error Messages.pptx
prev_slug: aria-fundamentals
prev_title: ARIA Fundamentals
next_section: core-testing
next_section_title: Accessibility Testing
objectives:
- 'Associate every input with a visible, programmatic label'
- 'Place instructions and required-field indicators where users will find them'
- 'Write specific error messages linked with `aria-describedby` and announced with `role="alert"`'
- 'Move focus to the first error after a failed submission'
- 'Group related inputs so their relationship is announced'
slides:
- type: title
  title: Forms & Error Messages
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Forms & Error Messages
  items:
  - Why accessible forms matter
  - Labels and programmatic association
  - Instructions, help text, and required fields
  - Accessible error messages
  - Focus management during errors
  - Grouping related fields
  - Common pitfalls to avoid
- type: definitions
  title: WCAG Criteria for Accessible Forms
  items:
  - term: Labels or Instructions
    desc: Every field needs clear, visible guidance.
  - term: Error Identification
    desc: Errors must be identified in text, not color alone.
  - term: Focus Order
    desc: Focus must move predictably through the form.
  - term: Name, Role, Value
    desc: Assistive tech must expose each field's state.
- type: body
  title: Why Accessible Forms Matter
  groups:
  - header: Where Users Get Stuck
    items:
    - Forms are where users enter information and complete critical tasks
    - Missing labels, focus behavior, or error messages leave users confused or stuck
  - header: Supports Several WCAG Criteria
    items:
    - Labels or Instructions, Error Identification, Error Prevention
    - Focus Order, Name Role Value
- type: body
  title: Labels and Programmatic Association
  groups:
  - header: Every Field Needs a Real Label
    items:
    - Labels must be programmatically associated using for and id
    - <label for="email">Email address</label> + <input id="email">
    - Screen readers announce “Email address, edit text” instead of leaving users guessing
  - header: Avoid Placeholder-Only Labels
    items:
    - Placeholders disappear when users type
    - Not announced consistently by screen readers
- type: body
  title: Instructions and Required Fields
  groups:
  - header: Instructions Belong Near the Field
    items:
    - “Enter your full legal name.”
    - “Password must be at least twelve characters.”
    - Should not rely on color alone
  - header: Required Fields
    items:
    - Indicated both visually and programmatically
    - <label>Phone number <span aria-hidden="true">*</span></label> + aria-required="true"
- type: body
  title: Accessible Error Messages
  groups:
  - header: Clear, Specific, Linked to the Field
    items:
    - aria-describedby links the field to its error text
    - role="alert" so the error is announced immediately
    - Avoid vague messages like “Invalid input.”
  - header: Effective Error Messages…
    items:
    - Identify the field, describe the issue, explain what to do
    - “Enter a valid email format, such as name@example.com.”
- type: body
  title: Focus Management During Errors
  groups:
  - header: Move Focus to the Problem
    items:
    - On submission failure, move focus to the first error automatically
    - Helps keyboard and screen reader users find the issue immediately
    - After correction, focus returns to the appropriate field
- type: body
  title: Grouping Related Fields
  groups:
  - header: Use Fieldset and Legend
    items:
    - Groups related inputs like radio buttons or checkboxes
    - <fieldset><legend>Preferred contact method</legend>…
    - Helps assistive tech understand the relationship between fields
- type: body
  title: Avoiding Common Pitfalls
  groups:
  - header: Barriers Developers Create
    items:
    - Using placeholders instead of labels
    - Placing error messages far from the field
    - Relying on color alone to indicate errors
    - Failing to associate labels correctly
    - Creating custom controls without ARIA
    - Skipping focus management, vague error messages
- type: list
  title: Recap
  header: Forms & Error Messages Review
  items:
  - Every field needs a programmatically associated label
  - Instructions and required-field indicators belong near the field
  - Error messages must be specific, linked, and announced immediately
  - Focus must move to the first error on a failed submission
  - Fieldset and legend group related fields for assistive tech
- type: list
  title: Key Takeaways
  header: Forms & Error Messages
  items:
  - Placeholders are not labels
  - Specific error messages reduce user frustration and support requests
  - Predictable focus behavior is as important as the error text itself
  - 'Up next: Keyboard Testing'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/form/
---

Forms are where users enter information and complete critical tasks — and where missing labels, unclear instructions, or vague errors leave them stuck. This lesson shows how to build forms that stay usable for keyboard and screen reader users from the first field to the final submit.

It covers programmatic label association with `for` and `id`, why placeholders are not labels, how to indicate required fields both visually and programmatically, and how to write error messages that identify the field, describe the problem, and say what to do. Focus management during errors and grouping related fields with `fieldset` and `legend` round out the pattern.
