---
layout: training-lesson
title: C# Accessibility Integration
seoTitle: C# Accessibility Integration - Accessibility training
description: Embed accessibility metadata, validation messages, and error states in your C# models, DTOs, and API contracts.
permalink: /training/csharp-accessibility-integration/
section: language-specific
section_title: Language-Specific Accessibility Integration
lesson_number: 11
lesson_total: 16
deck: C# Accessibility Integration.pptx
prev_slug: nvda-basics
prev_title: NVDA Basics
next_slug: java-accessibility-integration
next_title: Java Accessibility Integration
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
quiz:
- q: Why does accessibility matter at the C# data layer?
  options:
  - It doesn't — accessibility is a front-end concern
  - If the API omits alt text, labels, or error metadata, the UI cannot compensate for it
  - C# renders the HTML
  - Screen readers read C# directly
  answer: 1
  explain: Many failures originate in the back end. The UI can't invent alt text or error messages the API never sent.
- q: Which property naming is preferred for accessibility metadata?
  options:
  - Alt
  - Msg
  - ImageAltText
  - Label
  answer: 2
  explain: Clear names like ImageAltText, ErrorMessage, AccessibleLabel, and InstructionsText make the purpose obvious.
- q: How should required-field validation messages be written?
  options:
  - Left as the framework default
  - Descriptive, like 'Display name is required.'
  - As error codes only
  - Omitted for performance
  answer: 1
  explain: '[Required(ErrorMessage = "Display name is required.")] tells users what went wrong and how to fix it.'
- q: What does an IsInvalid flag in a ValidationError map to on the front end?
  options:
  - aria-label
  - aria-invalid
  - role='button'
  - tabindex
  answer: 1
  explain: Explicit error states let the UI set aria-invalid and link messages with aria-describedby.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on C# Accessibility Integration, an essential part of ensuring that accessibility metadata, error messaging, and UI behaviors are correctly delivered from the server side to the front end.

C# plays a critical role in accessibility because it provides the data, validation, and API responses that your Angular, Java, or other front-end frameworks rely on. When accessibility is missing at the data layer, the UI cannot compensate for it. This training will help you understand how to embed accessibility metadata directly into your C# models, DTOs, and API responses so your applications remain usable and understandable for all users.

This session builds on the HTML, ARIA, Forms, and Keyboard modules you completed earlier. Now we will shift our attention to the server side and learn how to ensure accessibility is supported end-to-end.

## Why C# Accessibility Matters

Accessibility is not only a front-end responsibility. Many accessibility failures originate in the back end when:

- models do not include alt text
- validation messages are unclear or missing
- error states are not represented in API responses
- accessibility metadata is not passed to the UI
- localization is not supported

C# accessibility supports several WCAG criteria, including:

- Labels (3.3.2)
- Error Identification (3.3.1)
- Error Suggestions (3.3.3)
- Name, Role, Value (4.1.2)

When developers integrate accessibility into C#, they ensure that the UI receives complete, meaningful, and testable data.

## Accessibility Metadata in Models and DTOs

Your models and DTOs must include accessibility metadata so the UI can render accessible components.

Examples include:

- alt text for images
- accessible names for controls
- ARIA-related metadata
- descriptive labels
- error messages
- instructions

### Example: Adding Alt Text to a DTO

```csharp
public class ProductDto
{
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public string ImageAltText { get; set; } // Required for accessibility
}
```

Without ImageAltText, the UI cannot provide meaningful descriptions for screen reader users.

## Accessible Validation and Error Messaging

Server-side validation must provide clear, descriptive, and actionable error messages.

Example: Required Fields

```csharp
public class UserProfileDto
{
    [Required(ErrorMessage = "Display name is required.")]
    public string DisplayName { get; set; }
    [Required(ErrorMessage = "Profile image URL is required.")]
    public string ProfileImageUrl { get; set; }
    [Required(ErrorMessage = "Alt text is required for profile images.")]
    public string ProfileImageAltText { get; set; }
}
```

Clear error messages help users understand what went wrong and how to fix it.

## Consistent Naming Conventions

Accessibility metadata must be named clearly and consistently.

Good examples:

- ImageAltText
- ErrorMessage
- AccessibleLabel
- InstructionsText

Avoid vague names like:

- Alt
- Msg
- Label

Clear naming ensures developers understand the purpose of each property.

## Localization and Accessibility

Accessibility metadata must support localization.

Examples:

- alt text
- ARIA labels
- error messages
- instructions
- button labels

### Example: Localized Alt Text

```csharp
var altText = Localizer["ProfileImageAltText"];
```

Localization ensures that accessibility metadata is meaningful for all users.

## API Contracts as Accessibility Contracts

Your API contract must guarantee that accessibility metadata is present. If the API omits accessibility fields, the UI cannot invent them reliably.

#### Inaccessible API Example

```csharp
public class ProductDto
{
    public string Name { get; set; }
    public string ImageUrl { get; set; }
}
```

#### Accessible API Example

```csharp
public class ProductDto
{
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public string ImageAltText { get; set; }
}
```

Accessibility metadata must be treated as first-class citizens in your API.

## Error States and ARIA Support

Your API should provide explicit error states that the UI can map to ARIA attributes .

Examples:

- aria-invalid="true"
- aria-describedby="error-id"

### Example: Error State in API Response

```csharp
public class ValidationError
{
    public string Field { get; set; }
    public string Message { get; set; }
    public bool IsInvalid { get; set; } // Maps to aria-invalid
}
```

This ensures the UI can provide accessible feedback.

#### Testing C# Accessibility

Developers should test accessibility at the API level.

Checklist:

- Does the DTO include alt text?
- Are error messages descriptive?
- Are instructions included?
- Are accessible names present?
- Are error states represented?
- Are localized strings used?

Testing early prevents issues from reaching QA.

### Conclusion

C# Accessibility Integration ensures that accessibility metadata, error messaging, and UI behaviors are supported end-to-end. When you embed accessibility into your models, DTOs, and API responses, you create interfaces that remain readable, understandable, and usable for everyone.

In the next training, we will move into Angular Accessibility Integration, where you will learn how to apply accessibility patterns directly in Angular components, templates, and services.
