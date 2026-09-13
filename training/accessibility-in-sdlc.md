---
layout: training-lesson
title: Accessibility in SDLC
seoTitle: Accessibility in SDLC - Accessibility training
description: Where accessibility belongs in each phase of the SDLC, the artifacts to add now, and how to automate, measure, and govern it.
permalink: /training/accessibility-in-sdlc/
section: workflow
section_title: Developer Workflow Integration
lesson_number: 15
lesson_total: 16
deck: Accessibility in SDLC.pptx
prev_slug: error-messaging-and-focus-patterns
prev_title: Error Messaging & Focus Interaction Patterns
next_slug: accessibility-in-code-review
next_title: Accessibility in Code Review
slides:
- type: title
  title: Accessibility in SDLC
  presenters:
  - Douglas Rubio – Accessibility Coach
  - Kim Lanahan-Lahti – MNIT DOT Digital Accessibility Coordinator
- type: agenda
  title: Agenda
  header: Accessibility in SDLC
  items:
  - Why accessibility in the SDLC matters
  - Where to integrate accessibility across each phase
  - Practical artifacts to add now
  - Automation, metrics, and governance
  - The developer checklist
- type: definitions
  title: Where Accessibility Belongs in the SDLC
  items:
  - term: Requirements & Design
    desc: Accessibility acceptance criteria and design-system patterns for color, focus, and interaction.
  - term: Development & Code Review
    desc: Accessible components and metadata, verified in every pull request.
  - term: CI/CD & QA
    desc: Automated scans and gating checks, plus manual keyboard, screen reader, and magnification testing.
  - term: Release & Monitoring
    desc: Tracking regressions and user feedback after launch.
- type: body
  title: Why Accessibility in SDLC Matters
  groups:
  - header: The Cost of Finding Issues Late
    items:
    - Defects found late are costly to fix and often require design or architecture changes
    - Embedding accessibility into the SDLC reduces rework, shortens remediation cycles, and improves product quality
    - Ensures compliance with WCAG and MNIT standards while making apps usable for everyone
- type: body
  title: Where to Integrate Accessibility
  groups:
  - header: Across Every Phase
    items:
    - 'Requirements: accessibility acceptance criteria in user stories'
    - 'Design: color, focus, and interaction patterns in mockups and component libraries'
    - 'Development: accessible components, metadata, and server contracts'
    - 'Code Review: accessibility patterns and automated test results in PRs'
    - 'CI/CD: automated scans and gating checks'
    - 'QA and UAT: manual keyboard, screen reader, and magnification checks'
    - 'Release and Monitoring: tracking regressions and user feedback'
- type: body
  title: Practical Steps and Artifacts to Add Now
  groups:
  - header: Build These Into Your Workflow
    items:
    - User stories that require accessible name, keyboard operability, error messaging, and contrast checks
    - Design tokens and a component library with accessible color and focus styles
    - API contracts with alt text, labels, and error metadata in DTOs
    - A short accessibility checklist in every PR template
    - Axe Core (or similar) integrated into unit and end-to-end tests
    - Short manual test scripts for keyboard, NVDA, zoom, and color checks
    - Core microtrainings and a hands-on lab required for new hires
- type: body
  title: Automation, Metrics, and Governance
  groups:
  - header: Make It Measurable
    items:
    - CI gates that fail builds for critical regressions and surface warnings for lower-severity issues
    - Precommit hooks that catch missing alt attributes and ARIA misuse
    - Dashboards tracking open defects, scan trends, and remediation time
    - An accessibility champion per team, plus a central governance contact
    - Release criteria that require a passing checklist and no high-severity findings
- type: body
  title: Developer Checklist, Copy/Paste Ready
  groups:
  - header: Before You Open a PR
    items:
    - Story includes accessibility acceptance criteria
    - Component has an accessible name and role
    - Keyboard interaction verified
    - Error messages are descriptive and programmatically associated
    - Color is not the only indicator of meaning
    - Contrast checks pass automated tests
    - Axe scan run and results attached to PR
    - Manual checks for NVDA and zoom completed for complex UI
- type: list
  title: Recap
  header: Accessibility in SDLC Review
  items:
  - Accessibility belongs in every phase — requirements through release and monitoring
  - Artifacts like PR checklists, design tokens, and API contracts make it concrete
  - CI gates, precommit hooks, and dashboards turn accessibility into something measurable
  - A copy/paste-ready checklist keeps every PR consistent
- type: list
  title: Key Takeaways
  header: Accessibility in SDLC
  items:
  - Defects caught early cost far less than defects caught in QA or production
  - Accessibility becomes sustainable when it's built into artifacts and automation, not bolted on
  - Assign an accessibility champion per team to keep ownership clear
  - 'Up next: Accessibility in GitHub Workflows'
- type: resources
  title: Resources
  header: Where to Learn More
  url: https://mnit-dot-a11y.github.io/ci-cd/setup-ci-cd.html
quiz:
- q: Why does finding accessibility defects late cost more?
  options:
  - Because they often require design or architecture changes
  - Because QA charges more
  - It doesn't — the cost is the same
  - Because browsers change
  answer: 0
  explain: Embedding accessibility early reduces rework, shortens remediation cycles, and improves quality.
- q: Which artifact belongs in the Requirements phase?
  options:
  - CI gates
  - Accessibility acceptance criteria in user stories
  - Dashboards
  - Release monitoring
  answer: 1
  explain: Stories should require accessible names, keyboard operability, error messaging, and contrast checks.
- q: What should a CI gate do for accessibility?
  options:
  - Ignore accessibility results
  - Fail builds for critical regressions and surface warnings for lower-severity issues
  - Only run on Fridays
  - Replace manual testing
  answer: 1
  explain: Automation makes accessibility measurable, but manual checks for NVDA and zoom are still part of the checklist.
- q: Who should own accessibility on a team, according to the training?
  options:
  - Nobody in particular
  - An accessibility champion per team plus a central governance contact
  - Only the QA lead
  - Only the product owner
  answer: 1
  explain: Clear ownership keeps accessibility sustainable instead of bolted on.
---

Hi everyone, and welcome back. I’m Doug Rubio, accessibility development coach for MNIT DOT. In today’s session, we’re going to focus on Accessibility in SDLC, a practical guide for embedding accessibility into every phase of your software development lifecycle so accessibility is built in — not bolted on.

This microtraining shows where accessibility belongs, what concrete artifacts and checks to add at each stage, and how to automate and measure progress so teams ship accessible features reliably.

## Why Accessibility in SDLC Matters

- Accessibility defects found late are costly to fix and often require design or architecture changes.
- Embedding accessibility into the SDLC reduces rework, shortens remediation cycles, and improves product quality.
- It ensures compliance with WCAG and MNIT standards while making your apps usable for everyone.

## Where to Integrate Accessibility in the SDLC

- Requirements — include accessibility acceptance criteria in user stories.
- Design — apply patterns for color, focus, and interaction in mockups and component libraries.
- Development — implement accessible components, metadata, and server contracts.
- Code Review — verify accessibility patterns and automated test results in PRs.
- CI/CD — run automated scans and gating checks.
- QA and UAT — include manual keyboard, screen reader, and magnification checks.
- Release and Monitoring — track accessibility regressions and user feedback.

## Practical Steps and Artifacts to Add Now

- User Stories and Acceptance Criteria — require accessible name, keyboard operability, error messaging, and contrast checks.
- Design Tokens and Component Library — publish accessible color tokens, focus styles, and component contracts.
- API Contracts — include alt text, labels, and error metadata in DTOs.
- Pull Request Checklist — add a short accessibility checklist to PR templates.
- Automated Tests — integrate Axe Core or similar into unit and end-to-end tests.
- Manual Test Scripts — provide short scripts for keyboard, NVDA, zoom, and color checks.
- Training and Onboarding — require new hires to complete core microtrainings and a short hands-on lab.

## Automation, Metrics, and Governance

- CI Gates — fail builds for critical accessibility regressions; surface warnings for lower-severity issues.
- Precommit Hooks — run linters that catch missing alt attributes and ARIA misuse.
- Dashboards — track open accessibility defects, scan trends, and remediation time.
- Ownership — assign an accessibility champion per team and a central governance contact for escalations.
- Release Criteria — require a passing accessibility checklist and no high-severity findings before production deploy.

## Developer Checklist Copy/Paste Ready

- Story includes accessibility acceptance criteria.
- Component has accessible name and role.
- Keyboard interaction verified.
- Error messages are descriptive and programmatically associated.
- Color is not the only indicator of meaning.
- Contrast checks pass automated tests.
- Axe scan run and results attached to PR.
- Manual checks for NVDA and zoom completed for complex UI.

## Conclusion

Embedding accessibility into the SDLC makes it predictable, measurable, and sustainable. When teams adopt these artifacts and automation, accessibility becomes part of how you ship — not an afterthought. In the next training, we’ll cover Accessibility in GitHub Workflows and show concrete CI examples and PR templates you can copy into your repos.
