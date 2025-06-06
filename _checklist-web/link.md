---
layout: entry
title:  "Link"
description: "How to code and test accessible links for the Web"
categories: nav main
order: 1

keyboard:
  tab: |
    Focus visibly moves to the link.
  enter: |
    Activates the link.

mobile:
  swipe: |
    Focus moves to the link
  double tap: |
    Activates the link

screenreader:
  name:  |
    Its purpose is clear
  role:  |
    It identifies itself as a link

gherkin-keyboard: 
  - when:  |
      the tab key to move focus to a link
    result: |
      focus is strongly visually indicated
  - then:  |
      the enter key to activate the link
    result: |
      my browser goes somewhere

gherkin-mobile:
  - when:  |
      swipe to focus on a link
  - then:  |
      double tap with the link in focus
    result: |
      my browser goes somewhere

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as interactive
      - criteria: Color or weight are not used as the only means of conveying it is a link
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area is no smaller than 44x44px
      - criteria: The focus state has a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: Its purpose is clear in the context of the whole page
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role
      - criteria: Expresses its state (if applicable)
      - criteria: Meets criteria across platforms, devices and viewports
---

## Verify Meaningful and Unique Link Text
When performing accessibility testing, it's crucial to verify that the text of each link is both meaningful and unique. This ensures that users, especially those using screen readers, can understand the purpose of the link without needing additional context. Here are some key points to consider:

1.	Meaningful Text: The link text should clearly describe the destination or action. Avoid using generic phrases like "click here" or "read more." Instead, use descriptive text that provides context, such as "Download the accessibility testing checklist" or "Learn more about our services."
2.	Unique Text: Each link on a page should have unique text to avoid confusion. If multiple links lead to different destinations, their text should reflect those differences. For example, instead of having multiple "Learn more" links, specify "Learn more about accessibility testing" and "Learn more about our services."
3.	Links without Content: Navigate the page using only the links (for example, by tabbing through them) to confirm that each link’s purpose is clear from its text alone. This mimics how screen reader users may interact with the page.

By ensuring that link text is meaningful and unique, you enhance the overall accessibility of your content, making it easier for all users to navigate and understand your website


## Links vs buttons

### If it goes somewhere, it's `<a>` link.

- When the user clicks a link, they are taken to a different location in the site.
  - Either another page or even another area of the same page
- A link can look like a big shiny button but it must be coded as `<a>` link

### If it does something, it's a `<button>`

- Buttons cause an action to occur on the same page
  - Submit a form (even when submission takes you to a new page)
  - Open a menu
  - Launch a modal
  - Expand details
- A button can look like a link, but it must be coded as a `<button>`

[Link Developer Code Examples and Guidance](/components/link.html)

