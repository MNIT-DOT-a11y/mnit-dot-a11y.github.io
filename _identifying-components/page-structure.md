---
layout: identifying-components
title: Page Structure
permalink: /identifying-components/page-structure
---

## Forms {#forms}
A form allows users to enter information into a page.

{::nomarkdown}
<example>
{% include /examples/form-contact.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for collections of input fields, dropdowns, checkboxes, and buttons designed to submit data. 
- **HTML Attributes:** Inspect the HTML code for the `<form>` element. Within the form, look for various `<input>`, `<select>` `<label>`, `<fieldset>` and `<textarea>` elements.

## Headings {#headings}
Headings are large, bold text that breaks up content into meaningful sections, making a page easier to read and navigate.

<example>
<h1 class="no_toc">Heading 1</h1>
<h2 class="no_toc">Heading 2</h2>
<h3 class="no_toc">Heading 3</h3>
</example>


**Identification:**
- **Visual Inspection:** Look for large, bold text at the top of sections or pages.
- **HTML Attributes:** Inspect the HTML code for header tags such as `<h1>`, `<h2>`, `<h3>`, etc.

## Images {#images}
Images must have text alternatives that describe the information or function represented by them.

**Identification:**
- **Visual Inspection:** Look for visual content representing the image types from the list above. 
- **HTML Attributes:** Inspect the HTML code for the `<img>` element. Check for attributes like `src`, `alt`, and `title`.

## Landmarks {#landmarks}
Landmarks are sections of a webpage that are used to identify the organization and structure of a webpage.
**Example**
![showing landmark location for a webpage structure](https://mnit-dot-a11y.github.io/assets/images/examples/landmarks.png)
**Identification:**
- **Visual Inspection:** Look for blocks of content (typically the logo, navigation, search, footer, main content area, etc.).
- **HTML Attributes:** Inspect the HTML code and look for semantic elements such as `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, and `<footer>`.

## Links {#links}
A link points to another location. When you select a link, the link will take you to a [webpage](https://dot.state.mn.us/), document or other online content.

**Identification:**
- **Visual Inspection:** Look for clickable elements that are usually designed and often styled as colored squares or rectangular shapes with rounded corners and call-to-action text inserted.
- **HTML Attributes:** Inspect the HTML code for the `<a>` element with the `href` attribute.

## Navigation {#navigation}
Navigation is a collection of organized links that allows users to find information by enabling them to move to various sections and subsections of a website.

{::nomarkdown}
<example>
{% include /examples/nav-menu.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for lists or bars with multiple links or buttons, usually found at the top or side of the page.
- **HTML Attributes:** Inspect the HTML code for `<nav>` or `<ul>` elements with navigation-related classes.

## Page Title {#pagetitle}
The page title is the title of a webpage that appears at the top of the browser window. It is often referred to as the title tag or meta title.
![screenshot of GitHub site with the page title highlighted](https://mnit-dot-a11y.github.io/assets/images/examples/page-title.jpg)
**Identification:**
- **Visual Inspection:** Look at the browser window title bar. Is there a tile displayed, and does the tile reflect the information on the page?
- **HTML Attributes:** Inspect the HTML code for the element `<title>`.

## Pagination {#pagination}
Pagination is used whenever content needs to be divided into separate pages. It is a simple way to make large amounts of content more manageable and user-friendly.

{::nomarkdown}
<example>
{% include /examples/nav-pagination.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for navigation elements at the bottom or top of a content list. These elements often show page numbers and “Next” or “Previous” buttons.
- **HTML Attributes:** Inspect the HTML code for a series of links or buttons within a container, often marked with a class of `pagination`.

## Tables

A table shows information in columns and rows.

{::nomarkdown}
<example>
<table>
	<caption>Table Example</caption>
  <tbody>
	<thead>
		<tr>
		  <th scope="col">First Name</td>
		  <th scope="col">Last Name</td>
		  <th scope="col">Company</td>
		  <th scope="col">Address</td>
		</tr>
	</thead>
	<tbody>
    <tr>
      <td>Fred</td>
      <td>Jackson</td>
      <td>Acme, Inc.</td>
      <td>123 Broad St.</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>James</td>
      <td>Acme, Inc.</td>
      <td>123 Broad St.</td>
    </tr>
    <tr>
      <td>Ralph</td>
      <td>Jefferson</td>
      <td>XYZ, Inc.</td>
      <td>456 Main St.</td>
    </tr>
	  <tr>
      <td>Nancy</td>
      <td>Jensen</td>
      <td>XYZ, Inc.</td>
      <td>456 Main St.</td>
    </tr>
  </tbody>
</table>
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for a structure with rows and columns, often containing header rows.
- **HTML Attributes:** Inspect the HTML code for the `<table>` element. Within the table, look for `<tr>` for rows and `<td>` or `<th>` for cells and headers.