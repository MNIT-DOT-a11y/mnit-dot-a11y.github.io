---
layout: page-with-toc
title: Setting Up Your Testing Environment
permalink: /testing-environment/
---

As part of the digital accessibility testing workflow, you will use several tools to determine whether the website and web, native mobile, and desktop applications meet accessibility guidelines.

MNIT DOT recommends that anyone testing applications use the following tools for verification testing. Using the same set of tools will ensure repeatable methods for accessibility risk assessment and testing.

- **axe DevTools** - A free DevTools browser extension for Chrome, Firefox, or Edge to test web-based applications and help identify and resolve common accessibility issues.
- **Colour Contrast Analyzer** (CCA) - a free color contrast checker that tests content for color contrast WCAG compliance. It is available in the Software Center
- **NVDA screen reader** - A free screen reader to test for barriers that affect people with vision disabilities. It is available in the Software Center.
- **Windows Magnifier** - The Magnifier lets you zoom in on parts of the page to verify that they do not cause functional errors, such as blocking essential on-screen elements and content. It is available within the Windows OS.
- **PEAT** (Photosensitive Epilepsy Analysis Tool) - This free tool helps determine whether animations or videos are likely to cause seizures.
- **Adobe Acrobat Pro** -  Acrobat Pro offers a built-in PDF Accessibility Checker for performing comprehensive accessibility checks and reports. To request access to Acrobat Pro, submit the request to your supervisor.

Before you start testing, you must install and set up the accessibility testing tools to ensure accurate results. Follow the setup outline here to get started.

---

## Testing tools for Website and Web-based Applications

### NVDA (Non-Visual Desktop Access)

NVDA is a screen reader and can be downloaded from the Software Center. NVDA works well with Chrome, Firefox, and Edge.

The steps below will get you up and running.
Steps to how to test with a screen reader can be found on the [How-to Test Screen Reader](https://mnit-dot-a11y.github.io/how-to-test/screen-readers/) page.

#### **Resources**

- [NVDA User Guide](https://www.nvaccess.org/files/nvda/documentation/userGuide.html)
- [Deque’s Quick Reference Guide: NVDA for Windows Keyboard Commands](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/nvda-guide.pdf)

#### **Installation**

1. _Go to_ the **_Start_** menu and open the **_Software Center_** application.
2. From the Applications window, _search_ for **_NVDA_**.
3. _Select_ the **_Install_** button.
    <example>
        <img src="/assets/images/testing-tools/nvda-software-center.jpg" alt="Screenshot showing steps 2 and 3">
    </example>
**Note:** To complete the installation, you must submit a Service Hub work request to complete the installation. Installation requires admin access to complete.

#### **Launching NVDA**

When launching NVDA for the first time, follow the [Configuring NVDA instructions](https://webaim.org/articles/nvda/#configuring) on the WebAIM webpage to set up the application for screen reader testing.

#### **NVDA modifier key**

Some keyboard shortcuts require using the NVDA modifier key. By default, both the Numpad Insert key and the Insert key are set as **NVDA modifier keys**, but you can also designate the Caps Lock key as an additional NVDA modifier key.

**Attention!** The instructions below use the **CAPS LOCK** as the NVDA modifier key.

Setting modifier key to Caps lock

1. _Open_ **_NVDA_**
2. _Go to_ the general setting by selecting **CAPS LOCK + n**
3. In the _Categories_ column, _select_ **_Keyboard_**.
4. Under the _Select NVDA Modifier Keys_ title, **_check caps lock_**.  
    <example>
        <img src="/assets/images/testing-tools/nvda-settings-caps-lock.jpg" alt="Screenshot showing steps 3 and 4">
    </example>
#### **Adjusting the Voice**

By default, NVDA will use the built-in voices provided by Microsoft. Altering the parameters of the voice may be helpful, for example, if you wish to slow the speaking voice down for a demonstration, increase the volume, or change the voice entirely.

1. Open the NVDA Menu by pressing by selecting **CAPS LOCK + n**
2. Navigate to **Preference**, then **Settings**.
3. In the Categories column of the dialog box, _Select_ **Speech**. Adjust the speech rate, volume, and voice to your preference.
    <example>
        <img src="/assets/images/testing-tools/nvda-setting-speech.jpg" alt="Screenshot showing step 2">
    </example>

#### **Speech Viewer**

The NVDA speech viewer is a valuable tool for screen reader testers. Enabling the Speech Viewer opens a window that shows everything NVDA states, which is helpful for sighted users. The Speech Viewer also allows you to take a screenshot or a screen recording when reporting an issue.

1. _Open_ the NVDA Menu by pressing **CAPS LOCK + n**.
2. _Navigate_ to **Tools** and **Select Speech Viewer**. 
3. _Select_ the **Show speech viewer on startup** box to enable the speech viewer to appear on startup. The speech viewer will open when NVDA is started. A window will appear, updating in real-time with the content that NVDA speaks.

    <example>
        <img src="/assets/images/testing-tools/nvda-speech-viewer.jpg" alt="Screenshot showing step 2">
    </example>

**Notes:** 
- The first thing that you will notice is that the Speech Viewer updates with a constant stream of information whenever you move the mouse. In order to stop this go to the NVDA menu and click on Preferences > Settings > Mouse and then uncheck Enable mouse tracking.
- By default NVDA starts reading all content when the page loads. To disable this, click on Preferences > Settings > Browse Mode and then uncheck Automatic Say All on page load.

#### **Visual Highlight**

   NVDA has a useful Visual Highlight that displays the element on the page with the current system focus.
1. Start NVDA
2. Open the NVDA Menu by pressing **CAPS LOCK + n**.
3. Navigate to **Preferences**, then **Settings**
4. In the Categories list, select **Vision**
5. Under Visual Highlight, select **Enable Highlighting**
6. Select **Apply**, then **OK**.
    <example>
        <img src="/assets/images/testing-tools/nvda-visual-highlighting.jpg" alt="Screenshot showing step 2">
    </example>

    A screenshot showing the Speech Viewer and Visual Highlight are active on a web page.
    <example>
        <img src="/assets/images/testing-tools/nvda-speech-visual-viewers.jpg" alt="Screenshot showing the location of the speech viewer and visual highlight in the window.">
    </example>

 ---  

### Windows Magnifier on Windows 11

Windows Magnifier is a screen magnification tool built into the Windows operating system. It provides a zoomed-in view of a select part of the screen at up to 1600% zoom. By default, it opens on the entire screen and will follow your mouse pointer, keyboard entry, and text cursor.

Sets on how to test zoom can be found on the [How-to Zoom and maginification](https://mnit-dot-a11y.github.io/how-to-test/zoom-magnification/) page.

**Attention!** Do not use Windows Magnifier when checking zooming and magnification in a web browser.

[Using Magnifier on Windows 11](https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198#:~:text=Turn%20on%20Magnifier-,To%20quickly%20turn%20on%20Magnifier%2C%20press%20the%20Windows%20logo%20key,%3E%20Magnifier%20%3E%20Turn%20on%20Magnifier.)

There are two different ways you can turn Windows Magnifier on.

**Using the Keyboard**

1. To turn on Magnifier:
    - _Press_ the **_Windows logo key + Plus sign (+)_**.
2.  To turn off the Magnifier:
    - Press the **Windows logo key + Esc**.

**Using the Mouse**

1. _Select_ **Start** \> **Settings** > **Accessibility** \> **Magnifier,** then turn on the **Magnifier** switch.
    <example>
        <img src="/assets/images/testing-tools/magnifier.jpg" alt="Screenshot showing steps of using a mouse">
    </example>

 --- 

### axe DevTools Extension (Pro and Free Versions)

axe DevTools browser extension automates accessibility testing for web-based applications to help identify common accessibility issues.

####  **Pro Version Setup**
**Pro Features**
- Export/Share Reports: Click Export to generate CSV files or shareable URLs for collaboration.  
- Component-Level Testing: Focus scans on specific page sections to streamline debugging.  
- Intelligent Guided Testing (IGT): Follow steps to test complex issues (e.g., modals, focus traps).  

1. License notification 
   - _You will receive an email notification from **no-reply@deque.com** stating you now have a license for axe DevTools Pro.
   - _Accept the invitation by selecting the invitation link.
   - _Set up a username using your state email and a unique password.
2.  Install the Extension 
   - _Chrome/Edge: Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) or [Edge Add-ons store](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn) and select Add to Chrome/Edge.
   - _**Attention!** Pro features like IGT, exporting, and usage reporting are only available in Chrome/Edge. Firefox’s extension version lacks these capabilities.
3. Open the Extension
   - _Right-click on any webpage and select Inspect, or use shortcut:  
	    - Ctrl + Shift + I  
	    - Navigate to the axe DevTools tab in the developer tools panel (may require selecting >> to reveal hidden tabs).
	        <example>
                <img src="/assets/images/testing-tools/axe-dev-browser-developer-tab.png" alt="Screenshot showing location of the reveal tab">
            </example>
4. Sign in to access the Pro Features
   - _Select Sign in at the top-right corner of the Axe DevTool.
    <example>
        <img src="/assets/images/testing-tools/axe-sign-in.png" alt="Screenshot showing location of sign in link in the top-right corner">
    </example>
   - _Enter the username and password that you created in step 1.
5. Run a Scan
   - _Visit the [How-to Test Using axe DevTools](/how-to-test/axe) to learn more about using axe DevTools for automated accessibility testing.
####  **Free Verions Setup**
1. Install the Extension 
   - _Chrome/Edge: Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) or [Edge Add-ons store](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn) and select Add to Chrome/Edge.  
   - _Firefox: Install from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/).
2. Access the Extension 
   - _Right-click on any webpage and select Inspect, or use shortcuts:  
	    - Windows: Ctrl + Shift + I
   - _Navigate to the axe DevTools tab in the developer tools panel (may require selecting >> to reveal hidden tabs).  
    <example>
        <img src="/assets/images/testing-tools/axe-dev-browser-developer-tab.png" alt="Screenshot showing location of the reveal tab">
    </example>
3. Configure Settings  
   - _Select the ⋮ (Options) button in the left panel and select Settings.  
    <example>
        <img src="/assets/images/testing-tools/axe-option.png" alt="Screenshot showing location of options button">
    </example>
   - _Set Best Practices to Enable.
    <example>
        <img src="/assets/images/testing-tools/axe-best-practice.png" alt="Screenshot showing best practices enabled.">
    </example>
   - _Select Save.
4. Run a Scan
   - _Visit the [How-to Test Using axe DevTools](/how-to-test/axe) to learn more about using axe DevTools for automated accessibility testing.

---

### Browser Developer tools

Every modern web browser includes a suite of developer tools. These tools are built directly into the browser and are browser-dependent. Most of these tools are shared among various browsers and do a range of things, from inspecting elements of HTML, CSS and accessibility checks.

For our purposes, we will focus on the Chrome and Firefox browsers.

**Note:** MS Edge developer tool mirrors Chrome’s developer tool.

#### **How to open the developer tools**

To open the browser developer tools, choose one of the three methods.

1. Place your cursor over the browser window where you want to inspect, right-click the desired element on the page and select Inspect from the pop-up window.  
    <example>
        <img src="/assets/images/testing-tools/devtools-inspect.jpg" alt="Screenshot showing inspect highlighted">
    </example>
2. Using your keyboard, _Select_ **Ctrl+Shift+I or F12.**
3. _Select_ the _three dots_ (Chrome) or hamburger menu (Firefox) in the top right corner of the browser window, then _select_ **_More Tools_** and **_Developer Tools_**.  
    <example>
        <img src="/assets/images/testing-tools/devtools-open-three-dots.jpg" alt="screenshot showing option 3">
    </example>

#### **Accessing the DevTools Accessibility Pane**

1. Open Developer tools.
2. Within the Developer tools Pane, select the Accessibility tab. If the accessibility tab is not visible, you must select arrows >> to reveal the tab.  
    <example>
        <img src="/assets/images/testing-tools/devtools-accessibility-tab.jpg" alt="Screenshot showing step 2">
    </example>
The [Accessibility features reference](https://developer.chrome.com/docs/devtools/accessibility/reference) the webpage provides detailed information on using the accessibility feature in the developer tools.

---

### PEAT (Photosensitive Epilepsy Analysis Tool)

PEAT is used to analyze videos and animated content for potentially seizure-inducing flashes or movement.

#### Installation

1. PEAT does not need to be installed directly onto your system. Visit the [PEAT website](https://trace.umd.edu/peat/) and scroll down until you see the Free download link.
2. Select the download button. This will download a zip file to your downloads folder.
3. Open the download and PEAT zip folders and follow the installation steps.

Refer to PEAT’s [user guide](https://trace.umd.edu/photosensitive-epilepsy-analysis-tool-peat-user-guide/) to understand all of its features.

---

### Colour Contrast Analyzer (CCA)
Steps how to test for color contrast can be found on the [How-to Test Color Contrast and Use of Color](https://mnit-dot-a11y.github.io/how-to-test/color-contrast/) page.

#### Installation

1. _Go to_ the **_Start_** menu and _open_ the **_Software Center_** application.
2. From the Applications window, _search for_ **_CCA_**.
3. **Select** the **_Install_** button.

#### **Using the Colour Contrast Analyzer**

The CCA uses an eye drop tool to find the color code of two colors. You can also use it to check how users with color blindness and low vision impairments will see your chosen colors.

1. **Open the _CCA application_.**
2. **The CCA application will appear on your web browser window.**
3. Find the image or font you need to check with CCA.
4. _Select the dropper tool_ in the **Foreground color** section of the CCA tool. A large zoom circle will appear.
5. Move to the image or font you want to check and select the color. Be sure to choose the darkest color within the zoom area.  
    <example>
        <img src="/assets/images/testing-tools/cca-foreground.jpg" alt="screenshot showing step 4 and 4a">
    </example>
    6. _Next_, _select the dropper tool_ in the **Background Colour** section, following the same process in step 4.
7. _Review the results_ in the **_WCAG 2.1 results_** section near the bottom of the application window. This section displays the results of the color contrast ratio between the two select color combinations.
8. If the color combination does not pass, you must increase the darkness of one of the colors or find a different color combination.  
    <example>
        <img src="/assets/images/testing-tools/cca-results.jpg" alt="screenshot showing step 6">
    </example>

[Colour Contrast Analyser video tutorial](https://www.youtube.com/watch?v=agCzn4gdRyY) – created by Berkely University, walks you through how to use the application.

---

## Testing tools for Mobile

### VoiceOver on iOS (iPhone and iPad)

VoiceOver is the screen reader built into Apple iOS devices.

#### **Resources**

- Apple’s [Turn on and Practice VoiceOver on iPhone](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/17.0/ios/17.0).
- [How to Navigate your iPhone or iPad with VoiceOver](https://www.youtube.com/watch?v=ROIe49kXOc8&t=81s)
- Deque University [Quick Reference Guide: VoiceOver for iOS](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-guide.pdf)
- Deque University [Quick Reference Guide (with Images): VoiceOver for iOS](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/voiceover-ios-images-guide.pdf).

#### **Turn VoiceOver on**

1. _Go to_ **_Settings_**
2. _Scroll down_ and _tap_ **_Accessibility._**
3. _Tap_ **_VoiceOver_** at the top.
4. _Toggle_ the setting **_on_** _or_ _tell Siri_ to “**Turn on VoiceOver**.”

#### **Turn VoiceOver off**

1. _Go to_ **_Settings_**
2. _Scroll down_ and _tap_ **_Accessibility._**
3. _Tap_ **_VoiceOver_** at the top.
4. Toggle the setting **_off_** _or_ _tell Siri_ to “**_Turn off VoiceOver_**.”

#### **Enabling Caption Panel**

The VoiceOver Caption Panel displays the text VoiceOver speaks at the bottom of the screen. Having this turned on is very helpful for accessibility testing. If the Caption Panel text is too small, you can enlarge it by adjusting your iOS text size settings.

1. _Go to_ **_Settings_**
2. _Scroll down_ and _tap_ **_Accessibility._**
3. _Tap_ **_VoiceOver_** at the top.
4. _Scroll_ to the bottom and toggle the **_Caption Panel_** switch **_on_**.  
    <example>
        <img src="/assets/images/testing-tools/voice-over-caption-panel.jpg" alt="Screenshot showing step 2">
    </example>

#### **Basic Usage**

- Use a single tap to select an item.
- When selecting an item, such as buttons or a hyperlink, double-tap anywhere on the screen to select it.
- Swipe left or right with one finger to move to the previous or next item.

### TalkBack on Android

TalkBack is the screen reader included with Android OS.

#### **Resources**

- [Android Accessibility Help](https://support.google.com/accessibility/android#topic=9078845) to learn how to use TalkBack.
- [Navigate your device with TalkBack](https://support.google.com/accessibility/android/answer/6006598?hl)
- Deque University [Quick Reference Guide: TalkBack 9.1+for Android](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-guide.pdf).
- Deque University [Quick Reference Guide (with Images): TalkBack 9.1+ for Android](https://media.dequeuniversity.com/en/courses/generic/testing-screen-readers/2.0/docs/talkback-images-guide.pdf)

#### **Turn TalkBack on**

1. _Go to_ **_Settings_**
2. _Tap on_ **_Accessibility_**.
3. _Tap on TalkBack_ and toggle the switch to **on**.

#### Turn TalkBack off

1. _Go to_ **_Settings_**
2. _Tap on_ **_Accessibility_**.
3. _Tap on TalkBack_ and toggle the switch to **off**.

#### **Basic Usage**

- Use a single tap to select an item.
- When selecting an item, such as buttons or a hyperlink, double-tap anywhere on the screen to select it.
- Swipe left or right with one finger to move to the previous or next item.

#### **Enable Caption Preference**

1. Go to **Settings**
2. Tap on **Accessibility**.
3. Scroll to **Hearing enhancements**
4. Select **Caption Preferences**.
5. Toggle the Show Captions to on. You can also adjust the caption size and style from this screen.
    <example>
        <img src="/assets/images/testing-tools/android-caption-preference.jpg" alt="Screenshot showing step 5">
    </example>