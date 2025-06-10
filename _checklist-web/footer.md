---
layout: entry
title:  "Footer Landmark"
description: "How to test an accessible footer for the Web"
categories: html footer
order: 9

keyboard:
  skip-links: |
    Focus moves directly to the footer
  tab: |
    Links and buttons within the footer are focusable

mobile:
  swipe: |
    Focus moves within footer.
  double tap: |
    This typically activates most elements.

screenreader:
  role:  |
    It is discoverable with screen reader shortcuts as a footer or contentinfo landmark
  group: |
    It typically contains copyright information, navigation links, and privacy statements.

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a interactive element in the footer
    result: |
      focus is strongly visually indicated

gherkin-mobile:
  - when:  |
      swipe to focusable elements in the footer
---
{: .divider }
[Footer Developer Code Examples and Guidance](/components/footer.html)

