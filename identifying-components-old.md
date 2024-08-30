---
layout: how-to-test
title: Identifying Components
permalink: /identifying-components-old/
---

Before conducting accessibility testing, it's essential to identify a webpage's or web application's various components. Components are reusable user interface parts, such as a navigation menu, a button, or a table. 

The process of identifying components can be performed by two different methods. One by visual inspection or by viewing the HTML attributes within the score code. Both methods are provided with each component. Follow which even method you prefer.

Use the components listed on this page to help you complete the 
 [Accessibility Testing Scope Template](https://mn365.sharepoint.com/:w:/r/sites/MNIT_MNIT_DOTAccessibility/Shared%20Documents/General/Templates/A11y%20Scope%20Template.docx?d=wbbb013b97281401f881be4865030dcbd&csf=1&web=1&e=N6YiFg).

---

## Information and Status 

### Alerts and Notifications <a id="alert"></a>
An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. There are two different types of alerts:
 - **System status messages.** An alert may be a notification that informs people of the system's status and may or may not require the user to respond. Such notifications may be errors, warnings, and general updates.
 - **Validation messages.** An alert may be a validation message informing a user that they just took an action that needs correcting or confirming that a task was completed successfully. 

 {::nomarkdown}
<example>
{% include /examples/alert-notification.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for messages or alerts on the page, often styled distinctively to draw attention (e.g., success, error, warning messages)
- **HTML Attributes:** Inspect the HTML code for elements with roles like `alert` or classes associated with notifications (e.g., `alert`, `notification`).

### Dialog (Modals) <a id="dialog"></a>
A dialog modal prevents interaction with page content until the user completes an action or dismisses the modal. This intentionally interrupts the user’s workflow.

{::nomarkdown}
<example>
{% include /examples/modal-dialog.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for pop-up windows or overlays that appear on top of the current page content, often requiring interaction before returning to the main page.
- **HTML Attributes:** Inspect the HTML code for elements with roles like `dialog` or classes commonly associated with modal libraries (e.g., `modal`, `dialog`).

### Progress Bar <a id="progress"></a>
A progress bar can show users how far along they are in a process.

{::nomarkdown}
<example>
{% include /examples/progress-bar.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for a visual indicator showing the progression of a task.
- **HTML Attributes:** Inspect the HTML code for the `progress` element.

### Text Inputs
A text input box allows users to enter any combination of letters, numbers, or symbols. It can span a single line or multiple lines.

{::nomarkdown}
<example>
{% include /examples/textarea.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for fields where users can enter text, such as a search box.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="text"`, `type="email"`, `type="password"`, etc.

### Tooltips
A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.

This is a [Tooltip](## "revealed text") example.

**Identification:**
- **Visual Inspection:** Look for links that display additional information when you hover over an element.
- **HTML Attributes:** Inspect the HTML code for an element with a `<div>` tag of tooltip. 

## Interactive Content

### Accordions
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

### Animation
Animation is an element that “moves” on a webpage, such as a landing page animation that activates when a user scrolls up or down the page. It could also be 3D animation, such as visually seeing movement or a loading animation.

**Identification:**
- **Visual Inspection:** Looks for elements that are moving on the webpage.
- **HTML Attributes:** Inspect the HTML; look for `<video>` or `<svg>`, or `<img>` are the most common elements. Also, look for `<div>` and `<span>` elements with classes or IDs that may indicate animation.

## Audio and Video
Audio and video are embedded in different players, which deliver the media.

Example of an audio player [<source src="/assets/media/video/checklist-native/ios/button.mp4" type="video/mp4">]

**Identification:**
- **Visual Inspection:** Look for embedded video or audio players
- **HTML Attributes:** Inspect the HTML code for `<audio>` or `<video>` elements.

### Buttons
A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation. 

{::nomarkdown}
<example>
{% include /examples/button.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for clickable elements that are usually designed and often styled as colored squares or rectangular shapes with rounded corners and call-to-action text inserted.
- **HTML Attributes:** Inspect the HTML code for the `<button>` element or `<input>` elements with `type="button"`, `type="submit"`, or `type="reset"`.

### Carousels or Slideshows
Carousels, also known as sliders, slideshows, or galleries, are interactive elements that display multiple images, text, graphics, or videos in a single, sliding block.

{::nomarkdown}
<example>
{% include /examples/carousel.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for an inactive element where images are cycling/rotating through a group of images.
- **HTML Attributes:** Inspect the HTML code for the `<div>` tag of carousel or slideshow.

### Date Picker Dialog
A date picker helps users select a date from a display calendar or date selector.

![screenshot of a date picker](https://mnit-dot-a11y.github.io/assets/images/examples/date-picker.jpg)

**Identification:**
- **Visual Inspection:** Look for input fields that, when clicked, display a calendar or date selection interface.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with type=" date". Sometimes custom date pickers may use libraries, so look for attributes like data-datepicker.

### Tabs
Tabs are layered content sections, known as tab panels, that hide or reveal additional content when selected. The tab panel headings function as controls that enable users to reveal or hide their associated content panel.

Example of a [webpage with tabs](https://www.dot.state.mn.us/careers/how-to-apply.html).

**Identification:**
- **Visual Inspection:** Look for panels consisting of tabs or tab panels.
- **HTML Attributes:** Inspect the HTML code role of `tablist`.

### Toggle Switches (on/off button)
A switch is an input widget that allows users to choose one of two values: on or off.

{::nomarkdown}
<example>
{% include /examples/input-switch.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for button or slider elements that allow you to turn something on or off.
- **HTML Attributes:** Inspect the HTML code for the role `switch`.

## Page Structure

## Forms
A form allows users to enter information into a page.

{::nomarkdown}
<example>
{% include /examples/form-contact.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for collections of input fields, dropdowns, checkboxes, and buttons designed to submit data. 
- **HTML Attributes:** Inspect the HTML code for the `<form>` element. Within the form, look for various `<input>`, `<select>` `<label>`, `<fieldset>` and `<textarea>` elements.

### Headings
Headings are large, bold text that breaks up content into meaningful sections, making a page easier to read and navigate.

# Heading 1
## Heading 2
### Heading 3

**Identification:**
- **Visual Inspection:** Look for large, bold text at the top of sections or pages.
- **HTML Attributes:** Inspect the HTML code for header tags such as `<h1>`, `<h2>`, `<h3>`, etc.

### Images
Images must have text alternatives that describe the information or function represented by them.

**Identification:**
- **Visual Inspection:** Look for visual content representing the image types from the list above. 
- **HTML Attributes:** Inspect the HTML code for the `<img>` element. Check for attributes like `src`, `alt`, and `title`.

### Landmarks
Landmarks are sections of a webpage that are used to identify the organization and structure of a webpage.
![showing landmark location for a webpage structure](https://mnit-dot-a11y.github.io/assets/images/examples/landmarks.png)
**Identification:**
- **Visual Inspection:** Look for blocks of content (typically the logo, navigation, search, footer, main content area, etc.).
- **HTML Attributes:** Inspect the HTML code and look for semantic elements such as `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, and `<footer>`.

### Links
A link points to another location. When you select a link, the link will take you to a [webpage](https://dot.state.mn.us/), document or other online content.

**Identification:**
- **Visual Inspection:** Look for clickable elements that are usually designed and often styled as colored squares or rectangular shapes with rounded corners and call-to-action text inserted.
- **HTML Attributes:** Inspect the HTML code for the `<a>` element with the `href` attribute.

### Navigation
Navigation is a collection of organized links that allows users to find information by enabling them to move to various sections and subsections of a website.

{::nomarkdown}
<example>
{% include /examples/nav-menu.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for lists or bars with multiple links or buttons, usually found at the top or side of the page.
- **HTML Attributes:** Inspect the HTML code for `<nav>` or `<ul>` elements with navigation-related classes.

### Page Title
The page title is the title of a webpage that appears at the top of the browser window. It is often referred to as the title tag or meta title.
![screenshot of GitHub site with the page title highlighted](https://mnit-dot-a11y.github.io/assets/images/examples/page-title.jpg)
**Identification:**
- **Visual Inspection:** Look at the browser window title bar. Is there a tile displayed, and does the tile reflect the information on the page?
- **HTML Attributes:** Inspect the HTML code for the element `<title>`.

### Pagination
Pagination is used whenever content needs to be divided into separate pages. It is a simple way to make large amounts of content more manageable and user-friendly.

{::nomarkdown}
<example>
{% include /examples/nav-pagination.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for navigation elements at the bottom or top of a content list. These elements often show page numbers and “Next” or “Previous” buttons.
- **HTML Attributes:** Inspect the HTML code for a series of links or buttons within a container, often marked with a class of `pagination`.

### Skip Link or Skip to main content.
The skip link acts as a shortcut, allowing users to bypass repetitive navigation elements and dive straight into the heart of the page's content. Skip links hidden from view until it receives keyboard focus. You must follow the visual inspection step to reveal the skip link.

![screenshot showing skip link](https://mnit-dot-a11y.github.io/assets/images/examples/skip-link.jpg)

**Identification:**
- **Visual Inspection:** Using the keyboard, starting at the very top of the page using the Tab key, watch for the skip to the main content link to become visible.
- **HTML Attributes:** Inspect the HTML code for the `<a>` element with the link title of Skip link or Skip to main content.

## Tables
A table shows information in columns and rows.

<div role="table" aria-label="Students" aria-describedby="students_table_desc">
  <div id="students_table_desc">Students currently enrolled in WAI-ARIA 101 for the coming semester</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader">First Name</span>
      <span role="columnheader">Last Name</span>
      <span role="columnheader">Company</span>
      <span role="columnheader">Address</span>
    </div>
  </div>
  <div role="rowgroup" >
    <div role="row">
      <span role="cell">Fred</span>
      <span role="cell">Jackson</span>
      <span role="cell">Acme, Inc.</span>
      <span role="cell">123 Broad St.</span>
    </div>
    <div role="row">
      <span role="cell" >Sara</span>
      <span role="cell">James</span>
      <span role="cell">Acme, Inc.</span>
      <span role="cell">123 Broad St.</span>
    </div>
    <div role="row">
      <span role="cell">Ralph</span>
      <span role="cell">Jefferson</span>
      <span role="cell">XYZ, Inc.</span>
      <span role="cell">456 Main St.</span>
    </div>
    <div role="row">
      <span role="cell">Nancy</span>
      <span role="cell">Jensen</span>
      <span role="cell">XYZ, Inc.</span>
      <span role="cell">456 Main St.</span>
    </div>
  </div>
</div>

**Identification:**
- **Visual Inspection:** Look for a structure with rows and columns, often containing header rows.
- **HTML Attributes:** Inspect the HTML code for the `<table>` element. Within the table, look for `<tr>` for rows and `<td>` or `<th>` for cells and headers.

## Embeded Web Views

### iframe
An iframe, or inline frame, is an HTML document embedded within another HTML document on a website. This HTML element is commonly used to include material from another source, such as a YouTube video, on a webpage.

<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>

**Identification:**
- **Visual Inspection:** Identify sections of the website that may be styled as if they are from another page. If an iframe is used, it can be easier to determine by examining the code.
- **HTML Attributes:** Inspect the HTML code for `<iframe>` element. 

### WebViews
It allows developers to embed a website directly into an application. It's a view that displays web pages, essentially acting as an in-app browser. It can display web content within an application, from static HTML data to an interactive webpage.

**Identification:**
- **Visual Inspection:** For mobile and desktop apps, the app may appear to be a website but will lack controls such as the address bar, tabs, and back/forward buttons.
- **HTML Attributes:** Inspect the HTML code for `<frameset>` or `<webview>` element.  Often, you cannot identify HTML elements for these web views. 
