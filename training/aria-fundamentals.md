---
layout: training-lesson
title: ARIA Fundamentals
seoTitle: ARIA Fundamentals - Accessibility training
description: What ARIA is (and isn't), when to use it, common patterns, and why every ARIA pattern has to be tested.
permalink: /training/aria-fundamentals/
section: foundations
section_title: Accessibility Foundations
lesson_number: 3
lesson_total: 16
deck: ARIA Fundamentals.pptx
prev_slug: html-accessibility-fundamentals
prev_title: HTML Accessibility Fundamentals
next_slug: forms-and-error-messages
next_title: Forms & Error Messages
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
quiz:
- q: What is the first rule of ARIA?
  options:
  - Add ARIA to every custom component
  - Use native HTML first; use ARIA only when necessary
  - ARIA replaces the need for semantic HTML
  - Always add role='button' to clickable elements
  answer: 1
  explain: Native HTML gives you roles, states, and keyboard behavior for free. ARIA fills gaps — it doesn't replace semantics.
- q: Which of these does ARIA do?
  options:
  - Makes an element keyboard-interactive
  - Fixes broken HTML
  - Provides information about roles, states, and relationships to assistive tech
  - Adds visual focus styles
  answer: 2
  explain: ARIA only provides information — it never adds behavior. A div with role='button' still needs keyboard handling.
- q: Which attribute describes whether an accordion section is open or closed?
  options:
  - aria-label
  - aria-expanded
  - aria-describedby
  - role='tablist'
  answer: 1
  explain: aria-expanded is a state attribute; aria-label and aria-describedby are properties, and role='tablist' is a role.
- q: What does the training say about untested ARIA?
  options:
  - It's harmless because it only adds metadata
  - It can create more barriers than it solves
  - It is automatically validated by browsers
  - It only affects older screen readers
  answer: 1
  explain: Incorrect ARIA is worse than no ARIA. Every ARIA pattern must be verified with a keyboard and a screen reader.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In this session, we’re going to explore ARIA Fundamentals, one of the most important topics for developers who build interactive components.

ARIA is powerful, but it must be used carefully. When ARIA is applied correctly, assistive technologies gain the information they need to understand custom UI components. When ARIA is applied incorrectly, accessibility can break completely. Today’s training will help you understand when ARIA is needed, how it works, and how to apply it safely in your development work.

This session builds directly on the HTML Accessibility Fundamentals training. Now that you understand semantic HTML, we can talk about how ARIA fills the gaps when semantic HTML alone isn’t enough.

## What ARIA Is and What It Isn’t

ARIA stands for Accessible Rich Internet Applications. It is a set of attributes that give screen readers and other assistive technologies extra information about:

- what an element represents
- what state it is in
- how it behaves
- how it relates to other elements

ARIA does not make an element interactive. ARIA does not fix broken HTML. ARIA does not replace semantic elements. ARIA only provides information, not functionality.

The truth is that the first rule of ARIA is simple:

Use native HTML whenever possible. Use ARIA only when necessary.

## Why use ARIA?

Modern applications often include custom components built with &lt;div&gt; and &lt;span&gt; elements. These components may look and behave like native controls, yet assistive technologies cannot understand them without additional information.

Examples include:

- custom dropdowns
- custom modals
- custom tabs
- custom sliders
- custom accordions
- custom menus
- custom tooltips

ARIA exists because these custom components need extra semantic information that HTML alone cannot provide.

## Three Categories of ARIA

ARIA attributes fall into three main categories.

### 1. ARIA Roles

Roles tell assistive technologies what an element represents.

Examples:

- role="button"
- role="dialog"
- role="tab"
- role="navigation"
- role="checkbox"

Roles should only be used when a semantic element is not available.

### 2. ARIA States

States describe the current condition of an element.

Examples:

- aria-expanded="true"
- aria-selected="false"
- aria-checked="true"
- aria-disabled="true"

States must be updated dynamically as the UI changes.

### 3. ARIA Properties

Properties provide additional semantic information.

Examples:

- aria-label="Close menu"
- aria-describedby="error-message"
- aria-labelledby="section-title"
- aria-controls="panel-1"

Properties help assistive technologies understand relationships and context.

### ARIA and WCAG

ARIA supports several WCAG success criteria, including:

- 1.3.1 Info and Relationships
- 2.4.3 Focus Order
- 2.4.6 Headings and Labels
- 4.1.2 Name, Role, Value

ARIA is especially important for WCAG 4.1.2, which requires that custom components expose their name, role, and state to assistive technologies.

### When to Use ARIA

ARIA should be used when:

- You are building a custom component that does not have a semantic HTML equivalent
- You need to expose dynamic state changes
- You need to associate labels or descriptions programmatically
- You need to define relationships between elements
- You need to make custom widgets understandable to screen readers

ARIA should not be used when:

- A semantic HTML element already exists
- You are trying to fix broken HTML
- You are trying to make a non-interactive element interactive
- You are adding ARIA without testing with a screen reader

## Common ARIA Patterns

Here are some patterns developers use frequently.

### Buttons

```html
<div role="button" tabindex="0">Save</div>
```

This should only be used when a &lt;button&gt; element is not possible.

### Accordions

```html
<button aria-expanded="false" aria-controls="panel1">Details</button>
<div id="panel1" hidden>...</div>
```

### Tabs

```html
<div role="tablist">
  <button role="tab" aria-selected="true">Overview</button>
  <button role="tab" aria-selected="false">Details</button>
</div>
```

### Error Messages

```html
<input aria-describedby="email-error">
<div id="email-error" role="alert">Email is required.</div>
```

These patterns help assistive technologies understand custom interactions.

### ARIA Requires Testing

ARIA is not something you set once and forget. ARIA must be tested with:

- keyboard navigation
- NVDA or another screen reader
- Axe DevTools
- focus management tools

If ARIA is added but not tested, it can create more barriers than it solves.

## Conclusion

ARIA is a powerful tool for making custom components accessible, yet it must be used carefully. When you rely on semantic HTML first and use ARIA only when necessary, you create interfaces that are predictable, understandable, and compatible with assistive technologies.

In the next training, we’ll move into Forms & Error Messages, where we’ll explore how to build accessible forms, associate labels correctly, and provide clear, meaningful error feedback.
