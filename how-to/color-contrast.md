---
layout: how-to-test
title: Color Contrast and Use of Color
permalink: /how-to-test/color-contrast/
---

There are two main accessibility considerations when using color in your web-based, native mobile, and desktop applications.

1.	**Color contrast**: Is the difference in lightness/darkness between two colors (background and foreground). Text, icons, and important graphics must have sufficient color contrast between colors for users who have low vision or who are colorblind. 
2.	**Use of color to convey information**: WCAG requires that we not use color alone (or visual characteristics) to convey information. Examples are when a chart uses color alone or when a site uses color-coded text to convey information. This is important for users who have any amount of color deficiency, or color blindness.

{: .divider }
## Color Contrast
When working with color, it is essential to remember that only brightness is visible to all users. Red text on a green background may disappear entirely for people who are color blind, have low vision, or view the site from outside.

The W3C Web Content Accessibility Guidelines (WCAG) 2.1 provide specific color contrast requirements with **one exception:** logos, incidental or decorative text and graphics, and disabled controls do not need to meet color contrast requirements.

- **Regular text and images of text** must have a contrast ratio of at least 4.5:1 between text and its background.
- **Large text and images of text** must have a contrast ratio of at least 3:1 between the text color and background color.
- **Non-Text Contrast** user interface components and their various states, and focus indicators must have a contrast ratio of at least 3:1 with the background color.


**Attention!:** The combination of Minnesota green (#78BE21) and white **will not be accessible at any point size or non-text contrast**.
<example>
    <img
    src="/assets/images/examples/how-to-text-color-minnesota-green.png"
    alt=" a button and icon examples using Minnestoa green">
  	</example>

Check out [WebAIM’s Contrast and Color Accessibility](https://webaim.org/articles/contrast/) article to learn more.

### How to Test Color Contrast

#### **Automated Testing**
Run a page scan using Deque’s axe DevTool. How to use Deque's axe Dev Tool can be found on the [Setting Up Your Testing Environment webpage](https://mnit-dot-a11y.github.io/testing-environment/).

**Attention!** Axe DevTool is excellent at identifying simple issues like solid-colored text on solid-colored backgrounds that do not meet contrast ratios. It’s terrible at identifying anything more complex, like text on background images, gradients, and different states for user interface components (like hover or focus) that do not meet contrast ratios. **You must manually review the page to verify that the color elements meet accessibility requirements**.


#### **Manual Testing**

Manual testing is completed using the Colour Contrast Analyser (CCA) tool. This tool is handy for checking colors in various applications, including documents or software, not just websites.

How to use CCA can be found on the [Setting Up Your Testing Environment webpage](https://mnit-dot-a11y.github.io/testing-environment/).

When conducting a manual color contrast check, it's important to identify and test interactive elements such as links, buttons, and menu links, and their states when focused or hovered over.

**Be sure to manually check color contrast for all types of digital content, including:**
**- Images containing text.**
**- Graphics, including charts, graphs, and maps.**
**- Instances of text and user interface elements that sit on top of background images or color gradients or state changes.**

#### **Testing State Changes**
<p>When testing the color contrast of an state changes such as focus or hover, you must use both the browser’s developer tools and the CCA tool.</p>
<ol>
  <li> To open the browser developer tools by either:
    <ol type="a">
      <li>Place your cursor over the browser window where you want to inspect, <em>right-click</em> the desired element on the page and <em>Select </em><strong><em>Inspect</em></strong> from the pop-up window.</li>
		<li>Using your keyboard, <em>Select</em> <strong>Ctrl+Shift+I</strong> or F12.</li>
	 </ol>
	</li>
<li>Go to the <em>Elements tab in the developer tool</em> and <em>right-click</em> on the highlighted element.</li>
   <li>In the pop-up window, <em>Select <strong>Force State</strong>,</em> then <em><strong>hover</strong></em>.</li>
<example>
    <img
    src="/assets/images/examples/how-to-test-color-force-state.png"
    alt="screenshot showing step 2.">
  	</example>

<li>Go to the <em>Styles tab</em> and look for the <em>hover </em>style.</li> 
   <li><em>Open</em> <strong>CCA</strong> and test the hover color against the background</li>
	<example>
	<img
		src="/assets/images/examples/how-to-test-color-hover-state.png"
		alt="screenshot showing steps 4 and 5.">
  </example>
</ol>

{: .divider }

## Use of Color {#color}
Some users cannot perceive color differences or may not perceive color the same way you do. Therefore, it is essential to avoid using color alone to communicate information. For example, “required fields are in red”. It is okay to communicate “required” using red text, but to communicate this information to people who cannot perceive color, there must be one or more ways to convey the same idea. For example, required fields could include “required” as part of the label.

Another example includes identifying different groups of data in a graph. If different colors represent different groups, they should also be distinguishable via other means. For instance, in a bar chart, the bars could differ by color but have different fill patterns; in a line chart, the lines could vary by color and have different shapes at each data point. Always include labels to identify each reported element.

Example of a accessible line chart with different shapes at each data point.
<example>
	<img
		src="/assets/images/examples/how-to-test-color-line-chart.jpg"
		alt="line chart showing different shapes at each data point">
  </example>
Check out WebAIM’s [Use of Color information](https://webaim.org/articles/contrast/#sc141) to learn more.

### **How to Test Use of Color**

There are no automated for this requirement; you have to review the content and design to ensure they do not have any items (like hyperlink, charts, and graphs) that rely on color as the sole means of communication.

#### **Testing Hyperlinks**
Review links and ensure they are not solely indicated by color. Links should also be underlined, bold, or displayed on a colored background.

#### **Testing Charts and Graphs**
Review the charts and graphs and answer the following questions.
- Is there some visual differentiation between line or shape segments? 
- If you couldn’t see the color, can you understand the content?
- Are axis labels, data labels and legends included?

**If the answer is no**, send the graphic back to the content owner for remediation.

**If the answer is yes**, Using CCA to verify that the colors used in the charts or graphs have a color contrast of at least 3:1 against adjacent color(s).

{: .divider }

## What to test for
{: .divider }

<div class="how-to-test-checklist-item">
<h3>Ensure text has sufficient contrast to the background color.</h3>
  <table class="column-2">
    <thead>
      <th scope="col">
        Pass
      </th>
      <th scope="col">
        Fail
      </th>
    </thead>
    <tbody>
    <tr>
      <td>
        <p>This text passes contrast</p>
      </td>
      <td>
        <p style="color:#78BE21">This text does NOT pass contrast</p>
      </td>
    </tr>  
    <tr>
      <td>
        <p style="color:#009999; font-size: 18pt">This text is large enough that it only has to meet a 3:1 color ratio</p>
      </td>
      <td>
        <p style="color:#009999">This text is the same color but smaller, and fails to meet a 4.5:1 color ratio</p>
      </td>
    </tr> 
    </tbody>
  </table>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure text over images and color gradients has sufficient contrast</h3>
  <strong>Note:</strong> All of the text must have sufficient color contrast.
<table class="column-2" style="background: /assets/images/background/assistive-technology-bg.png">
  <thead>
    <th scope="col">
      Pass
    </th>
    <th scope="col">
      Fail
    </th>
  </thead>
  <tbody>
  <tr style="background-image: linear-gradient(
  90deg,
  hsl(329deg 100% 44%) 0%,
  hsl(329deg 100% 44%) 7%,
  hsl(329deg 100% 44%) 13%,
  hsl(329deg 100% 44%) 20%,
  hsl(329deg 100% 44%) 27%,
  hsl(329deg 100% 44%) 33%,
  hsl(329deg 100% 44%) 40%,
  hsl(329deg 100% 44%) 47%,
  hsl(333deg 78% 52%) 53%,
  hsl(335deg 79% 60%) 60%,
  hsl(335deg 81% 66%) 67%,
  hsl(334deg 82% 71%) 73%,
  hsl(333deg 84% 76%) 80%,
  hsl(332deg 86% 80%) 87%,
  hsl(331deg 88% 85%) 93%,
  hsl(329deg 93% 89%) 100%
); color: #FFFFFF">
    <td>
      <p>This text passes contrast</p>
    </td>
    <td>
      <p>This text does NOT pass contrast</p>
    </td>
  </tr>  
  </tbody>
</table>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure that the different states of user interface components such as button and links have sufficient contrast</h3>
  <p><strong>Note:</strong> Default state, keyboard focus state, and hover state</p>
  <table class="column-2">
    <thead>
      <th scope="col">
        Pass
      </th>
      <th scope="col">
        Fail
      </th>
    </thead>
    <tbody>
    <tr>
      <td>
        <button>This button passes on hover</button>
      </td>
      <td>
        <button class="bad-contrast-button">This button does NOT pass on hover</button>
      </td>
    </tr>  
    </tbody>
  </table>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure meaningful graphical objects such as decorative images have sufficient contrast to their background.</h3>
  <p><strong>Note:</strong> 3:1 color contrast ratio</p>
  <table class="column-2">
    <thead>
      <th scope="col">
        Pass
      </th>
      <th scope="col">
        Fail
      </th>
    </thead>
    <tbody>
    <tr>
      <td>
        <span style="font-size:54px;">↻</span>
      </td>
      <td>
        <span style="color:#0FE000; font-size:54px;">↻</span>
      </td>
    </tr>  
    </tbody>
  </table>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure color alone is not used to convey information</h3>
  <p><strong>Note:</strong> Use of additional visual cues that do not rely on color alone</p>
  <table class="column-2">
    <thead>
      <th scope="col">
        Pass
      </th>
      <th scope="col">
        Fail
      </th>
    </thead>
    <tbody>
    <tr>
      <td>
  <img 
  src="/assets/images/examples/accessible-pie-chart-example.png" 
  alt="pie chart example with each slice labeled so it is accessible to color blind users"/>
      </td>   
      <td>
    <img
      src="/assets/images/examples/inaccessible-pie-chart-example.png"
      alt="pie chart example that is inaccessible to color blind users because it uses a side legend to label the slices">
      </td>
    </tr>  
    </tbody>
  </table>
</div>

## Related WCAG
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [1.4.3 Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

## Resources
- [WebAIM Color Contrast](https://webaim.org/articles/contrast/evaluating)