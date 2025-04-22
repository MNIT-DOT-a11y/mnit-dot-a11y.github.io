---
layout: how-to-test
title: Using axe DevTools
permalink: /how-to-test/axe/
---

Axe DevTools is a powerful tool for identifying and addressing common accessibility issues on your website. It is available in Free and pro versions.

The free version of Axe DevTools can be used with Chrome, Edge, and Firefox. However, the pro version, which offers advanced features, is only available for use with Chrome and Edge.

For detailed instructions on installing Axe DevTools, please visit our [Setting Up Your Testing Environment](https://mnit-dot-a11y.github.io/testing-environment/#axe-browser-extension) page. Additionally, you can watch the [Automated Accessibility Testing with Axe DevTools](https://mn365.sharepoint.com/sites/MNIT_MNIT_DOTAccessibility/_layouts/15/stream.aspx?id=%2Fsites%2FMNIT%5FMNIT%5FDOTAccessibility%2FShared%20Documents%2FGeneral%2FAccessibility%20Training%20Videos%2FQA%20Training%20%2D%20Accessibility%20Testing%20and%20Tools%2FQA%20A11y%20%2D%20Course%205%20Automated%20Accessibility%20Testing%20with%20Axe%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E7a4209fa%2D9dc5%2D408d%2D83e0%2D6886da1833c5&isDarkMode=false) video to learn more about using Axe DevTools for effective accessibility testing.
<a id="accessing"></a>
## <step-number>1</step-number> Accessing Axe DevTools
{: .divider }

1. Open Developer Tools 
   - On Windows, press <kbd>Ctrl + Shift + I</kbd>, or right-click the page and select **Inspect**.
2. Select the Axe DevTools Tab:
   - Navigate to the axe DevTools tab in the developer tools panel (may require selecting **»** to reveal hidden tabs).
    <example>
      <img src="/assets/images/testing-tools/axe-tool-tab.jpg" alt="Axe DevTools tab highlighted within Developer Tools">
    </example>

## <step-number>2</step-number> Running a Scan
{: .divider }
There are two versions of Axe DevTools: a Pro and a [Free](#free) version. Follow the instructions for the version you have. 
### Using axe DevTools Pro Version (Chrome and Edge Only)
If you have an axe DevTools Pro license, you must log in to your Deque account within the Axe DevTools panel. This will unlock the Pro license features.
#### **Signing In**
1.	Look for a **Sign In** link within the axe DevTools panel in Chrome or Edge.
    <example>
      <img src="/assets/images/testing-tools/axe-sign-in.png" alt="screenshot showing sign in link">
    </example>
2.	Select the **Sign In link** and follow the prompts to log into your Deque account. Once you’re signed in, the axe DevTools interface will update to reflect your Pro status.
3.	In the Axe DevTools tab, select the Full Page Scan button.
    <example>
      <img src="/assets/images/testing-tools/ax-page-scan.jpg" alt="screenshot showing full page scan buttom">
    </example>
**Attention!** The scan will capture the page in its current state. If there are any interactive elements, such as accordions, dropdowns, or modal dialogs, you will need to “activate and freeze” them and then rescan to test for accessibility. You can also utilize the Interactive Elements that IGT supports to test multiple states without rerunning a scan. Here's a [video showing how to run](https://www.youtube.com/watch?v=AkkiV2o75EU) an interactive elements test. 
4.	 Save the scan by selecting the **Save Test** button.
    <example>
      <img src="/assets/images/testing-tools/axe-save-scan.png" alt="screenshot showing save test button">
    </example>
#### **Sharing Saved Test Record**
The full saved test report is a live representation of a saved test within a dedicated URL. The report contains a breakdown of all issues and the total number of accessibility issues identified and impact level (critical, serious, moderate, and minor). 
 - Navigate to a shared scan or select the "Share Test Record" button on your current saved scan. The link can be share with your team or vendor.
**Attention!** If the button is not active, you have not saved the scan.
    <example>
      <img src="/assets/images/testing-tools/axe-link-saved-report-button.png" alt="screenshot showing saved report button">
    </example>
   
### Using axe DevTools Free Version <a id="free"></a>
1.	Follow the steps outlined in [Accessing axe DevTools](#accessing).
2.	Verify that **Enable Best Practices** is selected.
     <example>
      <img src="/assets/images/testing-tools/axe-best-practice.png" alt="screenshot showing best practice selected">
    </example>
3.	In the Axe DevTools tab, select the Full Page Scan button to run a scan.
    <example>
      <img src="/assets/images/testing-tools/ax-page-scan.jpg" alt="Full Page Scan button in Axe DevTools interface">
    </example>
**Attention!** The scan will capture the page in its current state. If there are any interactive elements, such as accordions, dropdowns, or modal dialogs, you will need to “activate and freeze” them and then rescan to test for accessibility. 

## <step-number>3</step-number> Reviewing the Results (Same for both versions)
{: .divider }

The results **Overview** tab summarizes accessibility issues on a webpage, including a breakdown by type and severity. 
 <example>
      <img src="/assets/images/testing-tools/axe-overview-tab.png" alt="screenshot showing the overview tab">
    </example>
When you select an error, it reveals detailed information about the issue, such as the following:
1. **Highlight Element:** Points out the affected element on the page.
2. **Description & Guidance:** Explains the issue and often links to documentation.
3. **Code Snippet & Inspector:** Shows underlying code and a quick way to view it in the Element Inspector.
4. **Relevant Guidelines:** References applicable WCAG criteria or related standards.
<example>
  <img src="/assets/images/testing-tools/axe-scan-results.jpg" alt="Axe DevTools results panel showing identified issues after a scan">
</example>

More information about the Overview tab and how to understand the results can be found on the [Scan overview](https://docs.deque.com/monitor/8.0/en/scan-overview) page at Deque.

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

## Resources
{: .divider }

- [axe DevTools Extension](https://docs.deque.com/devtools-for-web/4/en/devtools-extension)- User guide 
- [Chrome DevTools Accessibility Features Reference](https://developer.chrome.com/docs/devtools/accessibility/reference)
- [W3C WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)- Useful for understanding common patterns and how ARIA attributes are intended to work.
- [MDN Web Docs: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - References for ARIA roles, states, and properties.
- [WebAIM: Semantic Structure](https://webaim.org/techniques/semanticstructure/) - Overview of how semantic structure affects accessibility.