---
layout: training-lesson
title: Keyboard Testing
seoTitle: Keyboard Testing - Accessibility training
description: 'Test every interactive element without a mouse: commands, focus indicators, focus order, keyboard traps, skip links, and custom components.'
permalink: /training/keyboard-testing/
section: core-testing
section_title: Core Testing Skills
lesson_number: 5
lesson_total: 16
deck: Keyboard Testing.pptx
prev_slug: forms-and-error-messages
prev_title: Forms & Error Messages
next_slug: color-alone-and-contrast
next_title: Color Alone & Color Contrast
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
quiz:
- q: Which key combination moves focus backward through interactive elements?
  options:
  - Escape
  - Shift + Tab
  - Ctrl + Tab
  - Backspace
  answer: 1
  explain: Tab moves forward, Shift + Tab moves backward. Arrow keys navigate within components like menus and radio groups.
- q: What does the training say if you can't see where keyboard focus is?
  options:
  - It's fine as long as the mouse works
  - The component is not accessible
  - Add a tooltip
  - It only matters for screen reader users
  answer: 1
  explain: Focus Visible (2.4.7) requires a clear, high-contrast focus indicator at all times.
- q: How do you test for a keyboard trap?
  options:
  - Click every element with the mouse
  - Tab into the component, then try Tab, Shift+Tab, and Escape to leave it
  - Run an automated scan only
  - Check the component's CSS
  answer: 1
  explain: If none of Tab, Shift+Tab, or Escape lets you leave, the component contains a trap — a serious failure.
- q: What should a skip link do?
  options:
  - Be hidden from keyboard users
  - Appear when focused and move focus to the main content
  - Open a new window
  - Only appear on mobile
  answer: 1
  explain: Skip links let users bypass repetitive content. They should appear on focus, move focus correctly, and sit at the top of the page.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In this session, we’re going to focus on Keyboard Testing, one of the most essential accessibility skills for developers. Keyboard accessibility is a core requirement of WCAG and a foundational part of building usable applications. Many users rely on keyboards or keyboard-like devices to navigate, and every interactive element must work without a mouse.

This training builds on the HTML, ARIA, and Forms modules you’ve already completed. Now we will learn how to verify that your components are fully operable using only the keyboard, and how to identify common issues before they reach QA.

## Why Keyboard Accessibility Matters

Keyboard accessibility ensures that users can:

- navigate through content
- activate buttons and links
- complete forms
- open and close menus
- interact with custom components

This is essential for users with motor disabilities, low vision, blindness, or those who simply prefer keyboard navigation. It also supports assistive technologies such as screen readers, which rely heavily on keyboard commands.

Keyboard accessibility supports several WCAG criteria, including:

- Keyboard (2.1.1)
- No Keyboard Trap (2.1.2)
- Focus Order (2.4.3)
- Focus Visible (2.4.7)

When developers test keyboard behavior early, accessibility issues become much easier to prevent and fix.

## Basic Keyboard Commands

To perform keyboard testing, you need to understand the core commands users rely on.

- Tab moves forward through focusable elements
- Shift + Tab moves backward
- Enter activates buttons, links, and controls
- Spacebar activates buttons and toggles
- Arrow keys navigate menus, radio buttons, sliders, and lists
- Escape closes dialogs, menus, and popups

These commands allow you to test every interactive element in your application.

## Focus Indicators

As you move through the page, you should always see a clear visual indicator showing which element is currently focused. This indicator must be visible, high-contrast, and not hidden by design.

Examples of good focus indicators:

- a visible outline
- a highlight
- an underline
- a border change

If you cannot see where focus is, the component is not accessible.

## Logical Focus Order

Focus must move in a predictable order that matches the visual layout and reading sequence. Users should not jump unexpectedly between unrelated elements.

Correct focus order:

- header
- navigation
- main content
- sidebar
- footer

Incorrect focus order:

- jumping into hidden content
- skipping important elements
- moving into ads or unrelated sections
- entering modals unexpectedly

Logical focus order supports user understanding and prevents confusion.

## Testing Interactive Elements

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

### Keyboard Traps

A keyboard trap occurs when users enter a component and cannot leave it. This is a serious accessibility failure.

Examples of keyboard traps:

- modals that do not release focus
- custom widgets that trap focus
- iframes without escape paths
- components that require a mouse to exit

To test for traps:

- Tab into the component
- Try to Tab out
- Try Shift + Tab
- Try Escape

If none of these work, the component contains a trap and must be fixed.

## Skip Links

Skip links allow users to bypass repetitive content and jump directly to the main section of the page. They are essential for keyboard and screen reader users.

Correct example:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

Skip links should:

- appear when focused
- move focus to the correct section
- be placed at the top of the page

They improve navigation and reduce frustration.

## Testing Custom Components

Custom components often require special attention because they do not inherit native keyboard behavior.

Examples include:

- custom dropdowns
- sliders
- tabs
- accordions
- carousels
- tooltips

When testing custom components:

- verify keyboard access
- verify ARIA roles and states
- verify focus behavior
- verify Escape closes the component
- verify arrow keys behave correctly

Custom components must behave like their native equivalents.

## Common Keyboard Accessibility Issues

Developers often encounter issues such as:

- missing focus indicators
- incorrect focus order
- keyboard traps
- elements that require a mouse
- modals without focus management
- custom controls without ARIA
- hidden elements receiving focus

These issues are easy to identify when you test early and often.

## Conclusion

Keyboard testing is one of the most important accessibility skills for developers. When you verify keyboard behavior during development, you prevent major accessibility issues and create applications that are usable for everyone. Keyboard accessibility supports WCAG compliance and ensures your components work with assistive technologies.
