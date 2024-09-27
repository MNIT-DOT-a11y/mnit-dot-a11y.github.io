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

