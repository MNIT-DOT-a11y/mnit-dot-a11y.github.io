---
layout: entry-desktop
title: "Info Bar"  
description: "How to test accessible info bars for desktop applications"  
categories: notifications

keyboard:
  tab: |
    Visibly moves focus between buttons on the info bar, if any.
  escape: |
    Closes the current info bar without affecting any other open windows or toolbars, if the info bar supports this
  F6/Shift+F6: |
    Navigates to (or away from, when shift is added) an info bar if one is currently visible in the application

screenreader:
  name:  |
    Its label and purpose is clear
  role:  |
    It identifies itself as an info bar when it appears on-screen
  severity: |
    It expresses the severity of the alert if the alert is critical and not solely informational    
---

## When to use an info bar instead of a status bar or dialog

- Use an info bar control when a user should be informed of, acknowledge, or take action on a changed application state. By default the notification will remain in the content area until closed by the user but will not necessarily break user flow
- Do not use an info bar control to confirm or respond directly to a user action that doesn't change the state of the app, for time-sensitive alerts, or for non-essential messages

## Design notes

### Content wrapping

- If the info bar content, excluding custom content, is unable to fit on a single horizontal line they will be laid out vertically. The Title, Message, and ActionButton — if present — will each appear on separate lines.

### Iconography and color

- When customizing the color and icon outside of the preset Severity levels, keep in mind user expectations for the connotations from the set of standard icons and colors
- Additionally, the preset Severity colors have already been designed for theme changes, high-contrast mode, color confusion accessibility, and contrast with foreground colors. It is recommended by Microsoft to use these colors when possible and to include custom logic in your application to adapt to the various color states and accessibility features

### Resources

- [InfoBar in Windows Apps](https://learn.microsoft.com/en-us/windows/apps/design/controls/infobar)

## Developer notes

### Flashing content

- The info bar should not appear and disappear from view rapidly to prevent flashing on the screen. Avoid flashing visuals for people with photosensitivities and to improve the usability of your application
- For info bars that automatically enter and exit the view via an app status condition, it is recommended that you include logic in your application to prevent content from appearing or disappearing rapidly or multiple times in a row. However, in general, this control should be used for long-lived status messages

### Severity

- The type of the info bar can be set via the Severity property to automatically set a consistent status color, icon, and assistive technology settings dependent on the criticality of the notification
- If no Severity is set, the default informational styling is applied

#### Code example

```XAML
<InfoBar x:Name="SubscriptionExpiringNotification"
    Severity="Warning"
    Title="Your subscription is expiring in 3 days."
    Message="Renew your subscription to keep all functionality" />
```

### Background

- Outside of the pre-defined severity levels, the Background and IconSource properties can be set to customize the icon and background color. The info bar will retain the assistive technology settings of the severity defined, or default if none was defined
  - A custom background color can be set via the standard Background property and will override the color set by Severity. Please keep in mind content readability and accessibility when setting a color
- A custom icon can be set via the IconSource property. By default, an icon will be visible (assuming the control isn't collapsed). This icon can be removed by setting the IsIconVisible property to false. For custom icons, the recommended icon size is 20px

### Resources

- [InfoBar Class Documentation](https://learn.microsoft.com/en-us/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.infobar?view=windows-app-sdk-1.6)