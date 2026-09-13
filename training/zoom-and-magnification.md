---
layout: training-lesson
title: Zoom & Magnification
seoTitle: Zoom & Magnification - Accessibility training
description: How layouts behave under browser zoom and screen magnification, and how to test at 200% and 400% for Resize Text and Reflow.
permalink: /training/zoom-and-magnification/
section: core-testing
section_title: Core Testing Skills
lesson_number: 7
lesson_total: 16
deck: Zoom and Magnification.pptx
prev_slug: color-alone-and-contrast
prev_title: Color Alone & Color Contrast
next_slug: text-spacing
next_title: Text Spacing
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
quiz:
- q: Which two WCAG criteria does zoom and magnification testing support?
  options:
  - Resize Text (1.4.4) and Reflow (1.4.10)
  - Keyboard (2.1.1) and Focus Order (2.4.3)
  - Use of Color (1.4.1) and Contrast (1.4.3)
  - Labels (3.3.2) and Error Identification (3.3.1)
  answer: 0
  explain: Resize Text covers 200% text scaling; Reflow covers single-column layout at 400% without horizontal scrolling.
- q: What is the key difference between browser zoom and screen magnification?
  options:
  - There is no difference
  - Browser zoom reflows content; magnification enlarges pixels so only part of the screen is visible
  - Magnification reflows content; browser zoom doesn't
  - Browser zoom only affects images
  answer: 1
  explain: Magnifier users must pan to read, so sticky headers, hover-only controls, and dense layouts become real barriers.
- q: At 400% zoom, what should you expect from an accessible layout?
  options:
  - A single-column layout with no horizontal scrolling
  - A horizontal scrollbar
  - Hidden navigation
  - Smaller text
  answer: 0
  explain: Reflow means panels stack, controls stay reachable, and there is no horizontal scrolling.
- q: Which technique supports reflow?
  options:
  - Fixed-width containers
  - Images of text
  - Relative units like percent, em, and rem
  - Absolute positioning
  answer: 2
  explain: Responsive layouts, flexible containers, and relative units let content resize and stack instead of breaking.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on Zoom and Magnification, two essential techniques that help us understand how users with low vision experience our applications. Many users rely on browser zoom or built-in magnification tools to enlarge content, and our layouts must remain usable, readable, and functional at higher zoom levels.

This training builds on the color contrast module you completed earlier. Now we will explore how your layouts behave when users enlarge content and how to ensure your applications meet WCAG requirements for text resizing and reflow.

## Why Zoom and Magnification Matter

Zoom and magnification support two WCAG criteria:

- Resize Text (1.4.4)
- Reflow (1.4.10)

Accessible layouts must:

- Remain Readable
- Avoid Clipping Or Overlapping
- Avoid Horizontal Scrolling Whenever Possible
- Keep Controls Reachable
- Maintain Predictable Structure

## Browser Zoom vs. Screen Magnification

### Browser Zoom

Browser zoom enlarges content and triggers layout reflow. This means:

- Text Increases In Size
- Images Scale
- Containers Adjust
- Content Reorganizes To Fit The Viewport

### Screen Magnification

Magnifiers enlarge pixels instead of reflowing content. This means:

- Only Part Of The Screen Is Visible
- Users Must Pan To Read
- Sticky Headers Take Up More Space
- Hover Only Interactions Become Difficult
- Images Of Text Become Blurry

### Testing At 200 Percent Zoom

At 200 percent zoom, check for:

- Clipped Or Cut Off Text
- Overlapping Elements
- Buttons That Disappear
- Labels That Become Unreadable
- Controls That Shift Unexpectedly
- Content That Requires Horizontal Scrolling

### Testing At 400 Percent Zoom

At 400 percent zoom, check for:

- Single Column Layout
- Readable Text
- Reachable Controls
- Menus That Do Not Overlap Content
- Panels That Stack Correctly
- Absence Of Horizontal Scrolling

### Common Zoom Accessibility Issues

Developers often encounter issues such as:

- Fixed Width Containers That Do Not Resize
- Sticky Headers That Consume Most Of The Screen
- Text That Does Not Scale
- Images Of Text That Become Blurry
- Tooltips That Require Precise Mouse Movement
- Modals That Overflow The Viewport
- Side By Side Layouts That Do Not Stack
- Hidden Content That Becomes Unreachable

### Designing For Reflow

To support reflow at 400 percent zoom, use:

- Responsive Layouts
- Flexible Containers
- Relative Units (Percent, Em, Rem)
- Mobile First Design
- Stacking Behavior For Side By Side Elements
- Scalable Text
- Scalable Icons

### Magnification And Real World Usability

Magnification reveals issues that browser zoom cannot show. For example:

- Sticky Headers May Cover Most Of The Screen
- Hover Only Interactions May Disappear When The Mouse Moves
- Error Messages May Appear Far From The Field
- Small Controls May Become Difficult To Activate
- Dense Layouts May Require Excessive Panning

### Testing With Windows Magnifier

When testing with Magnifier:

- Use Full Screen Mode
- Test At 200 Percent And 300 Percent
- Pan Through The Page
- Check For Unreachable Controls
- Check For Clipped Content
- Check For Sticky Headers That Dominate The Viewport
- Check For Hover Interactions That Disappear

### Testing With Browser Zoom

Test at:

- 125 Percent
- 150 Percent
- 200 Percent
- 400 Percent

## Conclusion

Zoom and magnification are essential parts of accessibility testing. When you design layouts that remain usable at higher zoom levels and test both browser zoom and magnification, you create applications that support users with low vision and meet WCAG requirements.

In the next training, we will move into Text Spacing, where you will learn how spacing adjustments affect readability and how to ensure your content remains usable when users increase line height, letter spacing, and paragraph spacing.
