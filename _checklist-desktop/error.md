---
layout: entry-desktop  
title: "Error"  
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
