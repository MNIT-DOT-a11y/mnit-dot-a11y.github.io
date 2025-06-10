---
layout: entry
title:  "Select Dropdown"
description: "How to code and test an accessible select listbox dropdown for the Web"
categories: form

keyboard:
  tab: |
    Focus moves visibly to the input
  arrow-keys: |
    Moves focus to and chooses the next option. 
  escape: |
    If the select options are displayed, collapses the select and moves focus to the select.
     
mobile:
  swipe: |
    Focus moves to the input, traverses list
  double-tap: |
    Opens select, chooses option

screenreader:
  name:  |
    Its purpose is clear
  role:  |
    It identifies itself as a select, popup, menu/submenu, listbox or combobox
  group: |
    Hints or errors are read after the label and related inputs include a group name (ex: Account settings)
  state: |
    It indicates which option is selected and if disabled/dimmed/unavailable
    
gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a select
    result: |
      focus is strongly visually indicated
  - then:  |
      the arrow keys to select an option
    result: |
      the selected option is changed
  - then:  |
      the escape key when the select is open 
    result: |
     it collapses and focus moves to the select

gherkin-mobile:
  - when:  |
      swipe to focus on a select
  - then:  |
      double tap with the select in focus
    result: |
      the options can be selected

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Color is not used as the only means of conveying information (error, success, etc)
      - criteria: Doesn't rely on placeholder text as label or hint text
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The disabled states have a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole page
      - criteria: It has the correct semantic meaning
      - criteria: Avoids very long option names
      - criteria: Doesn't use the same words at the beginning of a set of options
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role 
      - criteria: Expresses its state (if applicable)
      - criteria: Meets criteria across platforms, devices and viewports
---
## Developer Notes
For developer information, refer to [Select Dropdown Developer Code Examples and Guidance](/components/select.html)