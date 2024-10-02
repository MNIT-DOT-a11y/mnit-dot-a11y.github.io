---
layout: entry-desktop
title: "Progress Control"
description: "How to test accessible progress controls for desktop applications"  
categories: patterns

screenreader:  
  name:  |
    The task that the progress control represents (i.e. 'Copying file')
  role:  |
    It identifies its role as a progress bar or ring
  state: |
    It expresses the state of the progress control, in the form of a percentage value, time remaining, or both.
---

## Should you use a progress bar or ring
It's not always obvious what control or what state (determinate vs indeterminate) to use when trying to show something is happening. Sometimes a task is obvious enough that it doesn't require a progress control at all – and sometimes even if a progress control is used, a line of text is still necessary in order to explain to the user what operation is underway.

- When a progress bar is in use, interaction is non-modal, typically meaning that the user is not blocked by that operation's completion, and can continue to use the app in other ways until that aspect has completed.
- If an operation requires all (or a large portion of) interaction with the app to wait until it has been completed, then a progress ring is the better choice.

## Completion feedback
- When a progress bar reaches 100%, the completion of the task should be conveyed to screen readers and other assistive technologies.

## Design notes

### Resources
- [Guidelines for Progress Controls](https://learn.microsoft.com/en-us/windows/apps/design/controls/progress-controls)

## Developer notes

### Roles

- Ensure that the progress bar is marked up with appropriate roles, such as progressbar in UI frameworks (e.g., WPF, WinForms).

### Names

- Provide an accessible name for the progress bar, so users know what it represents (e.g., "File upload progress").

### States

- The determinate state for both ProgressBar and ProgressRing shows the percentage completed of a task. This should be used during an operation whose duration is known, but its progress should not block the user's interaction with the app.
- The indeterminate state for ProgressBar shows that an operation is underway, does not block user interaction with the app, and its completion time is unknown.
- The indeterminate state for ProgressRing shows that an operation is underway, blocks user interaction with the app, and its completion time is unknown.