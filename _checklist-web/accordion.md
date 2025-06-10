---
layout: entry
title:  "Accordion"
description: "How to code and test accessible accordions"
categories: main

keyboard:
  tab: |
    Focus visibly moves to the accordion.
  space bar: |
    Toggles the accordion.
  enter: |
    Toggles the accordion.

mobile:
  swipe: |
    Focus moves to the element, expresses its state (expanded/collapsed)
  double tap: |
    Toggles the accordion

screenreader:
  name:  |
    Its purpose is clear
  role:  |
    It identifies its role of a button or details
  state: |
    It expresses its state (expanded/collapsed)

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to an accordion
    result: |
      focus is strongly visually indicated
  - then:  |
      the space bar and/or enter key to activate the accordion
    result: |
      the hidden content is revealed

gherkin-mobile:
  - when:  |
      swipe to focus on a button
  - then:  |
      double tap with the button in focus
    result: |
      the intended action occurs

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Color is not used as the only means of conveying information (expanded/collapsed)
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
      - criteria: The focus state has a 3:1 minimum contrast ratio between the default and focused states
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole page
  - name: Robust
    list:
      - criteria: Meets criteria across platforms, devices and viewports

---
## Developer Notes
For developer information, refer to [Accordion Developer Code Examples and Guidance](/components/accordion.html)