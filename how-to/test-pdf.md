---
layout: how-to-test
title: PDF
permalink: /how-to-test/test-pdf/
---

<p>Testing PDFs requires  a combination of Acrobat's automated PDF checkers and manual and assistive  technology testing.</p>
<ul>
  <li>Acrobat's  automated PDF checker can help identify issues such as missing alternate text,  untagged content, and missing metadata such as a document title or language.</li>
  <li>Manual testing  is required to ensure usability, readability, and navigation.</li>
  <li>Assistive  technology testing using a keyboard and NVDA to identify usability and  functionality inconsistencies.</li>
</ul>
<p><strong>Attention! Acrobat Pro is the only version of Acrobat  that allows you to view and test PDF's accessibility.</strong></p>
<hr/>
<h2><step-number>1</step-number> Initial Visual Inspection</h2>
<p>Before beginning your review, quickly skim the document to  check for headings, lists, tables, and images. This will help you understand  the document's structure.<strong></strong></p>
<hr/>
<h2><step-number>2</step-number> Acrobat Automated PDF checker </h2>
<ol>
  <li><em>Open</em> <strong><em>Acrobat Pro</em></strong><em>.</em></li>
  <li><em>Open</em> the PDF file you want to check.</li>
  <li><em>Select</em> <strong>Accessibility</strong> in the <em>Tools panel</em> on the right side of the window.
    <example><img src="/assets/images/examples/pdf-tools-panel.jpg" alt="screen shot showing the location of the accessibility tool."/></example>
    <ul>
      <li>If Accessibility is not visible in the tools panel.</li>
      <li><em>Select</em> the <strong>Tools tab</strong>. Scroll down to the Protect &amp; Standardize section. Locate <strong>Accessibility</strong> and <em>select </em><strong>Add</strong>.<br>
     <example><img src="/assets/images/examples/pdf-add-accessibility-tool.jpg" alt="screen shot showing the location of the accessibility tool with the drop-down open showing close, add shortcut, learn more."/></example></li>
    </ul>
  </li>
  <li>Return to the PDF you opened by selecting the  file's name in the tab at the top.</li>
  <li>From the right Tools panel, select  Accessibility. This will open the Accessibility Checker, then select  Accessibility Check. In the dialog box that appears
    <ol>
      <li>Change <strong>Report Options</strong> to where you store accessibility test findings for the  project.</li>
      <li>In  the <strong><em>Checking Options</em></strong> section, ensure all the check options are selected.</li>
    </ol>
  </li>
  <li><em>Select</em><strong> Start Checking</strong>
    <ul>
      <li>Acrobat will process the document and provide a  detailed report on accessibility issues.</li>
      <li>The results will also be displayed in the  left-hand pane, with issues categorized by type (e.g., Document, Page Content, Forms).
      <example><img src="/assets/images/examples/pdf-accessibility-checker-dialog-box.jpg"  alt="screen shot showing steps 5a, 5b, and 6."/></example>    </li>
    </ul>
  </li>
  <li><strong>Review</strong> the checker results by selecting  the arrow to the right of each reported issue. This will help you understand  the problems encountered during the manual and screen reader testing.<br>
  <example><img src="/assets/images/examples/pdf-review-report.jpg" alt="screenshot showing the checker with the results open."/></example>  </li>
    <ul>
      <li>View the full report by <em>selecting</em> the <strong>Options</strong> icon and then <em>selecting</em> <strong>Show Report</strong>.</li>
      <li>To share the report as part of your  accessibility test report documentation, go to the location you selected in  Step 4. <br>
     <example><img src="/assets/images/examples/pdf-report-options.jpg" alt="screenshot showing report options"/></example></li>
    </ul>
</ol>
<hr/>
<h2><step-number>3</step-number> Manual Review</h2>
<h3>Verify Navigation and Accessibility  Features</h3>
<ul>
  <li>Verify that the document structure can be navigated only using a mouse.</li>
</ul>
<h4><strong>How to test</strong></h4>
<ol>
  <li>Test keyboard navigation (<em>using the Tab key and arrow keys</em>) to ensure all elements are accessible using a mouse and can be navigated efficiently without a mouse.</li>
  <li>Document findings.</li>
  <ul>
    <li>Note any accessibility issues found during testing and recommendations for improvements.</li>
    <li>Consider providing screenshots or examples for clarity.</li>
  </ul>
</ol>
<h3>Verify Color Contrast</h3>
<ul>
  <li>For color contrast specifically, ensure that  text meets the minimum contrast ratios outlined by <a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">WCAG 1.4.3</a> (4.5:1 for  normal text, 3:1 for large text).</li>
  <li>Manual inspection is required by using the <a href="https://mnit-dot-a11y.github.io/testing-environment/#color-contrast-analyzer-cca">Colour Contrast Analyzer</a>, especially if the  Accessibility Checker doesn&rsquo;t flag specific color contrast issues. </li>
</ul>
<h4><strong>How to test</strong></h4>
<ol>
  <li><em>Open</em> the <a href="https://mnit-dot-a11y.github.io/testing-environment/#color-contrast-analyzer-cca">Colour Contrast Analyzer</a> application  and check all the components.</li>
  <li>Document findings.</li>
  <ul>
    <li>Note any  accessibility issues found during testing and recommendations for improvements.</li>
    <li>Consider  providing screenshots or examples for clarity.</li>
</ul>
</ol>

<h3>Verify Use of Color</h3>
<ul>
  <ul>
    <li>Verify that color<strong></strong>is not the only  way of distinguishing information.</li>
    <li>Verify  that there is, in addition to color, shapes or text, to convey meaning.</li>
  </ul>
</ul>
<h4><strong>How to test</strong></h4>
<p>Review the document, focusing on colors used in forms,  charts and graphs and answer the following questions.</p>
<ol>
  <li>Is there some  visual differentiation between line or shape segments?</li>
  <li>If you couldn't see the color, can you understand the content or identify if something  is essential or required?</li>
  <li>Are labels  provided for pie or bar charts?</li>
</ol>
<p>If the answer is <strong><em>no,</em></strong> document the findings.</p>
<ul>
  <li>Note any accessibility issues found during testing and recommendations for improvements.</li>
  <li>Consider providing screenshots or examples for clarity.</li>
</ul>
<p>If <strong><em>yes</em></strong>, verify that the color used in the  graphic contrasts at least 3:1 against adjacent color(s).</p>
<ul>
  <li>Document findings.</li>
  <ul>
    <li>Note any accessibility issues found during  testing and recommendations for improvements.</li>
    <li>Consider providing screenshots or examples for  clarity.</li>
  </ul>
</ul>
<h3>Verify Reading Order</h3>
<p>You will need to check the document's reading order manually. This is often referred to as <strong>Walking the tag tree</strong>. Open the tags  panel (instruction below) and arrow down the tags to check the reading order. As you do, you will see a color box around the content in your document. As you  move down the list of tags, the highlighted text should follow the logical  reading order. If they are not, report on the inaccurate reading order.</p>
<ul>
  <li>Tags  should be semantic (headings, paragraphs, lists, tables, etc.).</li>
  <li>The first  heading should be an "H1," and only heading levels 1-6 should be used.</li>
  <ul>
    <li>Heading  levels should not be skipped (e.g., H2 followed by H4).</li>
    <li>Heading  levels can restart (e.g., H3 followed by H4, followed by H2).</li>
  </ul>
</ul>
<h4><strong>How to test</strong></h4>
<ol>
  <li><em>Open</em> the <strong>Accessibility Tags panel.</strong>
    <ul>
      <li>To  open the <em>Tags panel</em> for the first time, select <strong>View</strong> &gt; <strong>Show/Hide</strong> &gt; <strong>Navigation Panes</strong> &gt; <strong>Accessibility Tags</strong>.</li>
    </ul>
  </li>
  <li><em>Select</em> on the arrow next to the <strong>Tags</strong> in  the <strong>Accessibility Tags panel.</strong></li>
  <li><em>Select</em> the first tag in the list below  &lt;Sect&gt;. This should be an H1 tag. Verify that the document title is  highlighted with a colored box around it.<br>
  <example><img src="/assets/images/examples/pdf-tag-tree.jpg" alt="screen shot showing steps 2 and 3."/></example></li>
  <li>Use a mouse or keyboard with the arrow keys to  move down the tag tree; move down the list of tags and verify that the  highlighted content is in the correct reading order. The tags are similar&mdash;if  not identical to tags in HTML. The most notable difference is  the &lt;Figure&gt; tag, like the &lt;img&gt; tag in HTML.
    <ul>
      <li>If  tags are out of order, document findings by noting any accessibility issues found during testing and recommendations  for improvements.</li>
      <li>Consider providing screenshots or examples for  clarity.</li>
    </ul>
  </li>
</ol>
<h3>Verify Form and form fields.</h3>
<ul>
  <li>Ensure form fields have clear labels and  descriptive tooltips.</li>
  <li>Ensure the appropriate tab order has been set.</li>
  <li>Ensure hyperlinks have meaningful link text.  Avoid generic phrases like "click here" or "learn more."</li>
</ul>
<h4><strong>How to test</strong></h4>
<ol>
  <li>Run the Accessiblity Checker as outlined in Step 2.</li>
  <li>Open the Form Editing Mode.</li>
  <ul>
    <li>To access the Prepare Forms tool. From the <strong>top menu</strong>, navigate to <strong>Tools</strong> and select <strong>Prepare Form</strong>.</li>
  </ul>
  <li>Check Field Labels</li>
  <ul>
    <li>Ensure each form field has a clear, descriptive label.</li>
    <li>Right-click on a field, <em>select</em> <strong>Properties</strong> and <em>review</em> the <strong>Name and Tooltip fields</strong>.<br>
    <example><img src="/assets/images/examples/pdf-form-properties.jpg" alt="screen shot showing the text filed properites dialog box with the general tab active and the name and tooltip displayed."/></example></li>
  </ul>
  <li>Verify Field Type</li>
  <ul>
    <li>Ensure that the correct field type is used (e.g., text fields, checkboxes, radio buttons).</li>
  </ul>
  <li>Check Tab Order</li>
  <ul>
    <li>Ensure the tab order follows a logical flow from top to bottom and left to right.</li>
    <li><em>Use</em> the <strong>Tab key</strong> to navigate the form fields and confirm the intuitive order. Make sure you interact with all the input fields (checkboxes, radio         buttons, drop-downs, etc.), verify that you can move through with them and read that the order is correct.    </li>
  </ul>
  <li>Review Error Handling</li>
  <ul>
    <li>Test the form by entering invalid data to see if the screen reader announces error messages.</li>
    <li>Ensure that error messages are clear and tied to the relevant fields.</li>
  </ul>
  <li>Check instructions.
    <ul>
      <li>Check the instructional text is visible and accessible.</li>
    </ul>
  </li>
  <li>Document Findings.</li>
 <ul>
    <li>Note any accessibility issues found during testing and recommendations for improvements.</li>
    <li>Consider providing screenshots or examples for clarity.</li>
  </ul>
</ol>
<h3>Verify Tables</h3>
<ul>
  <li>Ensure the table can be interacted with a keyboard.</li>
	<li>Ensure table caption and row and or column headers are present.</li>
  <li>Confirm that tables are only used for tabular data and not for layout.</li>
</ul>
<h4><strong>How to test</strong></h4>
<ol>
  <li>Inspect the table tags.
 <ul>
      <li>Open  the <strong>Accessibility Tags panel. </strong></li>
      <li>Scroll down the  tag tree until you see &lt;table&gt;. Verify that the table is  properly tagged as &lt;table&gt; and that the rows &lt;td&gt; and headers  &lt;th&gt; are identified and correctly nested.</li>
   <example><img src="/assets/images/examples/pdf-table-tag-tree.jpg" alt="screenshot showing a table in the tag tree."/></example>  
 </ul>
  </li>
  <li>Verify the table has either a title or caption.</li>
  <li>Check navigation and reading order.
    <ul>
      <li><em>Use </em>the <em>Tab key</em> to navigate through the table. Ensure all cells are reachable and  read in the correct order.</li>
    </ul>
  </li>
  <li>Document Findings
    <ul>
      <li>Note any accessibility issues found during testing and  recommendations for improvements.</li>
      <li>Consider providing screenshots or examples for  clarity.</li>
    </ul>
  </li>
</ol>
<hr/>
<h2><step-number>4</step-number> Screen Reading Test</h2>
<ol>
  <li><em>Launch</em> <a href="https://mnit-dot-a11y.github.io/testing-environment/#nvda-non-visual-desktop-access">NVDA</a> screen reader.</li>
  <li><em>Open </em>the PDF. </li>
  <li>Verify and can navigate to and that the screen  reader announces:</li>
  <li>Headings:
      <ul>
      <li>Navigate to  the first heading using your screen reader&rsquo;s heading navigation commands (e.g.,  H for NVDA).</li>
      <li>Confirm that  headings are announced correctly and in the proper order.</li>
    </ul>
  </li>
  <li>Lists:
      <ul>
      <li>Navigate to  any lists (bulleted or numbered) using list navigation commands.</li>
      <li>Ensure the  screen reader correctly identifies the list and reads the items.</li>
    </ul>
  </li>
  <li>Tables:
     <ul>
      <li>Navigate to  any tables using table navigation commands.</li>
      <li>Verify that  the screen reader announces the table structure, including headers, rows, and  columns.</li>
    </ul>
  </li>
  <li>Check Links and Buttons
     <ul>
      <li>Navigate to  any hyperlinks and buttons using link navigation commands.</li>
      <li>Confirm that  links are clearly labeled and their destinations or actions are appropriately  conveyed.</li>
    </ul>
  </li>
  <li>Form Fields (if applicable)
      <ul>
      <li>If the PDF  includes form fields:</li>
      <li>Navigate to  each field using tab or form field navigation commands.</li>
      <li>Verify that  field labels are read clearly and that any instructions or error messages are  conveyed.</li>
    </ul>
  </li>
  <li>Inspect Images and Graphics
      <ul>
      <li>Navigate to  any images in the PDF.</li>
      <li>Check that the  alternative (alt) text is read aloud and accurately describes the image.</li>
    </ul>
  </li>
  <li>Check for Logical Reading Order
      <ul>
      <li>Move through  the document using the reading order commands (e.g., arrow keys).</li>
      <li>Ensure that  the content is read in a logical sequence, as intended.</li>
    </ul>
  </li>
  <li>Document Findings
      <ul>
      <li>Note any  accessibility issues found during testing and recommendations for improvements.</li>
      <li>Consider  providing screenshots or examples for clarity.</li>
    </ul>
  </li>
</ol>
<hr/>
<h2>Resources</h2>
<ul>
  <li><a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">Create  and verify PDF accessibility (Acrobat Pro)</a> – Adobe</li>
  <li><a href="https://www.w3.org/TR/WCAG20-TECHS/pdf">PDF  Techniques for WCAG 2.0</a> – W3C</li>
  <li><a href="https://webaim.org/techniques/acrobat/">PDF  Accessibility</a> - WebAIM</li>
  <li><a href="https://www.section508.gov/create/pdfs/">Create  Accessible PDFs</a> – Section 508</li>
</ul>