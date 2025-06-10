---
layout: entry
title:  "Header Landmark"
categories: header html
description: "How to code and test an accessible header for websites"
order: 2

keyboard:
  skip-links: |
    Focus moves directly to the header or navigation
  tab: |
    Nothing, headings are not focusable unless they are actionable
  arrow-keys: |
    Headings are browsed

mobile:
  swipe: |
    Focus moves directly to the header or navigation
  double tap: |
    This typically activates most elements

screenreader:
  role:  |
    It is discoverable with screen reader shortcuts as header/banner landmark
  group: |
    It typically contains the name and primary navigation of the website

gherkin-keyboard: 
  - when:  |
      the tab key to enter the web browser window
    result: |
      focus is strongly visually indicated on interactive components

gherkin-mobile:
  - when:  |
      swipe to focusable elements in the header
---

## General notes

- There must only be a one singular header/banner element on the page. 
- Contains site title and typically the primary navigation.
---
## Developer Notes
For developer information, refer to[How to test a header landmark information](/checklist-web/header/).