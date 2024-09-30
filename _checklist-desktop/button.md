---
layout: entry  
title: "Button"  
description: "How to test accessible buttons for desktop applications"  
categories: controls  
order: 1  

keyboard:  
  tab: |  
    Focus visibly moves to the button.  
  space bar: |  
    Activates the button.  
  enter: |  
    Activates the button.  

desktop:  
  click: |  
    Activates the button.  
  double click: |  
    Activates the button, if supported.  

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
      - criteria: Its purpose is clear in the context of the whole screen or dialog  
  - name: Robust  
    list:  
      - criteria: Conveys the correct semantic role  
      - criteria: Expresses its state (if applicable)  
      - criteria: Meets criteria across platforms, devices, and viewports  
---

## How to Identify Interactive Buttons
Buttons should be visually distinguishable as interactive elements. This means that users must be able to tell at a glance which elements are clickable or actionable. Ensure that:
- Buttons have a clear, distinct visual style (e.g., raised, with borders).
- Labels or icons used on buttons accurately represent their function (e.g., "Submit" or an icon of a floppy disk for saving).

Check for:
- **Visual scan**: Check if buttons are easily identifiable on the screen.
- **Icons/graphics**: Verify the clarity of icon-based buttons.

## How to ensure text alternatives are available for non-text buttons
For buttons with icons instead of text, there must be alternative text to describe the action for assistive technology. This ensures that users relying on screen readers can understand what the button does.

- Use screen readers to ensure that each button is announced properly.
- Focus on the button and verify that its function and state is described audibly by the screen reader.

## When Color Contrast Matters
Text and icons on buttons must meet appropriate color contrast requirements to be easily readable against their backgrounds. This ensures that people with low vision or color blindness can perceive the button's label or icon.

- Use color contrast analyzers to ensure the contrast ratio meets the minimum 4.5:1 for text and 3:1 for large elements.

## Making sure buttons are easily clickable
Users must be able to activate buttons via clicking with a mouse or tapping on touch devices.

- Use a mouse to click the button and observe if it responds as expected.
- For buttons that support double-click actions, ensure they behave correctly upon double-clicking.
- Ensure the button is sized appropriately for those with motor disabilities that may not be able to control the mouse (no smaller than 44PX)

## Managing Focus
When users navigate to a button using a keyboard, there must be a clear visual indication that the button is in focus. This allows users to know which element is currently selected.

1. Press **Tab** to move focus to the button.
2. Verify that a visible outline or other focus indication is clearly displayed.
3. Ensure the focus indication is sufficiently distinct from surrounding elements.

## Clear Purpose
Buttons should clearly indicate their function in the context of the application. Users should not have to guess what a button does.

- Read the button's label or icon.
- Ensure that the label or icon provides sufficient information about the button's action in the context of the screen or dialog.

## How to Convey the Button’s Semantic Role
A button should be properly identified as a button by assistive technologies. This means that the button's role should be conveyed clearly, ensuring compatibility with screen readers and other tools.

- Use a screen reader to navigate to the button and confirm that the button is announced as a button, not as a different element like a link or label.
- If a button has no role at all, this should be considered a WCAG failure. You can often tell if a button has no role by using a screen reader. IF the name is announced but it is not indicated as a button, the user may not know that they are able to interact with it.

## Ensuring that the state is conveyed
For buttons that can be toggled (e.g., a play/pause button), the current state of the button must be clearly conveyed. The user should know whether the button is in an active or inactive state.

- Press the button to toggle its state.
- Ensure that the screen reader or assistive technology announces the state change (e.g., "Pressed" or "Unpressed").
---
