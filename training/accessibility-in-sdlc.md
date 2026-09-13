---
layout: training-lesson
title: Accessibility in SDLC
seoTitle: Accessibility in SDLC - Accessibility training
description: Where accessibility belongs in each phase of the SDLC, the artifacts to add now, and how to automate, measure, and govern it.
permalink: /training/accessibility-in-sdlc/
slug: accessibility-in-sdlc
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
---

Accessibility defects found late are expensive — they often require design or architecture changes. This lesson shows where accessibility belongs in every phase of the software development lifecycle so it's built in from the start rather than bolted on at the end.

It maps accessibility to requirements, design, development, code review, CI/CD, QA and UAT, and release monitoring, then gets practical: acceptance criteria in user stories, design tokens and component contracts, API contracts with accessibility metadata, PR checklists, automated Axe scans, manual test scripts, and onboarding. Automation, metrics, and governance — CI gates, precommit hooks, dashboards, and named accessibility champions — make it measurable and sustainable.

### You'll learn to

- Identify where accessibility fits in each SDLC phase
- Add concrete artifacts like acceptance criteria and PR checklists to your workflow
- Set up CI gates, precommit hooks, and dashboards for accessibility
- Assign ownership with team champions and a governance contact
- Use the copy/paste-ready developer checklist before opening a PR
