---
layout: how-to-test
title: Using axe DevTools
permalink: /how-to-test/axe/
---

Axe DevTools can be used across Google Chrome, Microsoft Edge, and Firefox to quickly identify common accessibility issues.

Note that the axe Pro subscription is **available only in Chrome and Edge**, not Firefox. You will be able to use axe in Firefox, but will **not** be able to sign-in to a Deque account for access to Pro features.

For more information on how to install axe DevTools, please review the [Setting Up Your Testing Environment](https://mnit-dot-a11y.github.io/testing-environment/#axe-browser-extension) page.

While using axe DevTools, you should only focus on issues found in the WCAG 2.1 A and WCAG 2.1 AA categories. These are the guideliens that the Minnesota State Accessibility Standard requires we follow.

## <step-number>1</step-number> Accessing Axe DevTools
{: .divider }

1. **Open Developer Tools:**  
   On Windows, press <kbd>Ctrl + Shift + I</kbd> to open the browser’s Developer Tools, or right-click anywhere on the page and select **Inspect**.
   
2. **Select the Axe DevTools Tab:**  
   In the Developer Tools interface, find and select the **Axe DevTools** tab. If it’s not immediately visible, it may appear in a secondary menu or overflow area.

**NOTE**: In Firefox, if you have just installed the extension for the first time, you may need to restart the browser for it to appear. You will only need to do this once.

<example>
    <img src="/assets/images/testing-tools/axe-tool-tab.jpg" alt="Axe DevTools tab highlighted within Developer Tools">
</example>

## <step-number>2</step-number> Running a Scan
{: .divider }

1. In the **Axe DevTools** tab, scroll down and locate the **Full Page Scan** button.
2. Click **Full Page Scan** to perform a comprehensive automated audit of the current webpage.
3. Enable **Best Practices** if it is not already turned on. If you toggle it, re-run the scan for a more thorough review.

<example>
    <img src="/assets/images/testing-tools/ax-page-scan.jpg" alt="Full Page Scan button in Axe DevTools interface">
</example>

## <step-number>3</step-number> Reviewing the Results
{: .divider }

When the scan finishes, you’ll see a list of issues organized by severity and category. Clicking on an individual issue reveals additional details:

- **Highlight Element:** Pinpoints the affected element in the rendered page.
- **Description & Guidance:** Explains the issue and typically includes a link to further documentation or best practices.
- **Code Snippet & Inspector:** Shows the relevant code snippet. Using the “</>” button takes you directly to the Element Inspector to view the underlying HTML.
- **Relevant Guidelines:** References applicable WCAG criteria or other standards to contextualize what impact the issue may have on those with disabilities.

<example>
    <img src="/assets/images/testing-tools/axe-scan-results.jpg" alt="Axe DevTools results panel showing identified issues after a scan">
</example>

## Additional Considerations & Common Gotchas
{: .divider }

### False Positives

Some flagged issues may be false positives due to unusual code structures or dynamically generated content. Validate findings against the actual HTML and user experience.

### Dynamic Content & States
  
  Elements that change based on user interaction (e.g., modals, dropdowns, hover/focus states) may not be fully tested by a single scan. Interact with the page to reveal hidden elements or states, then re-run or inspect flagged issues.

  Ensure that dialogs, popovers, and other elements are activated prior to beginning a scan, or run an initial test and then re-scan once they have been opened.

### If Results Differ Between Browsers
  
  Although axe strives for consistency, certain browser-specific behaviors or extensions can produce differing results. Check consistency across multiple browsers and ensure you focus on actual user-impacting issues.

### Color Contrast
  
  While axe provides automated contrast checks, ensure that you verify if results are unclear, especially for gradients, background images, or partially transparent overlays. To verify color contrast issues, follow the steps found on the [Color Contrast Testing](https://mnit-dot-a11y.github.io/how-to-test/color-contrast) how-to page.
