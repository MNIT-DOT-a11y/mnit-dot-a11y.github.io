---
layout: training-lesson
title: Text Spacing
seoTitle: Text Spacing - Accessibility training
description: The WCAG 1.4.12 spacing values, how to test them with the Text Spacing Bookmarklet, and how to design layouts that don't break.
permalink: /training/text-spacing/
section: core-testing
section_title: Core Testing Skills
lesson_number: 8
lesson_total: 16
deck: Text Spacing.pptx
prev_slug: zoom-and-magnification
prev_title: Zoom & Magnification
next_slug: axe-devtools-basics
next_title: Axe DevTools Basics
slides:
- type: title
  title: Text Spacing
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Text Spacing
  items:
  - Why text spacing matters
  - WCAG text spacing requirements
  - Testing text spacing
  - Common text spacing issues
  - Designing for flexible spacing
  - Text spacing in forms and components
- type: definitions
  title: WCAG 1.4.12 Minimum Spacing Values
  items:
  - term: Line Height
    desc: At least 1.5 times the font size.
  - term: Paragraph Spacing
    desc: At least 2 times the font size.
  - term: Letter Spacing
    desc: At least 0.12 times the font size.
  - term: Word Spacing
    desc: At least 0.16 times the font size.
- type: body
  title: Why Text Spacing Matters
  groups:
  - header: Who Adjusts Spacing, and Why
    items:
    - Users with low vision, dyslexia, or cognitive disabilities increase spacing to reduce visual crowding
    - When spacing changes break the layout, users lose access to content or controls
  - header: Supports WCAG 1.4.12
    items:
    - Content must remain readable and functional when users apply custom spacing values
- type: body
  title: WCAG Text Spacing Requirements
  groups:
  - header: Minimum Values
    items:
    - 'Line height: 1.5 times the font size'
    - 'Paragraph spacing: 2 times the font size'
    - 'Letter spacing: 0.12 times the font size'
    - 'Word spacing: 0.16 times the font size'
- type: body
  title: Testing Text Spacing
  groups:
  - header: The Text Spacing Bookmarklet
    items:
    - Applies WCAG-required spacing values to the page with one click
  - header: When Testing, Check For
    items:
    - Text that overlaps or gets cut off
    - Buttons that expand unexpectedly
    - Labels that shift out of place
    - Content that pushes outside containers
    - Hidden overflow that blocks text
    - Controls that become misaligned
- type: body
  title: Common Text Spacing Issues
  groups:
  - header: Issues Developers Encounter
    items:
    - Fixed-height containers and text that cannot expand
    - Buttons with hard-coded padding
    - Labels that overlap inputs
    - Cards that break under increased spacing
    - Navigation items that wrap incorrectly
    - Icons that shift out of alignment, and overflow hidden that cuts off text
- type: body
  title: Designing for Flexible Spacing
  groups:
  - header: Support Spacing Adjustments With
    items:
    - Flexible containers and auto height instead of fixed height
    - Relative units (em, rem) and responsive layouts
    - Adequate padding and line height
    - Avoiding overflow hidden and fixed pixel values
- type: body
  title: Text Spacing and Forms
  groups:
  - header: When Testing Forms, Check For
    items:
    - Labels that wrap correctly
    - Inputs that expand without breaking
    - Error messages that remain visible
    - Buttons that maintain alignment
    - Fieldsets that adjust gracefully, and legends that remain readable
- type: body
  title: Text Spacing and Components
  groups:
  - header: Cards, Accordions, Tabs & Modals
    items:
    - Card titles that wrap correctly, and accordion headers that expand cleanly
    - Tab labels that remain readable, and modal content that doesn't overflow
    - Buttons that maintain proper alignment, and icons that stay centered
  - header: Avoiding Layout Breakage
    items:
    - Avoid fixed heights, tight containers, and pixel-perfect layouts
    - Avoid text inside rigid boxes, overly dense content, and absolute positioning for text
- type: list
  title: Recap
  header: Text Spacing Review
  items:
  - WCAG 1.4.12 sets minimum spacing values for line height, paragraph, letter, and word spacing
  - The Text Spacing Bookmarklet is the fastest way to test
  - Watch for overlapping text, expanding buttons, and content pushed outside its container
  - Flexible containers and relative units prevent layout breakage
  - Forms and components need the same spacing resilience as page layout
- type: list
  title: Key Takeaways
  header: Text Spacing
  items:
  - Fixed heights and hard-coded padding are the most common source of spacing bugs
  - Test spacing early — issues are easy to catch and easy to prevent
  - Flexible, relative-unit layouts support text spacing, zoom, and magnification alike
  - This wraps our visual accessibility training series
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/text-spacing/
quiz:
- q: What line height must content support under WCAG 1.4.12?
  options:
  - 1.2 times the font size
  - 1.5 times the font size
  - 2 times the font size
  - 0.12 times the font size
  answer: 1
  explain: Line height 1.5×, paragraph spacing 2×, letter spacing 0.12×, and word spacing 0.16× the font size.
- q: What is the easiest way to test text spacing?
  options:
  - Resize the browser window
  - Use the Text Spacing Bookmarklet
  - Print the page
  - Zoom to 400%
  answer: 1
  explain: The bookmarklet applies all WCAG-required spacing values to the page so you can check for breakage.
- q: Which of these commonly breaks under increased spacing?
  options:
  - Auto-height containers
  - Relative units
  - Fixed-height containers with hidden overflow
  - Adequate padding
  answer: 2
  explain: Fixed heights, hard-coded padding, and overflow hidden are the most common sources of text-spacing bugs.
- q: Who benefits most from adjustable text spacing?
  options:
  - Only screen reader users
  - Users with low vision, dyslexia, or cognitive disabilities
  - Mobile users only
  - Developers
  answer: 1
  explain: Increased spacing reduces visual crowding and makes text easier to process.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on Text Spacing, an important accessibility requirement that ensures users can adjust spacing to improve readability. Many users with low vision, dyslexia, or cognitive disabilities increase spacing to reduce visual crowding and make text easier to process.

This training builds on the Zoom and Magnification module you completed earlier. Now we will explore how spacing adjustments affect layout and how to ensure your content remains usable when users apply custom spacing.

## Why Text Spacing Matters

Users often adjust spacing to improve readability. When spacing changes break the layout, users lose access to content or controls. WCAG requires that text remain readable and functional when users apply increased spacing.

Text spacing supports WCAG 1.4.12 (Text Spacing), which ensures that content remains usable when users apply custom spacing values.

### WCAG Text Spacing Requirements

WCAG requires that content remain readable and functional when users apply the following minimum spacing values:

- Line Height: 1.5 Times The Font Size
- Paragraph Spacing: 2 Times The Font Size
- Letter Spacing: 0.12 Times The Font Size
- Word Spacing: 0.16 Times The Font Size

These values help users reduce visual crowding and improve comprehension.

### Testing Text Spacing

The easiest way to test text spacing is to use the Text Spacing Bookmarklet, which applies WCAG-required spacing values to the page.

When testing, check for:

- Text That Overlaps
- Text That Gets Cut Off
- Buttons That Expand Unexpectedly
- Labels That Shift Out Of Place
- Content That Pushes Outside Containers
- Hidden Overflow That Blocks Text
- Controls That Become Misaligned

Your layout should remain readable and fully functional.

### Common Text Spacing Issues

Developers often encounter issues such as:

- Fixed Height Containers
- Text That Cannot Expand
- Buttons With Hard-Coded Padding
- Labels That Overlap Inputs
- Cards That Break Under Increased Spacing
- Navigation Items That Wrap Incorrectly
- Icons That Shift Out Of Alignment
- Overflow Hidden That Cuts Off Text

These issues are easy to identify when you test early.

### Designing For Flexible Spacing

To support text spacing adjustments, use:

- Flexible Containers
- Auto Height Instead Of Fixed Height
- Relative Units (Em, Rem)
- Responsive Layouts
- Adequate Padding
- Adequate Line Height
- Avoidance Of Overflow Hidden
- Avoidance Of Fixed Pixel Values

Flexible design ensures that spacing changes do not break the layout.

### Text Spacing And Forms

Forms often break under increased spacing because labels, inputs, and error messages shift unexpectedly.

When testing forms, check for:

- Labels That Wrap Correctly
- Inputs That Expand Without Breaking
- Error Messages That Remain Visible
- Buttons That Maintain Alignment
- Fieldsets That Adjust Gracefully
- Legends That Remain Readable

Forms must remain usable even when spacing increases.

### Text Spacing And Components

Components such as cards, accordions, tabs, and modals must also support increased spacing.

Check for:

- Card Titles That Wrap Correctly
- Accordion Headers That Expand Cleanly
- Tab Labels That Remain Readable
- Modal Content That Does Not Overflow
- Buttons That Maintain Proper Alignment
- Icons That Stay Centered

Spacing adjustments should not break component structure.

### Avoiding Layout Breakage

To prevent breakage under increased spacing:

- Avoid Fixed Heights
- Avoid Tight Containers
- Avoid Pixel-Perfect Layouts
- Avoid Text Inside Rigid Boxes
- Avoid Overly Dense Content
- Avoid Absolute Positioning For Text

Flexible design supports both readability and accessibility.

## Conclusion

Text spacing is an essential part of accessible design. When you build layouts that remain usable under increased spacing, you support users with low vision, dyslexia, and cognitive disabilities. Testing spacing early prevents issues and ensures your content remains readable and functional.

In the next training, we will move into Axe DevTools Basics, where you will learn how to use automated scanning tools to identify accessibility issues during development.
