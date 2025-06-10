---
layout: entry
title:  "Button"
description: "How to code and test accessible buttons for the Web"
categories: nav form
order: 1

keyboard:
  tab: |
    Focus visibly moves to the button.
  space bar: |
    Activates the button.
  enter: |
    Activates the button.

screenreader:
  name:  |
    Its purpose is clear
  role:  |
    It identifies its role of button
  group: |
    It indicates if it has popup for listbox or menus
  state: |
    It expresses its state if applicable (pressed, expanded, disabled/dimmed/unavailable)

mobile:
  swipe: |
    Focus moves to the element, expresses its state
  double tap: |
    Activates the button

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a button
    result: |
      focus is strongly visually indicated
  - then:  |
      the spacebar and/or enter key to activate the button
    result: |
      the intended action occurs

gherkin-mobile:
  - when:  |
      swipe to focus on a button
  - then:  |
      doubletap with the button in focus
    result: |
      the intended action occurs

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Color is not used as the only means of conveying information (error, success, pressed, expanded, etc)
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The disabled and focus states have a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole page
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role 
      - criteria: Expresses its state (if applicable)
      - criteria: Meets criteria across platforms, devices and viewports
---

## Buttons vs links

### If it goes somewhere, it's `<a>` link.

- When the user clicks a link, they are taken to a different location in the site.
  - Either another page or even another area of the same page
- A link can look like a big shiny button but it must be coded as `<a>` link

### If it does something, it's a `<button>`

- Buttons cause an action to occur on the same page
  - Submit a form (even when submission takes you to a new page)
  - Open a menu
  - Launch a modal
  - Expand details
- A button can look like a link, but it must be coded as a `<button>`

---
{: .divider }
[Button Developer Code Examples and Guidance](/components/button.html)