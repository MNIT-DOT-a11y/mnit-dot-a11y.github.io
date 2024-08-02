---
layout: page
title: Identifying Components
permalink: /identifying-components/
---

Quality Assurance (QA) testers play a critical role in ensuring the usability and functionality of a website. One of the key tasks, at present, is identifying various components on a webpage or web application prior to testing them. This guide provides an extensive overview of how to determine and interact with common webpage components, including checkboxes, tables and grids, headers, footers, datepickers, pagination, and others.

## 1. Checkboxes

**Identification:**
- **Visual Inspection:** Look for small square boxes that can be either checked or unchecked.
- **HTML Attributes:** Inspect the HTML code using browser developer tools (e.g., right-click and select "Inspect"). Check for the `<input>` element with `type="checkbox"`.

## 2. Tables and Grids

**Identification:**
- **Visual Inspection:** Look for a structure with rows and columns, often containing header rows.
- **HTML Attributes:** Inspect the HTML code for the `<table>` element. Within the table, look for `<tr>` for rows and `<td>` or `<th>` for cells and headers.

## 3. Headers

**Identification:**
- **Visual Inspection:** Look for large, bold text usually at the top of sections or pages.
- **HTML Attributes:** Inspect the HTML code for header tags such as `<h1>`, `<h2>`, `<h3>`, etc.

## 4. Footers

**Identification:**
- **Visual Inspection:** Look for content at the very bottom of the page, often containing copyright information, links, or contact details.
- **HTML Attributes:** Inspect the HTML code for the `<footer>` element.

## 5. Datepickers

**Identification:**
- **Visual Inspection:** Look for input fields that, when clicked, display a calendar or date selection interface.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="date"`. Sometimes custom datepickers may use libraries, so look for attributes like `data-datepicker`.

## 6. Pagination

**Identification:**
- **Visual Inspection:** Look for navigation elements at the bottom or top of a content list, often showing page numbers and "Next" or "Previous" buttons.
- **HTML Attributes:** Inspect the HTML code for a series of links or buttons within a container, often marked with classes like `pagination`.

## 7. Forms

**Identification:**
- **Visual Inspection:** Look for collections of input fields, dropdowns, checkboxes, and buttons designed to submit data.
- **HTML Attributes:** Inspect the HTML code for the `<form>` element. Within the form, look for various `<input>`, `<select>`, and `<textarea>` elements.

## 8. Buttons

**Identification:**
- **Visual Inspection:** Look for clickable elements usually designed to trigger an action, often styled as raised or colored rectangles.
- **HTML Attributes:** Inspect the HTML code for the `<button>` element or `<input>` elements with `type="button"`, `type="submit"`, or `type="reset"`.

## 9. Links

**Identification:**
- **Visual Inspection:** Look for text or images that are clickable and usually navigate to another page or section within the same page.
- **HTML Attributes:** Inspect the HTML code for the `<a>` element with the `href` attribute.

## 10. Dropdowns

**Identification:**
- **Visual Inspection:** Look for input fields that expand to show a list of selectable options.
- **HTML Attributes:** Inspect the HTML code for the `<select>` element. The options within are defined by `<option>` elements.

## 11. Modals

**Identification:**
- **Visual Inspection:** Look for pop-up windows or overlays that appear on top of the current page content, often requiring interaction before returning to the main page.
- **HTML Attributes:** Inspect the HTML code for elements with roles like `dialog` or classes commonly associated with modal libraries (e.g., `modal`, `dialog`).

## 12. Images

**Identification:**
- **Visual Inspection:** Look for visual content in the form of pictures or graphics.
- **HTML Attributes:** Inspect the HTML code for the `<img>` element. Check for attributes like `src`, `alt`, and `title`.

## 13. Icons

**Identification:**
- **Visual Inspection:** Look for small graphical elements often used as buttons or to represent actions (e.g., a trash can for delete).
- **HTML Attributes:** Inspect the HTML code for elements like `<i>` or `<span>` with icon-specific classes (e.g., `fa`, `icon`).

## 14. Text Inputs

**Identification:**
- **Visual Inspection:** Look for fields where users can enter text.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="text"`, `type="email"`, `type="password"`, etc.

## 15. Radio Buttons

**Identification:**
- **Visual Inspection:** Look for small circular buttons that can be selected, often found in groups where only one can be selected at a time.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="radio"`.

## 16. Sliders

**Identification:**
- **Visual Inspection:** Look for input elements that allow users to select a value by sliding a handle along a track.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="range"`.

## 17. Navigation Menus

**Identification:**
- **Visual Inspection:** Look for lists or bars with multiple links or buttons usually found at the top or side of the page.
- **HTML Attributes:** Inspect the HTML code for `<nav>` elements or `<ul>` elements with navigation-related classes.

## 18. Alerts and Notifications

**Identification:**
- **Visual Inspection:** Look for messages or alerts that appear on the page, often styled distinctively to draw attention (e.g., success, error, warning messages).
- **HTML Attributes:** Inspect the HTML code for elements with roles like `alert` or classes associated with notifications (e.g., `alert`, `notification`).

## 19. Breadcrumbs

TBD

