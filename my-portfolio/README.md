# Jay Mthethwa Portfolio

A modern, accessible, and production-ready developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion. Designed to showcase Jay’s projects, tech storytelling, and impact for South African students — fully refreshed for clean, consistent branding and UX.

## ✨ Visual Refresh: Design System
- **Fonts**: Inter (UI), Space Grotesk/Poppins (headings)
- **Color Palette**:  
  Background: #F8FAFC · Cards: #FFFFFF · Text: #0F172A/#475569 · Accent: #0EA5A4
- **Radius**: Cards `rounded-2xl`, buttons `rounded-lg`
- **Spacing**: Consistent, uses Tailwind’s spacing scale and container pattern
- **Motion**: Framer Motion for hero/project fades, card lift, and accessibility-aware entry animations
- **Dark Mode**: Fully supported with color-safe palette, system toggle, and localStorage persistence

## Features
- Responsive layout: mobile, tablet, desktop
- Accessible markup, focus rings, alt text, keyboard navigation
- Dynamic project showcase using live GitHub data and README excerpts
- Skills grid with tier labels (Confident/Intermediate/Novice)
- Image/content grid (media, TikToks, etc)
- Stylish contact form (**Formspree** compatible, with mailto fallback)
- All specs fully customized per brief

## Quick Start
```bash
npm install
npm run dev       # local dev at http://localhost:5173/
npm run build     # build
npm run preview   # preview production
```

## How to Deploy
- [Vercel](https://vercel.com/) (recommended), Netlify, or GitHub Pages

## Screenshots
Add screenshots in `/public/screenshots/` — at least one for **desktop** and **mobile** UI

- Desktop:
  ![](public/screenshots/desktop-placeholder.png)
- Mobile:
  ![](public/screenshots/mobile-placeholder.png)

If screenshots are missing, see `ASSETS-NEEDED.md` after PR for checklist.

## Contact Form
Uses Formspree (default) — set your Formspree ID in `src/sections/Contact.jsx`. For Netlify, see Netlify docs (add `netlify` attribute), or use the included `mailto:` fallback.

## Design Decisions
- **Palette**: All colors and branding follow the neutral + teal accent system
- **Font**: Display headline (Space Grotesk/Poppins); Interface text (Inter)
- **Containers**: `max-w-6xl mx-auto px-6` throughout
- **Shadow/Radius**: Strict border radius/shadow system
- **Accessible**: All forms, navs, and images focus-visible, keyboard- and screen-reader-tested

## To Update/Customize
- **Images**: Put into `/public/images/` or `/public/screenshots/`
- **Projects**: Controlled from featuredProjects list or see `/src/api/github.js`
- **Formspree/Contact**: Change contact details in component or README
- **Theme Toggle**: Customize accent palette if desired in Tailwind config

---

Built for Jay Mthethwa — [github.com/JayMiller08](https://github.com/JayMiller08)