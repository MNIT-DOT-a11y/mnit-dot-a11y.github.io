---
layout: entry-desktop
title: "Link"  
description: "How to test accessible links for desktop applications"  
categories: controls  

keyboard:  
  tab: |  
    Focus visibly moves to the link (even if it is inline)  
  enter: |  
    Activates the link.  

screenreader:
  name:  |
    Its label and purpose is clear
  role:  |
    It identifies its role of link

wcag:  
  - name: Perceivable  
    list:  
      - criteria: Is easy to identify as interactive  
      - criteria: Color is not used as the only means of conveying information (hover, visited, etc.)  
  - name: Operable  
    list:  
      - criteria: Is keyboard operable  
      - criteria: The click/tap target area is no smaller than 44x44px  
      - criteria: The disabled and focus states have a 3:1 minimum contrast ratio against default  
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements  
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height  
  - name: Understandable  
    list:  
      - criteria: Its purpose is clear in the context of the whole screen or dialog  
  - name: Robust  
    list:  
      - criteria: Conveys the correct semantic role  
      - criteria: Expresses its state (if applicable)  
      - criteria: Meets criteria across platforms, devices, and viewports  
---

## Visual best practices

Links should be visually distinguishable as interactive elements. This means that users must be able to tell at a glance which elements are clickable or actionable. Ensure that:
- Links have a clear, distinct visual style (e.g., underlined, colored).
- Labels used on links accurately represent their destination or action (e.g., "Learn More" or "Download PDF").

Check for:
- Check if links are easily identifiable on the screen.
- Verify the clarity of the link text.
- Ensure that discrete hyperlinks are far enough apart so that the user can differentiate between them and has an easy time selecting each one.

## How to ensure text alternatives are available for non-text links

For links that use images instead of text, there must be alternative text to describe the action for assistive technology. This ensures that users relying on screen readers can understand what the link does.

- Use screen readers to ensure that each link is announced properly.
- Focus on the link and verify that its function and destination are described audibly by the screen reader.

## Color contrast

Text on links must meet appropriate color contrast requirements to be easily readable against their backgrounds. This ensures that people with low vision or color blindness can perceive the link's label.

- Use color contrast analyzers to ensure the contrast ratio meets the minimum 4.5:1 for text.

## Making sure links are easily clickable

Users must be able to activate links via clicking with a mouse or tapping on touch devices.

- Use a mouse to click the link and observe if it responds as expected.
- Ensure the link is sized appropriately for those with motor disabilities that may not be able to control the mouse (no smaller than 44px).

## Managing focus

When users navigate to a link using a keyboard, there must be a clear visual indication that the link is in focus. This allows users to know which element is currently selected.

1. Press **Tab** to move focus to the link.
2. Verify that a visible outline or other focus indication is clearly displayed.
3. Ensure the focus indication is sufficiently distinct from surrounding elements.

## Clear purpose

Links should clearly indicate their function in the context of the application. Users should not have to guess what a link does.

1. Read the link's label.
2. Ensure that the label provides sufficient information about the link's destination or action in the context of the screen or dialog.

## How to convey the link’s semantic role

A link should be properly identified as a link by assistive technologies. This means that the link's role should be conveyed clearly, ensuring compatibility with screen readers and other tools.

- Use a screen reader to navigate to the link and confirm that the link is announced as a link, not as a different element like a button.
- If a link has no role at all, this should be considered a WCAG failure. You can often tell if a link has no role by using a screen reader. If the name is announced but it is not indicated as a link, the user may not know that they are able to interact with it.

## Developer Notes

### Code Example

This example shows how to use a Hyperlink text element accessibly inside of a TextBlock:

{% highlight html %}
<StackPanel Width="200">
    <TextBlock Text="Privacy" Style="{StaticResource SubheaderTextBlockStyle}"/>
    <TextBlock TextWrapping="WrapWholeWords">
        <Span xml:space="preserve"><Run>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read the </Run><Hyperlink NavigateUri="http://www.contoso.com">Contoso Privacy Statement</Hyperlink><Run> in your browser.</Run> Donec pharetra, enim sit amet mattis tincidunt, felis nisi semper lectus, vel porta diam nisi in augue.</Span>
    </TextBlock>
</StackPanel>
{% endhighlight %}

### Exposing Accessible Names

- An accessible name is a short, descriptive text string that a screen reader uses to announce a UI element, including links. Set the accessible name for links so that they have a meaning that is important for understanding the content or interacting with the UI.
- By default, the accessible name of a link is based on the visible text. In cases where a link contains only an image, use [AutomationProperties.Name](https://learn.microsoft.com/en-us/dotnet/api/system.windows.automation.automationproperties.name) to provide a text-only equivalent of the link's intended action.

### Name length

- As enforced by UI Automation, the accessible name length cannot be greater than 2048 characters. If a string used for automatic accessible name determination exceeds that limit, the accessible name is truncated at that point.