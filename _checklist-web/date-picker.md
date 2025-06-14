---
layout: entry
title:  "Date Picker Dialog"
description: "How to test an accessible date picker for the Web"
categories: form

keyboard:
  tab: |
    Focus visibly moves to the date grid table and calendar navigation buttons
  escape: |
    The dialog closes and focus returns to the launch button
  arrow keys: |
    Date selection visibly moves through next/previous days
  page up/down	: | 
    Changes the grid of dates to the previous/next month.
  shift + page Up/down: |
    Changes the grid of dates to the previous/next year.
  home/end: |
    Moves focus to the first/last day of the current week.   
  space bar or enter: |
    Activates the date picker buttons and calendar navigation buttons

mobile:
  swipe: |
    Focus moves through elements, expresses its state
  double tap: |
    Activates the element in focus

screenreader:
  name:  |
    The purpose of each control is clear
  role:  |
    Buttons identify as buttons, 
    dialog identifies itself dialog or modal, 
    date grid table may identify itself as table or grid
  group: |
    The launch button indicates it has a popup, menu or dialog; days are announced with month and year
  state: |
    Date options express state (pressed, selected, disabled/dimmed)

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to the date dialog button
    result: |
      focus is strongly visually indicated
  - then:  |
      the space bar and/or enter key
    result: |
      the date picker dialog appears
  - then:  |
      the arrow keys
    result: |
      the selection moves through next/previous dates
  - then:  |
      the home/end key
    result: |
      the selection moves to the first/last day of the current week
  - then:  |
      the page up/down key
    result: |
      the grid of dates moves to the next/previous month
  - then:  |
      shift key + page up/down
    result: |
      the grid of dates moves to the next/previous year
  - then:  |
      the space bar and/or enter key
    result: |
      the button or selection is activated
  - then:  |
      the escape key
    result: |
      the date picker dialog disappears and focus returns to the date dialog button

gherkin-mobile:
  - when:  |
      swipe to focus on the date dialog button
  - then:  |
      double tap with the button in focus
    result: |
      the date picker dialog appears
  - then:  |
      swipe through the dialog
    result: |
      the date options and controls come into focus
  - then:  |
      double tap with the selection or button in focus
    result: |
      the intended action occurs

---
{: .divider }
[Date Picker Developer Code Examples and Guidance](/components/date-picker.html)