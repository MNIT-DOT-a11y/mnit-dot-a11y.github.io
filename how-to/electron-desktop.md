---
layout: how-to-test
title: Electron Applications on Desktop
permalink: /how-to-test/electron-desktop/
---

Electron apps are essentially web applications packaged with a native shell. This means that many web accessibility testing techniques can be applied to Electron apps.

Unfortunately, Electron apps--as well as any other native desktop webview--often will not let you review code, perform automated testing using extensions, or run bookmarklets. Thus, with the exception of checking color contrast, all testing is completed manually.

## Understanding Electron

Electron combines the Chromium rendering engine and the Node.js runtime. This allows developers to build cross-platform desktop apps using web technologies like HTML, CSS, and JavaScript. In basic terms, these are apps that run inside a slimmed down browser, with an app-like interface created in CSS. 

Since Electron apps run in a Chromium environment, they behave much like web applications. Thus, all web accessibility standards and testing methods are relevant and applicable. You should utilize the [Web checklist](/checklist-web) as you would with any other web application or website.

## Determining if an application uses Electron

It may not be immediately obvious if an application uses Electron. You can do the following to identify if an application is backed by Electron:

1. Navigate to the applications files (commonly in **c:\Program Files**, **c:\Program Files (X86)**, or similar).
2. Look for a **resources** folder.
3. If this is present, click on it and look for a file named **app.asar**.
4. If this fails, Electron apps may let you enter Developer Tools by pressing any of the following on the keyboard while inside the application:
  - Ctrl+Shift+I
  - Ctrl+Shift+F12
  - F12
5. If the Developer Tools appear, this app is using Electron.
6. If none of these steps are conclusive, it is recommended that you check the product's website or user guides to see if they mention the supporting frameworks for the application.