---
layout: entry-desktop
title: "Text Box"
description: "How to test accessible text boxes for desktop applications"  
categories: controls

keyboard:
  tab: |
    Focus moves visibly to the input unless it's disabled
arrows: |
    Move focus between characters and lines in a text box

screenreader:
  name:  |
    Its purpose is clear
  role:  |
    It identifies itself as a text input
  group: |
    Hints or errors are read after the label, related inputs include an accessible group name (Ex: Enter your personal information)

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Type size is optically no smaller than 16px Helvetica
      - criteria: The text has a 4.5:1 minimum contrast ratio
      - criteria: Label is always visible (placeholder cannot be used as a label)
      - criteria: Color is not used as the only means of conveying information or state (error, success, focus, disabled etc)
  - name: Operable
    list:
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The disabled and focus states have a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: The input purpose should be clear in the context of the whole application or form
      - criteria: The width of the input accommodates/affords the intended input, reinforcing its purpose
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role 
      - criteria: Expresses its state (if applicable)
      - criteria: Meets criteria across platforms, devices and viewports
---

## Design notes

### Resources

- [TextBox in Windows Apps](https://learn.microsoft.com/en-us/windows/apps/design/controls/text-box)

## Developer notes

### Character limits

- For single-line inputs, consider setting a maximum length for characters that can be entered. If the backing data source doesn't allow a long input string, limit the input and use a validation popup to let users know when they reach the end.
- Alert screen readers with a textual announcement when the user has reached the character limit
- For multi-line text boxes, when capturing long spans of text with a maximum character or word count, use a plain text box and provide a live-running counter to show the user how many characters or words they have left before they reach the limit. You'll need to create the counter yourself; place it below the text box and dynamically update it as the user enters each character or word
- If there is a long-lived character counter, periodically announce the characters remaining to screen readers
- Do not announce the characters remaining every time the content of the text box changes. This can become cumbersome and will make it difficult for the screen reader user to operate the text box, since every keystroke will result in an announcement
- Instead, consider announcing characters remaining when the user is nearing the limit, every few characters typed

### Read-only text boxes

- You can make a text box read-only, but this should be a temporary, conditional state. If the text is never editable, consider using a text block instead

### Passwords

- A password box is a text input box that conceals the characters typed in it for the sake of privacy. A password box looks like a text input box, except that it renders bullets in place of the text that has been entered. The bullet character can be customized. Properties for password boxes are otherwise the same as text boxes
- Do not replace the characters used to conceal passwords unless it is absolutely necessary. Meet users where they are and do not confuse them

### Name

- The accessible name should convey the text boxes purpose. If it is required (while other text boxes in the same dialog are not), consider indicating this in the accessible name, as there is no required state for text boxes.
- Likewise, if there is a character limit, consider informing screen readers about this in the name of the control. The name is read first when focus is placed on the control, which will immediately provide context to screen reader users on how much input they can provide