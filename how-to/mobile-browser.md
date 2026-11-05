---
layout: how-to-test
title: Mobile browser testing
seoTitle: How to test web applications on mobile devices
permalink: /how-to-test/mobile-browser/
---

Use this guidance to evaluate a mobile browser-based application against the WCAG 2.1 Level A and AA requirements. Refer to the [Native app accessibility checklist]({{ site.baseurl }}/native/) for guidance on testing mobile native applications.

Perform browser-based testing on a mobile device to ensure users can access the same information and complete the same tasks as on desktop. The mobile experience doesn't need to look or feel identical, but it should offer equivalent information, functionality, and outcomes.

For example, the mobile layout may reorganize content or replace desktop navigation with a collapsible menu. Test these changes on a mobile device to confirm they remain accessible and do not prevent users from completing tasks.

### Why mobile device testing is still needed

Desktop testing does not verify how an application works with mobile browsers and their built-in screen readers. Mobile layouts, touch navigation, and screen reader interactions can reveal issues that do not appear in the desktop view. Test with VoiceOver on iPhone and TalkBack on Android rather than relying solely on a resized desktop browser.

Text sizing also requires separate mobile verification. A desktop zoom test does not show how content responds to a mobile browser's text-size or zoom settings. Mobile browsers and devices offer different resizing features, and smaller layouts may cause clipping, overlap, or unavailable controls. Text sizing, zoom and reflow, touch operation, and orientation checks follow the screen reader steps on this page.

### Baseline test environments

Use these baseline combinations for mobile web screen reader testing. If you try to use either screen reader with any other browser, it may work for some tasks but not as consistently.

<table>
  <caption class="h-delta">Baseline combinations</caption>
  <thead>
    <tr>
      <th scope="col">Device</th>
      <th scope="col">Screen reader</th>
      <th scope="col">Browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">iPhone</th>
      <td>VoiceOver</td>
      <td>Safari</td>
    </tr>
    <tr>
      <th scope="row">Android phone</th>
      <td>TalkBack</td>
      <td>Chrome</td>
    </tr>
  </tbody>
</table>

If the testing scope identifies other supported mobile browsers, device models, or operating-system versions, repeat the applicable tasks in those environments. Include combinations associated with reported accessibility issues.

<div class="tidbit caution">
    <div class="icon">
        <svg role="img" aria-label="Attention" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
    </div>
    <div class="content">
        <p>Do not replace the baseline combinations with the additional environments. Record results separately because screen reader behavior can differ between browsers.</p>
    </div>
</div>

## <step-number>1</step-number> Before you begin mobile testing
{: .divider }

Complete the desktop accessibility testing routine first, including:

- Automated testing using [axe DevTools]({{ site.baseurl }}/how-to-test/axe/).
- [Keyboard testing]({{ site.baseurl }}/how-to-test/keyboard-focus/).
- [Color and contrast checks]({{ site.baseurl }}/how-to-test/color-contrast/).
- Text resizing, [zoom, and reflow testing]({{ site.baseurl }}/how-to-test/zoom-magnification/).
- [Screen reader testing]({{ site.baseurl }}/how-to-test/screen-readers/).
- Other applicable manual accessibility checks.

**Best practice:** Address identified issues and retest fixes before conducting mobile testing to verify the application's mobile behavior. These desktop checks are prerequisites for this testing routine and do not replace testing on mobile devices.

Have the following ready:

- An iPhone, an Android phone, or both.
- The application URL and an authorized test account.
- Test data that is safe to enter, change, and submit.
- A list of pages, components, and complete tasks to test.
- Expected results or accessibility acceptance criteria.

Include complete processes, such as signing in, completing a multistep form, correcting errors, and submitting information, not just individual pages. WCAG conformance applies to every page in a complete process.

## <step-number>2</step-number> Test on iPhone with VoiceOver and Safari
{: .divider }

### VoiceOver resources

- [Turn on and practice VoiceOver on iPhone](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios), Apple
- [How to navigate your iPhone or iPad with VoiceOver](https://www.youtube.com/watch?v=ROIe49kXOc8&t=81s), YouTube
- [Quick reference guide: VoiceOver for iOS](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-guide.pdf), Deque University
- [Quick reference guide with gesture images: VoiceOver for iOS](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-images-guide.pdf), Deque University

### Set up the VoiceOver shortcut

You will turn VoiceOver on and off several times during testing, so set up the shortcut first. Open Settings, then Accessibility, then Accessibility Shortcut, and select VoiceOver. From then on, triple-click the side button, or the Home button on an iPhone that has one, to turn VoiceOver on or off.

### 1. Open the application and turn on VoiceOver

1. Open Safari.
2. Navigate to the application.
3. Turn on VoiceOver with the shortcut, or open Settings, then Accessibility, then VoiceOver, and turn it on.
4. Return to Safari.

### 2. Read through the page

1. Start at the beginning of the page.
2. Swipe right with one finger to move to the next item.
3. Swipe left with one finger to move to the previous item.
4. Continue through the entire page.

Listen for missing information, unexpected repetition, incorrect announcements, and a reading sequence that makes the content difficult to understand. Starting before and continuing beyond a component helps identify visually hidden content you might otherwise miss.

**Expected results:**

- Meaningful content is available to VoiceOver.
- The reading sequence makes sense.
- Meaningful images have appropriate text alternatives.
- Content is not missing or unnecessarily repeated.

### 3. Navigate by headings, links, and landmarks

1. Rotate two fingers on the screen as though turning a dial to change the VoiceOver rotor setting. The [gesture reference guide](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-images-guide.pdf) shows how to rotate two fingers.
2. Select Headings.
3. Swipe down to move to the next heading or up to move to the previous heading.
4. Repeat with Links and Landmarks, where applicable.

Landmarks identify page regions, such as navigation and main content. If an option is missing from the rotor, add it under Settings, then Accessibility, then VoiceOver, then Rotor. Check that the application's intended structure and navigation are available through these methods.

### 4. Evaluate data tables, when present

1. Set the rotor to Tables.
2. Swipe down or up to move between tables on the page.
3. Swipe right or left to move through the table one cell at a time. VoiceOver announces the row and column headers as the cell changes.

Verify that users can understand the data and identify the relevant row and column headers. If a caption is provided, confirm that it is available to VoiceOver. A missing caption alone does not automatically constitute a WCAG failure.

### 5. Complete application tasks

1. Move VoiceOver focus to a link, button, or form control.
2. Double-tap anywhere on the screen to activate it.
3. Complete each task in the test plan.
4. Keep VoiceOver on throughout the task.
5. Evaluate the results using the [shared checklist](#evaluate-screen-reader-behavior-on-both-devices) below.

## <step-number>3</step-number> Test on Android with TalkBack and Chrome
{: .divider }

### TalkBack resources

- [Android accessibility help: TalkBack](https://support.google.com/accessibility/android#topic=9078845), Google
- [Navigate your device with TalkBack](https://support.google.com/accessibility/android/answer/6006598), Google
- [Quick reference guide: TalkBack 9.1+ for Android](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-guide.pdf), Deque University
- [Quick reference guide with gesture images: TalkBack 9.1+ for Android](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-images-guide.pdf), Deque University

### 1. Open the application and turn on TalkBack

1. Open Chrome.
2. Navigate to the application.
3. Open Settings, then Accessibility, then TalkBack.
4. Turn on TalkBack.
5. Return to Chrome.

Configure a TalkBack shortcut if available. Settings, shortcuts, and gestures may vary by device and TalkBack version, so review the device's TalkBack instructions before starting.

### 2. Read through the page

1. Start at the beginning of the page. Use TalkBack's Read from top option if helpful.
2. Swipe right with one finger to move to the next item.
3. Swipe left with one finger to move to the previous item.
4. Continue through the entire page.

When testing a component, begin immediately before it and continue to the item immediately after it. Check for missing content, unnecessary repetition, incorrect announcements, and an illogical reading sequence.

**Expected results:**

- Meaningful content is available to TalkBack.
- The reading sequence makes sense.
- Meaningful images have appropriate text alternatives.
- Content is not missing or unnecessarily repeated.

### 3. Navigate by headings, links, and landmarks

1. Use TalkBack's reading controls to select Headings. The [gesture reference guide](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-images-guide.pdf) shows how to use the reading controls.
2. Swipe down to move to the next heading or up to move to the previous heading.
3. Repeat with Links and Landmarks, where available.

One supported gesture for changing reading controls is to swipe up and then down in one continuous motion. If the control or gesture is unavailable, review TalkBack's reading-control settings or the device tutorial. Check that the application's structure is discoverable and understandable.

### 4. Evaluate data tables, when present

Swipe through table cells and check whether the data, reading sequence, and header relationships are understandable. Do not assume that TalkBack provides the same table-navigation options as VoiceOver. Record what users can actually determine on the tested device.

### 5. Complete application tasks

1. Move TalkBack focus to a link, button, or form control.
2. Double-tap anywhere on the screen to activate it.
3. Complete the same tasks tested on iPhone.
4. Keep TalkBack on throughout the task.
5. Evaluate the results using the [shared checklist](#evaluate-screen-reader-behavior-on-both-devices) below.

## <step-number>4</step-number> Evaluate screen reader behavior on both devices
{: .divider }

Apply these checks while completing each task.

<table>
  <caption class="h-delta">Screen reader checks</caption>
  <thead>
    <tr>
      <th scope="col">Check</th>
      <th scope="col">Expected result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Links and buttons</th>
      <td>Announcements communicate the control's purpose and role.</td>
    </tr>
    <tr>
      <th scope="row">Control states</th>
      <td>Relevant states and values, such as expanded, selected, or checked, are available.</td>
    </tr>
    <tr>
      <th scope="row">Forms</th>
      <td>Labels, required-field information, and instructions are available. Users can enter, review, and change information.</td>
    </tr>
    <tr>
      <th scope="row">Errors</th>
      <td>Users can find and understand errors and determine how to correct them.</td>
    </tr>
    <tr>
      <th scope="row">Menus and dialogs</th>
      <td>Users can discover and operate the content, close it, and continue the task without losing their place.</td>
    </tr>
    <tr>
      <th scope="row">Dynamic updates</th>
      <td>Relevant status messages, such as updated result counts or successful saves, are available without users having to find them visually. Not every content change needs an announcement.</td>
    </tr>
    <tr>
      <th scope="row">Data tables</th>
      <td>Users can understand the data and determine relevant header relationships.</td>
    </tr>
    <tr>
      <th scope="row">Complete tasks</th>
      <td>Users can reach the same functional outcome as in the desktop view.</td>
    </tr>
  </tbody>
</table>

These checks support WCAG 2.1 requirements, including [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html), [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html), [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html), [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html), [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html), [3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html), [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html), and [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html).

If an interaction fails, record the issue before turning off the screen reader for investigation. Completing the task without the screen reader does not count as a successful screen reader test.

## <step-number>5</step-number> Test text resizing
{: .divider }

Check whether users can enlarge text without losing content or functionality. [WCAG 2.1 SC 1.4.4 Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) requires text to resize to 200%, except for captions and images of text. Browser zoom can satisfy this requirement, and a separate text-only resizing feature is not required.

<div class="tidbit caution">
    <div class="icon">
        <svg role="img" aria-label="Attention" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
    </div>
    <div class="content">
        <p>Turn off VoiceOver or TalkBack for these visual checks. Record the original settings so you can restore them afterward.</p>
    </div>
</div>

### iPhone: Safari

1. Open the application in Safari.
2. Open the Page Menu beside the address field.
3. Select Page Zoom, if shown.
4. Use the larger "A" or zoom controls to increase the size to 200%.
5. Review each page and complete the tasks in the test plan.
6. Open menus and dialogs, enter information, and trigger validation messages.
7. Restore the page zoom to 100% after testing.

Safari's menu labels and arrangement may vary by iOS version.

### Android: Chrome

1. Open the application in Chrome.
2. Open the three-dot menu and select Zoom.
3. Increase the zoom to 200%.
4. Review each page and complete the tasks in the test plan.
5. Open menus and dialogs, enter information, and trigger validation messages.
6. Restore the page zoom to 100% after testing.

Available settings vary by Chrome version. If Zoom is not available in the menu, open Chrome Settings, then Accessibility, for the zoom controls or an option to show Zoom in the menu.

### Text resizing expected results

- Text remains readable and is not clipped, hidden, or overlapped.
- Labels, instructions, and error messages remain available.
- Controls remain reachable and usable.
- Users can complete the same tasks as at the default size.

Loss of content or functionality when text is enlarged may indicate a failure of SC 1.4.4. Horizontal scrolling alone does not constitute a Resize Text failure. Evaluate reflow separately.

### Optional: Check device text-size preferences

When included in the supported-device test plan, increase the device's text-size setting and repeat the relevant tasks. Record whether the browser-based application responds and whether any content or functionality is lost.

Do not assume that device text-size preferences affect every webpage. Apple's text-size settings apply only to content that supports the relevant sizing behavior. For the browser-based test, use the browser's resizing controls rather than relying solely on device settings.

## <step-number>6</step-number> Test zoom and reflow
{: .divider }

Use this check to evaluate mobile browser zoom and the application's smaller-screen layout. Browser page zoom and pinch zoom are different mechanisms, so test both where available. Pinch zoom alone does not demonstrate that content reflows.

### Steps for both devices

1. Open the application at its default zoom.
2. With the screen reader off, place two fingers on the page and spread them apart to zoom in.
3. Check that enlargement is available. Pan around the enlarged content and verify that information and controls remain reachable.
4. Pinch inward to return to the default view.
5. Use Safari's Page Zoom or Chrome's Zoom controls to enlarge the page to 200%.
6. Review the layout and complete representative tasks.
7. Check fixed headers, sticky footers, menus, dialogs, and form controls for overlap or obstruction.
8. Restore the default zoom.

If the page blocks pinch zoom entirely, usually through a viewport setting such as `user-scalable=no` or a `maximum-scale` of 1, record it as a failure of SC 1.4.4. Users must be able to enlarge the content.

Safari supports pinch enlargement, and Chrome provides page zoom controls. In Chrome, test the application before enabling "Force enable zoom". That setting overrides restrictions and could conceal the application's default behavior.

### Expected results

- Users can enlarge content and continue to use the application.
- Enlargement does not hide essential information or make controls unavailable.
- At the required reflow viewport, ordinary text and controls do not require scrolling in both directions.

Keep the controlled desktop reflow test in the testing routine. [SC 1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) requires that vertically scrolling content work at a width equivalent to 320 CSS pixels without loss of information or functionality and without two-dimensional scrolling, subject to exceptions such as data tables and maps. An arbitrary phone width or pinch-zoom level does not establish this result.

<div class="tidbit caution">
    <div class="icon">
        <svg role="img" aria-label="Attention" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
    </div>
    <div class="content">
        <p>Do not use the device's screen magnifier as a substitute for testing browser text resizing and reflow.</p>
    </div>
</div>

## <step-number>7</step-number> Test touch targets and touch operation
{: .divider }

Evaluate controls using standard touch with VoiceOver or TalkBack turned off. Screen reader activation gestures do not replicate the same interaction as tapping a control directly.

### Steps for both devices

1. Open the application at its default zoom.
2. Tap each interactive control directly, including:
   - Navigation and menu buttons.
   - Links and icon buttons.
   - Checkboxes, radio buttons, and switches.
   - Form fields and submission buttons.
   - Dialog close buttons and other small controls.
3. Check whether nearby controls are easy to activate accidentally.
4. Repeat in crowded areas, such as toolbars, table actions, and pagination.
5. For a button that normally activates on release, touch and hold it, move your finger outside its active area, and release.
6. Check that the action is canceled, or verify another applicable cancellation or reversal mechanism.
7. Where the application uses swiping, dragging, or multipoint gestures, check for required simpler alternatives.
8. Where the application responds to shaking or tilting the device, check that the same function is available through a control on the page and that the motion response can be turned off.

[SC 2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html), [SC 2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html), and [SC 2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html) apply to these interactions, subject to their exceptions.

### Expected results

- Users can intentionally activate the desired control.
- Adjacent controls do not overlap or interfere with activation.
- Touch interactions provide the cancellation or reversal behavior required by SC 2.5.2.
- Multipoint or path-based gestures have a single-pointer alternative that does not require a path-based gesture, unless the gesture is essential.
- Functions triggered by device motion also work through a conventional control, and the motion response can be disabled, unless the motion is essential.

### How to report target-size findings

WCAG 2.1 Level AA has no general minimum target-size requirement. The 44-by-44 CSS-pixel target-size criterion is [SC 2.5.5 Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) at Level AAA and includes exceptions.

Use **44-by-44** CSS pixels as an additional design recommendation when appropriate, not as an automatic WCAG 2.1 AA pass or fail threshold. Measure the actual interactive area, not just the visible icon, and do not infer CSS-pixel dimensions from a screenshot.

Record small or crowded targets as usability findings unless another applicable requirement establishes a conformance failure.

**Looking ahead:** WCAG 2.2 adds [SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) at Level AA, which requires targets of at least 24 by 24 CSS pixels or equivalent spacing. If the project's standard moves to WCAG 2.2, small targets become conformance findings rather than usability recommendations.

## <step-number>8</step-number> Test orientation
{: .divider }

Verify that users can view and use the application in both portrait and landscape orientations. [WCAG 2.1 SC 1.3.4 Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html) prohibits restricting content to a single orientation unless that orientation is essential.

### Steps for both devices

1. Turn off the device's orientation lock or enable automatic rotation.
2. Open the application in portrait.
3. Complete representative tasks, including opening menus, using dialogs, and entering information.
4. Rotate the phone to landscape.
5. Repeat the tasks.
6. Rotate the phone while a menu, dialog, or partially completed form is open.
7. Check for hidden controls, overlapping content, unexpected resets, or lost information.

Repeat representative navigation and interaction checks with VoiceOver or TalkBack enabled.

### Expected results

- Users can view and operate the application in either orientation.
- The application does not require rotation unless a particular orientation is essential.
- Information and controls remain available after rotation.

The layout may change between portrait and landscape orientations. An identical layout is not required, but the application must remain accessible and operable.

## <step-number>9</step-number> Record issues and retest
{: .divider }

For each issue, record:

- Application URL and affected task.
- Device model and operating-system version.
- Browser and screen-reader versions.
- Steps to reproduce.
- Expected and actual behavior.
- Relevant screen reader announcements.
- User impact, including whether the task is blocked.
- Whether the screen reader was on or off.
- Browser zoom percentage and any device text-size changes.
- Portrait or landscape orientation.
- Whether default browser behavior or an override was used.
- Target dimensions in CSS pixels, if measured.
- Applicable WCAG 2.1 Level A or AA criterion.
- Whether the finding is a WCAG 2.1 A or AA failure, a project requirement, or a usability recommendation.

Retest fixes in the environment where the issue occurred and repeat relevant tasks in the other environments included in scope.

## Resources

### iPhone

- [Using VoiceOver to evaluate web accessibility](https://webaim.org/articles/voiceover/): setup, gestures, rotor navigation, tables, and issue documentation, WebAIM
- [VoiceOver on iPhone testing steps](https://bbc.github.io/accessibility-news-and-you/assistive-technology/testing-steps/voiceover-ios.html): setup, gestures, rotor navigation, tables, and issue documentation, BBC
- [Customize your Safari settings on iPhone](https://support.apple.com/guide/iphone/iphb3100d149/ios): website enlargement controls, Apple
- [How to navigate your iPhone or iPad with VoiceOver](https://www.youtube.com/watch?v=ROIe49kXOc8&t=81s), YouTube
- [Quick reference guide: VoiceOver for iOS](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-guide.pdf), Deque University
- [Quick reference guide with gesture images: VoiceOver for iOS](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-images-guide.pdf), Deque University

### Android

- [Using TalkBack to evaluate web accessibility](https://webaim.org/articles/talkback/): setup, reading controls, navigation, tables, and issue documentation, WebAIM
- [TalkBack on Android testing steps](https://bbc.github.io/accessibility-news-and-you/assistive-technology/testing-steps/talkback-android.html): setup, reading controls, navigation, tables, and issue documentation, BBC
- [Use page zoom for Chrome on Android](https://support.google.com/accessibility/android/answer/13532420): page zoom setup and operation, Google
- [Quick reference guide: TalkBack 9.1+ for Android](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-guide.pdf), Deque University
- [Quick reference guide with gesture images: TalkBack 9.1+ for Android](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-images-guide.pdf), Deque University

### WCAG 2.1

- [1.3.4 Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)
- [1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
- [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html)
- [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)
- [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html)
- [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
