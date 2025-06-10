---
layout: entry
title:  "Alert Notification"
description: "How to code accessible alerts or status for web pages"
categories: main form

keyboard:
  tab: |
    Focus does not automatically move to the alert, but can move to interactive elements within the alert (example: Dismiss button)
  arrow: |
    Browses to the alert like any other content

mobile:
  swipe: |
    Focus does not move to the alert when it appears, but it can be browsed by the screen reader

screenreader:  
  name:  |
    The alert is read when it appears (BUT focus DOES NOT transfer automatically when the alert appears)
  role:  |
    It identifies itself as an alert

gherkin-keyboard: 
  - when:  |
      use features that trigger the alert
    result: |
      the alert (BUT focus DOES NOT transfer automatically when the alert appears)

gherkin-mobile:
  - when:  |
      use features that trigger the alert
---
## Developer Notes
For developer information, refer to [Alert Notification Developer Code Examples and Guidance](/components/alert.html)
