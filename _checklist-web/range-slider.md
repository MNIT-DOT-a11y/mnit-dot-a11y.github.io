---
layout: entry
title:  "Range Slider"
description: "How to code and test an accessible range slider input for Web"
categories: form

keyboard:
  tab: |
    Focus moves visibly to the input
  arrow-keys: |
    Increase / decrease value one step

mobile:
  swipe: |
    Focus moves to the input
  swipe up/down: |
    Increase/decrease slider value one step on iOS
  volume: |
    Increase/decrease slider value one step on Android

screenreader:
  name:  |
    Its purpose is clear
  role:  |
    It identifies itself as a range
  group: |
    Its label is read with the input
  state: |
    Its current value

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a range slider
    result: |
      focus is strongly visually indicated
  - then:  |
      the up/down/left/right arrow keys
    result: |
      the value is changed one step

gherkin-mobile:
  - when:  |
      swipe to move focus to a range slider
  - then:  |
      swipe up/down in iOS or use the volume buttons in Android
    result: |
      the value is changed one step

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Color is not used as the only means of conveying information
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The disabled and focus states have a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole page
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role 
      - criteria: Expresses its state
      - criteria: Meets criteria across platforms, devices and viewports
---
## Developer Notes
For developer information, refer to [Range Slider Developer Code Examples and Guidance](/components/range-slider.html)
