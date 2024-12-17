---
layout: entry
title: "CAPTCHA"
description: "How to code and test an accessible CAPTCHA"
categories: main

keyboard:
  tab: |
    Focus visibly moves to the CAPTCHA field.
  space bar: |
    Activates interactive CAPTCHA elements, such as selecting a checkbox or submitting an answer.
  enter: |
    Activates the CAPTCHA verification process, such as submitting the CAPTCHA after completion.

screenreader:
  name:  |
    Describes the CAPTCHA purpose and how to complete it, such as "Check the box to indicate you are not a robot" or "Select all images with traffic lights."
  role:  |
    Identifies the CAPTCHA as an interactive verification mechanism (e.g., form element).
  instructions: |
    It provides clear instructions on how to interact with the CAPTCHA, such as "Click on all images that contain traffic lights."
  state: |
    Indicates the current state, such as whether the CAPTCHA has been successfully verified or needs further input.

mobile:
  swipe: |
    Focus moves to the CAPTCHA element and provides feedback on its state.
  double tap: |
    Activates interactive CAPTCHA elements, such as selecting checkboxes or images.
  pinch/zoom: |
    Ensures that CAPTCHA images and text are readable and can be zoomed in without breaking the layout or functionality.

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to the CAPTCHA field
    result: |
      focus is moved to the CAPTCHA controls and is strongly indicated
  - then:  |
      accessibility features to solve the CAPTCHA
    result: |
      the CAPTCHA is solved and I can complete the task

gherkin-mobile:
  - when:  |
      swipe to focus on a CAPTCHA field or control
  - then:  |
      double tap with the relevant controls to begin filling out the CAPTCHA
    result: |
      the CAPTCHA is solved and I may proceed with the task

wcag:
  - name: Perceivable
    list:
      - criteria: CAPTCHA elements are clearly identifiable.
      - criteria: Text instructions and image selections are easily readable.
      - criteria: Alternatives are provided for non-text content (e.g., CAPTCHA images, audio).
      - criteria: CAPTCHA is designed to be accessible for users with visual impairments (e.g., using audio CAPTCHA as an alternative).
  - name: Operable
    list:
      - criteria: CAPTCHA can be completed using keyboard-only navigation.
      - criteria: Touch targets for mobile interactions are no smaller than 44x44px.
      - criteria: CAPTCHA instructions and components maintain a 3:1 minimum contrast ratio against the background.
      - criteria: The focus indication for CAPTCHA elements is clearly visible and meets contrast guidelines.
  - name: Understandable
    list:
      - criteria: CAPTCHA purpose is clear in the context of the page (e.g., verifying the user is not a bot).
      - criteria: CAPTCHA instructions are clear and concise.
      - criteria: Any errors in CAPTCHA input (e.g., incorrect image selection) are clearly communicated to the user.
  - name: Robust
    list:
      - criteria: CAPTCHA conveys the correct semantic role for all elements (e.g., form fields, buttons).
      - criteria: CAPTCHA is accessible across multiple platforms, devices, and viewports.
      - criteria: CAPTCHA supports different input methods (e.g., touch, keyboard, voice commands).
      - criteria: Failing to solve a CAPTCHA provides multiple chances to try again and does not erase existing data entered in corresponding forms when failures occur.
      
---

## CAPTCHA Testing Best Practices

### Clarity of Instructions

- Ensure CAPTCHA instructions are clear and easy to understand. Avoid ambiguous terms.
- If images are used, ensure they are easy to distinguish. Offer an alternative (e.g., audio CAPTCHA) for users struggling with visual recognition

### Readability

- Ensure all CAPTCHA elements, including text and images, are easily readable. Avoid overly complex or distorted characters/images.

### Keyboard Navigation

- Verify that all CAPTCHA elements are fully navigable using the keyboard without requiring a mouse.

### Screen Reader Compatibility

- Ensure that screen readers can accurately describe the CAPTCHA elements and that users relying on assistive technologies can operate the CAPTCHA. This may include offering an audio alternative (see below).

### Alternative Methods

- Provide accessible alternatives to visual CAPTCHAs, such as audio or text-based challenges
- **Do not** require the user to perform complex processes to bypass the CAPTCHA.  Some CAPTCHA software, such as [hCaptcha](https://hcaptcha.com/) require disabled users to install a browser cookie on their machine, which can confuse users and violate their privacy.

### Error Handling

- Communicates any errors or incorrect CAPTCHA entries and provides guidance on how to correct the mistake.
- Allow users to retry the CAPTCHA if they fail without requiring them to reload the entire form or page.