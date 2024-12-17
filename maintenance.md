---
layout: page-with-toc
title: Website Maintenance and Upkeep
permalink: /maintenance/
---

Welcome to the maintenance guide for the Guided Accessibility Testing website. This guide will walk you through everything you need to know to manage and update the site effectively.

## Before You Begin
The website uses two main technologies: [GitHub](https://github.com) and [Jekyll](https://jekyllrb.com). GitHub is where we store and manage all our website files, while Jekyll transforms these files into the website that users see. While this might sound technical, you'll find that the process becomes straightforward once you understand the basic workflow.

## Getting Access

**Note**: This section was added for completeness. Please update the procedure listed as necessary.

Your first step is getting access to the website's management system. Here's what you need:

1. A GitHub account - This serves as your login to manage the website.
2. Membership in the [MNIT DOT A11y GitHub organization](https://github.com/mnit-dot-a11y/) - This is an organization for MNIT Dot Accessibility resources, primarily this website. Anyone in this organization has write access to the repository.

To get set up:
1. [Create a GitHub account](https://github.com/signup) if you don't have one
2. If you don't have access already, email the Digital Accessibility Coordinator (DAC), Kim Lanahan-Lahti, to request access to the MNIT DOT A11y organization. Provide your GitHub credentials

## Quick Reference Resources
Before diving into the details, here are important links you'll need:

### Essential Tools and Documentation
- [The guidance website repository](https://github.com/mnit-dot-a11y/mnit-dot-a11y.github.io) - Where you'll manage the files and track the status of when the website is building
- [GitHub Codespaces Documentation](https://docs.github.com/en/codespaces) - Learn about the online editor
- [Jekyll Documentation](https://jekyllrb.com/docs) - Learn about our website framework

### Learning Resources
- [Markdown Guide](https://www.markdownguide.org) - Learn how to format content
- [Basic Git Commands](https://docs.github.com/en/get-started/quickstart/set-up-git) - Essential version control commands
- [GitHub Pages Documentation](https://docs.github.com/en/pages) - Learn about our hosting platform

## Understanding The Working Environment
When working on the website, you have two main options for your work environment:

### GitHub Codespaces (Recommended for Most Users)
GitHub Codespaces is a platform-agnostic way of developing, testing for, and pushing changes for the MNIT Dot Test Guidance website. Due to IT restrictions, it is impossible to install the required tools on your machine without elevated access. Codespaces allows you to run a virtualized development environment for up to 160 hours a month for free, from the web.

Commonly, you may see Visual Studio Code and GitHub Codespaces used interchangeably. This is because GitHub codespaces is a browser-based version of Visual Studio Code, so many of the same UI elements and concepts apply.

Codespaces provides:
- A text editor for making changes
- A preview of the website
- Tools for publishing your changes
- Access from any computer with an internet connection

You'll want to use Codespaces when:
- You're making quick content updates
- You want to see how your changes will look
- You're working from different computers
- You're new to website maintenance

### Visual Studio Code on Your Computer
Visual Studio Code (VSCode) can be installed through the Software Center on your MNIT computer. This option is more suitable when:
- You need to work without internet access
- You're doing extensive development or documentation work
- You're comfortable with technical setup
- You prefer a faster, local development environment

To install VSCode:
1. Open Software Center on your computer
2. Search for "Visual Studio Code"
3. Click "Install"
4. After a few moments, Visual Studio Code will install. Launch it and follow the tutorial for getting yourself set up.

## Understanding the Website Structure

The website's content is organized into specific sections that support different aspects of accessibility testing. Understanding this structure helps you place new content in the right location and maintain consistent organization.

### Main Testing Resources
We have three primary checklists, each serving a different testing purpose:
- `_checklist-web/`: Contains the web accessibility checklist items.
- `_checklist-desktop/`: Houses the desktop checklist items.
- `_checklist-native/`: Includes checklist items for native mobile applications

### Supporting Materials
These sections help testers understand and apply the checklists:
- `_demos/`: Contains practical examples matching checklist items, with filenames corresponding to the checklist items they demonstrate. If a file name matches a component in the checklist, a link to the demo will automatically be generated on its checklist page
- `_identifying-components/`: Helps testers identify different interface elements. Each component category is a single markdown file
- `how-to/`: Provides step-by-step testing instructions for common accessibility testing workflows, like testing with zoom or magnification, screen readers, or axe DevTools. Each page is a single markdown file

## Creating New Content
When adding new content, follow these guidelines:

### For Checklist Items
Create new files in the appropriate checklist folder. For example, `button.md` for a button component. The file should begin with:

````yaml
---
layout: entry
title:  "Button"
description: "How to code and test accessible buttons for the Web"
categories: nav form
---
````

3Categories should follow the categories specified under the `_config.yml` file, foundin the main directory. There can be more than one category, separated by a space. At time of writing, these are:
- html
- header
- nav
- main
- form
- footer

Often, it is most useful to copy an existing checklist item and use it as a template, rather than designing these completely by hand.

### For Demos
Create demos in the `_demos` folder that match checklist filenames.

### For Identifying Components
Add new files to the `_identifying-components` directory if you wish to create an entirely new type of component category. Copy one of the existing files there and change the information as needed. Ensure that the new file name ends in `.md` or `.html`.

Otherwise, add to one of the existing category files, following the structure present for the previously documented components.

### For How To Test Pages
Create how-to guides in the `how-to` folder. Each guide should use the following at the top to render the How to Test navigation:

````yaml
---
layout: how-to-test
title: Example Title
permalink: /how-to-test/example/
---
````

There is a template file in the `how-to` folder, named `_how-to-test-template.md`. You can use this as a starting point.

### Using the Table of Contents Layout
When creating longer pages with multiple sections, you can automatically generate a navigation menu using the page-with-toc layout. This layout creates skip links at the top of your page that correspond to your headings, making it easier for users to jump directly to the section they need. This very page uses that layout.

To use this layout, add it to your page's front matter like this:
```yaml
---
layout: page-with-toc
title: "Your Page Title"
---
```

The table of contents is generated based on your page's headings. For the best results, structure your content with clear heading levels. For example:

```markdown
## First Major Section
Content for the first section...

### Subsection One
More detailed content...

### Subsection Two
Additional details...

## Second Major Section
Content for the second section...
```

This structure will generate a table of contents that looks like this:

- First Major Section
	- Subsection One
	- Subsection Two
- Second Major Section

Each item in the table of contents becomes a clickable link that jumps directly to that section of the page. This is particularly helpful for very long pages that contain many headings or complex material.

When using this layout, keep these best practices in mind:

1. Use heading levels logically - don't skip from H1 to H3
2. Keep heading text concise but descriptive
3. Make sure each heading genuinely represents a new section
4. Use consistent capitalization in your headings
5. Avoid having too many levels of headings (try to stay within 3 levels)

**Note**: If you wish to exclude a heading from the TOC, use HTML headings and set the class to **no-toc**. For example:
````html
<h2 class="no-toc">Getting Started</h2>
````

### Linking Between Pages
Use relative paths to connect related content instead of the full URL, for example:

````markdown
Review our [checklist page for buttons](/checklist-web/button) for more information on what you should expect when testing a button.
````

### Working with Images
Images are important in our documentation, especially for showing examples and explaining testing procedures.

#### Image Organization and Storage
We organize our images into specific folders based on their purpose:

- `assets/images/examples/`: This folder contains all images used in checklist items and how-to testing pages. When adding new testing examples, your images should go here.
- `assets/images/icons/`: Contains SVG icons used throughout the site. This folder is rarely modified, as we have a standard set of icons.
- `assets/images/testing-tools/`: Houses images specifically used on the [Setting Up Your Testing Environment](https://mnit-dot-a11y.github.io/testing-environment/ page, showing testing tool configurations and setups.

When saving your images for the website:

- Use clear, descriptive filenames that indicate the content and purpose (example: `keyboard-focus-state.png` rather than `image1.png`)
- Keep file sizes manageable (aim for under 500KB) to ensure the website loads efficiently
- Use PNG format for screenshots and detailed images
- Maintain reasonable dimensions - images shouldn't exceed 1200px in width
- For examples folder specifically, name images to correspond with their related checklist or testing page

#### Adding Images to Pages
Here's how to add an image to your content using markdown:

````markdown
![Descriptive alt text for the image](/assets/images/examples/your-image.png)
````

If you need to add specific styling or positioning, use HTML:

````html
<img src="/assets/images/examples/your-image.png" 
     alt="Descriptive alt text for the image"
     class="someclass" />
````

#### Alt Text Guidelines
Here are examples of effective alt text for different situations:

For testing examples:

````markdown
![Dialog box showing NVDA screen reader focus on the error message "Required field must not be left blank"](/assets/images/examples/form-error-example.png)
````

For tool setup images:

````markdown
![NVDA settings dialog with Speech category selected, showing rate slider set to 50%](/assets/images/testing-tools/nvda-speech-settings.png)
````

### Adding SVG Icons for How-to Test Cards
The how-to testing sections use SVG icons to visually distinguish different testing procedures. The process involves several steps across different files in the website's codebase. This is the only part of the website that requires these kinds of icons.

#### Setting Up Your SVG Code
When you have created a new SVG icon, the first step is to prepare it for the website's styling system:

1. Open your `.svg` file in any text editor (like Notepad or Visual Studio Code). You'll see XML-style code that defines your icon.
2. Visit the [SVGBackgrounds SVG to CSS Converter](https://www.svgbackgrounds.com/tools/svg-to-css/).
3. On the converter page:
   - Paste in your complete SVG code
   - Under the "CSS helpers" section, select "basic background-image"
   - The tool will generate optimized code for CSS use

#### Integrating the Icon into Stylesheets
The website's styling system uses a specific structure to manage icons. You'll need to add your icon to the appropriate stylesheet:

1. Navigate to `_sass/modules/_icons.scss` in your editor. This file contains all icon definitions for the site.
2. At the bottom of the file, add a new custom property for your icon. For example, if you're adding a zoom icon:
   ```scss
   --icon-zoom-dark: #{$icon-zoom-dark};
   ```
   This creates a reusable reference for your icon.
3. In the same file, locate the section with other icon definitions. Add your converted SVG code, making sure to include important accessibility attributes:
   ```scss
   $icon-your-name-dark: url('data:image/svg+xml,<svg focusable="false" aria-hidden="true" ... rest of your SVG code here');
   ```

The `focusable="false"` and `aria-hidden="true"` attributes are crucial as they ensure screen readers handle these decorative icons appropriately. **Make sure you add them if they are not present.**

#### Adding Navigation Elements
For users to access the new how-to test section, you'll need to add it to the navigation structure:

1. Open `_layouts/how-to-test.html`, which controls the navigation for testing pages.
2. Find the navigation list and add your new section:
   ```html
   <li>
     <a
{% raw %}
       {% if page.url == "/how-to-test/your-section/" %} aria-current="page" {% endif %}
       {% if page.url == "/how-to-test/your-section/" %} class="current" {% endif %}
{% endraw %}
       href="{{ site.baseurl }}/how-to-test/your-section/">
       Your Section Name
     </a>
   </li>
   ```
   
#### Creating the Card on the Main Page
The main How to Test page displays cards for each testing section. To add your new section:

1. Open `_layouts/how-to-test-default.html`
2. Find the card list and add your new card:
   ```html
   <li class="card">
     <a href="/how-to-test/your-section/" class="icon-your-name">
       <span class="title">Your Section Name</span>
     </a>
   </li>
   ```

The `class="icon-your-name"` should match your CSS custom property name (without the `-dark` suffix).

## Publishing Content
Often, it is **easiest** to publish content to production as you work. A more involved method for those that are familiar with Codespaces is included below.

### Previewing Your Changes in Codespaces
To see how your changes will look:
1. Find the Terminal at the bottom of the screen in Codespaces
2. Type `bundle exec jekyll serve` and press Enter
3. Click the "Open in Browser" when it appears
4. View your changes in a preview of the website

### Pushing Your Changes
When you're ready to make your changes live, in both VSCode or Codespaces, you should:

1. Look for the Source Control icon in the left sidebar (branch icon)
2. Review your changed files
3. Write a clear message describing your changes
4. Click the checkmark to commit
5. Click sync to publish
6. Wait for the website to update (this can take anywhere from 2-5 minutes)

### Monitoring Changes

After publishing:
1. Check the [Actions tab in GitHub](https://github.com/mnit-dot-a11y/mnit-dot-a11y.github.io/actions).
2. Look for the most recent build under Workflow Runs.
3. Green checkmark means success
4. Red X means attention needed

**Note**: Repository owners will receive an email from GitHub if a build fails.

If you see a red X:
1. Click the failed action
2. Read the error message
3. Make corrections to the document you've updated--usually, this is a syntax issue, although it may also be a resources issue
4. Try publishing again

## Understanding Build Times and Potential Issues
When you make changes to the website, there may be delays or occasional failures in publishing your changes. This happens because we use the free version of GitHub Pages, which is a shared hosting service with limited resources allocated to each repository.

### Why Builds Take Time
The build process involves several steps:
1. GitHub processes your committed changes
2. Jekyll generates the website files
3. GitHub Pages deploys these files to their servers
4. The changes propagate across GitHub's network

This typically takes a few minutes, but can take longer during high-usage periods. Your changes may not appear immediately on the live site, even after a successful commit and push.

### When Builds Fail
Sometimes you'll see a red X indicating a failed build. Since we're using shared resources on the free tier of GitHub Pages, builds can fail when the system is under heavy load. These failures don't necessarily mean there's an issue with your changes, although they can be, depending on the size of the files you commit.

If you see a build failure:

1. Check the error message in the Actions tab. If it mentions timeouts or resource limits, it's likely a temporary infrastructure issue
2. Wait about 5-10 minutes, then either:
  - Make a small change and commit again, or
  - Go to the Actions tab and click "Re-run all jobs" on your failed workflow

If the build fails repeatedly:
- Try breaking your changes into smaller commits
- Try merging your changes into a single file instead of multiple ones
- Check that your images are optimized and not too large
- Ensure videos are as small as possible
- Verify your markdown syntax is correct

### Best Practices for Smooth Builds
To minimize build issues and ensure your changes go through smoothly:

1. Make smaller, focused changes rather than many changes at once
2. Optimize images before uploading them to keep file sizes reasonable
3. If a build seems stuck, check GitHub's status page at https://www.githubstatus.com/

Most build issues are temporary and resolve on their own. If you're making important updates that need to be published quickly, plan ahead and allow extra time for potential build delays.

## Additional Resources
- [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)
- [Markdown Editor](https://stackedit.io)
- [SVG to CSS Converter](https://www.svgbackgrounds.com/tools/svg-to-css/)