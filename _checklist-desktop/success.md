---
layout: entry-desktop  
title: "Success Messages"  
description: "How to test accessible success messages for desktop applications"  
categories: dialogs

keyboard:  
  tab/shift+tab: |  
    Focus visibly moves to the next or previous button or control in the dialog.  
  space bar: |  
    Activates buttons within the dialog.  
  enter: |  
    Activates buttons within the dialog.  
  escape: |  
    Closes the success dialog.  

screenreader: 
  title: |  
    Message titles are announced when they initially appear.  
  text: |  
    Text is read aloud and is clear and concise.  

wcag:  
  - name: Perceivable  
    list:  
      - criteria: Success messages are visually distinguishable from other content.  
      - criteria: Color is not the sole means of conveying the presence or significance of success.  
      - criteria: Text is legible and meets minimum contrast requirements (4.5:1 for body text).  
  - name: Operable  
    list:  
      - criteria: Success notifications can be dismissed and navigated using only the keyboard.  
      - criteria: The "OK" or "Close" buttons are at least 44x44px for easy click/tap access.  
      - criteria: Buttons and interactive elements in the notification have a 3:1 minimum contrast ratio when focused or hovered.  
      - criteria: A visible focus indicator is provided on all interactive elements with a contrast ratio of at least 3:1.  
      - criteria: The focus indicator covers a minimum area equal to the button's width and is at least 2px in height.  
  - name: Understandable  
    list:  
      - criteria: The success message clearly conveys the positive outcome and any follow-up actions.  
      - criteria: The purpose of the success notification is immediately clear when it appears.  
      - criteria: Success messages use plain language and avoid unnecessary jargon.  
  - name: Robust  
    list:  
      - criteria: Success notifications utilize appropriate system alerts (e.g., modal, informational) to convey significance.  
      - criteria: The state of the success (confirmation, completion, etc.) is conveyed both visually and programmatically.  
      - criteria: Success notifications function consistently across various screen resolutions, input methods, and assistive technologies.  
---

## Best practices for focus management

- When a success notification appears, focus should automatically move to the notification, typically on the notification's first actionable element (e.g., the “OK” or “Close” button).
- When the notification has been closed, focus should return to the previously focused item.

## Visual and Sound Cues

- The most common color for success-related elements is green, signaling positive outcomes. While it is best practice to use this color, for accessibility, green should be combined with other visual cues like icons and bold text, not relying solely on color to convey success.
- In addition to the visual cue, Windows may use a system success sound when a notification appears, signaling a positive outcome even for users who may not immediately see the notification. This is especially valuable for screen reader users.

## Developer notes

### UI Automation

- Use the Microsoft UI Automation (UIA) framework to expose your success notification and its contents to assistive technologies. Ensure that the notification and its content are properly exposed through UIA as Dialog and Text, respectively.
- In Win32, you can use the IAccPropServices interface to customize properties of UI elements.
- In WPF, ensure that the notification's contents and controls are recognized by UIA (this happens automatically with most controls if properly labeled).