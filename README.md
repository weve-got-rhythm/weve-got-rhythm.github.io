# We've Got Rhythm — Official Website

Official website repository for We've Got Rhythm (WGR), a 501(c)(3) youth music education nonprofit established in 2012.

Production site: [www.wevegotrhythm.org](https://www.wevegotrhythm.org)

## Overview

This repository contains the source code for the We've Got Rhythm website.

The site is a static HTML, CSS, and JavaScript project with no server-side application or required build process.

WGR's primary programs include:
* **BEATS (Bringing Equipment & Access To Students)** — expanding access to musical instruments for young musicians.
* **#RhythmSupport** — providing students and families with complimentary concert experiences, transportation support, and opportunities to meet performing artists.

## Technology

* **HTML5** — semantic page structure and accessibility-oriented markup
* **Tailwind CSS** — utility styling loaded via CDN with runtime design tokens
* **Custom CSS** — site-specific layout, navigation, and interface transitions (`css/styles.css`)
* **Vanilla JavaScript (ES6+)** — navigation, slideshow behavior, and interface interactions
* **Mailchimp** — newsletter subscriptions
* **PayPal** — online donations
* **Google Forms** — program and partnership inquiries

Accessibility considerations include semantic HTML, keyboard navigation, ARIA where appropriate, and reduced reliance on pointer-only interactions.

## Project Structure

```text
├── index.html          # Homepage
├── vision.html         # Organization vision and principles
├── programs.html       # BEATS and #RhythmSupport program details
├── impact.html         # Student impact and backstage experiences
├── partnership.html    # Donation, volunteer, and partnership pathways
├── who-we-are.html     # Leadership and organization background
├── journey.html        # Client-side redirect preserving legacy links to programs.html
├── CNAME               # Domain mapping for custom domain (www.wevegotrhythm.org)
├── .nojekyll           # Bypasses Jekyll processing on GitHub Pages
├── .gitignore          # Ignores OS artifacts and editor files
├── css/
│   └── styles.css      # Core styles, navigation drawer, and 3D toggle mechanics
├── js/
│   ├── main.js         # Site navigation and shared interface behavior
│   ├── slideshow.js    # Homepage slideshow controller
│   └── tailwind-config.js # Shared Tailwind design token configuration
├── images/             # Static image assets
└── wgr_logo.svg        # Organization vector logo
```

## JavaScript

* `js/main.js` — site navigation and shared interface behavior
* `js/slideshow.js` — homepage slideshow behavior
* `js/tailwind-config.js` — shared Tailwind design configuration

## Local Development

No build step is required. Serve the project root with any standard static HTTP server.

### Python
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Node.js
```bash
npx serve .
```

### VS Code
The site can also be previewed using the Live Server extension.

## Deployment

The production site is deployed through Netlify.

The GitHub repository is the source-control repository for the website. Changes intended for production are committed to the configured production branch (`main`) and deployed by Netlify.

Because the project is static:
* **Build command:** `none` (leave blank)
* **Publish directory:** `.` (root directory)
* **Production domain:** `www.wevegotrhythm.org`

## Copyright

&copy; 2012–Present We've Got Rhythm. All rights reserved.  
We've Got Rhythm is a 501(c)(3) nonprofit organization.
