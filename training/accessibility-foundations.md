---
layout: training-lesson
title: Accessibility Foundations
seoTitle: Accessibility Foundations - Accessibility training
description: 'The starting point for all accessibility work at MNIT DOT: what accessibility means, the POUR principles, WCAG, and who we build for.'
permalink: /training/accessibility-foundations/
section: foundations
section_title: Accessibility Foundations
lesson_number: 1
lesson_total: 16
deck: Accessibility Foundations.pptx
next_slug: html-accessibility-fundamentals
next_title: HTML Accessibility Fundamentals
slides:
- type: title
  title: Accessibility Foundations
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Accessibility Foundations
  items:
  - What accessibility means at DOT
  - The POUR principles
  - 'WCAG: our shared standard'
  - Who we're building for
  - Accessibility across the SDLC
- type: definitions
  title: The POUR Principles
  items:
  - term: Perceivable
    desc: Users must be able to see, hear, or otherwise sense the content.
  - term: Operable
    desc: Users must be able to interact using a keyboard, mouse, touch, or assistive technology.
  - term: Understandable
    desc: Content and interactions must be clear and predictable.
  - term: Robust
    desc: The application must work with a wide range of assistive technologies.
- type: body
  title: Why Accessibility Matters
  groups:
  - header: Not Optional at DOT
    items:
    - Ensures every person can use our applications, regardless of ability, device, or assistive technology
    - Part of our development standards and testing expectations
    - A responsibility to the public we serve
- type: body
  title: WCAG Is Our Standard
  groups:
  - header: Web Content Accessibility Guidelines
    items:
    - Defines the criteria we test against and the requirements developers must meet
    - You don't need to memorize every criterion
    - You need to understand how your decisions affect accessibility
  - header: What Supports WCAG Compliance
    items:
    - Semantic HTML
    - Providing labels
    - Ensuring keyboard access
    - Maintaining predictable focus behavior
- type: body
  title: Who We're Building For
  groups:
  - header: Assistive Technology Users
    items:
    - Screen readers, magnification tools, high contrast modes, speech input, alternative keyboards
  - header: Temporary & Situational Limitations
    items:
    - A broken wrist, a bright sunlit room, a noisy environment
    - Accessibility benefits everyone, not just people with permanent disabilities
- type: body
  title: Accessibility Across the SDLC
  groups:
  - header: Design → Development → QA
    items:
    - Begins at design, continues through development, is validated in QA
  - header: Shared Responsibility
    items:
    - Developers build accessible components from the start
    - QA verifies accessibility through manual and automated testing
    - Together, accessibility becomes part of the workflow, not a last-minute fix
- type: body
  title: A Mindset, Not a Checklist
  groups:
  - header: Think Users, Interactions, Barriers
    items:
    - Accessibility is a way of thinking, not a one-time task
    - Understanding the foundations makes every decision more intentional
    - Sets the stage for every training that follows
- type: list
  title: Recap
  header: Accessibility Foundations Review
  items:
  - What accessibility means and why it's required at DOT
  - 'The four POUR principles: Perceivable, Operable, Understandable, Robust'
  - WCAG as our shared testing standard
  - 'Who benefits: permanent, temporary, and situational limitations'
  - How Design, Development, and QA share responsibility
- type: list
  title: Key Takeaways
  header: Accessibility Foundations
  items:
  - Accessibility is not optional — it's part of our development standards
  - POUR gives us a shared vocabulary for accessible design
  - Accessibility is a mindset that shapes every decision you make
  - 'Up next: HTML Accessibility Fundamentals'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/how-to-test/
quiz:
- q: What do the four POUR principles stand for?
  options:
  - Perceivable, Operable, Understandable, Robust
  - Practical, Organized, Usable, Responsive
  - Perceivable, Optional, Uniform, Readable
  - Performance, Output, Usability, Reliability
  answer: 0
  explain: 'POUR is the foundation of WCAG: content must be Perceivable, Operable, Understandable, and Robust.'
- q: Which statement best describes how MNIT DOT treats accessibility?
  options:
  - It is a nice-to-have that QA handles at the end
  - It is part of our development standards, testing expectations, and responsibility to the public
  - It only applies to public-facing marketing pages
  - It is the designer's responsibility alone
  answer: 1
  explain: At DOT, accessibility is not optional — it's part of our standards and our responsibility to the public.
- q: Which of these is an example of a situational limitation that accessible design helps with?
  options:
  - Using a screen reader
  - Using an alternative keyboard
  - Trying to use an app in bright sunlight
  - Using high contrast mode
  answer: 2
  explain: Situational limitations — like bright sunlight or a noisy room — affect everyone, which is why accessibility benefits all users.
- q: According to the training, accessibility is best described as…
  options:
  - A checklist to complete before release
  - A QA sign-off step
  - A mindset — a way of thinking about users, interactions, and barriers
  - A browser setting
  answer: 2
  explain: Accessibility is not a checklist; it's a mindset that makes every development decision more intentional.
---

Hi everyone and thank you for taking this training. I’m Doug Rubio, accessibility development coach for MNDOT.  In this session, we’re going to cover Accessibility Foundations. This is the starting point for all accessibility work at MNIT DOT. Before we test, before we code, before we integrate tools, we need a shared understanding of what accessibility is, why it matters, and how it shapes the way we build applications.

Accessibility is about ensuring that every person can use our applications regardless of ability, device, or assistive technology. At DOT, accessibility is not optional. It is part of our development standards, our testing expectations, and our responsibility to the public.

Let’s begin with the core principles. Accessibility is guided by four major concepts known as POUR. Perceivable, Operable, Understandable, and Robust. Perceivable means users must be able to see, hear, or otherwise sense the content. Operable means users must be able to interact with the interface using a keyboard, mouse, touch, or assistive technology. Understandable means the content and interactions must be clear and predictable. Robust means the application must work with a wide range of assistive technologies.

These principles come from the Web Content Accessibility Guidelines, also known as WCAG. WCAG is the standard we follow at MNIT DOT. It defines the criteria we test against and the requirements developers must meet. You don’t need to memorize every criterion, but you do need to understand how your development decisions affect accessibility. For example, choosing semantic HTML, providing labels, ensuring keyboard access, and maintaining predictable focus behavior all directly support WCAG compliance.

Now let’s talk about the user experience. When we build accessible applications, we’re building for people who use screen readers, magnification tools, high contrast modes, speech input, or alternative keyboards. We’re also building for people with temporary limitations, like a broken wrist, or situational limitations, like trying to use an app in bright sunlight. Accessibility benefits everyone.

At DOT, accessibility is part of the development lifecycle. It begins at design, continues through development, and is validated in QA. Developers are responsible for building accessible components from the start. QA is responsible for verifying accessibility through manual and automated testing. When both teams work together, accessibility becomes a natural part of the workflow instead of a last-minute fix.

Before we move into the next training, I want to emphasize one key point. Accessibility is not a checklist. It is a mindset. It is a way of thinking about users, interactions, and barriers. When you understand the foundations, every decision you make as a developer becomes more intentional and more inclusive.

Thank you for joining me for this foundational session. In the next training, we will move into HTML Accessibility Fundamentals, where we’ll look at how semantic structure supports accessibility and how developers can build interfaces that assistive technologies can understand.
