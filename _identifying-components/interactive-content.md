---
layout: identifying-components
title: Interactive Content
permalink: /identifying-components/interactive-content/
---

## Accordions {#accordions}
An accordion is a vertically stacked list of interactive headings that hide or reveal additional content when selected. The headings function as controls that enable users to reveal or hide their associated content sections.
Example of a [webpage with accordions](https://www.dot.state.mn.us/designsystem/collapsiblesections.html).

{::nomarkdown}
<example>
{% include /examples/expander.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for a vertically stacked list of interactive headings that hide or reveal additional content.
- **HTML Attributes:** Inspect the HTML code for a class `accordion`.

## Animation {#animation}
Animation is an element that “moves” on a webpage, such as a landing page animation that activates when a user scrolls up or down the page. It could also be 3D animation, such as visually seeing movement or a loading animation.

**Identification:**
- **Visual Inspection:** Looks for elements that are moving on the webpage.
- **HTML Attributes:** Inspect the HTML; look for `<video>` or `<svg>`, or `<img>` are the most common elements. Also, look for `<div>` and `<span>` elements with classes or IDs that may indicate animation.

## Audio and Video {#audio}
Audio and video are embedded in different players, which deliver the media.

Example of an audio player [<source src="/assets/media/video/checklist-native/ios/button.mp4" type="video/mp4">]

**Identification:**
- **Visual Inspection:** Look for embedded video or audio players
- **HTML Attributes:** Inspect the HTML code for `<audio>` or `<video>` elements.

## Buttons {#buttons}
A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation. 

{::nomarkdown}
<example>
{% include /examples/button.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for clickable elements that are usually designed and often styled as colored squares or rectangular shapes with rounded corners and call-to-action text inserted.
- **HTML Attributes:** Inspect the HTML code for the `<button>` element or `<input>` elements with `type="button"`, `type="submit"`, or `type="reset"`.

## Carousels or Slideshows {#carousels}
Carousels, also known as sliders, slideshows, or galleries, are interactive elements that display multiple images, text, graphics, or videos in a single, sliding block.

{::nomarkdown}
<example>
{% include /examples/carousel.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for an inactive element where images are cycling/rotating through a group of images.
- **HTML Attributes:** Inspect the HTML code for the `<div>` tag of carousel or slideshow.

## Date Picker Dialog {#datepicker}
A date picker helps users select a date from a display calendar or date selector.

![screenshot of a date picker](https://mnit-dot-a11y.github.io/assets/images/examples/date-picker.jpg)

**Identification:**
- **Visual Inspection:** Look for input fields that, when clicked, display a calendar or date selection interface.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with type=" date". Sometimes custom date pickers may use libraries, so look for attributes like data-datepicker.

## Tabs {#tabs}
Tabs are layered content sections, known as tab panels, that hide or reveal additional content when selected. The tab panel headings function as controls that enable users to reveal or hide their associated content panel.

Example of a [webpage with tabs](https://www.dot.state.mn.us/careers/how-to-apply.html).

**Identification:**
- **Visual Inspection:** Look for panels consisting of tabs or tab panels.
- **HTML Attributes:** Inspect the HTML code role of `tablist`.

## Toggle Switches (on/off button) {#toggles}
A switch is an input widget that allows users to choose one of two values: on or off.

{::nomarkdown}
<example>
{% include /examples/input-switch.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for button or slider elements that allow you to turn something on or off.
- **HTML Attributes:** Inspect the HTML code for the role `switch`.