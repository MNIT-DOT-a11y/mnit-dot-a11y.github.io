---
layout: training-lesson
title: HTML Accessibility Fundamentals
seoTitle: HTML Accessibility Fundamentals - Accessibility training
description: How semantic HTML gives assistive technologies the structure they need — headings, links, buttons, forms, and tables done right.
permalink: /training/html-accessibility-fundamentals/
slug: html-accessibility-fundamentals
section: foundations
section_title: Accessibility Foundations
lesson_number: 2
lesson_total: 16
deck: HTML Accessibility Fundamentals.pptx
prev_slug: accessibility-foundations
prev_title: Accessibility Foundations
next_slug: aria-fundamentals
next_title: ARIA Fundamentals
objectives:
- 'Choose the semantic element that matches an element''s purpose'
- 'Structure a page with one `h1` and a logical heading order'
- 'Use `a` for navigation and `button` for actions, with descriptive text'
- 'Build forms with programmatically associated labels'
- 'Avoid common pitfalls like layout tables and images of text'
slides:
- type: title
  title: HTML Accessibility Fundamentals
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: HTML Accessibility Fundamentals
  items:
  - Why HTML matters for accessibility
  - Semantic HTML
  - Headings and page structure
  - Links, buttons, forms, and tables
  - Common pitfalls to avoid
  - How HTML supports WCAG
- type: definitions
  title: Choose the Right Element
  items:
  - term: <button>
    desc: Use instead of a clickable <div>.
  - term: <nav>
    desc: Use for navigation regions.
  - term: <main>
    desc: Use for primary page content.
  - term: <label>
    desc: Use to programmatically name every form field.
- type: body
  title: Why HTML Matters
  groups:
  - header: The Backbone of Accessibility
    items:
    - Screen readers, magnifiers, and voice control all depend on HTML structure
    - HTML tells assistive tech what the page contains, what's interactive, and how to navigate
  - header: When HTML Is Misused
    items:
    - Overusing <div> and <span> removes the semantic meaning assistive tech needs
    - Leads to missing labels, broken focus order, inaccessible buttons
- type: body
  title: Semantic HTML
  groups:
  - header: Use Elements That Describe Their Purpose
    items:
    - <button> instead of clickable <div>s
    - <nav>, <header>, <footer>, <main> for page structure
    - <form> and <label> for input groups
    - <table> only for tabular data
    - Headings (<h1>–<h6>) to create a logical outline
  - header: Why It Pays Off
    items:
    - Built-in keyboard support and accessibility roles
    - Less reliance on ARIA and custom scripting
    - Fewer accessibility bugs for QA to catch later
- type: body
  title: Headings and Page Structure
  groups:
  - header: Navigation Shortcuts for Screen Reader Users
    items:
    - Use one <h1> per page
    - Follow a logical order — never skip levels
    - Use headings to outline content, not to style text
  - header: Supports WCAG 2.4.6
    items:
    - Headings and Labels — a predictable structure helps users understand the hierarchy
- type: body
  title: Links and Buttons
  groups:
  - header: Use the Right Element for the Job
    items:
    - <a> for navigation
    - <button> for actions
    - Never a <div> or <span> as an interactive element
    - Descriptive link text (“View Report,” not “Click Here”)
  - header: Supports WCAG 2.4.4
    items:
    - Link Purpose — assistive tech can announce the correct role
- type: body
  title: Forms and Labels
  groups:
  - header: Built-In Tools, If You Use Them
    items:
    - Every input needs a <label>
    - Associate labels programmatically with for and id
    - Use <fieldset> and <legend> for grouped inputs
    - Use native controls whenever possible
    - Provide clear, descriptive error messages
  - header: Supports WCAG 3.3.1 & 3.3.2
    items:
    - Labels or Instructions, and Error Identification
- type: body
  title: Tables
  groups:
  - header: For Data — Never for Layout
    items:
    - <th> for headers, with scope="col" or scope="row"
    - A <caption> describing the table's purpose
    - A logical reading order
  - header: Supports WCAG 1.3.1
    items:
    - Info and Relationships
- type: body
  title: Avoiding Common Pitfalls
  groups:
  - header: Barriers Developers Create Unintentionally
    items:
    - Using <div> for everything
    - Replacing native controls with custom ones
    - Using images of text
    - Clickable elements without keyboard support
    - Forgetting labels, skipping heading levels
    - Tables used for layout, color used alone to convey meaning
- type: list
  title: Recap
  header: HTML Fundamentals Review
  items:
  - HTML is the backbone every assistive technology depends on
  - Semantic elements over generic <div> and <span>
  - Logical headings, correct links and buttons, real labels
  - Tables for data only — never layout
  - How semantic HTML maps to eight WCAG success criteria
- type: list
  title: Key Takeaways
  header: HTML Accessibility Fundamentals
  items:
  - Choosing the right element does most of the accessibility work for you
  - Semantic HTML reduces the ARIA and custom scripting you'll need later
  - These fundamentals meet many WCAG requirements automatically
  - 'Up next: ARIA Fundamentals'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/code-review-checklist/
---

Semantic HTML is the backbone that screen readers, magnifiers, and voice control depend on. When markup describes what content *is* — a button, a navigation region, a heading — assistive technology can announce it and users can operate it. When everything is a `div` or `span`, that meaning disappears and the barriers start.

This lesson walks through the elements that matter most: headings that form a logical outline, links for navigation versus buttons for actions, real form labels associated with their inputs, and tables reserved for tabular data. It closes with the pitfalls developers create without meaning to, and shows how good HTML satisfies several WCAG success criteria before any ARIA is needed.
