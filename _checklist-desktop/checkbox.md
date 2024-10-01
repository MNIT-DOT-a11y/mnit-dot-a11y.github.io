---
layout: entry-desktop
title:  "Checkbox"
description: "How to test accessible checkboxes for desktop applications"
categories: controls


keyboard:
  tab: |
    Focus visibly moves to the checkbox.  
  space bar: |
    Toggles the checkbox between states.  
  arrow keys: |
    Moves between programmatically grouped checkboxes (i.e. a section of an extensive settings screen).  

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

## Clear purpose
- Verify that the purpose and current state of the check box is clear and understandable.
- The checkbox label should be a statement that the check mark makes true, and the absence of a check mark makes false.
- The label should not change when the box is checked or unchecked.

## Groups
- Multiple checkbox groups should be labeled appropriately, especially when directly next to or adjacent from another group.
- Groups should include checkboxes that share a similar purpose, for example, a subsection of a settings dialog.

## Checkboxes are not on/off controls.
- Don't use a check box as an on/off control or to perform a command; instead, a [toggle button](/checklist-desktop/button) should be used.

## When a checkbox invalidates another option
If a checkbox will cause another checkbox to be unchecked, similarly to the function of radio buttons, it should notify the user of the change when it occurs.

- If you press space on a checkbox to check or uncheck it, and another checkbox's state is changed, announce this to screen readers.
- Alternatively, if only one checkbox can be checked at a time, a radio button control would be a better choice.

## Checkboxes should not cause dialogs to appear
- Do not launch a dialog box or modal when a checkbox is checked or unchecked.
- If the user should be warned about an action that might occur after checking or unchecking the box, these warnings should be displayed after the user confirms options or submits the form. (i.e. clicking 'Apply' in a settings dialog).

## States
- When using the indeterminate state, there should always be associated checkboxes that influence this state. Indeterminate is used to indicate that an option is set for some, but not all, sub-choices. 

## Design Notes

### Resources
- [Checkboxes in Microsoft Windows Apps](https://learn.microsoft.com/en-us/windows/apps/design/controls/checkbox)