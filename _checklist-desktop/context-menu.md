---
layout: entry-desktop
title: "Context Menu"  
description: "How to test accessible context menus for desktop applications"  
categories: patterns

keyboard:  
  shift+F10 or Context menu key: |  
    Opens a context menu
  up/down arrow: |  
    Moves up or down inside the menu
  left/right arrows: |  
    Expands or closes submenus
  enter: |  
    Activates the currently focused menu item or expands a submenu
  Shortcut key: |  
    Underlined letters in an item name can be pressed on the keyboard to quickly navigate to that item.  

screenreader:  
  name:  |
    The label and purpose of each context menu item is clear
  role:  |
    It identifies its role as a context menu item or a submenu
  state: |
    It expresses its state, if applicable (enabled, disabled/unavailable, checked/unchecked)
  Shortcut keys: |
    If there is a corresponding shortcut key (visually underlined letters  in the name of the item), it is announced

wcag:  
  - name: Perceivable  
    list:  
      - criteria: Is easy to identify as interactive  
      - criteria: Color is not used as the only means of conveying information (disabled, selected, hovered, etc)  
  - name: Operable  
    list:  
      - criteria: Is keyboard operable  
      - criteria: The click/tap target area for context menu items is no smaller than 44x44px  
      - criteria: The disabled and focus states have a 3:1 minimum contrast ratio against default  
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent items  
      - criteria: The focus indication has a minimum area equal to the width of the item and 2px in height  
  - name: Understandable  
    list:  
      - criteria: Its purpose is clear in the context of the menu and the overall task  
  - name: Robust  
    list:  
      - criteria: Conveys the correct semantic role  
      - criteria: Expresses its state (if applicable)  
      - criteria: Meets criteria across platforms, devices, and viewports  
---


## Closing and expanding submenus
- When you expand or close a menu nested inside of another, ensure screen readers announce the change.

## Provide instructions
- Applications should provide clear and understandable instructions on how context menus are used.
- Instead of saying right-click, applications should use inclusive language that also supports keyboard users (i.e. telling users about the Shift+F10 keystroke in copy text)

## Design Notes

### Resources
- [Menus and Context Menus in Microsoft Windows Apps](https://learn.microsoft.com/en-us/windows/apps/design/controls/menus-and-context-menus)