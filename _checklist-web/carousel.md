---
layout: entry
title:  "Carousels and Slideshow"
description: "How to code and test an accessible carousel or slideshow"
categories: main
order: 2

keyboard:
  tab: |
    Focus moves to carousel controls (forward, backward, pause/play, stop)
  arrow-keys: |
    Advance or reverse the slides
  space bar: |
    Activates the button
  enter: |
    Activates the button

mobile:
  swipe: |
    Focus moves within the carousel
  double tap: |
    This will typically activates most elements

screenreader:
  name:  |
    Control name and purpose is clear
  role:  |
    Control identifies itself as a button
  group: |
    The number of slides and current position in the carousel is indicated

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to carousel controls (forward, backward, pause/play, stop)
    result: |
      focus is strongly visually indicated
  - then:  |
      the space bar or enter key
    result: |
      the intended action occurs
  - then:  |
      the arrow keys
    result: |
      the slides advance or reverse

gherkin-mobile:
  - when:  |
      swipe to move focus to carousel controls (forward, backward, pause/play, stop)
  - then:  |
      double tap
    result: |
      the intended action occurs

settings:
  reduced motion:  |
    Carousel does not auto-advance, motion transitions are disabled
---

## UX design notes

Think carefully before you use a carousel or slideshow wizard. Consider another way to present the information.

### Carousels are almost always a poor design choice

- As a general rule, [carousels should be avoided](https://shouldiuseacarousel.com/) for critical functionality unless there is a strong business case.
- People must be highly motivated to engage with a carousel beyond the first slide.
- The cognitive load is immediately increased over other patterns, as the user must determine how to use the carousel:
  - Is it easier to use previous/next buttons?
  - Is it possible to swipe left/right?
  - How many slides are present?

### Are there any good use cases for a carousel?

Carousels are worth testing against a normal scrolling format when people can generally predict what's in the carousel.

- A multi-step form
  - This can work because it helps people stay on task.
- A list of easily recognizable structures, like "US Presidents"
  - This can work because the scope and contents are predictable.
- Highlighted customer reviews
  - This can work to build trust because the contents are predictable and a motivated user seeking social proof may be willing to navigate the carousel.

### Avoid auto-advance carousels

- This is distracting for people with attention differences
- Live carousel updates cause screen readers to speak excessive announcements every time the carousel advances, making it hard to navigate

## Code examples

### Use semantic HTML

This is one example of an accessible carousel wizard.
- It is not the only way to build a carousel, but it meets all the criteria:
  - The group has a name
  - New slides titles are announced
  - Arrow keys advance the slides

{% highlight html %}
{% include /examples/carousel.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/carousel.html %}
{:/}
