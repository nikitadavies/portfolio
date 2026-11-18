# Nikita Davies — Portfolio

Dark, cinematic React portfolio built with **Vite + React 19**. No UI framework — just hand-written CSS, `lucide-react` / `react-icons` for icons and `qrcode.react` for the live QR code.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Before you deploy — 5 things to update

| What | Where |
|---|---|
| **Your photo** – `public/profile.jpg` is a crop of the design mock-up. Replace it with a real headshot (portrait, ~720×870, face near the top). | `public/profile.jpg` |
| **Deployed URL** – the ID-card QR code, canonical and Open Graph tags point to `https://nikitadavies.dev`. | `src/data/content.js` → `profile.siteUrl` and `index.html` |
| **Contact form** – create a free form at formspree.io, copy `.env.example` to `.env` and paste the form ID. Without it the form opens the visitor's email client. | `.env` |
| **Project GitHub links & screenshots** – each project links to your GitHub profile; point them at the actual repos and drop screenshots in `public/projects/`, then list them in `images: []`. | `src/data/content.js` → `projects` |
| **Social preview image** – add a 1200×630 `public/og-image.jpg`. | `public/` |

Your resume is already at `public/Nikita_Davies_Resume.pdf` (all "Download Resume" buttons use it).

## Editing content

**All text lives in `src/data/content.js`** — hero copy, stats, about pillars, skill categories and proficiency levels, experience, project case studies, education, leadership and contact text. Components never need touching for content changes.

## Structure

```
src/
  data/content.js        ← all content
  components/
    Navbar.jsx           sticky nav, active-section highlight, mobile menu
    Hero.jsx             headline, CTAs, portrait, animated stat counters
    IdCard.jsx           3D flip card — cursor tilt, float, real QR code
    About.jsx            3 engineering pillars + positioning
    Skills.jsx           interactive tabbed technology dashboard
    Experience.jsx       expandable story timeline
    Projects.jsx         project cards + case-study modal (problem, solution, architecture, stack, screenshots)
    Credentials.jsx      education, certifications, leadership
    Contact.jsx          closing statement, working form, footer
    Icon.jsx, ui.jsx     icon map + reveal/eyebrow helpers
  hooks.js               useInView, useCountUp, useActiveSection
  styles.css             design tokens, all styles, responsive breakpoints
```

## Features

3D flipping ID card · smooth scrolling and scroll-reveal transitions · animated stat counters · interactive skill categories · expandable case studies · downloadable PDF resume · LinkedIn / GitHub links · working contact form · responsive at 1100 / 960 / 600px · SEO, Open Graph, Twitter and JSON-LD metadata · real QR code · `prefers-reduced-motion` support · keyboard accessible (skip link, focusable card, Esc closes modal).

## Deploy

**Vercel** or **Netlify**: import the repo; build command `npm run build`, output directory `dist`. Add `VITE_FORMSPREE_ID` as an environment variable.
