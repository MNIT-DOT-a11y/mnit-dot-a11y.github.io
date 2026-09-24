---
layout: qa-training-lesson
title: NVDA Forms & Error Messages Testing
seoTitle: NVDA Forms & Error Messages Testing - QA accessibility training
description: Use NVDA to verify form labels, instructions, required fields, grouped controls, and error messages are announced correctly.
permalink: /training/qa/nvda-forms-and-error-messages-testing/
slug: nvda-forms-and-error-messages-testing
section: screen-reader
section_title: Screen Reader Testing Skills
lesson_number: 9
lesson_total: 11
deck: Forms and Error Messages.pptx
prev_slug: nvda-page-structure-testing
prev_title: NVDA Page Structure Testing
next_section: automated
next_section_title: Automated Testing Tools
objectives:
- Confirm every field announces a programmatically associated label
- Verify required fields and instructions are announced, not just shown
- Check that grouped radio buttons and checkboxes announce their legend
- Submit with errors and confirm focus moves to the first error and messages are announced
- Judge whether an error message identifies the field, the issue, and the fix
---

Forms are where users complete critical tasks, and they are one of the most common sources of accessibility defects. Screen reader users depend on labels, instructions, and error messages being programmatically connected to the fields they describe. If they aren't, users can't tell what's required, what went wrong, or how to fix it.

This lesson walks QA analysts through testing a form with NVDA: each field announces its label (not just a placeholder), required fields announce as required, radio buttons and checkboxes announce their group through a fieldset and legend, and errors are announced when they appear. After a submit with errors, focus should move to the first error, and each message should identify the field, describe the problem, and say how to fix it. These checks support WCAG 3.3.1, 3.3.2, 2.4.3, and 4.1.2.
