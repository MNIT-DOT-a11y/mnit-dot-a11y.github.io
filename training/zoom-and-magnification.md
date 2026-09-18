---
layout: training-lesson
title: Zoom & Magnification
seoTitle: Zoom & Magnification - Accessibility training
description: How layouts behave under browser zoom and screen magnification, and how to test at 200% and 400% for Resize Text and Reflow.
permalink: /training/zoom-and-magnification/
slug: zoom-and-magnification
section: core-testing
section_title: Accessibility Testing
lesson_number: 7
lesson_total: 16
deck: Zoom and Magnification.pptx
prev_slug: color-alone-and-contrast
prev_title: Color Alone & Color Contrast
next_slug: text-spacing
next_title: Text Spacing
objectives:
- 'Explain the WCAG criteria Resize Text (1.4.4) and Reflow (1.4.10)'
- 'Test layouts at 200% and 400% zoom and know what to look for'
- 'Use Windows Magnifier to find issues browser zoom hides'
- 'Recognize common failures like fixed-width containers and modals that overflow'
- 'Design with relative units and stacking behavior so content reflows'
slides:
- type: title
  title: Zoom & Magnification
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Zoom & Magnification
  items:
  - Why zoom and magnification matter
  - Browser zoom vs. screen magnification
  - Testing at 200% and 400% zoom
  - Common zoom accessibility issues
  - Designing for reflow
  - Testing with Windows Magnifier and browser zoom
- type: definitions
  title: WCAG Criteria for Zoom & Magnification
  items:
  - term: Resize Text (1.4.4)
    desc: Text must resize up to 200% without loss of content or functionality.
  - term: Reflow (1.4.10)
    desc: Content must reflow to a single column at 400% zoom without horizontal scrolling.
  - term: Browser Zoom
    desc: Enlarges content and triggers layout reflow — text, images, and containers all resize.
  - term: Screen Magnification
    desc: Enlarges pixels instead of reflowing content — only part of the screen is visible at a time.
- type: body
  title: Why Zoom and Magnification Matter
  groups:
  - header: Supports Two WCAG Criteria
    items:
    - Resize Text (1.4.4) and Reflow (1.4.10)
  - header: Accessible Layouts Must
    items:
    - Remain readable, avoid clipping or overlapping, and avoid horizontal scrolling whenever possible
    - Keep controls reachable and maintain a predictable structure
- type: body
  title: Browser Zoom vs. Screen Magnification
  groups:
  - header: Browser Zoom
    items:
    - Text increases in size, images scale, containers adjust, and content reorganizes to fit the viewport
  - header: Screen Magnification
    items:
    - Only part of the screen is visible, so users must pan to read
    - Sticky headers take up more space, hover-only interactions become difficult, and images of text become blurry
- type: body
  title: Testing at 200% Zoom
  groups:
  - header: Check For
    items:
    - Clipped or cut-off text
    - Overlapping elements
    - Buttons that disappear
    - Labels that become unreadable
    - Controls that shift unexpectedly
    - Content that requires horizontal scrolling
- type: body
  title: Testing at 400% Zoom
  groups:
  - header: Check For
    items:
    - Single-column layout
    - Readable text and reachable controls
    - Menus that don't overlap content
    - Panels that stack correctly
    - Absence of horizontal scrolling
- type: body
  title: Common Zoom Accessibility Issues
  groups:
  - header: Issues Developers Encounter
    items:
    - Fixed-width containers that don't resize
    - Sticky headers that consume most of the screen
    - Text that doesn't scale, and images of text that become blurry
    - Tooltips that require precise mouse movement
    - Modals that overflow the viewport
    - Side-by-side layouts that don't stack, and hidden content that becomes unreachable
- type: body
  title: Designing for Reflow
  groups:
  - header: Support Reflow at 400% Zoom With
    items:
    - Responsive layouts and flexible containers
    - Relative units (percent, em, rem) and mobile-first design
    - Stacking behavior for side-by-side elements
    - Scalable text and icons
- type: body
  title: Testing with Magnifier and Browser Zoom
  groups:
  - header: Windows Magnifier
    items:
    - Use full screen mode, test at 200% and 300%, and pan through the page
    - Check for unreachable controls, clipped content, dominant sticky headers, and disappearing hover interactions
  - header: Browser Zoom
    items:
    - Test at 125%, 150%, 200%, and 400%
- type: list
  title: Recap
  header: Zoom & Magnification Review
  items:
  - 'Zoom and magnification support two WCAG criteria: Resize Text and Reflow'
  - Browser zoom reflows content; screen magnification only enlarges pixels
  - Test at 200% and 400% zoom, and with Windows Magnifier at 200% and 300%
  - Watch for fixed-width containers, sticky headers, and modals that overflow
  - Responsive, flexible layouts are what make reflow possible
- type: list
  title: Key Takeaways
  header: Zoom & Magnification
  items:
  - Browser zoom and screen magnification reveal different problems — test both
  - Design layouts with relative units so they can reflow, not just resize
  - Magnification testing catches issues zoom alone can miss, like dominant sticky headers
  - 'Up next: Text Spacing'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/zoom-magnification/
---

Many users with low vision enlarge content with browser zoom or a screen magnifier, and our layouts have to stay readable and functional when they do. This lesson explains the difference between the two — browser zoom reflows content, while magnification enlarges pixels so only part of the screen is visible — and why both need testing.

You'll test at 200% and 400% browser zoom for clipped text, overlapping elements, disappearing buttons, and horizontal scrolling, and with Windows Magnifier for the problems zoom can't reveal, like sticky headers that dominate the viewport and hover-only interactions. The lesson closes with the design choices that make reflow possible: responsive layouts, flexible containers, relative units, and scalable text and icons.
