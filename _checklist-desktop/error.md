---
layout: entry-desktop  
title: "Error Messages"  
description: "How to test accessible error dialogs for desktop applications"  
categories: dialogs

keyboard:  
  tab/shift+tab: |  
    Focus visibly moves to the next or previous button or control in the error dialog.  
  space bar: |  
    Activates buttons within the dialog.  
  enter: |  
    Activates buttons within the dialog.  
  escape: |  
    Closes the error dialog.  

screenreader: 
  title: |  
    Error titles are announced when they initially appear  
  text: |  
    Error text is read aloud and is understandable  

wcag:  
  - name: Perceivable  
    list:  
      - criteria: Error dialogs are visually distinguishable from other content  
      - criteria: Color is not the only means of conveying the presence or severity of an error  
      - criteria: Text is legible and meets minimum contrast requirements (4.5:1 for body text)  
  - name: Operable  
    list:  
      - criteria: Error dialogs can be dismissed and navigated using only the keyboard  
      - criteria: The "OK" or "Close" buttons are at least 44x44px for easy click/tap access  
      - criteria: Buttons and interactive elements in the dialog have a 3:1 minimum contrast ratio when focused or hovered  
      - criteria: A visible focus indicator is provided on all interactive elements with a contrast ratio of at least 3:1  
      - criteria: The focus indicator covers a minimum area equal to the button's width and is at least 2px in height  
  - name: Understandable  
    list:  
      - criteria: The error message clearly conveys the problem and any necessary actions  
      - criteria: The error dialog's purpose is immediately clear when it appears  
      - criteria: Error messages use plain language and avoid technical jargon when possible  
  - name: Robust  
    list:  
      - criteria: Error dialogs use appropriate system alerts (e.g., modal, high-priority) to convey severity  
      - criteria: The state of the error (critical, warning, etc.) is conveyed both visually and programmatically  
      - criteria: Error dialogs function consistently across various screen resolutions, input methods, and assistive technologies  
---

## Best practices for focus management

- When an error dialog appears, focus should automatically move to the dialog, typically on the dialog's first actionable element (e.g., the “OK” or “Close” button).
- When the error has been closed, focus should return to the previously focused item.

## Visual and Sound Cues

- The most common color for error-related elements is red, signaling urgency or problems. While it is best practice to use this color, for accessibility, red should be combined with other visual cues like icons and bold text, not relying solely on color to convey the error.
- In addition to the visual cue, Windows also uses a system error sound when an error dialog appears, signaling an issue even for users who may not immediately see the dialog. This is especially valuable for screen reader users.

## Developer notes

### UI Automation

  - Use the Microsoft UI Automation (UIA) framework to expose your error dialog and its contents to assistive technologies. Ensure that the dialog and its content are properly exposed through UIA as Dialog and Text, respectively.
  - In Win32, you can use the IAccPropServices interface to customize properties of UI elements.
  - In WPF, ensure that the dialog's contents and controls are recognized by UIA (this happens automatically with most controls if properly labeled).

## Design notes

## Resources

- [Messages in Win32 Apps](https://learn.microsoft.com/en-us/windows/win32/uxguide/messages)
- [Win32 Error Message Guidelines](https://learn.microsoft.com/en-us/windows/win32/debug/error-message-guidelines)