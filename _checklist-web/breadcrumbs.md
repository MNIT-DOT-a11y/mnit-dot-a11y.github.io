---
layout: entry
title:  "Breadcrumbs"
description: "How to code and test accessible breadcrumbs for the Web"
categories: nav main
order: 1

keyboard:
  tab: |
    Focus visibly moves to the link
  enter: |
    Activates the link

mobile:
  swipe: |
    Focus moves to the link
  double tap: |
    Activates the link

screenreader:
  name:  |
    The link names correspond to their destination page titles
  role:  |
    Links identify as a links in a breadcrumb navigation landmark
  state:  |
    The current page link is indicated when focused
  group:  |
    Is discoverable with screen reader shortcuts as a navigation landmark

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a link
    result: |
      focus is strongly visually indicated
  - then:  |
      the enter key to activate the link
    result: |
      my browser goes somewhere

gherkin-mobile:
  - when:  |
      swipe to focus on a link
  - then:  |
      double tap with the link in focus
    result: |
      my browser goes somewhere

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Color or weight are not used as the only means of conveying it is a link
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The focus state has a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole page
  - name: Robust
    list:
      - criteria: Meets criteria across platforms, devices and viewports
      - criteria: Conveys the correct semantic role
---

[Breadcrumbs Developer Code Examples and Guidance](/components/breadcrumb.html)