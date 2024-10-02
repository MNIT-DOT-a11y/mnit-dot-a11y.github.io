---
layout: entry-desktop
title: "Menu Bar and Ribbon"
description: "How to test accessible menu bars and ribbons for desktop applications"  
categories: patterns

keyboard:  
  Alt: |  
    Activates the menu bar and focuses the first menu item.  
  left/right arrows: |  
    Moves focus to the adjacent menu items on the menu bar.  
  up/down arrows: |  
    Opens the dropdown menu for a focused item and navigates through it; for ribbons, this will navigate into a group of buttons along the ribbon  
  enter: |  
    Activates the currently focused menu item or opens a submenu  
  Shortcut key: |  
    Underlined letters in an item name can be pressed on the keyboard to quickly navigate to that item or option in the ribbon  

screenreader:  
  name:  |  
    Each menu bar and ribbon item is properly labeled and its function is clear  
  role:  |  
    Menu items are correctly identified as menu options or tabs on the ribbon  
  state: |  
    Menu items convey their state, including enabled, disabled, checked, or unchecked  
  shortcut keys: |  
    Screen readers announce any shortcut key, such as the underlined letters in a menu item or ribbon command  

wcag:  
  - name: Perceivable  
    list:  
      - criteria: Menus and ribbons are visually distinguishable and interactive  
      - criteria: Color is not the only means of conveying information (e.g., disabled or selected items)  
  - name: Operable  
    list:  
      - criteria: Menus and ribbons are fully navigable via keyboard  
      - criteria: The target area for menu and ribbon items is no smaller than 44x44px  
      - criteria: Disabled and focused states maintain a 3:1 contrast ratio against the default state  
      - criteria: Focus indicators have a minimum 3:1 contrast ratio compared to adjacent elements  
      - criteria: The focus indicator covers the full width of the item and is at least 2px in height  
  - name: Understandable  
    list:  
      - criteria: The purpose of each menu or ribbon item is clear in the context of the user's task  
  - name: Robust  
    list:  
      - criteria: Menu bars and ribbons convey the correct semantic role (e.g., as menus or commands)  
      - criteria: The state of each menu or ribbon item is expressed (enabled, disabled, checked, unchecked)  
      - criteria: The functionality is consistent across different platforms, devices, and screen sizes  
---

## Iconography

- Cryptic icons aren't helpful, create visual clutter, and prevent users from focusing on the important menu items.
- Options with familiar icons, such as 'Save' or 'Print', should adhere to established design standards and clearly illustrate what the item will do when activated.

## Closing and Expanding Submenus and Ribbon Groups  

- When expanding or closing a submenu or a ribbon group, ensure that screen readers announce the change in the UI to assist users.

## Complex menus

- If a menu is very complex, with nested submenus or multiple levels along a ribbon, include tooltips for menu items and ribbon commands that provide additional context or information about their functions. These should be accessible to screen readers.

## Design notes

### Resources

- [Menu Flyout and Menu Bar](https://learn.microsoft.com/en-us/windows/apps/design/controls/menus)

## Developer notes

### Resources

- [Creating a Ribbon in Windows](https://learn.microsoft.com/en-us/windows/win32/windowsribbon/windowsribbon-stepbystep)