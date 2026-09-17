---
layout: training-lesson
title: Color Alone & Color Contrast
seoTitle: Color Alone & Color Contrast - Accessibility training
description: Why color can never be the only indicator, the WCAG contrast ratios for text and UI, and how to test with the Color Contrast Analyzer.
permalink: /training/color-alone-and-contrast/
slug: color-alone-and-contrast
section: core-testing
section_title: Accessibility Testing
lesson_number: 6
lesson_total: 16
deck: Color Alone and Color Contrast.pptx
prev_slug: keyboard-testing
prev_title: Keyboard Testing
next_slug: zoom-and-magnification
next_title: Zoom & Magnification
slides:
- type: title
  title: Color Alone & Color Contrast
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Color Alone & Color Contrast
  items:
  - Why color accessibility matters
  - Color alone cannot convey meaning
  - Text and non-text contrast requirements
  - Testing color contrast
  - Common contrast issues
  - Color in charts, forms, and error messages
- type: definitions
  title: Contrast Requirements at a Glance
  items:
  - term: Standard Text
    desc: Minimum contrast ratio of 4.5 to 1 against its background.
  - term: Large Text
    desc: Minimum contrast ratio of 3 to 1 (18pt regular or 14pt bold).
  - term: Non-Text Elements
    desc: Minimum contrast ratio of 3 to 1 for icons, focus indicators, and controls.
  - term: Use of Color
    desc: Color can never be the only way information is communicated.
- type: body
  title: Why Color Accessibility Matters
  groups:
  - header: Who's Affected
    items:
    - Low vision, color blindness, and contrast sensitivity all change how users perceive text, icons, charts, and controls
    - Even users without visual disabilities benefit from strong contrast in bright environments or on low-quality screens
  - header: Supports Several WCAG Criteria
    items:
    - Use of Color (1.4.1)
    - Contrast Minimum (1.4.3)
    - Enhanced Contrast (1.4.6)
    - Non-Text Contrast (1.4.11)
- type: body
  title: Color Alone Cannot Convey Meaning
  groups:
  - header: Incorrect Usage
    items:
    - Marking required fields in red without text
    - Using green and red alone to indicate success or failure
    - Relying on color to show active or inactive states
    - Differentiating chart categories by color without labels
  - header: Correct Usage
    items:
    - Add text labels
    - Add icons
    - Add patterns or shapes
    - Add descriptive tooltips
- type: body
  title: Text Contrast Requirements
  groups:
  - header: Minimum Ratios
    items:
    - 'Standard text: 4.5 to 1'
    - 'Large text (18pt regular or 14pt bold): 3 to 1'
    - Applies to all text, including labels, buttons, links, and form fields
- type: body
  title: Non-Text Contrast Requirements
  groups:
  - header: 3 to 1, Minimum
    items:
    - Icons, focus indicators, graphical objects, interactive controls, and input borders all need at least 3 to 1 contrast
    - Ensures users can identify controls and understand their purpose
- type: body
  title: Testing Color Contrast
  groups:
  - header: Color Contrast Analyzer (CCA)
    items:
    - Open the Color Contrast Analyzer
    - Use the eyedropper tool to select the foreground color
    - Select the background color
    - Review the contrast ratio and confirm it meets WCAG requirements
  - header: Why Test Early
    items:
    - Testing during development prevents issues from reaching QA and reduces remediation time
- type: body
  title: Common Color Contrast Issues
  groups:
  - header: Issues Developers Encounter
    items:
    - Light gray text on white backgrounds
    - Low-contrast placeholder text
    - Buttons with insufficient contrast
    - Disabled controls that become unreadable
    - Charts with color-only differentiation
    - Icons that blend into the background
- type: body
  title: Color in Charts, Forms, and Errors
  groups:
  - header: Charts & Data Visualizations
    items:
    - Add labels directly to data points, use patterns or textures, use distinct shapes, and provide legends with clear text
  - header: Forms & Error Messages
    items:
    - Pair color with a red border, an error icon, and a descriptive error message — never a red border alone
- type: list
  title: Recap
  header: Color Alone & Contrast Review
  items:
  - Color can support meaning, but it can never be the only source of meaning
  - Standard text needs 4.5:1 contrast; large text needs 3:1
  - Non-text elements — icons, controls, focus indicators — need 3:1 contrast
  - The Color Contrast Analyzer is our standard testing tool
  - Charts, forms, and error messages all need a non-color indicator alongside color
- type: list
  title: Key Takeaways
  header: Color Alone & Color Contrast
  items:
  - Test contrast during development, not after
  - Never let color alone carry required information
  - Accessible color choices don't limit creativity — they support usability
  - 'Up next: Zoom & Magnification'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/color-contrast/
---

Color choices affect readability for users with low vision, color blindness, or contrast sensitivity — and for everyone in bright environments or on low-quality screens. Used well, color strengthens communication; used alone, it becomes a barrier.

The lesson covers the two halves of the topic. First, color can never be the only way information is conveyed: required fields, errors, states, and chart categories all need a text, icon, pattern, or shape alongside the color. Second, WCAG sets minimum contrast ratios — 4.5:1 for standard text, 3:1 for large text and for non-text elements like icons, focus indicators, and input borders — and the Color Contrast Analyzer is how we check them.

### You'll learn to

- Spot places where color is the only indicator and add a second cue
- Apply the 4.5:1 and 3:1 contrast minimums to text and UI components
- Test foreground and background colors with the Color Contrast Analyzer
- Recognize common contrast failures like light gray text and low-contrast placeholders
- Make charts, forms, and error messages readable without relying on color
