---
layout: entry
title:  "Table" 
categories: patterns


keyboard:
  tab, arrow keys or Ctrl+tab: |
    Focus visibly moves to the first interactive element in the table
space bar: |
    Activates on iOS and Android
enter: |
    Activates on Android
          
mobile:
  swipe: |
    Focus moves to the first element in the table 
  doubletap: |
    Activates any interactive element
    
screenreader: 
  label:  |
    A visible table title that describes the table’s purpose is announced
  column header:  |
    Each column header is announced with each row cell beneath it, along with cell data
  row header:  |
    If applicable, each row header is announced with each cell in the row, along with cell data
  name:  |
    The purpose of any interactive element is clear and matches the visible label
  role:  |
    Most interactive elements identify as a button in iOS and "double tap to activate" in Android
  state: |
    Expresses its state (disabled/dimmed)

settings:
  text resize: |
    Text can resize up to 400% without losing information
---

## iOS

### Developer notes
- A container that presents rows of data arranged in one or more columns that may include interactive elements
- A table is composed of table rows (see table row button component)
- A table with columns and rows is not common in mobile because of the small viewport.  
- Table headers can be announced left to right in the heading row along with “heading”.  This is optional and duplicative, as each column header will be announced with each cell in every column. 
- If there is no content in the data cell, announce anything that gives the user this information, such as “not applicable” or “empty cell” along with the column header.
- Generally, all content in cell is announced together, including an interactive element, if any.
- If a table row is deleted, screen reader focus should be managed to the most logical place 
- All column headers must have a visible label that describes column (text or icon)
- If rows have multiple identical buttons like delete or edit, the programmatic name must be unique for each row (Delete address, Delete phone, etc)
- Ensure scrolling is supported, if needed
- Text must enlarge to 400% in each cell

### See the Details section for a specific control for interactive guidance

- **UIKit**
  -  Use `UITableViewController` object to manage a table view
  - Use `TableColumn` for tables with more than one column

- **SwiftUI**
  - Use `List` as a container for a one column table of data rows
  - Use `Table` - for multiple columns, but only supports iPad


### Focus
- Use the device's default focus functionality. 
- Consider how focus should be managed between child elements and their parent views.
- Initial focus on a screen should land in a logical place, such as back button, screen title, first text field, or first heading.

- **UIKit**
  - If VoiceOver is not reaching a particular element, set the element's `isAccessibilityElement` to `true`
    - **Note:** You may need to adjust the programmatic name, role, state, and/or value after doing this, as this action may overwrite previously configured accessibility.
  - Use `accessibilityViewIsModal` to contain the screen reader focus inside the modal.
  - To move screen reader focus to newly revealed content, use `UIAccessibility.post(notification:argument:)` that takes in `.screenChanged` and the newly revealed content as the parameter arguments.
  - To NOT move focus, but dynamically announce new content: use `UIAccessibility.post(notification:argument:)` that takes in `.announcement` and the announcement text as the parameter arguments.
  - `UIAccessibilityContainer` protocol: Have a table of elements that defines the reading order of the elements. 

- **SwiftUI**
  - For general focus management that impacts both screen readers and non-screen readers, use the property wrapper `@FocusState` to assign an identity of a focus state.
    - Use the property wrapper `@FocusState` in conjunction with the view modifier `focused(_:)` to assign focus on a view with `@FocusState` as the source of truth.
    - Use the property wrapper `@FocusState`in conjunction with the view modifier `focused(_:equals:)` to assign focus on a view, when the view is equal to a specific value.
  - If necessary, use property wrapper `@AccessibilityFocusState` to assign identifiers to specific views to manually shift focus from one view to another as the user interacts with the screen with VoiceOver on.



## Android

### Developer notes
- A container that presents rows of data arranged in one or more columns that may include interactive elements
- A table is composed of table rows (see table row button component)
- A table with columns and rows is not common in mobile because of the small viewport.  
- Table headers can be announced left to right in the heading row along with “heading”.  This is optional and duplicative, as each column header will be announced with each cell in every column. 
- If there is no content in the data cell, announce anything that gives the user this information, such as “not applicable” or “empty cell” along with the column header.
- Generally, all content in cell is announced together, including an interactive element, if any.
- If a table row is deleted, screen reader focus should be managed to the most logical place 
- All column headers must have a visible label that describes column (text or icon)
- If rows have multiple identical buttons like delete or edit, the programmatic name must be unique for each row (Delete address, Delete phone, etc)
- Ensure scrolling is supported, if needed
- Text must enlarge to 400% in each cell

### See the Details section for a specific control for interactive guidance
- **Android Views**
  -  `TableLayout` and `TableRow`
- **Jetpack Compose**
  -  Use `Column` and `Row`

### Focus
- Only manage focus when needed. Primarily, let the device manage default focus
- Consider how focus should be managed between child elements and their parent views
- Initial focus on a screen should land in a logical place (back button, screen title, first text field, first heading)

- **Android Views**
  - `importantForAccessibility` makes the element visible to the Accessibility API
  - `android:focusable`
  - `android=clickable`
  - Implement an `onClick( )` event handler for keyboard, as well as `onTouch( )`
  - `nextFocusDown`
  - `nextFocusUp`
  - `nextFocusRight`
  - `nextFocusLeft`
  - `accessibilityTraversalBefore` (or after)
  - To move screen reader focus to newly revealed content: `Type_View_Focused`
  - To NOT move focus, but dynamically announce new content: `accessibilityLiveRegion`(set to polite or assertive)
  - To hide controls: `importantForAccessibility=false`
  - For a `ViewGroup`, set `screenReaderFocusable=true` and each inner object’s attribute to keyboard focus (`focusable=false`)

- **Jetpack Compose**
  - `Modifier.focusTarget()` makes the component focusable
  - `Modifier.focusOrder()` needs to be used in combination with FocusRequesters to define focus order
  - `Modifier.onFocusEvent()`, `Modifier.onFocusChanged()` can be used to observe the changes to focus state
  - `FocusRequester` allows to request focus to individual elements with in a group of merged descendant views
  - Example: To customize the focus events
    - step 1: define the focus requester prior. `val (first, second) = FocusRequester.createRefs()`
    - step 2: update the modifier to set the order. `modifier = Modifier.focusOrder(first) { this.down = second }`
    - focus order accepts following values: up, down, left, right, previous, next, start, end
    - step 3: use `second.requestFocus()` to gain focus