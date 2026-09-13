---
layout: training-lesson
title: Forms & Error Messages
seoTitle: Forms & Error Messages - Accessibility training
description: Labels, instructions, required fields, accessible error messages, and focus management for forms users can actually complete.
permalink: /training/forms-and-error-messages/
section: foundations
section_title: Accessibility Foundations
lesson_number: 4
lesson_total: 16
deck: Forms and Error Messages.pptx
prev_slug: aria-fundamentals
prev_title: ARIA Fundamentals
next_slug: keyboard-testing
next_title: Keyboard Testing
slides:
- type: title
  title: Forms & Error Messages
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Forms & Error Messages
  items:
  - Why accessible forms matter
  - Labels and programmatic association
  - Instructions, help text, and required fields
  - Accessible error messages
  - Focus management during errors
  - Grouping related fields
  - Common pitfalls to avoid
- type: definitions
  title: WCAG Criteria for Accessible Forms
  items:
  - term: Labels or Instructions
    desc: Every field needs clear, visible guidance.
  - term: Error Identification
    desc: Errors must be identified in text, not color alone.
  - term: Focus Order
    desc: Focus must move predictably through the form.
  - term: Name, Role, Value
    desc: Assistive tech must expose each field's state.
- type: body
  title: Why Accessible Forms Matter
  groups:
  - header: Where Users Get Stuck
    items:
    - Forms are where users enter information and complete critical tasks
    - Missing labels, focus behavior, or error messages leave users confused or stuck
  - header: Supports Several WCAG Criteria
    items:
    - Labels or Instructions, Error Identification, Error Prevention
    - Focus Order, Name Role Value
- type: body
  title: Labels and Programmatic Association
  groups:
  - header: Every Field Needs a Real Label
    items:
    - Labels must be programmatically associated using for and id
    - <label for="email">Email address</label> + <input id="email">
    - Screen readers announce “Email address, edit text” instead of leaving users guessing
  - header: Avoid Placeholder-Only Labels
    items:
    - Placeholders disappear when users type
    - Not announced consistently by screen readers
- type: body
  title: Instructions and Required Fields
  groups:
  - header: Instructions Belong Near the Field
    items:
    - “Enter your full legal name.”
    - “Password must be at least twelve characters.”
    - Should not rely on color alone
  - header: Required Fields
    items:
    - Indicated both visually and programmatically
    - <label>Phone number <span aria-hidden="true">*</span></label> + aria-required="true"
- type: body
  title: Accessible Error Messages
  groups:
  - header: Clear, Specific, Linked to the Field
    items:
    - aria-describedby links the field to its error text
    - role="alert" so the error is announced immediately
    - Avoid vague messages like “Invalid input.”
  - header: Effective Error Messages…
    items:
    - Identify the field, describe the issue, explain what to do
    - “Enter a valid email format, such as name@example.com.”
- type: body
  title: Focus Management During Errors
  groups:
  - header: Move Focus to the Problem
    items:
    - On submission failure, move focus to the first error automatically
    - Helps keyboard and screen reader users find the issue immediately
    - After correction, focus returns to the appropriate field
- type: body
  title: Grouping Related Fields
  groups:
  - header: Use Fieldset and Legend
    items:
    - Groups related inputs like radio buttons or checkboxes
    - <fieldset><legend>Preferred contact method</legend>…
    - Helps assistive tech understand the relationship between fields
- type: body
  title: Avoiding Common Pitfalls
  groups:
  - header: Barriers Developers Create
    items:
    - Using placeholders instead of labels
    - Placing error messages far from the field
    - Relying on color alone to indicate errors
    - Failing to associate labels correctly
    - Creating custom controls without ARIA
    - Skipping focus management, vague error messages
- type: list
  title: Recap
  header: Forms & Error Messages Review
  items:
  - Every field needs a programmatically associated label
  - Instructions and required-field indicators belong near the field
  - Error messages must be specific, linked, and announced immediately
  - Focus must move to the first error on a failed submission
  - Fieldset and legend group related fields for assistive tech
- type: list
  title: Key Takeaways
  header: Forms & Error Messages
  items:
  - Placeholders are not labels
  - Specific error messages reduce user frustration and support requests
  - Predictable focus behavior is as important as the error text itself
  - 'Up next: Keyboard Testing'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/form/
quiz:
- q: How should a label be associated with its input?
  options:
  - Place the label text next to the input visually
  - Use the placeholder attribute
  - Use <label for='id'> matching the input's id
  - Wrap the input in a <div> with a title
  answer: 2
  explain: Programmatic association with for/id lets screen readers announce 'Email address, edit text' instead of leaving users guessing.
- q: Why are placeholder-only labels a problem?
  options:
  - They use too much space
  - They disappear when users type and aren't announced consistently
  - They are not supported in Chrome
  - They can't be styled
  answer: 1
  explain: Placeholders vanish on input and are inconsistently exposed to assistive tech — they are not labels.
- q: Which combination makes an error message accessible?
  options:
  - A red border only
  - aria-describedby linking the field to the message, and role='alert' so it's announced
  - A tooltip that appears on hover
  - Changing the label color to red
  answer: 1
  explain: Errors must be linked to the field and announced immediately — and never rely on color alone.
- q: After a failed form submission, where should focus move?
  options:
  - To the top of the page
  - To the submit button
  - To the first field with an error
  - Nowhere — leave focus where it was
  answer: 2
  explain: Moving focus to the first error helps keyboard and screen reader users find the problem immediately.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In this session, we’re going to focus on Forms and Error Messages, one of the most important areas of accessibility in application development. Forms are where users enter information, complete tasks, and interact with critical systems. When forms are inaccessible, users can become stuck, confused, or unable to complete essential workflows.

This training builds on the HTML and ARIA fundamentals you learned earlier. Now we will look at how to create forms that are understandable, operable, and predictable for all users, including those who rely on screen readers, magnifiers, keyboard navigation, or assistive technologies.

## Why Accessible Forms Matter

Forms are a common source of accessibility issues. Users depend on clear labels, predictable focus behavior, meaningful instructions, and descriptive error messages. When any of these elements are missing, users may not know what information is required, what went wrong, or how to fix an issue.

Accessible forms support several WCAG criteria, including:

- Labels or Instructions
- Error Identification
- Error Prevention
- Focus Order
- Name, Role, Value

When developers build forms correctly, users can complete tasks confidently and without barriers.

## Labels and Programmatic Association

Every form field must have a clear, descriptive label. Labels must be programmatically associated with their inputs so assistive technologies can announce them correctly.

Correct example:

```html
<label for="email">Email address</label>
<input id="email" type="email">
```

This association ensures screen readers announce “Email address, edit text” instead of leaving users guessing.

Avoid placing labels inside placeholders. Placeholders disappear when users type, and they are not announced consistently by screen readers.

## Instructions and Help Text

Users need clear instructions when entering information. Instructions should appear near the field they apply to, not at the top of the page.

Examples of helpful instructions:

- “Enter your full legal name.”
- “Password must be at least twelve characters.”
- “Use numbers only.”

Instructions should be visible and easy to understand. They should not rely on color alone.

### Required Fields

Required fields must be clearly indicated. The indication must be communicated visually and programmatically.

Correct example:

```html
<label for="phone">Phone number <span aria-hidden="true">*</span></label>
<input id="phone" aria-required="true">
```

This approach ensures both sighted users and screen reader users understand the requirement.

### Accessible Error Messages

Error messages must be clear, specific, and placed near the field that needs attention. Users should not have to search the page to find out what went wrong.

Correct example:

```html
<input id="email" aria-describedby="email-error">
<div id="email-error" role="alert">Email address is required.</div>
```

This pattern ensures:

- the error is announced immediately
- the error is linked to the correct field
- the user knows exactly what needs to be fixed

Avoid vague messages such as “Invalid input.” Users need to know what is wrong and how to correct it.

### Error Message Content

Effective error messages:

- identify the field
- describe the issue
- explain what the user must do

Examples:

- “Email address is required.”
- “Enter a valid email format, such as name@example.com.”
- “Password must be at least twelve characters.”

Clear messages reduce confusion and support users who rely on assistive technologies.

### Focus Management During Errors

When a form is submitted with errors, focus should move to the first error automatically. This helps keyboard and screen reader users understand where the issue is.

After the error is corrected, focus should return to the appropriate field or continue naturally through the form.

Predictable focus behavior supports WCAG requirements for operability and understandability.

### Grouping Related Fields

When fields belong together, such as radio buttons or checkboxes, use &lt;fieldset&gt; and &lt;legend&gt; to provide structure.

Correct example:

```html
<fieldset>
  <legend>Preferred contact method</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
```

This structure helps assistive technologies understand the relationship between fields.

## Avoiding Common Form Accessibility Issues

Developers often create barriers by:

- using placeholders instead of labels
- placing error messages far from the field
- relying on color alone to indicate errors
- failing to associate labels correctly
- creating custom controls without ARIA
- skipping focus management
- providing vague error messages

These issues are easy to avoid when forms are built with accessibility in mind.

## Conclusion

Accessible forms are essential for creating usable applications. When you provide clear labels, helpful instructions, descriptive error messages, and predictable focus behavior, you create forms that work for everyone. These practices reduce user frustration and support compliance with WCAG and MNIT standards.

In the next training, we will move into Keyboard Testing, where you will learn how to verify that your forms and components are fully operable using only the keyboard.
