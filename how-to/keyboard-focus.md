---
layout: how-to-test
title: Keyboard and Focus
permalink: /how-to-test/keyboard-focus/
---

Manual testing is not difficult or time consuming once you understand keyboard interactions.

## <step-number>1</step-number> Test with the keyboard only
{: .divider }

It is crucial to **test with only the keyboard first**, without the screen reader activated.

### Why keyboard testing is so important

- Keyboard accessibility is **prerequisite** to screen reader accessibility. 
  - If it doesn't work with only the keyboard, it won't work with a screen reader.

### Devices

- Test with a desktop device and a keyboard.
- Test with a mobile device and a bluetooth keyboard.


### Browsers

- Any major browser (Chrome, Safari, Firefox) is acceptable for keyboard testing.
- **Note:** In Safari, you'll have to activate tab in Preferences » Advanced » Press Tab

## <step-number>2</step-number> How to test
{: .divider }
Keyboard testing consists of a few keyboard commands to interact with web experiences.

<table class="">
  <caption class="h-delta">
    Keyboard basics
  </caption>
  <thead>
    <th scope="col">
      Key
    </th>
    <th scope="col">
      Action
    </th>
  </thead>
  <tbody>

  <tr>
    <th scope="row">
      <span class="keyboard-key">Arrows</span>
    </th>
    <td>
      Should scroll the screen or interact with form fields
    </td>
  </tr>
  
  <tr>
    <th scope="row">
      <span class="keyboard-key">Tab</span>
    </th>
    <td>
      Moves through the interface focusing on elements that are focusable. For example, buttons and links.
    </td>
  </tr>  

  <tr>
    <th scope="row">
      <span class="keyboard-key">Shift + Tab</span>
    </th>
    <td>
      Moves in reverse through the interface focusing on elements that are focusable.
    </td>
  </tr> 

  <tr>
    <th scope="row">
      <span class="keyboard-key">Enter</span>
    </th>
    <td>
      Activates links and buttons
    </td>
  </tr> 

  <tr>
    <th scope="row">
      <span class="keyboard-key">Spacebar</span>
    </th>
    <td>
      Activates buttons and interacts with form elements
    </td>
  </tr> 

  <tr>
    <th scope="row">
      <span class="keyboard-key">Escape</span>
    </th>
    <td>
      Should close or dismiss widgets like dialogs
    </td>
  </tr>  
  
  </tbody>
</table>

## <step-number>3</step-number> What to test for
{: .divider }

<div class="how-to-test-checklist-item">
  <h3>Ensure all mouse functionality is present for keyboard</h3>
  <p>Identify functionality within the experience that can be operated with a mouse or pointing device. Ensure this content can be accessed with they keyboard alone.</p>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure there is a highly visible visual indication of keyboard focus</h3>
  <p>Keyboard users need to understand where they are in the interface at all times. The visual indication of keyboard focus (focus ring) should be highly visible and have a color contrast ratio of 3:1 against the background. Verify that overlapping items (e.g. cookie banners, sticky footers, sticky headers, and non-modal dialogs) do not obscure the visual indicator. </p>
</div>

<div class="how-to-test-checklist-item">
  <h3>Ensure that there are no keyboard traps</h3>
  <p>Ensure that while navigating the experience, you do not encounter situations where you are not able to move forward or backward with the keyboard alone.</p>
</div>

<div class="how-to-test-checklist-item">
  <h3>Verify that the focus order is logical</h3>
  <p>In an English-based experience, keyboard focus should move top-to-bottom and left-to-right in a logical order. Ensure focus is not jumping around the experience in a way that makes it hard to understand the content.</p>
</div>

<div class="how-to-test-checklist-item">
  <h3>On focus does not create a change of context</h3>
  <p>Ensure that when an interactive element receives keyboard focus that a change of context is not initiated without warning of such behavior. An example of change of context is a page load or web form submission.</p>
</div>

<div class="how-to-test-checklist-item">
  <h3>Test for skip links</h3>
  <p>Where there are large chunks of repeated content, ensure that there are skip links present for keyboard users. For example, on a site with a large site navigation system, the first focusable element in the page should be a link that allows users to jump to the main content of the site.</p>
</div>

## Video Example
{: .divider }
{% include video-player.html filename = "/assets/media/video/how-to/keyboard.mp4" title = "How to test with the keyboard" vtt="/assets/media/video/how-to/keyboard.mp4.vtt" %}

<hr>

## Related WCAG
- [1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)
- [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
- [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)

## Resources
- [WebAIM Keyboard Accessibility](https://webaim.org/techniques/keyboard/)