---
layout: identifying-components
title: Information and Status
permalink: /identifying-components/information-status/
---

## Alerts and Notifications {#alerts}
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

## Dialog (Modals) {#modals}
A dialog modal prevents interaction with page content until the user completes an action or dismisses the modal. This intentionally interrupts the user’s workflow.

{::nomarkdown}
<example>
{% include /examples/modal-dialog.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for pop-up windows or overlays that appear on top of the current page content, often requiring interaction before returning to the main page.
- **HTML Attributes:** Inspect the HTML code for elements with roles like `dialog` or classes commonly associated with modal libraries (e.g., `modal`, `dialog`).

## Progress Bars {#progressbars}
A progress bar can show users how far along they are in a process.

{::nomarkdown}
<example>
{% include /examples/progress-bar.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for a visual indicator showing the progression of a task.
- **HTML Attributes:** Inspect the HTML code for the `progress` element.

## Text Inputs {#textinputs}
A text input box allows users to enter any combination of letters, numbers, or symbols. It can span a single line or multiple lines.

{::nomarkdown}
<example>
{% include /examples/textarea.html %}
</example>
{:/}

**Identification:**
- **Visual Inspection:** Look for fields where users can enter text, such as a search box.
- **HTML Attributes:** Inspect the HTML code for `<input>` elements with `type="text"`, `type="email"`, `type="password"`, etc.

## Tooltips {#tooltips}
A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.

This is a [Tooltip](## "revealed text") example.

**Identification:**
- **Visual Inspection:** Look for links that display additional information when you hover over an element.
- **HTML Attributes:** Inspect the HTML code for an element with a `<div>` tag of tooltip. 