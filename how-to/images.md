---
layout: how-to-test
title: Images
permalink: /how-to-test/images/
---

## <step-number>1</step-number> Types of images
{: .divider }
Images must have text alternatives or alt text that describe the information or function they represent. The author must determine the text alternative depending on an image's usage, context, and content. For example, a bird's exact type and look in an image might be less relevant and described only briefly on a website about parks. Still, they may be appropriate on a website specifically about birds.

This tutorial demonstrates how to check for the appropriate alt text based on the image's purpose.

- **Informative Images:** Images, typically pictures, photos, and illustrations, convey important information or concepts. The alt text should be a short description that conveys the essential information the image presents. It can be a sentence or two, including prior punctuation. The alt text should not describe the image itself but the purpose it serves on the page.

- **Decorative Images:** These visuals are used purely for aesthetic purposes or “eye candy” and don’t convey meaningful information. Provide a null text alternative (alt="") when the only purpose of an image is to add visual decoration to the page to indicate that the image serves a decorative role and doesn’t require a description.

- **Functional Images:** Images that serve as links or buttons should have text alternatives that describe their function rather than just their appearance. For example, if you have an image of a printer icon that initiates a printing action, the alt text should convey this functionality, like “Print.”

- **Images of Text:** Readable text is sometimes presented within an image. If the image is not a logo, avoid text in images. In fact, some images of text can violate [WCAG 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html). However, if images of text are used, the text alternative should contain the exact words as in the image.

- **Complex Images such as Graphs and Diagrams:** When using images to present complex data or detailed information, it’s crucial to provide a comprehensive text description that conveys all the data and details in the image. This allows individuals who cannot see the image to understand its content.

- **Groups of images:** If multiple images convey a single piece of information, the text alternative for one image should convey the information for the entire group.

- **Image maps:** The text alternative for an image that contains multiple clickable areas should provide an overall context for the set of links. Also, each individually clickable area should have alternative text describing the link's purpose or destination.

For a quick overview of which category a particular image fits into, see the [alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) on the W3 website. 

## <step-number>2</step-number> How to test
### Automated Testing
{: .divider }

Perform a page scan using Deque's axe DevTools for image testing. The axe DevTools will help you identify simple issues like missing alt attributes on images or empty alt attributes on functional images. 

**Note:** The scan will not help you identify issues related to alternative text quality or whether an image should be marked as decorative and hidden from screen readers. You will need to work with the subject matter expert on the project.


### Manual testing
{: .divider }
A manual image test of each image must be performed to verify alt text quality. This ensures that decorative images are hidden from assistive technology, all text found in images of text is present in the alt text, and functional images have the appropriate alt text.

#### <strong>Getting started</strong>
- Open Chrome DevTools in your browser window (<span class="keyboard-key">F12</span>)
- Right-click and select "Inspect" on the image in the page you want to test.

## Informative Images
{: .divider }
- Check that the image owns an <code>alt</code> attribute.
- Ensure that the <code>alt</code> attribute is present and is not empty.
- Ensure that the alt attribute is present is not empty, such as <code>alt</code> or <code>alt=""</code>
- The <code>alt</code> attribute value / description of the image should be accurate and succinct. The image alternative should not consist of information that duplicates nearby text content.

{::nomarkdown}
<example>
  <img
    src="/assets/images/examples/how-to-images-meaningful-1.png"
    alt="cars at intersection">...
</example>
{:/}

### IMG
{% highlight html %}
<img alt="cars at intersection" >
{% endhighlight %}


### SVG
Some images are implemented using inline <code>SVG</code>. Text alternatives for these images can be defined by use of <code>role="img"</code> and <code>aria-label="I am the alt text"</code>. The <code>alt</code> attribute should not be on an element whose <code>role</code> is <code>role="img"</code> this is instead handled by <code>aria-label</code>. 

{% highlight html %}
<svg role="img" aria-label="I am the alt text">...</svg>
{% endhighlight %}

## Decorative Images
{: .divider }
- Ensure that the <code>alt</code> attribute is present and owns an empty or null value. <code>alt=""</code>.
- <strong>Note:</strong> <code>aria-hidden="true"</code> is not needed if an image has an empty or null alt attribute value <code>alt=""</code>.

{::nomarkdown}
<example>
  <img
    src="/assets/images/examples/how-to-images-decorative-1.png"
    alt="Inspecting an image in DevTools to check alt text, decorative image">
</example>
{:/}

{% highlight html %}
<img src="/images/cars.jpg" alt="">
{% endhighlight %}

## Functional Images
{: .divider }
- Ensure the <code>alt</code> attribute is present and owns a value that includes <strong>all</strong> of the text found in the image.
- Functional images are typically links or buttons so the alt text should define the purpose of the link instead of describing the image.

{::nomarkdown}
<example>
  <img
    src="/assets/images/examples/how-to-images-functional.png"
    alt="print icon functional image">
</example>
{:/}

- **Note:** Functional images can have empty or null alt attribute values <code>alt=""</code> if the text alternative is conveyed in the parent control's label. For example, <code>aria-label="Print page"</code>.

{% highlight html %}
<button aria-label="Print page">
    <img src="/assets/images/examples/how-to-images-functional.png" alt="">
</button>
{% endhighlight %}


## Images of Text
{: .divider }

- Sometimes text can't be easily created with HTML and CSS and an image must contain text. In this case, ensure the <code>alt</code> attribute is present and owns a value that includes <strong>all</strong> of the text found in the image. 
- Typically, the text is the most important part of the image. There is no need for the image itself to be described unless it adds value to the content of the page. 
- Consider logging a defect for [WCAG 1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) if it seems like there might be a viable workaround to add real text to the page vs. an image of text.

{::nomarkdown}
<example>
  <img
    src="/assets/images/examples/how-to-test-images-text.png"
    alt="screen shot showing DOT homepage with Developer tool Element tab active">
</example>
{:/}

{% highlight html %}
<img src="https://www.dot.state.mn.us/images/16template/templat/DOT-Logo-RGB-Reverse.png" alt="Minnesota Department of Transportation">
{% endhighlight %}

## Complex Images
{: .divider }

- Data visualizations, charts, and graphs can be very difficult to author alternative text for. Some features like charts and graphs may not be accessible themselves but there can be text alternatives nearby that can act as an accessible alternative.
- For complex images that are <code>img</code> elements, ensure that the image has an <code>alt</code> attribute and that its value communicates the general purpose of the image. This alt text does not need to contain all of the visual information as that may be too long for an appropriate alt text value. If the alt text does not describe all content in the image ensure there is content nearby, or linked to, that does contain all of the visual information in text form. 
- For charts and graphs, these features are typically not 100% accessible. Ensure there is content nearby, or linked to, that does contain all of the visual information in text form. For example, an accessible Excel download or HTML Table presenting the key visual information from the content found in the chart. 
- <strong>Note:</strong> It is important that all text alternatives to complex images must be in an accessible format to qualify as an accessible alternative.

{::nomarkdown}
<example>
  <img
    src="/assets/images/examples/how-to-test-images-complex-data.png"
    alt="Screenshot of a map with Developer Tool Inspect Elements tab open">
</example>
{:/}

{% highlight html %}
  <img
    src="/assets/images/examples/how-to-test-images-complex-data.png"
    alt="Active and accessibility project map">
{% endhighlight %}


## <step-number>3</step-number> What to test for
{: .divider }

<div class="how-to-test-checklist-item">
  <h3>Ensure meaningful images have alt text</h3>
  <p><strong>Note:</strong> The passing example has alt text that matches the text found in the image. The failing example uses the filename for the <code>alt</code> attribute value. Screen readers will announce the filename <code>DOT-logo-RGB-Reverse.png</code> which will create a confusing experience.</p>
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
  src="/assets/images/examples/how-to-images-dnr-logo.png" 
  alt="Minnesota Department of Transportation"/>
      </td>   
      <td>
  <img 
  src="/assets/images/examples/how-to-images-dnr-logo.png" 
  alt="DOT-logo-RGB-Reverse.png"/>
      </td>
    </tr>  
    </tbody>
  </table>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure decorative images are hidden from assistive technology</h3>
  <p><strong>Note:</strong> Passing example image has an empty <code>alt</code> attribute value. The failing example has a very long redundant description of the image. Not only is it too verbose, it has the same text as the nearby text content.</p>
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
        <div style="text-align: center;">
            <img 
    src="/assets/images/examples/how-to-test-images-decorative-example.png" 
    alt="" style="max-width: 200px; margin: 0 auto;" />
            <span style="display: block;">Two Trees</span>
        </div>
      </td>   
      <td>
      <div style="text-align: center;">
          <img 
  src="/assets/images/examples/how-to-test-images-decorative-example.png" 
  alt="icons of two trees with river between them" style="max-width: 200px; margin: 0 auto;" />
          <span style="display: block;">Two Trees</span>
      </div>
      </td>
    </tr>  
    </tbody>
  </table>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure complex images have a text alternative</h3>
  <p><strong>Note:</strong> The passing chart has a general text alternative describing what the image is but also references nearby text data for reference. <code>alt="Fruit chart, data below"</code>. The failing example owns an empty alt attribute value which hides the image from screen reader users and does not provide an alternative.</p>
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
  alt="Fruit chart, data below"/>
    <ul>
      <li>Watermelons 20%</li>
      <li>Grapes 10%</li>
      <li>Oranges 24%</li>
      <li>Apples 30%</li>
      <li>Bananas 16%</li>
    </ul>
      </td>   
      <td>
    <img 
  src="/assets/images/examples/accessible-pie-chart-example.png" 
  alt=""/>
      </td>
    </tr>  
    </tbody>
  </table>
</div>

## Related WCAG
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html)
- [2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#label-in-name)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value)

## Resources
- [W3C Images Tutorial](https://www.w3.org/WAI/tutorials/images/)
- [WebAIM Alternative Text](https://webaim.org/techniques/alttext/)