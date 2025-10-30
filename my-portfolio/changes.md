# Change Log & Maintenance — Jay Mthethwa Portfolio

## Initial Setup
- Project bootstrapped with Vite + React + Tailwind CSS + Framer Motion + React Router.
- `tailwind.config.js` & `postcss.config.js` created for styling setup.
- `README.md` updated with site overview, stack, admin guidelines, and deploy notes.
- All sections to be split into `/src/sections/` or `/src/components/`.
- To change theme colors/fonts: edit `tailwind.config.js`.
- Add/update featured projects: edit `/src/data/projects.js` or `/content/projects/*.md`.
- Blog posts: drop markdown in `/content/posts/`.
- Socials update: `/src/data/socials.js`.

## Routine Maintenance
- If using authenticated GitHub requests, update token in `/src/api/github.js` or `.env`.
- For deploys (Vercel/Netlify): use `npm run build`.
- To tweak site structure/layout, edit `/src/App.jsx` and `/src/sections/`.

## v1 Completion
- Core SPA sections completed: About, Projects (API), Skills, Media, Work & Education, Contact/socials.
- SEO meta/OG tags in `index.html`.
- Placeholders used for all images/social links for easy user replacement.
- Reminder: Set your Formspree endpoint and mailto in Contact section before launch! Add real profile/project images in `/public/images/`.

---
_Next: Polish, deploy, and add more real content/media as it arrives!_
