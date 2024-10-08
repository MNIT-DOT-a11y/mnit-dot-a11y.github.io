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

## Code examples

### Use semantic HTML

This semantic HTML contains all accessibility features by default.

{% highlight html %}
{% include /examples/header.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/header.html %}
{:/}


### When you can't use semantic HTML

This custom header requires extra attributes.

{% highlight html %}
<div role="banner" tabindex="-1" id="example-header">
  <a href="/">Website name</a>
</div>
{% endhighlight %}

## Developer notes

### Name
- Typically doesn't have a name or description since there must be only one instance per page

### Role

- Identifies itself as a header or banner landmark
- If a non-semantic element must be used (like a `<div>`) use `role="banner"` to make the element discoverable.

### Group

- Contains site title and typically the primary navigation.

### Focus

- Can be targeted with a skip link, but the skip link will typically will be labelled "skip to navigation"
- Use `tabindex="-1"` to make the header targetable with a skip link.
- The `<header>` itself isn't focusable with the tab key


