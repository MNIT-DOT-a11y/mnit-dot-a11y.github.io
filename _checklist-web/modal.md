---
layout: entry
title:  "Modal Dialog"
description: "How to code and test an accessible modal dialog popup for Web"
categories: main

keyboard:
  launch button: |
    Focus visibly moves to the open dialog itself
  arrow keys: |
    Content within the dialog is browsed in logical order
  tab: |
    Focus visibly moves to interactive controls in the dialog, starting with the first interactive control (typically close button)
  escape: |
    The dialog closes and returns focus to the button that launched it
  space: |
    Any buttons are activated
  enter: |
    Any buttons or links are activated
  
mobile:
  swipe: |
    Focus moves within the dialog and doesn't enter the rest of the page.
  double tap: |
    This typically activates most elements.

screenreader:
  name:  |
    The dialog describes its purpose or title on launch
  role:  |
    It identifies itself as a modal or dialog
  group: |
    When closed, focus returns to the launch button
  state: |
    When open, content behind the modal remains inert

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to the launch button and use space bar and/or enter key to activate the button
    result: |
      the dialog opens and is in focus
  - then:  |
      the arrow keys
    result: |
      content in the dialog is browsed in logical order and does not leave the dialog
  - then:  |
      the tab key
    result: |
      focus moves to interactive controls in the modal dialog
  - then:  |
      the escape key
    result: |
      focus returns to the launch button
  - or:  |
      the tab key to move focus to the dismiss/close button <strong>AND THEN</strong> use the space bar or enter key to activate the dismiss/close button
    result: |
      focus returns to the launch button

gherkin-mobile:
  - when:  |
      swipe to focus to the launch button
  - then:  |
      double tap with the button in focus
    result: |
      the dialog opens
  - then:  |
      swipe within the modal dialog
    result: |
      focus stays trapped in the modal dialog
  - then:  |
      swipe to move focus to the dismiss/close button <strong>AND THEN</strong> double tap on the close button
    result: |
      focus returns to the launch button

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as a modal dialog on top of a page (and not a new page)
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The close button click/tap target area is no smaller than 44x44px
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: Its purpose and title is clear in the context of the whole page
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role 
      - criteria: Meets criteria across platforms, devices and viewports

---

## Required attributes

### Launch button
- Should be a button, not a link
- Upon closing, focus must return to the button that launched the dialog
- **Do not**  use`aria-haspopup`. This attribute has very low and support and unpredictable output across screen readers. 

### Name
- The modal window has a logical descriptive name from either:
  - `aria-label="Modal title"` or
  - `aria-labelledby="heading-id"` pointing to an `<h2>` as a title    

### Role
- Use `role="dialog"` so the screen reader can identify this as a dialog or modal

### Group
- Upon closing, focus must return to the button that launched the dialog

### State
- Use `aria-modal="true"` to indicate content beneath the modal is inert and that the screen reader must not browse outside the dialog.

### Focus
- Use `tabindex="-1"` to make the modal itself targetable for focus
- Upon closing, focus must return to the button that launched the dialog

### Documentation
- [Browser Support](https://caniuse.com/?search=dialog)

## Screenreader differences

- NVDA
  - By default, NVDA may read the entire modal upon launch. This is expected behavior.


## Code examples

### Use semantic HTML where possible

Browser support for `<dialog>` is still incomplete. 

Some browsers require additional scripting. This simple example works in Chrome, but [may not work correctly in all browsers](https://caniuse.com/?search=dialog) such as Safari and Firefox.

{% highlight html %}
{% include /examples/modal-dialog.html %}
{% endhighlight %}

{::nomarkdown}
<example>
{% include /examples/modal-dialog.html %}
</example>
{:/}