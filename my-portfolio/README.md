# Jay Mthethwa Portfolio

A production-ready personal developer portfolio for Jay Mthethwa (github.com/jaymiller08) built with React (Vite), Tailwind CSS, and Framer Motion. Designed to highlight Jay’s creative storytelling, projects, and educational impact for South African tech learners!

## Features
- Modern responsive design, accessible, with smooth animations and dark/light theme toggle
- Dynamic project and GitHub repo showcase (live demos, case studies, code links)
- Skills badges, media embeds, and interactive content
- Auto-fetches GitHub stats (stars, language breakdowns)
- Contact form (Formspree/Netlify/mailto)
- Easy to update via simple JSON or markdown files for projects and posts
- SEO meta, OpenGraph/Twitter Cards and favicons
- Vercel/Netlify/GitHub Pages ready

## Tech Stack
- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/), [Axios](https://axios-http.com/)
- Accessible, semantic markup, code splitting, image optimization

## Quick Start
```bash
npm install
npm run dev    # development
npm run build  # production
npm run preview
```

### Deploy
- [Vercel](https://vercel.com/) — recommended for easiest one-click deployment
- [Netlify](https://www.netlify.com/) or GitHub Pages also work (see `public/` for assets)

## Admin: How to update
- **Projects, skills, and media:** See `/src/data/` folder or update markdown in `/content/`.
- **Images:** Place in `/public/images/`. Replace `placeholder.jpg`, `tiktok-thumb.jpg`, `ig-thumb.jpg` for your own project or profile images.
- **Social links:** Update in the relevant section components (e.g., `src/sections/Contact.jsx`).
- **Blog posts:** Add markdown files in `/content/posts/`.
- **Resume:** Replace `/public/resume.pdf`.
- **Contact Form:** To update Formspree, edit the `action` attribute in `src/sections/Contact.jsx`. For email fallback, update the mailto address in the same file.

---

Built for Jay Mthethwa — follow at [github.com/JayMiller08](https://github.com/JayMiller08)
