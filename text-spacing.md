---
layout: training-lesson
title: Text Spacing
seoTitle: Text Spacing - Accessibility training
description: The WCAG 1.4.12 spacing values, how to test them with the Text Spacing Bookmarklet, and how to design layouts that don't break.
permalink: /training/text-spacing/
slug: text-spacing
section: core-testing
section_title: Accessibility Testing
lesson_number: 8
lesson_total: 16
deck: Text Spacing.pptx
prev_slug: zoom-and-magnification
prev_title: Zoom & Magnification
next_slug: axe-devtools-basics
next_title: Axe DevTools Basics
objectives:
- 'State the WCAG 1.4.12 minimum spacing values'
- 'Test any page with the Text Spacing Bookmarklet'
- 'Identify the layout patterns most likely to break under increased spacing'
- 'Check forms and components for wrapping, alignment, and overflow problems'
- 'Build with auto heights, relative units, and adequate padding'
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
---

Users with low vision, dyslexia, or cognitive disabilities often increase line height, paragraph spacing, letter spacing, and word spacing to reduce visual crowding. WCAG 1.4.12 requires that content stay readable and functional when they do — so layouts can't depend on text staying a fixed size.

This lesson gives you the minimum spacing values, shows how to apply them instantly with the Text Spacing Bookmarklet, and walks through what breaks: fixed-height containers, hard-coded padding, labels that overlap inputs, and hidden overflow that cuts text off. Forms and components like cards, accordions, tabs, and modals get their own checks, followed by the flexible-design habits that prevent breakage in the first place.
