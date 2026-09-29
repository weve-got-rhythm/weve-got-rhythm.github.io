# We've Got Rhythm (WGR) — Official Website

> **"We Want to Share!"**  
> We've Got Rhythm is a 501(c)(3) youth music education nonprofit established in 2012, dedicated to expanding equitable access to music and the performing arts for students and families.  
> **Live Site:** [https://www.wevegotrhythm.org](https://www.wevegotrhythm.org)

---

## Overview

This repository hosts the official static website for **We've Got Rhythm** ([www.wevegotrhythm.org](https://www.wevegotrhythm.org)). It is engineered to be lightweight, accessible, and fast, requiring zero complex build pipelines or server-side dependencies.

### Core Programs Highlighted
* **BEATS (Bringing Equipment & Access To Students)**: Placing donated violins, cellos, guitars, keyboards, and wind instruments directly into the hands of aspiring young musicians.
* **#RhythmSupport**: Providing 100% complimentary concert tickets, family transit support, and intimate backstage artist mentorship at premier venues including Carnegie Hall.

---

## Tech Stack & Architecture

* **Markup**: Semantic HTML5 with WCAG 2.1 AA accessibility standards (ARIA landmarks, screen reader announcements, keyboard navigation).
* **Styling**: Tailwind CSS (with customized brand design tokens in `js/tailwind-config.js`) and bespoke CSS animations in `css/styles.css`.
* **Typography**: IBM Plex Sans (Body), Noto Serif (Headlines), and Manrope (Labels).
* **Scripts**: Modern Vanilla JavaScript (ES6+):
  * `js/main.js`: Responsive 3-zone header navigation, 3D flip hamburger toggle, Escape-key traps, and viewport resize listeners.
  * `js/slideshow.js`: Homepage hero image carousel with accessible controls and hover/focus pause behavior.
  * `js/tailwind-config.js`: Centralized design tokens (color palette, spacing units, typography scales).
* **Integrations**:
  * **Newsletter**: Direct Mailchimp integration with built-in bot honeypot protection.
  * **Donations**: PayPal hosted checkout and direct digital giving channels.
  * **Inquiries**: Google Forms direct routing for instrument donations, mentoring, and school partnerships.

---

## Directory Structure

```text
├── index.html              # Homepage (Mission, Hero Carousel, Key Programs, Community)
├── vision.html             # Vision & Philosophy (Access, Mentorship, Transformation)
├── programs.html           # Programs Breakdown (BEATS, #RhythmSupport, School Gateway)
├── impact.html             # Impact & Stories (Student narratives, backstage spotlight, metrics)
├── partnership.html        # Get Involved (Instrument donation guide, mentoring, sponsorships)
├── who-we-are.html         # Leadership, story, and organizational transparency
├── journey.html            # Client-side redirect preserving legacy links to programs.html
├── CNAME                   # Custom apex domain routing (www.wevegotrhythm.org)
├── .nojekyll               # Disables Jekyll processing for direct static pass-through
├── .gitignore              # Ignores OS artifacts and IDE metadata
├── css/
│   └── styles.css          # Custom 3D flip navigation mechanics and layout utilities
├── js/
│   ├── main.js             # Core navigation controller and accessibility listeners
│   ├── slideshow.js        # Homepage hero slideshow controller
│   └── tailwind-config.js  # Centralized Tailwind design token configuration
├── images/                 # Optimized photography and vector assets
└── wgr_logo.svg            # Official brand vector emblem
```

---

## Local Development & Preview

Because the site is built on pure static HTML/CSS/JS, no build step is required. You can serve the repository locally using any lightweight HTTP server:

### Option A: Using Python (Built-in)
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option B: Using Node.js (npx)
```bash
npx serve .
```

### Option C: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

---

## Deployment

### GitHub Pages
1. Push this repository to GitHub.
2. In your repository settings, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. The site will be live within minutes.

### Netlify / Vercel / Cloudflare Pages
* **Build Command**: *(None needed / leave blank)*
* **Publish Directory**: `.` (root directory)

---

## License & Copyright

&copy; 2012–Present We've Got Rhythm. All rights reserved.  
We've Got Rhythm is a registered 501(c)(3) nonprofit organization.
