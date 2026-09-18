---
layout: training-lesson
title: C# Accessibility Integration
seoTitle: C# Accessibility Integration - Accessibility training
description: Embed accessibility metadata, validation messages, and error states in your C# models, DTOs, and API contracts.
permalink: /training/csharp-accessibility-integration/
slug: csharp-accessibility-integration
section: language-specific
section_title: Language-Specific Accessibility Integration
lesson_number: 11
lesson_total: 16
deck: C# Accessibility Integration.pptx
prev_slug: nvda-basics
prev_title: NVDA Basics
next_slug: java-accessibility-integration
next_title: Java Accessibility Integration
objectives:
- 'Add alt text, labels, instructions, and error messages to DTOs'
- 'Write validation messages that tell users what went wrong and how to fix it'
- 'Name accessibility properties clearly and consistently'
- 'Localize accessibility metadata'
- 'Return explicit error states the UI can map to ARIA attributes'
slides:
- type: title
  title: C# Accessibility Integration
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: C# Accessibility Integration
  items:
  - Why C# accessibility matters
  - Accessibility metadata in models and DTOs
  - Accessible validation and error messaging
  - Consistent naming and localization
  - API contracts as accessibility contracts
  - Error states and ARIA support
- type: definitions
  title: WCAG Criteria C# Integration Supports
  items:
  - term: Labels (3.3.2)
    desc: Every field needs a clear, descriptive label from the API.
  - term: Error Identification (3.3.1)
    desc: Validation errors must be specific and text-based.
  - term: Error Suggestions (3.3.3)
    desc: Error messages should explain how to fix the problem.
  - term: Name, Role, Value (4.1.2)
    desc: API responses must carry the metadata the UI needs to expose these.
- type: body
  title: Why C# Accessibility Matters
  groups:
  - header: Accessibility Isn't Just Front-End
    items:
    - 'Failures often start in the back end: missing alt text, unclear validation, error states left out of API responses'
    - Missing accessibility metadata, and no localization support
    - When developers integrate accessibility into C#, the UI receives complete, meaningful, testable data
- type: body
  title: Accessibility Metadata in Models and DTOs
  groups:
  - header: What Every DTO Needs
    items:
    - Alt text for images and accessible names for controls
    - ARIA-related metadata and descriptive labels
    - Error messages and instructions
  - header: Example
    items:
    - A ProductDto needs an ImageAltText field alongside Name and ImageUrl — without it, the UI can't provide a meaningful description for screen reader users
- type: body
  title: Accessible Validation and Error Messaging
  groups:
  - header: Required Fields Need Real Messages
    items:
    - Use [Required(ErrorMessage = "...")] with clear, descriptive text — “Display name is required,” not a generic message
    - Alt text fields need their own required-field validation too
    - Clear error messages help users understand what went wrong and how to fix it
- type: body
  title: Consistent Naming and Localization
  groups:
  - header: Naming Conventions
    items:
    - 'Good: ImageAltText, ErrorMessage, AccessibleLabel, InstructionsText'
    - Avoid vague names like Alt, Msg, or Label
  - header: Localization
    items:
    - Alt text, ARIA labels, error messages, instructions, and button labels must all support localization
- type: body
  title: API Contracts as Accessibility Contracts
  groups:
  - header: If It's Not in the Contract, the UI Can't Invent It
    items:
    - An inaccessible DTO has just Name and ImageUrl
    - An accessible DTO adds ImageAltText as a first-class field, not an afterthought
- type: body
  title: Error States and ARIA Support
  groups:
  - header: Map API Responses to ARIA
    items:
    - A ValidationError model should carry Field, Message, and an IsInvalid flag
    - IsInvalid maps directly to aria-invalid, and the field maps to aria-describedby
- type: body
  title: Testing C# Accessibility
  groups:
  - header: Checklist
    items:
    - Does the DTO include alt text and accessible names?
    - Are error messages descriptive, with instructions included?
    - Are error states represented, and are localized strings used?
- type: list
  title: Recap
  header: C# Accessibility Integration Review
  items:
  - Accessibility failures often start at the data layer, not the UI
  - DTOs need alt text, accessible names, and descriptive error messages as first-class fields
  - Consistent naming makes accessibility metadata easy to find and use
  - API contracts must guarantee accessibility fields — the UI can't invent them
  - Error state fields like IsInvalid map directly to ARIA attributes on the front end
- type: list
  title: Key Takeaways
  header: C# Accessibility Integration
  items:
  - Accessibility is not only a front-end responsibility — it starts with your API contract
  - Treat accessibility metadata as a first-class citizen in every DTO
  - Consistent, localized naming keeps accessibility maintainable across the codebase
  - 'Up next: Angular Accessibility Integration'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/c-sharp-axe-core/setup.html
---

Accessibility is not only a front-end responsibility. Many failures originate in the back end — when models don't include alt text, validation messages are unclear, error states aren't represented in API responses, or metadata never reaches the UI. If the API omits accessibility fields, the UI cannot invent them reliably.

This lesson shows how to make C# models, DTOs, and API responses carry the accessibility metadata the UI needs: alt text and accessible names as first-class properties, descriptive `[Required]` validation messages, consistent naming conventions, localized strings, and explicit error states that map to `aria-invalid` and `aria-describedby`.
