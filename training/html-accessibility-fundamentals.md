---
layout: training-lesson
title: HTML Accessibility Fundamentals
seoTitle: HTML Accessibility Fundamentals - Accessibility training
description: How semantic HTML gives assistive technologies the structure they need — headings, links, buttons, forms, and tables done right.
permalink: /training/html-accessibility-fundamentals/
section: foundations
section_title: Accessibility Foundations
lesson_number: 2
lesson_total: 16
deck: HTML Accessibility Fundamentals.pptx
prev_slug: accessibility-foundations
prev_title: Accessibility Foundations
next_slug: aria-fundamentals
next_title: ARIA Fundamentals
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
quiz:
- q: Why does semantic HTML matter so much for accessibility?
  options:
  - It makes pages load faster
  - Assistive technologies depend on HTML structure to understand what a page contains and what is interactive
  - It is required for CSS to work
  - It replaces the need for testing
  answer: 1
  explain: Screen readers, magnifiers, and voice control all rely on HTML structure. When it's misused, they lose the meaning they need.
- q: Which element should you use for an action like 'Save' or 'Submit'?
  options:
  - <div> with a click handler
  - <span> styled like a button
  - <button>
  - <a> without an href
  answer: 2
  explain: <button> gives you keyboard support and the correct role for free; <a> is for navigation.
- q: How many <h1> elements should a page have, and how should heading levels flow?
  options:
  - Several <h1>s; levels can skip freely
  - One <h1>; follow a logical order without skipping levels
  - None — use bold text instead
  - One <h1> per section; levels don't matter
  answer: 1
  explain: Use one <h1> per page and a logical heading outline — headings are navigation shortcuts for screen reader users.
- q: When is it appropriate to use a <table>?
  options:
  - For page layout
  - Only for tabular data, with <th> headers and a <caption>
  - For aligning form fields
  - Whenever content has more than one column
  answer: 1
  explain: Tables are for data, never layout. Use <th> with scope and a <caption> so the structure is announced correctly.
---

Hi everyone, and thank you for joining this session. I’m Doug Rubio, accessibility development coach for MNIT DOT. In this training, we’re going to explore one of the most important foundations of accessible development: HTML Accessibility Fundamentals.

Before we talk about frameworks, ARIA, or testing tools, we need to understand how HTML itself provides the structure assistive technologies rely on. When HTML is used correctly, accessibility becomes much easier. When HTML is misused, accessibility becomes significantly harder,  even if the UI looks fine visually.

This session builds directly on the Accessibility Foundations training. Now that you understand POUR and WCAG at a high level, we’re going to look at how those principles translate into the HTML you write every day.

## Why HTML Matters for Accessibility

HTML is the backbone of accessibility. Screen readers, magnifiers, voice control tools, and other assistive technologies all depend on the underlying HTML structure to understand:

- What the page contains
- How content is organized
- What is interactive
- What is important
- How users should navigate

When developers rely too heavily on &lt;div&gt; and &lt;span&gt; elements, or when they recreate native controls with custom code, they remove the semantic meaning that assistive technologies need. This leads to missing labels, broken focus order, inaccessible buttons, and unpredictable behavior.

Accessible HTML is not about adding more complex code rather it’s about choosing the right elements and letting the browser and assistive technologies do their job.

## Semantic HTML

Semantic HTML means using elements that describe their purpose. This is the foundation of accessible development.

Examples:

- Use &lt;button&gt; instead of clickable &lt;div&gt;s
- Use &lt;nav&gt; for navigation
- Use &lt;header&gt; and &lt;footer&gt; for page structure
- Use &lt;main&gt; for primary content
- Use &lt;form&gt; for input groups
- Use &lt;label&gt; for form fields
- Use &lt;table&gt; only for tabular data
- Use headings (&lt;h1&gt;–&lt;h6&gt;) to create a logical outline

Semantic HTML provides built-in keyboard support, built-in accessibility roles, and predictable behavior across assistive technologies.

When you choose semantic elements, you reduce the need for ARIA and custom scripting. You also reduce the number of accessibility bugs QA will find later.

## Headings and Page Structure

Headings are one of the most important accessibility features in HTML. Screen reader users rely on headings to navigate quickly through content.

Key practices:

- Use one &lt;h1&gt; per page
- Follow a logical order (no skipping levels)
- Use headings to outline content, not to style text
- Avoid using headings for visual formatting only

A predictable heading structure supports WCAG 2.4.6 (Headings and Labels) and helps users understand the hierarchy of information.

## Links and Buttons

Links and buttons must be used correctly:

- Use &lt;a&gt; for navigation
- Use &lt;button&gt; for actions
- Never use &lt;div&gt; or &lt;span&gt; as interactive elements
- Ensure link text is descriptive (“View Report” instead of “Click Here”)

This supports WCAG 2.4.4 (Link Purpose) and ensures assistive technologies can announce the correct role.

## Forms and Labels

Forms are one of the most common sources of accessibility issues. HTML provides built-in tools to make forms accessible — but only if developers use them.

Key practices:

- Every input needs a &lt;label&gt;
- Labels must be programmatically associated using for and id
- Use fieldsets and legends for grouped inputs
- Use native controls whenever possible
- Provide clear, descriptive error messages

This supports WCAG 3.3.2 (Labels or Instructions) and WCAG 3.3.1 (Error Identification).

## Tables

Tables should only be used for data — never for layout.

Accessible tables require:

- &lt;th&gt; for headers
- scope="col" or scope="row"
- A caption describing the table’s purpose
- Logical reading order

This supports WCAG 1.3.1 (Info and Relationships).

## Avoiding Common Pitfalls

Developers often unintentionally create accessibility barriers by:

- Using &lt;div&gt; for everything
- Replacing native controls with custom ones
- Using images of text
- Creating clickable elements without keyboard support
- Forgetting labels
- Skipping heading levels
- Using tables for layout
- Relying on color alone to convey meaning

These issues are easy to avoid when you start with semantic HTML.

## HTML + WCAG

HTML Accessibility Fundamentals directly support many WCAG success criteria, including:

- 1.3.1 Info and Relationships
- 1.3.2 Meaningful Sequence
- 2.4.1 Bypass Blocks
- 2.4.3 Focus Order
- 2.4.4 Link Purpose
- 2.4.6 Headings and Labels
- 3.3.1 Error Identification
- 3.3.2 Labels or Instructions

When developers use semantic HTML, they meet many WCAG requirements automatically.

## Conclusion

HTML Accessibility Fundamentals are the foundation of everything we build. When you choose semantic elements, structure your content clearly, and rely on native controls, you create applications that are easier to use, easier to test, and easier to maintain.

In the next training, we’ll move into ARIA Fundamentals, where we’ll explore how ARIA enhances accessibility — and when it should not be used.
