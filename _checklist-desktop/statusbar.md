---
layout: entry-desktop
title: "Status Bar"  
description: "How to test accessible status bars for desktop applications"  
categories: patterns

screenreader:
  status bar content:  |
      The status bar is read aloud when using screen reader-specific keystrokes (i.e. NVDA+Shift+End for NVDA, JAWSKey+PageDown for JAWS). Every screen reader will have different keystrokes.
---

##  Status bars should not be used for important information that must be reacted to.

The content of status bars is only read and announced when a screen reader user explicitly requests it themselves, commonly using a keystroke decided upon by the screen reader vendor. For this reason, status bars should only include status information, such as a word or character count in Microsoft Word.

## Developer notes

### Resources
- [Status Bars in Win32 Controls](https://learn.microsoft.com/en-us/windows/win32/controls/status-bars))