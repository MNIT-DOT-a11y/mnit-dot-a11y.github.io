---
layout: page
title: Identifying Components
permalink: /identifying-components-new/
---

Before conducting accessibility testing, it's essential to identify a webpage's or web application's various components. Components are reusable user interface parts, such as a navigation menu, a button, or a table. Use this page as a reference to help identify components when completing the Accessibility Testing Scope Template [link to scoping document]. 

## Identifying components
The process of identifying components can be performed by two different methods. One by visual inspection or by viewing the HTML attributes within the score code. Both methods are provided with each component. Follow which even method you prefer.


## Audio and Video

**Identification:**
- **Visual Inspection:** Look for embedded video or audio players
- **HTML Attributes:** Inspect the HTML code for the URL of the audio or video in the scr attribute of the video or audio element.

## Forms
A form allows users to enter information into a page.

**Identification:**
- **Visual Inspection:** Look for collections of input fields, dropdowns, checkboxes, and buttons designed to submit data. 
- **HTML Attributes:** Inspect the HTML code for the `<form>` element. Within the form, look for various `<input>`, `<select>` `<label>`, `<fieldset>` and `<textarea>` elements.

## Tables and Grids
A table shows information in columns and rows.

**Identification:**
- **Visual Inspection:** Look for a structure with rows and columns, often containing header rows.
- **HTML Attributes:** Inspect the HTML code for the `<table>` element. Within the table, look for `<tr>` for rows and `<td>` or `<th>` for cells and headers.

## Images

**Identification:**
- **Visual Inspection:** Look for a structure with rows and columns, often containing header rows.
    - **Decorative image** – can be in the form of solid lines or borders or images used as “eye candy” that don’t add information to the content of a page.
    - **Image** – can be in the form of pictures or graphics.
    - **Icons** - small graphical elements often used as buttons or to represent actions (e.g., a trash can for a delete action)
    - **CAPTCHAs** – images used for a CAPTCHA test to determine if an online user is human or a bot.
- **HTML Attributes:** Inspect the HTML code for the `<img>` element. Check for attributes like `src`, `alt`, and `title`.

## Information and Status

### Alerts and Notifications
 An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. There are two different types of alerts:
 - **System status messages.** An alert may be a notification that informs people of the system's status and may or may not require the user to respond. Such notifications may be errors, warnings, and general updates.
 - **Validation messages.** An alert may be a validation message informing a user that they just took an action that needs correcting or confirming that a task was completed successfully. 
**Identification:**
- **Visual Inspection:** Look for messages or alerts on the page, often styled distinctively to draw attention (e.g., success, error, warning messages)
- **HTML Attributes:** Inspect the HTML code for elements with roles like `alert` or classes associated with notifications (e.g., `alert`, `notification`).

### Dialog (Modals)
A dialog modal prevents interaction with page content until the user completes an action or dismisses the modal. This intentionally interrupts the user’s workflow.
**Identification:**
- **Visual Inspection:** Look for pop-up windows or overlays that appear on top of the current page content, often requiring interaction before returning to the main page.
- **HTML Attributes:** Inspect the HTML code for elements with roles like `dialog` or classes commonly associated with modal libraries (e.g., `modal`, `dialog`).

### Progress Bar
A progress bar can show users how far along they are in a process.

**Identification:**
- **Visual Inspection:** Look for a visual indicator showing the progression of a task.
- **HTML Attributes:** Inspect the HTML code for the `progress` element.

### Text Inputs
A text input box allows users to enter any combination of letters, numbers, or symbols. It can span a single line or multiple lines. 

**Identification:**

- **Visual Inspection:** Look for fields where users can enter text, such as a search box.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="text"`, `type="email"`, `type="password"`, etc.

### Tooltips
A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.

**Identification:**

- **Visual Inspection:** Look for links that display additional information when you hover over an element.
- **HTML Attributes:** Inspect the HTML code for an element with a `<div>` tag of tooltip. 

## Interactive Content

### Animation

**Identification:**

- **Visual Inspection:** Looks for elements that are moving on the webpage.
- **HTML Attributes:** Inspect the HTML; look for `<video>` or `<svg>`, or `<img>` are the most common elements. Also, look for `<div>` and `<span>` elements with classes or IDs that may indicate animation.

### Carousels

**Identification:**

- **Visual Inspection:** Look for an inactive element where images are cycling/rotating through a group of images.
- **HTML Attributes:** Inspect the HTML code for the `<div>` tag of carousel.

### Date Picker Dialog
A date picker helps users select a single date from a display calendar or date selector.

- **Visual Inspection:** Look for input fields that, when clicked, display a calendar or date selection interface.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with type=" date". Sometimes custom date pickers may use libraries, so look for attributes like data-datepicker.

### Slideshows


- **Visual Inspection:** Look for an inactive element with which images can be interacted by selecting a button to rotate a set of images.
- **HTML Attributes:** Inspect the HTML code for the `<div>` tag of the slideshow.

## Links, Buttons, and Toggle Switches

### Buttons
A button is a widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation. 

- **Visual Inspection:** Look for clickable elements that are usually designed and often styled as colored squares or rectangular shapes with rounded corners and call-to-action text inserted.
- **HTML Attributes:** Inspect the HTML code for the `<button>` element or `<input>` elements with `type="button"`, `type="submit"`, or `type="reset"`.

### Links
A link points to another location. When you select a link, the link will take you to a webpage, document or other online content.

- **Visual Inspection:** Look for clickable elements that are usually designed and often styled as colored squares or rectangular shapes with rounded corners and call-to-action text inserted.
- **HTML Attributes:** Inspect the HTML code for the `<a>` element with the `href` attribute.

### Toggle Switches (on/off button)
A switch is an input widget that allows users to choose one of two values: on or off.

- **Visual Inspection:** Look for button or slider elements that allow you to turn something on or off.
- **HTML Attributes:** Inspect the HTML code for the role `switch`.

## Page Structure
### Accordions
An accordion is a vertically stacked list of interactive headings that hide or reveal additional content when selected. The headings function as controls that enable users to reveal or hide their associated content sections.

- **Visual Inspection:** Look for a vertically stacked list of interactive headings that hide or reveal additional content.
- **HTML Attributes:** Inspect the HTML code for a class `accordion`.

### Headings

- **Visual Inspection:** Look for large, bold text at the top of sections or pages.
- **HTML Attributes:** Inspect the HTML code for header tags such as `<h1>`, `<h2>`, `<h3>`, etc.

### Landmarks

- **Visual Inspection:** Look for blocks of content (typically the logo, navigation, search, footer, main content area, etc.).
- **HTML Attributes:** Inspect the HTML code and look for semantic elements such as `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, and `<footer>`.

### Navigation

- **Visual Inspection:** Look for lists or bars with multiple links or buttons, usually found at the top or side of the page.
- **HTML Attributes:** Inspect the HTML code for `<nav>` or `<ul>` elements with navigation-related classes.

### Page Title

- **Visual Inspection:** Look at the browser window title bar. Is there a tile displayed, and does the tile reflect the information on the page?
- **HTML Attributes:** Inspect the HTML code for the element `<title>`.

### Pagination
Pagination is used whenever content needs to be divided into separate pages. It is a simple way to make large amounts of content more manageable and user-friendly.

- **Visual Inspection:** Look for navigation elements at the bottom or top of a content list. These elements often show page numbers and “Next” or “Previous” buttons.
- **HTML Attributes:** Inspect the HTML code for a series of links or buttons within a container, often marked with a class of `pagination`.

### Skip Link or Skip to main content.

- **Visual Inspection:** Using the keyboard, starting at the very top of the page using the Tab key, watch for the skip to the main content link to become visible.
- **HTML Attributes:** Inspect the HTML code for the `<a>` element with the link title of Skip link or Skip to main content.

### Tabs
Tabs are layered content sections, known as tab panels, that hide or reveal additional content when selected. The tab panel headings function as controls that enable users to reveal or hide their associated content panel.
- **Visual Inspection:** Look for panels consisting of tabs or tab panels.
- **HTML Attributes:** Inspect the HTML code role of `tablist`.

## Embeded Web Views

### iframe
An iframe, or inline frame, is an HTML document embedded within another HTML document on a website. This HTML element is commonly used to include material from another source, such as a YouTube video, on a webpage.

- **Visual Inspection:** Identify sections of the website that may be styled as if they are from another page. If an iframe is used, it can be easier to determine by examining the code.
- **HTML Attributes:** Inspect the HTML code for `<iframe>` element. 

### WebViews
It allows developers to embed a website directly into an application. It's a view that displays web pages, essentially acting as an in-app browser. It can display web content within an application, from static HTML data to an interactive webpage.

- **Visual Inspection:** For mobile and desktop apps, the app may appear to be a website but will lack controls such as the address bar, tabs, and back/forward buttons.
- **HTML Attributes:** Inspect the HTML code for `<frameset>` or `<webview>` element.  Often, you cannot identify HTML elements for these web views. 
