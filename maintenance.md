---
layout: page-with-toc
title: Website Maintenance and Upkeep
permalink: /maintenance/
---

# MNIT DOT Test Guidance Website Maintenance Guide

This is a guide containing step-by-step instructions on how to maintain the MNIT DOT Test Guidance Website. The website is built using [Jekyll](https://jekyllrb.com/) and is hosted on [GitHub Pages](https://github.io/). GitHub Codespaces and Visual Studio Code (VSCode) are the tools you will be using to edit, add, or delete pages. We will cover everything from setting up your environment to creating, deleting, and pushing changes to the Git repository.

## Introduction

Jekyll is a static site generator that transforms your plain text into static websites and blogs. It takes content written in Markdown or HTML and uses layouts to create a complete website. Jekyll is ideal for creating simple, static pages (blogs, user guides, portfolios, etc) and is tightly integrated with GitHub Pages, a free service that GitHub provides for hosting static websites.

## Directories

- **_config.yml**: The configuration file where you set site-wide settings.
- **_checklist-[web|native|desktop]/**: Component-based checklists for web, native mobile, and desktop. Each component is its own markdown file under the corresponding folder.
- **_demos/**: Markdown files for each demo available on the Demos page. Many of these markdown files rely upon HTML files under **_includes/examples/**.
- **_identifying-components//**: Markdown files containing each sub-section of the Identifying Components pages.
- **_layouts/**: Templates that define the structure of the pages.
- **_includes/**: Reusable components that can be included in your layouts.

## Setting Up Your Environment

### Prerequisites

- You must have a GitHub account. You can [sign up here](https://github.com/join) using your **@state.mn.us** email address.
   - **Note**: If you have write access on any repositories, GitHub will prompt you to enable two-factor authentication after ~30 days. It is recommended that you [set this up](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) in your account settings once you have completed registration.
- Once you have created your account, contact the MNIT DOT Digital Accessibility Coordinator to gain write access to the repository. You will receive an email at your Minnesota state address with further instructions once you have been invited.

## GitHub Codespaces

GitHub Codespaces is a platform-agnostic way of developing, testing for, and pushing changes for the MNIT Dot Accessibility website. Due to IT restrictions, it is impossible to install the required tools on your machine without elevated access. Codespaces allows you to run a virtualized development environment for up to 160 hours a month for free, from the web.

Commonly, you may see Visual Studio Code and GitHub Codespaces used interchangeably. This is because GitHub codespaces is a browser-based version of Visual Studio Code, so many of the same UI elements and concepts apply.

To start using GitHub Codespaces:

1. **Access the Repository**:
   - Go to [mnit-dot-a11y/mnit-dot-a11y.github.io](https://github.com/mnit-dot-a11y/mnit-dot-a11y.github.io).

2. **Enable Codespaces**:
   - Click on the "Code" button and select "Open with Codespaces".
      - If prompted, create a new Codespace, otherwise select an existing one.

## Initiate Jekyll in your new Codespace

You will only need to do this once for every codespace you create. This ensures that you have the most up-to-date packages for your current environment.

1. **In Codespaces**, Open the terminal. You can learn about the basics of operating in the terminal [in this article](https://code.visualstudio.com/docs/terminal/basics)
   2.  Run the following commands to install the required packages for Jekyll:
     ```bash
     gem install jekyll bundler
     bundle update
     ```

## Testing Your Changes

As you continue reading this guide, you'll learn how to make changes to the website. It's always valuable to test these changes in your local environment first, no matter how small. To do this, follow these steps:

1. In **Codespaces**, open the terminal.
2. Type the following command:
   ```bash
      bundle exec jekyll serve
   ```
3. After the website has been built, go to the URL that is provided to view the compiled assets.
4. If you make further changes, you will need to Close the terminal and go back to step 1 to re-build the website's static files.

## Creating a New Page
   [wip]
   - Add the following front matter at the top:

     ```yaml
     ---
     layout: page
     title: "Your Page Name"
     permalink: "/pagename/"
          ---
     ```

   - Add your HTML or Markdown content below the front matter.

## Deleting a Page

## Pushing Changes to GitHub

## MNIT DOT-Specific Tips

## Additional Resources