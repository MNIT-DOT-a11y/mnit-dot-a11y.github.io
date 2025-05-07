---
layout: demos
title: "Build Components"
permalink: /build-components/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="https://mnit-dot-a11y.github.io/assets/favicon/favicon.png">
  <meta property="og:image" content="https://mnit-dot-a11y.github.io/assets/favicon/favicon.png"/>
  <meta name="theme-color" content="#003865">
  <meta name="robots" content="noindex">
  <title>Components Overview - MNIT DOT A11y</title>
  <!-- Begin Jekyll SEO tag v2.8.0 -->
  <meta name="generator" content="Jekyll v3.10.0" />
  <meta property="og:title" content="Components Overview" />
  <meta property="og:locale" content="en_US" />
  <meta name="description" content="MNIT DOT Accessibility Testing Resources. Source code by the T-Mobile - Accessibility Resource Center" />
  <meta property="og:description" content="MNIT DOT Accessibility Testing Resources. Source code by the T-Mobile - Accessibility Resource Center" />
  <link rel="canonical" href="https://mnit-dot-a11y.github.io/components-overview/" />
  <meta property="og:url" content="https://mnit-dot-a11y.github.io/components-overview/" />
  <meta property="og:site_name" content="MNIT DOT A11y" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta property="twitter:title" content="Components Overview" />
  <!-- End Jekyll SEO tag -->
  <link rel="stylesheet" href="/assets/main-dev.css?1736284235">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>

<body onload="setModifiedDate();" class="preload">
  <div class="page-wrapper">
    <div class="skip-links container">
      <a href="#main-content">Skip to main content</a>
      <a href="#footer">Skip to site Map</a>
    </div>

    <header class="container">
      <nav id="nav" class="menu" aria-label="Site menu">
        <ul>
          <li class="home">
            <a aria-label="MNIT DOT Accessibility" href="/">MNIT DOT A11y</a>
          </li>
          <li class="web alpha">
            <a href="/web/">Web</a>
          </li>
          <li class="web alpha">
            <a href="/desktop/">Desktop Apps</a>
          </li>
          <li class="native alpha">
            <a href="/native/">Native Apps</a>
          </li>
          <li class="web alpha">
            <a aria-current="page" class="current" href="/components-overview/">Components Overview</a>
          </li>
          <li class="native bravo">
            <a href="/how-to-test/">How-to Test</a>
          </li>
          <li class="native bravo">
            <a href="/demos/">Demos</a>
          </li>
          <li class="expander-group site-sub-group">
            <button class="expander-toggle" aria-expanded="false">More</button>
            <ul class="expander-content">
              <li><a href="/how-to-test/">How-to Test</a></li>
              <li><a href="/demos/">Demos</a></li>
              <li><a href="/about/">About</a></li>
              <li><a href="/code-of-conduct/">Code of Conduct</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <main id="main-content">
      <div class="container">
        <div class="post-content">
          <h1>Components Overview</h1>
          <p>USWDS components are simple and consistent solutions to common user-interface needs.</p>
          <p>Find a MNIT DOT component below to enhance your applications with accessible interfaces.</p>

          <h2>Components</h2>
          <ul>
            <li><a href="/components/accordion/">Accordion</a></li>
            <li><a href="/components/alert/">Alert</a></li>
            <li><a href="/components/breadcrumbs/">Breadcrumbs</a></li>
            <li><a href="/components/button/">Button</a></li>
            <!-- Add more components as needed -->
          </ul>

          <p>Refer to the full list of components and guidelines to ensure accessibility and consistency across your applications.</p>
        </div>
      </div>

      <div class="print-container">
        <button type="button" class="print-button">
          <i class="fa-solid fa-lg fa-print" aria-hidden="true"></i>
          Print this Page
        </button>
      </div>
    </main>

    <footer class="container" id="footer">
      <nav aria-label="Site map">
        <ul>
          <li><a href="/about/">About</a></li>
          <li><a href="/resources/">Resources</a></li>
          <li><a href="/testing-environment/">Set Up Your Testing Environment</a></li>
          <li><a href="/testing-routine/">Testing Routine</a></li>
          <li><a href="mailto:Kim.Lanahan-Lahti@state.mn.us?subject=MNIT%20DOT%20A11y%20comment">Send Feedback</a></li>
          <li><a href="/site-map/">Site map</a></li>
        </ul>
      </nav>
      <p>MNIT DOT Accessibility Testing Resources. Source code by the T-Mobile - Accessibility Resource Center</p>
      <p class="last-modified" id='last-modified'></p>
    </footer>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="/assets/scripts/index.js?1736284235"></script>
  <script>
    $("body").removeClass("preload"); // Prevents animations on pageload

    function setModifiedDate() {
      if (document.getElementById('last-modified')) {
        fetch("https://api.github.com/repos/mnit-dot-a11y/mnit-dot-a11y.github.io/commits?path=IDENTIFYING-COMPONENTS.md")
          .then(response => response.json())
          .then(commits => {
            var modified = commits[0]['commit']['committer']['date'].slice(0,10);
            if(modified != "") {
              document.getElementById('last-modified').textContent = "Last modified: " + modified;
            }
          });
      }
    }
  </script>
</body>
</html>
