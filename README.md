# Hamza Khan — Portfolio

React + Vite + Tailwind CSS v4. Content is sourced from the CV; nothing is invented.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## What to edit

| What | Where |
| --- | --- |
| Name, email, statement, **social links** | `src/data/profile.js` |
| Experience | `src/data/experience.js` |
| Projects (+ future Live / GitHub links) | `src/data/projects.js` |
| Technologies | `src/data/skills.js` |
| Education & certification | `src/data/education.js` |
| Production URL (canonical, OG tags, sitemap, robots) | `.env` → `VITE_SITE_URL` |
| Accent colour (whole site) | `src/index.css` → `--color-accent` and `--accent-rgb` |

## Things still waiting on you

1. **Fiverr URL** — `src/data/profile.js` → `socials` → `fiverr.url`. Until it is filled in, the Fiverr link is hidden from visitors (dev mode shows a reminder).
2. **Production URL** — set `VITE_SITE_URL` in `.env` before deploying, so share previews and the sitemap point at the real domain.
3. **Project links** — when you have real URLs, add `links: { live: '…', github: '…' }` to a project in `src/data/projects.js`. The buttons (and a "VIEW" cursor on the visual) appear automatically. Until then no link buttons are rendered.

## Assets

- `public/resume/Hamza-Khan-Resume.pdf` — your original CV, copied byte-for-byte (not regenerated).
- `public/images/hamza-khan-profile.webp` (+ `-480.webp`) — your photo, cropped to 4:5 and compressed. No retouching or colour changes.
- `public/images/og-image.jpg` — 1200×630 social share image built from the same photo.
- To replace the CV later, overwrite the PDF using the same file name.

## Project visuals

The project visuals in `src/mockups/` are art-directed product scenes built in code (SVG + CSS, no stock photos). If you add real screenshots later, swap the `<Mock />` in `src/sections/Projects.jsx` for an `<img>`.

## Notes

- Contact form is `mailto:`-based (no backend, nothing stored).
- Custom cursor is desktop / fine-pointer only and is disabled for touch and reduced-motion users.
- The page loader shows once per browser session and never for reduced-motion users.
