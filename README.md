# Diva Clara — Portfolio

A premium, animated personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, React Icons, and React Router.

## Getting started

npm install
npm run dev

Then open the printed local URL (usually http://localhost:5173).

## Where to edit content

Almost everything you'll want to change lives in src/data/portfolioData.js:
- Name, roles, tagline, email, resume link, social links
- About bio / goal / passion / interests
- Education
- Skills (technical / design / soft, with progress % for the bars)
- Projects (add/edit cards — each becomes its own detail page at /projects/:id)
- Certificates (click-to-flip cards — set image: '/certs/yourfile.jpg' after adding the file to public/certs/)
- Experience / organization timeline

## Notable features (per your requests)

- Animated aurora background — moving blue gradient blobs + light streaks (src/components/AuroraBackground.jsx, CSS in src/index.css). Respects prefers-reduced-motion.
- Glassmorphism everywhere — .glass / .glass-hover utility classes in src/index.css.
- Smaller project cards — compact 2-column grid, thumbnail capped at a fixed height so cards stay tidy (src/components/Projects.jsx).
- Live clock widget — top-right of the hero on desktop (src/components/ClockWidget.jsx), WIB time, updates every second.
- Dark / light mode toggle — sun/moon icon in the navbar, persisted to localStorage (src/context/ThemeContext.jsx).
- Navbar behavior on resize — controls (theme toggle, resume button, hamburger) are pinned to the right with ml-auto, never centered; on mobile the dropdown menu opens anchored to the right edge, not full-width/centered (src/components/Navbar.jsx).
- Flip certificate cards — click any certificate card and it flips (CSS 3D transform) to reveal the certificate image on the back (src/components/Certificates.jsx).

## Adding real images

Drop project screenshots, certificate photos, and creative-work images into public/ (e.g. public/projects/declarai.png), then reference them from portfolioData.js as '/projects/declarai.png'.

## Build for production

npm run build

Output goes to dist/ — deploy that folder to Vercel, Netlify, or any static host.
