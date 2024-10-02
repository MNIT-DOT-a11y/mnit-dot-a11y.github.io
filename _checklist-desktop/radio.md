---
layout: entry-desktop
title: "Radio Button"
description: "How to test accessible radio buttons for desktop applications"  
categories: controls

keyboard:
  tab: |
    Focus visibly moves to the checked radio button in the group. If a radio button is not checked, focus moves to the first radio button in the group.
  space bar: |
    If the radio button with focus is not checked, changes the state to checked.  Otherwise, does nothing.
  arrow-keys: |
    Moves focus to and checks the previous or next radio button in the group
        
screenreader:
  name:  |
    Its label and purpose is clear
  role:  |
    It identifies itself as a radio option
  group: |
    Hints or errors are read after the label and related inputs include a group name (ex: Shipping options)
  state: |
    It expresses its state (selected, checked, disabled)

wcag:
  - name: Perceivable
    list:
      - criteria: Is easy to identify as a radio input
      - criteria: Color is not used as the only means of conveying state (checked/unchecked/selected/unselected)
  - name: Operable
    list:
      - criteria: Is keyboard operable
      - criteria: The click/tap target area includes the label and is no smaller than 44x44px
      - criteria: The checked, disabled and focus states have a 3:1 minimum contrast ratio against default
      - criteria: The focus indication has a 3:1 minimum contrast ratio against adjacent elements
      - criteria: The focus indication has a minimum area equal to the width of the element and 2px in height
  - name: Understandable
    list:
      - criteria: The radio group itself has a title
      - criteria: Its purpose is clear in the context of the whole application
  - name: Robust
    list:
      - criteria: Conveys the correct semantic role 
      - criteria: Expresses its state and group name
      - criteria: Meets criteria across platforms, devices and viewports
---

## Required radio inputs
Unlike the web, Windows Forms do not have a mechanism to indicate that a radio button input is required. It is important that proper form validation be present. This should include instructions on the specific radio button inputs that require a selection prior to moving to another screen, or guidance upon submitting changes that informs the user what they need to fix.

## Code Examples

### Accessible radio buttons in C#
The following code is an example of how to design accessible radio buttons on Windows, illustrating grouped controls, using C# and standard Windows APIs.

{% highlight html %}
using System;
using System.Windows.Forms;

namespace AccessibleRadioButtons
{
    public class MainForm : Form
    {
        public MainForm()
        {
            this.Text = "Accessible Radio Buttons Example";
            this.Width = 300;
            this.Height = 200;

            // Create a group box to contain the radio buttons
            GroupBox groupBox = new GroupBox();
            groupBox.Text = "Choose an option:";
            groupBox.Width = 250;
            groupBox.Height = 100;
            groupBox.Top = 20;
            groupBox.Left = 20;

            // Create radio buttons
            RadioButton radioButton1 = new RadioButton();
            radioButton1.Text = "Option 1";
            radioButton1.Top = 20;
            radioButton1.Left = 10;
            radioButton1.TabIndex = 0;
            radioButton1.Checked = true;

            RadioButton radioButton2 = new RadioButton();
            radioButton2.Text = "Option 2";
            radioButton2.Top = 50;
            radioButton2.Left = 10;
            radioButton2.TabIndex = 1;

            // Add radio buttons to the group box
            groupBox.Controls.Add(radioButton1);
            groupBox.Controls.Add(radioButton2);

            // Add the group box to the form
            this.Controls.Add(groupBox);

            // Set the form's accessibility properties
            this.AccessibleName = "Main Form";
            this.AccessibleDescription = "A form with accessible radio buttons";

            // Set accessibility properties for radio buttons
            radioButton1.AccessibleName = "Option 1 Radio Button";
            radioButton1.AccessibleDescription = "Select this option for Option 1";
            radioButton2.AccessibleName = "Option 2 Radio Button";
            radioButton2.AccessibleDescription = "Select this option for Option 2";
        }

        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm());
        }
    }
}
{% endhighlight %}

## Developer notes

### Focus management

- By default, it is not expected behavior that each radio button can be tabbed to. This is how radio buttons naturally behave
- Focus should be moved to the default radio button, even if it iis not selected
- Use the TabIndex property to manage the navigation order

### Name

- Use clear and concise text for radio button labels.
- Ensure labels are unique within the context of the form.
- Set the `AccessibleName` property to provide a meaningful name for screen readers.
- Example: `radioButton1.AccessibleName = "Option 1 Radio Button";`
- Use the `AccessibleDescription` property to provide additional context or instructions.
- Example: `radioButton1.AccessibleDescription = "Select this option for Option 1";`

### Role

- The RadioButton control in Windows Forms has a default role of RadioButton, which is typically sufficient. This may vary based on the programming language and framework that is being used for the application
- Use a GroupBox to logically group related radio buttons, providing a clear structure.
- Example: `groupBox.Text = "Choose an option:";`

### State

- Checked State: Ensure that the Checked property is set appropriately to indicate the selected option.
  - Example: `radioButton1.Checked = true;`
- Accessible state: The AccessibleState property is automatically managed by the RadioButton control to reflect its checked state.
  - Example: The state changes when `radioButton1.Checked = true;` is set.

  ## Design notes

  ### Resources
  - [Guidelines for Radio Buttons in Windows Apps](https://learn.microsoft.com/en-us/windows/apps/design/controls/radio-button)