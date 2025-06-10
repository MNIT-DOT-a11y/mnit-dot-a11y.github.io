---
layout: entry
title:  "Tooltip"
description: "How to code and test an accessible tooltip for Web"

categories: main

keyboard:
  Any-key: |
    Nothing, because we don't use tooltips

mobile:
  Any-gesture: |
    Nothing, because we don't use tooltips
    
screenreader:
  name:  |
    Nothing, because we don't use tooltips

gherkin-keyboard: 
  - when:  |
      the arrow keys or tab key
    result: |
      nothing, because we don't use tooltips

gherkin-mobile:
  - when:  |
      swipe

wcag:
  - name: Perceivable
    list:
      - criteria: Nothing to perceive because we don't use tooltips 
  - name: Operable
    list:
      - criteria: No need to operate because we don't use tooltips 
  - name: Understandable
    list:
      - criteria: The rest of the UI is understandable so we don't need tooltips to explain it
  - name: Robust
    list:
      - criteria: The design is super robust because it doesn't rely on tooltips
---
## Developer Notes
For developer information, refer to [Tooltip Developer Code Examples and Guidance](/components/tooltip.html)