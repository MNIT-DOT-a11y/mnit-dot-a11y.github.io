---
layout: how-to-test
title: Using axe DevTools
permalink: /how-to-test/axe/
---

Axe DevTools can be used across Google Chrome, Microsoft Edge, and Firefox to identify common accessibility issues.

Note that the Axe Pro subscription is **available only in Chrome and Edge**, not Firefox. You will be able to use axe in Firefox, but will **not** be able to sign-in to a Deque account for access to Pro features.

For more information on how to install axe DevTools, please review the [Setting Up Your Testing Environment](https://mnit-dot-a11y.github.io/testing-environment/#axe-browser-extension) page.

While using axe DevTools, focus on issues found in the WCAG 2.1 Level A and AA to match the Minnesota State Accessibility Standards.

## <step-number>1</step-number> Accessing Axe DevTools
{: .divider }

1. **Open Developer Tools:**  
   On Windows, press <kbd>Ctrl + Shift + I</kbd>, or right-click the page and select **Inspect**.
2. **Select the Axe DevTools Tab:**  
   In Developer Tools, locate and select the **Axe DevTools** tab. If not visible, it may be in a secondary menu.  
   
   **Note:** In Firefox, after installing for the first time, a browser restart may be required.

<example>
    <img src="/assets/images/testing-tools/axe-tool-tab.jpg" alt="Axe DevTools tab highlighted within Developer Tools">
</example>

## <step-number>2</step-number> Running a Scan
{: .divider }

1. In the **Axe DevTools** tab, scroll down to find the **Full Page Scan** button.
2. Click **Full Page Scan** to run an automated audit of the webpage.
3. **Note:** The scan will capture the page in the state that it's in prior to you accessing axe DevTools. Be sure to expand any accordions, dropdowns, or modal dialogs if you wish them to be included in the scan.
4. Enable **Best Practices** if not already on, and re-run the scan for broader checks.

<example>
    <img src="/assets/images/testing-tools/ax-page-scan.jpg" alt="Full Page Scan button in Axe DevTools interface">
</example>

## <step-number>3</step-number> Reviewing the Results
{: .divider }

After the scan, issues appear by severity and category. Selecting an issue provides details:

1. **Highlight Element:** Points out the affected element on the page.
2. **Description & Guidance:** Explains the issue and often links to documentation.
3. **Code Snippet & Inspector:** Shows underlying code and a quick way to view it in the Element Inspector.
4. **Relevant Guidelines:** References applicable WCAG criteria or related standards.

<example>
  <img src="/assets/images/testing-tools/axe-scan-results.jpg" alt="Axe DevTools results panel showing identified issues after a scan">
</example>

## Understanding HTML & ARIA (Accessible Rich Internet Applications)
{: .divider }

Understanding why certain issues appear can help you confirm their validity. If axe reports issues related to ARIA or semantics, consider using NVDA to verify the specific element highlighted. You should also consult the web, native mobile, and desktop checklists, which have the exact text that should be announced by NVDA when validating that an issue exists.

### Ask Yourself These Questions
In general, as you perform an automated test, ask these questions when axe highlights issues related to ARIA:
- Is the element’s purpose clear when you look at it or use it (e.g., can you tell it’s a button that should open something)?  
- Does the state of that element (expanded, collapsed, selected, pressed) visually match what is expected? If something is flagged as having incorrect ARIA but it clearly behaves differently on screen, that supports the idea that the code might not be communicating correctly to assistive technologies.
- Is the use of ARIA really necessary and can the same thing be accomplished with standard HTML elements? Remember, the first rule of ARIA is to **not use ARIA**. If the application can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of repurposing an element and adding an ARIA role, state or property to make it accessible, then do so.

Observing these alignments—or lack thereof—between what axe reports and what you see helps you confirm that the issues are meaningful and not false alarms.

### Common Issues
The following are some commonly encountered issue names you may encounter, along with methods to confirm their validity:

#### Missing or Incomplete Names/Labels
- **Common Axe Issue Names:**  
  - "Buttons must have an accessible name" (**button-name**)  
  - "Form elements must have labels" (e.g., **input-image-alt**, **label** issues)
- **Validation:** Using NVDA, press Tab to move focus to the flagged element. If NVDA announces "button" or "edit field" without any descriptive text, it confirms the issue reported by axe.

#### Landmarks and Regions
- **Common Axe Issue Names:**  
  - "Landmarks must have a unique role" (**landmark-unique**)  
  - "Ensures `<main>` landmark is not duplicated" (a variation of **landmark-\*** issues)
- **Validation:** Move focus to the flagged landmark element. NVDA should announce a meaningful landmark role (e.g., "main landmark" or "navigation landmark"). If it does not match the expected role, the issue identified by axe is confirmed.

#### ARIA Attributes and States
- **Common Axe Issue Names:**  
  - "ARIA attributes must have valid values" (**aria-valid-attr-value**)  
  - "ARIA attributes must be permitted for the element’s role" (`aria-allowed-attr`)  
  - "Elements with a role that require certain ARIA attributes must have them" (**aria-required-attr**)
- **Validation:** Interact with the highlighted element (e.g., click it if it’s supposed to expand). NVDA should announce the correct state (“expanded” or “collapsed”). If NVDA’s announcement doesn’t match what’s visually happening or what axe reports, the issue is confirmed.

#### Roles on Interactive Elements
- **Common Axe Issue Names:**  
  - "ARIA roles used must conform to valid roles" (**aria-valid-attr**)  
  - "ARIA role not appropriate for the element" (**aria-allowed-role**)
- **Validation:** Shift focus to the reported element and listen to how NVDA announces it. If NVDA’s announcement does not match the type of control the element appears to be (e.g., looks like a button but NVDA says otherwise), it confirms the axe findings.

#### Redundant or Conflicting Roles
- **Common Axe Issue Names:**  
  - "ARIA attributes must not be used if there is no corresponding role" (variation of **aria-valid-attr**)  
  - "Multiple conflicting ARIA attributes" (can appear under various ARIA rule names)
- **Validation:** Focus NVDA on the element. If NVDA’s announcement is confusing or repetitive (e.g., "button, link"), this confirms the inconsistency reported by axe.

#### Elements with Hidden Text or Content
- **Common Axe Issue Names:**  
  - "Hidden elements should not contain focusable content" (**aria-hidden-focus**)
  - "ARIA hidden element must not contain focusable elements" (**aria-hidden-body**)
- **Validation:** Focus on the element with NVDA. If NVDA reads descriptive information that is not visible and does not make sense in context, this matches the flagged issue from axe.

## Additional Considerations & Common Gotchas
{: .divider }

### False Positives
Some reported issues may not reflect actual problems. Consider the context and user experience to confirm if an issue is relevant.

### Dynamic Content and States Changes
axe DevTools **will only** scan the current state of elements (links, buttons, accordions etc.) on the page.  Before beginning a test, interact with the page to expose hidden elements or different states, such as opening menus, launching dialogs, or expanding accordions and re-run the scan.

#### Testing State Changes
When testing state changes such as focus or hover, you must use both the browser’s developer tools as well as axe.
1. To open the browser developer tools, you can either:
  - a. Place your cursor over the browser window where you want to inspect, *right-click* the desired element on the page and **Select**
  **Inspect** from the pop-up window.
  - b. Using your keyboard, **Select** **Ctrl+Shift+I** or F12.

2. Go to the **Elements tab in the developer tool** and *right-click* on the highlighted element.
3. In the pop-up window, *Select* **Force State**, then **hover**.
  <example>
    <img
    src="/assets/images/examples/how-to-test-color-force-state.png"
    alt="screenshot showing step 2.">
  </example>

4. Go to the *Styles tab* and look for the **hover** style.
5. Re-run the scan.

### If Results Differ Between Browsers
Tests may vary by browser due to differences in how each handles certain page elements. Focus on consistent issues that clearly affect users and be sure to perform automated tests in both Chrome/Edge and Firefox.

### Color Contrast
If reported contrast issues seem unclear, especially with complex backgrounds, it may help to reference additional testing steps noted in the [Color Contrast Testing](https://mnit-dot-a11y.github.io/how-to-test/color-contrast) page.

## Resources
{: .divider }

- [axe DevTools](https://www.deque.com/axe/devtools/)  
axe DevTools homepage
- [Chrome DevTools Accessibility Features Reference](https://developer.chrome.com/docs/devtools/accessibility/reference)
- [axe DevTools Rules and Remediation Advice from Deque University](https://dequeuniversity.com/rules/axe/)
- [W3C WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)  
  Useful for understanding common patterns and how ARIA attributes are intended to work.
- [MDN Web Docs: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)  
  References for ARIA roles, states, and properties.
- [WebAIM: Semantic Structure](https://webaim.org/techniques/semanticstructure/)  
  Overview of how semantic structure affects accessibility.