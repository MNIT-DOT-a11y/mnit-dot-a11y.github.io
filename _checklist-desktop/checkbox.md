---
layout: entry
title: "Checkbox"
description: "How to code and test accessible checkboxes for desktop applications"
categories: controls
order: 2

keyboard:
  tab: |
    Focus visibly moves to the checkbox and screen reader announces the checkbox's accessible name and state.
  space bar: |
    Toggles the checkbox state between checked and unchecked. Screen readers should announce the new state, and the checkbox should be filled in with a checkmark or cleared.
  enter: |
    Typically should not toggle the checkbox (use space bar instead).

desktop:
  click: |
    Toggles the checkbox state between checked and unchecked.

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive.
      - criteria: Color is not used as the only means of conveying information (checked, unchecked, indeterminate).
  - name: Operable
    list:
      - criteria: Is keyboard operable.
      - criteria: The click/tap target area is no smaller than 44x44px.
      - criteria: The disabled and focus states have a 3:1 minimum contrast ratio against default.
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements.
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height.
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole application.
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role.
      - criteria: Expresses its state (checked, unchecked, or indeterminate).
      - criteria: Meets criteria across platforms, devices, and viewports.

---

## Testing Accessibility for Checkbox Components

When testing the accessibility of a checkbox component in a native desktop application, ensure it meets the following criteria:

### Keyboard Accessibility

- **Tab**: Ensure that the focus visibly moves to the checkbox when navigating with the Tab key.
- **Space Bar**: Verify that pressing the space bar toggles the checkbox state between checked and unchecked.
- **Enter**: Confirm that the Enter key does not toggle the checkbox state, as this is typically handled by the space bar.

### Desktop Interaction

- **Click**: Ensure that clicking the checkbox with a mouse toggles its state between checked and unchecked.

### WCAG Compliance

#### Perceivable

- **Interactive Identification**: The checkbox should be easily identifiable as an interactive element.
- **Color Usage**: Ensure that color is not the sole means of conveying the checkbox's state (e.g., checked, unchecked, indeterminate).

#### Operable

- **Keyboard Operability**: Verify that the checkbox can be operated using the keyboard.
- **Target Area Size**: The clickable area of the checkbox should be at least 44x44px.
- **Contrast Ratio**: The contrast ratio for disabled and focus states should be at least 3:1 against the default background.
- **Focus Indication**: The focus indicator should have a contrast ratio of at least 3:1 against adjacent elements and cover a minimum area equal to the checkbox's width and 2px in height.

#### Understandable

- **Purpose Clarity**: The checkbox's purpose should be clear within the context of the application.

#### Robust

- **Semantic Role**: The checkbox should convey the correct semantic role.
- **State Expression**: It should accurately express its state (checked, unchecked, or indeterminate).
- **Cross-Platform Consistency**: Ensure the checkbox functions correctly across different platforms, devices, and viewports.

## Developer Notes

### Name

- The label associated with the checkbox should clearly describe its purpose.
- Use `aria-label` if necessary to provide additional context for screen readers.

### Role

- Ensure the checkbox is identified with the correct semantic role within the application framework.

### State

- Use appropriate properties or methods to convey the checkbox's state to assistive technologies.

### Group

- If the checkbox is part of a group, ensure it is associated with the correct group role or label.

By following these guidelines, you can ensure that the checkbox component in your native desktop application is accessible to all users.

Find More