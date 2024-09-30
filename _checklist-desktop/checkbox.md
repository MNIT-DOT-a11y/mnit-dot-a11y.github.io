---
layout: entry-desktop
title:  "Checkbox"
description: "How to test accessible checkboxes for desktop applications"
categories: controls


keyboard:
  tab: |
    Focus visibly moves to the checkbox
  space bar: |
    Toggles the checkbox between states
  arrow keys: |
    Moves between programmatically grouped checkboxes (i.e. a section of an extensive settings screen)

screenreader:
  name:  |
    Its label and purpose is clear
  role:  |
    It identifies its role of checkbox
  group: |
    Hints or errors are read after the label and related inputs include a group name (ex: Account settings)
  state: |
    It expresses its state (checked/unchecked/indeterminate)

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a checkbox
    result: |
      focus is strongly visually indicated
  - then:  |
      the space bar to activate the checkbox
    result: |
      the state is changed

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as a checkbox
      - criteria: Color is not used as the only means of conveying state (checked/unchecked/indeterminate)
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area includes the label and is no smaller than 44x44px
      - criteria: The checked, disabled and focus states have a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: There are no other interactive elements inside the label
      - criteria: Its purpose is clear in the context of the whole pane, page, or dialog
  - name: Robust
    list:
      - criteria: Meets criteria across platforms, devices and viewports
      - criteria: Conveys the correct semantic role 
      - criteria: Expresses its state (and group name if applicable)
---

## When a checkbox invalidates another option

If a checkbox will cause another checkbox to be unchecked, similarly to the function of radio buttons, it should notify the user of the change when it occurs.

- If you press space on a checkbox to check or uncheck it, and another checkbox's state is changed, announce this to screen readers.
- Alternatively, if only one checkbox can be checked at a time, a radio button control would be a better choice.