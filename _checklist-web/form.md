---
layout: entry
title:  "Form"
description: "How to code and test an accessible text input for Web"
categories: form html
order: 1

keyboard:
  tab: |
    Focus moves visibly to the inputs inside the form
      
mobile:
  swipe: |
    Focus moves to the inputs inside the form
  keyboard: |
    Keyboard appears

screenreader:
  name:  |
    If multiple forms are present (Ex: Search, Sign in, Newsletter subscription), the form must have a name
  role:  |
    It is discoverable with screen reader shortcuts as a form landmark along with its name
  mode:  |
    the screen reader switch from browse shortcuts to forms shortcuts

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to inputs inside the form
    result: |
      focus is strongly visually indicated

gherkin-mobile:
  - when:  |
      swipe to focus on inputs inside the form

wcag:
  - name: Perceivable
    list:
      - criteria: Is discoverable as a form landmark
      - criteria: Color is not used as the only means of conveying information (error, success)
  - name: Operable
    list:
      - criteria: Headings and labels are used to describe context and purpose
  - name: Understandable
    list:
      - criteria: Labels or instructions are provided when content requires user input.
  - name: Robust
    list:
      - criteria: All components provide name, role and state
      - criteria: Notification of changes are available to screen reader
      - criteria: Meets criteria across platforms, devices and viewports
---
{: .divider }
[Form Developer Code Examples and Guidance](/components/form.html)