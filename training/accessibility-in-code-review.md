---
layout: training-lesson
title: Accessibility in Code Review
seoTitle: Accessibility in Code Review - Accessibility training
description: What to check during pull request review — structure, forms, keyboard, focus, ARIA, contrast — and the fixes reviewers ask for most.
permalink: /training/accessibility-in-code-review/
section: workflow
section_title: Developer Workflow Integration
lesson_number: 16
lesson_total: 16
deck: Accessibility in Code Review.pptx
prev_slug: accessibility-in-sdlc
prev_title: Accessibility in SDLC
slides:
- type: title
  title: Accessibility in Code Review
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Accessibility in Code Review
  items:
  - Why accessibility in code review matters
  - 'Core checks: structure and forms'
  - 'Core checks: keyboard, focus, and ARIA'
  - Testing interactive elements in PR review
  - Common accessibility issues found in PRs
  - Example fixes reviewers should look for
  - Reviewing custom components
- type: definitions
  title: Supports Several WCAG Criteria
  items:
  - term: Info and Relationships (1.3.1)
    desc: Semantic structure that assistive tech can interpret correctly.
  - term: Keyboard & Focus (2.1.1, 2.1.2, 2.4.3, 2.4.7)
    desc: Every element operable, with visible, predictable focus.
  - term: Contrast (1.4.1, 1.4.3, 1.4.11)
    desc: Text, UI, and color-only indicators all meet WCAG minimums.
  - term: Name, Role, Value (4.1.2)
    desc: Components expose accurate information to assistive technology.
- type: body
  title: Why Accessibility in Code Review Matters
  groups:
  - header: What Review Ensures
    items:
    - Users can understand content structure, navigate with a keyboard, and interact with components
    - Users can complete forms, receive clear feedback, and use assistive technologies effectively
    - Code review is one of the earliest points where accessibility issues can be caught
- type: body
  title: 'Core Checks: Structure and Forms'
  groups:
  - header: Semantic Structure
    items:
    - Headings must follow a logical order, and landmarks must be used correctly
    - Content must not rely on <div> elements alone
  - header: Forms and Labels
    items:
    - Every input needs a visible, programmatically associated label
    - Error messages must be tied to inputs; required fields can't rely on color alone
- type: body
  title: 'Core Checks: Keyboard, Focus, and ARIA'
  groups:
  - header: Keyboard Operability & Focus
    items:
    - Tab, Shift+Tab, Enter, Space, arrow keys, and Escape must all work as expected
    - Focus must always be visible, high-contrast, and move in a predictable order
  - header: ARIA Usage
    items:
    - 'Correct: states like aria-expanded, relationships like aria-describedby, roles added only when necessary'
    - 'Incorrect: redundant roles, ARIA on native elements, or fake controls with no keyboard support'
- type: body
  title: Testing Interactive Elements in PR Review
  groups:
  - header: What to Verify
    items:
    - 'Buttons and links: Tab to the element, press Enter or Space, confirm the action works'
    - 'Form fields: Tab in, enter text, use arrow keys and Space, confirm errors appear correctly'
    - 'Dropdowns and modals: keyboard open, close, and navigate, with correct focus management'
- type: body
  title: Common Accessibility Issues Found in PRs
  groups:
  - header: What Reviewers Catch
    items:
    - Missing labels, incorrect ARIA, and keyboard traps
    - Invisible focus indicators and low-contrast text or UI
    - Modals without focus management and custom controls without keyboard support
- type: body
  title: Example Fixes Reviewers Should Look For
  groups:
  - header: Labels, Errors, and Focus
    items:
    - A <label for> tied to its <input> by id — not a placeholder standing in for a label
    - An error message linked with aria-describedby and role="alert"
    - A modal that moves focus to its first focusable element when it opens
  - header: Skip Links
    items:
    - A skip link should appear when focused, move focus to the correct section, and sit at the top of the page
- type: body
  title: Reviewing Custom Components
  groups:
  - header: They Don't Inherit Native Behavior
    items:
    - Custom dropdowns, sliders, tabs, accordions, carousels, and tooltips all need extra scrutiny
    - Verify keyboard access, ARIA roles and states, and focus behavior
    - Verify Escape closes the component and arrow keys behave correctly
- type: list
  title: Recap
  header: Accessibility in Code Review, Review
  items:
  - Code review is one of the earliest, cheapest points to catch accessibility issues
  - Check structure, forms, keyboard operability, focus, ARIA, and contrast every time
  - Test interactive elements the same way a keyboard-only user would
  - Custom components need extra scrutiny since they don't inherit native behavior
- type: list
  title: Key Takeaways
  header: Accessibility in Code Review
  items:
  - Reviewers who know what to look for prevent issues before they reach QA
  - A short set of consistent checks catches most common accessibility defects
  - Skip links, modal focus management, and label association are the fixes reviewers ask for most
  - 'Up next: Accessible Component Patterns'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/code-review-checklist/
quiz:
- q: Why is code review such an effective place to catch accessibility issues?
  options:
  - Because reviewers use screen readers
  - It is one of the earliest checkpoints, before QA or production
  - Because it's automated
  - Because it replaces testing
  answer: 1
  explain: When reviewers know what to look for, defects are far easier to prevent and fix.
- q: Which is an example of incorrect ARIA usage a reviewer should flag?
  options:
  - aria-expanded on an accordion header
  - aria-describedby linking an error message
  - Adding a redundant role to a native <button>
  - role='dialog' on a modal
  answer: 2
  explain: Redundant roles, ARIA on native elements, and fake controls without keyboard support are common defects.
- q: When reviewing a modal, what focus behavior should you verify?
  options:
  - Focus stays on the page behind the modal
  - Focus moves in, cycles within, Escape closes, and focus returns to the trigger
  - Focus goes to the footer
  - Focus is disabled
  answer: 1
  explain: Modal focus management is one of the most common fixes reviewers ask for.
- q: Why do custom components need extra scrutiny in review?
  options:
  - They are slower
  - They don't inherit native keyboard behavior, roles, or states
  - They can't be styled
  - They are always inaccessible
  answer: 1
  explain: Verify keyboard access, ARIA roles and states, focus behavior, Escape, and arrow keys for every custom control.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In this session, we’re going to focus on Accessibility in Code Review, one of the most effective ways to prevent accessibility issues before they reach QA or production. Code review is a critical checkpoint in the SDLC, and many accessibility barriers can be caught early when reviewers know what to look for. Every interactive element, form, component, and UI pattern must be accessible, and PR review is the ideal place to verify this.

This training builds on the Forms, ARIA, Keyboard Testing, and Color Contrast modules you’ve already completed. Now we will learn how to evaluate accessibility during pull request review, how to identify common issues, and how to ensure your components meet WCAG requirements before merging.

## Why Accessibility in Code Review Matters

Accessibility review ensures that users can:

- understand content structure
- navigate with keyboard
- interact with components
- complete forms
- receive clear feedback
- use assistive technologies effectively

Code review is one of the earliest points where accessibility issues can be detected. When reviewers check accessibility during PRs, defects become much easier to prevent and fix.

Accessibility in code review supports several WCAG criteria, including:

- Info and Relationships (1.3.1)
- Use of Color (1.4.1)
- Contrast Minimum (1.4.3)
- Non-Text Contrast (1.4.11)
- Keyboard (2.1.1)
- No Keyboard Trap (2.1.2)
- Focus Order (2.4.3)
- Focus Visible (2.4.7)
- Name, Role, Value (4.1.2)

These criteria help ensure that your components are perceivable, operable, understandable, and robust.

## Core Accessibility Checks During Code Review

To perform accessibility review, you need to understand the core checks reviewers rely on.

### Semantic Structure

Headings must follow a logical order. Landmarks must be used correctly. Content must not rely on &lt;div&gt; elements alone.

Semantic structure ensures assistive technologies can interpret the page correctly.

### Forms and Labels

Every input must have a visible label. Labels must be programmatically associated. Error messages must be tied to inputs. Required fields cannot rely on color alone.

Forms are a major source of accessibility issues, and reviewers should always check them.

### Keyboard Operability

All interactive elements must be reachable and operable using only the keyboard.

- Tab moves forward
- Shift + Tab moves backward
- Enter activates buttons and links
- Space toggles controls
- Arrow keys navigate menus and lists
- Escape closes dialogs and menus

If an element cannot be operated with the keyboard, it is not accessible.

### Focus Indicators

Focus must always be visible. Focus indicators must be high-contrast. Focus must not be removed or hidden by CSS.

If you cannot see where focus is, the component is not accessible.

### Logical Focus Order

Focus must move in a predictable order that matches the visual layout.

Correct focus order:

- header
- navigation
- main content
- sidebar
- footer

Incorrect focus order:

- jumping into hidden content
- skipping important elements
- moving into unrelated sections
- entering modals unexpectedly

Logical focus order supports user understanding and prevents confusion.

### ARIA Usage

ARIA must be used correctly and minimally.

Correct usage includes:

- adding states such as aria-expanded
- adding relationships such as aria-describedby
- adding roles only when necessary

Incorrect usage includes:

- adding redundant roles
- adding ARIA to native elements
- creating fake controls without keyboard support

ARIA misuse is a common source of accessibility defects.

### Color and Contrast

Text must meet contrast requirements. UI components must meet non-text contrast requirements. Color cannot be the only indicator of meaning.

Contrast issues are easy to catch during review.

### Testing Interactive Elements in PR Review

Every interactive element must be reachable and operable using only the keyboard.

### Buttons and Links

- Tab to the element
- Press Enter or Space
- Confirm the action works

### Form Fields

- Tab into each field
- Enter text
- Use arrow keys for radio buttons
- Use Space for checkboxes
- Confirm error messages appear correctly

### Dropdowns and Menus

- Use Enter or Space to open
- Use arrow keys to navigate
- Use Enter to select
- Use Escape to close

### Modals and Dialogs

- Focus should move into the modal automatically
- Tab should cycle within the modal
- Escape should close the modal
- Focus should return to the trigger

These behaviors ensure users can operate your application without barriers.

### Common Accessibility Issues Found in PRs

Reviewers often encounter issues such as:

- missing labels
- incorrect ARIA
- keyboard traps
- invisible focus indicators
- low-contrast text or UI
- modals without focus management
- custom controls without keyboard support
- hidden elements receiving focus

These issues are easy to identify when you review early and consistently.

## Example Fixes Reviewers Should Look For

### Proper Label Association

Correct example:

```html
<label for="email">Email address</label>
<input id="email" type="email">
```

### Accessible Error Messaging

```html
<input id="username" aria-describedby="username-error">
<span id="username-error" role="alert">Username is required</span>
```

### Modal Focus Management

```javascript
const modal = document.getElementById('modal');
const firstFocusable = modal.querySelector(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
firstFocusable.focus();
```

### Skip Links in Code Review

Skip links allow users to bypass repetitive content and jump directly to the main section of the page.

Correct example:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

Skip links should:

- appear when focused
- move focus to the correct section
- be placed at the top of the page

They improve navigation and reduce frustration.

### Reviewing Custom Components

Custom components often require special attention because they do not inherit native keyboard behavior.

Examples include:

- custom dropdowns
- sliders
- tabs
- accordions
- carousels
- tooltips

When reviewing custom components:

- verify keyboard access
- verify ARIA roles and states
- verify focus behavior
- verify Escape closes the component
- verify arrow keys behave correctly

Custom components must behave like their native equivalents.

### Conclusion

Accessibility in code review is one of the most important skills for developers and reviewers. When you verify accessibility during PR review, you prevent major issues and create applications that are usable for everyone. Accessibility review supports WCAG compliance and ensures your components work with assistive technologies.

In the next training, we will explore Accessible Component Patterns, where you will learn how to build reusable, predictable components that meet accessibility requirements across all DOT applications.
