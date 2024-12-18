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


## Notes

Alerts are dynamic content that is injected into the page when it changes and a person using a screen reader needs to know that some state of the application has changed.

- Use alerts sparingly. 
- If an alert is present on page load, it won't be read automatically
  - If an element is present on page load, it is not technically an alert
- The alert will be read by the screen reader when it becomes visible / appears in the DOM


## Code examples

### Basic notification

{% highlight html %}
{% include /examples/alert-notification.html %}
{% endhighlight %}

{::nomarkdown}
<example>
{% include /examples/alert-notification.html %}
</example>
{:/}

### Error alert from an input field

{% highlight html %}
{% include /examples/input-text-error.html %}
{% endhighlight %}

{::nomarkdown}
<example>
{% include /examples/input-text-error.html %}
</example>
{:/}

## Developer notes

### Browser + screen reader quirks

- Screen readers do not implement alerts uniformly and must be tested. (See [support for the alert role](https://a11ysupport.io/tech/aria/alert_role))
  - Just because an alert pattern works with one screen reader doesn't mean it will work with all of them
- The element referenced by the `aria-describedby` attribute cannot use the `role="alert"` attribute (see example above for workaround). 
  - [VoiceOver fails to read a referenced `role="alert"` element when the input is in focus](https://a11ysupport.io/tests/tech__aria__aria-describedby-with-role-alert).
- NVDA will read the alert twice if it appears while the input is in focus: once from the `role="alert"` being injected and from the `aria-describedby` association.
- NVDA needs a fraction of a second to catch up with changes in the DOM, use a `setTimeout` to delay displaying the alert

### Name
- Inner text describes alert when it appears on screen

### Role
- Use `role="alert"` for elements injected into the page

### Focus
- Focus does not move to the element when the alert appears

## Further reading
[WCAG 4.1.3 Status Messages (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)