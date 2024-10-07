---
layout: how-to-test
title: Zoom and magnification
permalink: /how-to-test/zoom-magnification/
---

<p>It's important to understand that individuals with low  vision have various methods to enlarge content. They may use the zoom feature  in a browser to make text larger or a screen magnifier like Windows Magnifier  to adjust the default font size, modify text spacing on a website, or increase  the entire screen. Each method behaves differently, so it's crucial to ensure  that important content remains accessible no matter which method is used.</p>
<p>Three different WCAG Success Criteria&mdash;resize text, reflow,  and text spacing&mdash;collectively ensure that enlarging content does not compromise accessibility, maintaining usability for individuals with visual impairments.</p>
  <p>These tests should be performed using Chrome, Edge, or  Firefox browsers.</p>
  <h2>Resize Text</h2>
<h3>How to test</h3>
  <ul>
    <li><strong>Increase  Text Size</strong>: Use browser  settings to increase the text size to 200%. This can typically be done through  the browser's zoom function or by adjusting the text size in the settings.</li>
    <ul>
      <li><strong>Check  for Content Loss</strong>: Ensure all  content remains visible and functional. There should be no loss of information  or functionality, and text should not overlap or be cut off.</li>
      <li><strong>Verify  Layout</strong>: Confirm that the page  layout adjusts appropriately. Elements should reflow to fit the increased text  size without causing horizontal scrolling or breaking the layout.</li>
    </ul>
    <li><strong>Test  Different Browsers</strong>: Perform  the resizing test on multiple browsers to ensure consistent behavior across  different platforms.</li>
    <li><strong>Review  Captions and Images of Text</strong>:  Ensure that captions and images of text are excluded from the resizing  requirement, as they are exceptions to this criterion.</li>
  </ul>

 <example>
    <img 
        src="/assets/images/examples/how-to-browser-zoom-200.jpg" 
        alt="screen shot showing MnDOT website zoomed to 200%">
</example>

<h3>Related WCAG</h3>
  <p><a href="https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html">1.4.4 Resize  Test</a></p>
  <h2>Reflow</h2>
  <p>To test reflow, you  must zoom proportionally to increase the size of all content, including images.  Depending on screen size, zooming may trigger the "mobile" or  small-screen view of the web page.</p>
   <p>There are two different testing processes for testing reflow. One test uses Zoom in the browser, and the other uses the built-in Windows Magnifier.</p>
  <h3>Browser Zoom vs. Windows Magnifier</h3>
  <p><strong>Browser Zoom:</strong></p>
  <ul>
    <li><strong>Purpose</strong>: Simulates how low-vision or mild visual impairments  users might adjust the zoom level within a browser to read content more easily. The tests allow the tester to "see" how scaling  fonts impacts readability and content flow as a browser zoom scales the entire  page.</li>
    <li><strong>Use Cases</strong>: </li>
    <ul>
      <li><strong>Responsive  Design</strong>: Ensures the layout  adapts correctly at different zoom levels.</li>
      <li><strong>Text  Readability</strong>: Checks if the text  remains legible and doesn't overlap or get cut off.</li>
      <li><strong>Interactive  Elements</strong>: Verifies that  buttons, links, and forms are accessible and functional when zoomed in.</li>
    </ul>
  </ul>
  <p><strong>Windows Magnifier:</strong></p>
  <ul>
    <li><strong>Purpose</strong>: Provides a system-wide magnification, useful  for users who need to zoom into specific screen parts. The test simulates the  experience for someone severely visually impaired by using extreme  magnification, often only showing a small part of the screen at a time.</li>
    <li><strong>Use  Cases</strong>: </li>
    <ul>
      <li><strong>Accessibility  Testing</strong>: Ensures that all application  parts are accessible when magnified.</li>
      <li><strong>Pixel-Level  Inspection</strong>: Useful for  checking the clarity of images and icons at high magnification levels.</li>
      <li><strong>Navigation:</strong> Tests how easily users can navigate the  application using the magnifier.</li>
      <li><strong>Cursor  magnification:</strong> Evaluate webpages  for issues that may only arise when magnified to 400% zoom or higher.</li>
    </ul>
  </ul>
  <p><strong>Key Differences:</strong></p>
  <ul>
    <li><strong>Scope</strong>: Browser zoom affects only the content within  the browser, while Windows Magnifier affects the entire screen. This makes  Windows Magnifier the sole tool for evaluating the low-vision accessibility of desktop  applications where Browser Zooming is unavailable.</li>
    <li><strong>User  Experience: </strong>Browser Zoom is  more about adjusting the view within a single application, whereas Windows  Magnifier enhances visibility across all applications.</li>
    <li><strong>Differing  visual impairments:</strong> Browser  Zoom is typically used by those with less severe visual impairments. At the  same time, Windows Magnifier magnifies certain parts of the screen, commonly  required by those with more severe vision loss.</li>
  </ul>
  <p>Testing with both  tools ensures comprehensive accessibility and usability for users with varying  needs.</p>
<h3>How to test using the browser Zoom.</h3>
<ul>
    <li><em>Select</em> <strong><em>Ctrl plus +</em></strong> increase the zoom to <strong><em>400%</em></strong><em>.</em></li>
    <li>Reload the  page.</li>
  <li>Look for </li>
  <ul>
    <li>All text  is readable. All the text wraps within the visible area.</li>
    <li>The text  isn't hidden behind other text or images.</li>
    <li>Check that  all functionality is available. Can each control be reached and activated with  a keyboard?<br>
      <strong>Note:</strong> Sometimes, navigation menus change to an icon that can be clicked  to access the menu. This is fine.</li>
  </ul>
</ul>
<example>
	<img 
    src="/assets/images/examples/how-to-browser-zoom-400.jpg" 
    alt="screen shot showing MnDOT website with browser zoomed to 400%">
</example>
<h3>How to test using Windows Magnifier.</h3>
<ul>
  <li>Open the  Magnifier. <a href="https://mnit-dot-a11y.github.io/testing-environment/#windows-magnifier-on-windows-11">Using  Magnifier on Windows 11</a>.</li>
  <li>Set the  magnification level using the + or - buttons.</li>
  <li>Open the  testing browser to start the assessment.
    <ul>
      <li>During the  test, you can adjust the zoom and view if the magnifying glass is in the  foreground.</li>
      <li>If you  minimize the Magnifier window, you cannot adjust the zoom and view. </li>
    </ul>
  </li>
  <li>Look for 
    <ul>
      <li>All text  is readable. All the text wraps within the visible area.</li>
      <li>The text  isn't hidden behind other text or images.</li>
      <li>Images and icons  appear as they should, not pixelated or fragmented when zoomed into specific areas.</li>
      <li>Check that  all functionality is available. Can each control be reached and activated with a keyboard?<br>
        Note: Sometimes, navigation menus change to an icon that can be clicked to  access the menu. This is fine.</li>
      <li>If the  page is viewed at 100%, it requires no horizontal scrolling, and then the  duplicate page zoom to 400% shouldn't require horizontal scrolling.</li>
    </ul>
  </li>
</ul>

<example>
    <img 
    src="/assets/images/examples/how-to-magnifier-on-off.jpg" 
    alt="two screenshots showing MnDOT's website in normal veiw and another with magnifier on.">
</example>

<h3>Related WCAG</h3>
<p><a href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html">1.4.10 Reflow</a></p>
<h2>Text spacing</h2>
<p>Text spacing can be  tested using the <a href="http://html5accessibility.com/tests/tsbookmarklet.html">text spacing bookmarklet</a> in any browser. This bookmarklet helps users  and testers verify or achieve text spacing on a website. It is recommended that  you bookmark the bookmarklet for quick access.</p>
<p>Text spacing testing includes line height, letter, word, and paragraph spacing.</p>
<p>There should be no loss of content or functionality if changed to any of the following:</p>
<ul>
  <li>Line  height to at least 1.5 times the font size.</li>
  <li>Spacing  the following paragraphs to at least 2 times the font size.</li>
  <li>Letter  spacing to at least 0.12 times the font size.</li>
  <li>Word  spacing to at least 0.16 times the font size.</li>
</ul>
<h3>How to test </h3>
<p>Before you begin, open  a browser and bookmark the <a href="http://html5accessibility.com/tests/tsbookmarklet.html">text spacing bookmarklet</a>.</p>
  <p>Once the bookmarklet has  been bookmarked, go to a webpage and select the bookmarklet in your bookmark bar.</p>
  <p>Text spacing is already set to 1.4.12 Level AA WCAG criterion. Verify that increasing text spacing does not  result in a loss of content or functionality.</p>

  <example>
	<img 
    src="/assets/images/examples/how-to-line-spacing.jpg" 
    alt="two screenshots showing MnDOT's website in normal view and another with test spacing bookmarklet.">
    </example>

<h2>Related WCAG</h2>
<ul>
  <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html">1.4.12 Text Spacing</a></li>
</ul>