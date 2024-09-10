---
layout: identifying-components
title: Embedded Web Views
permalink: /identifying-components/webviews/
---

## iframe {#iframes}
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

## WebViews {#webviews}
It allows developers to embed a website directly into an application. It's a view that displays web pages, essentially acting as an in-app browser. It can display web content within an application, from static HTML data to an interactive webpage.

**Identification:**
- **Visual Inspection:** For mobile and desktop apps, the app may appear to be a website but will lack controls such as the address bar, tabs, and back/forward buttons.
- **HTML Attributes:** Inspect the HTML code for `<frameset>` or `<webview>` element.  Often, you cannot identify HTML elements for these web views. 