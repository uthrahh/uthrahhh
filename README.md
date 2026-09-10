# Pavithra Uthrah — Portfolio

Personal portfolio site. Built with Next.js (App Router), TypeScript, and
Tailwind CSS v4, fully static — no database, no auth, no backend.

## Why this stack

- **Next.js App Router, static rendering** — every page is prerendered at
  build time (`generateStaticParams` drives the 12 project detail pages).
  There's no server to run in production, which is the simplest
  architecture that satisfies a content-driven portfolio: no database, no
  auth, nothing that needs securing beyond normal static hosting.
- **Content lives in `src/lib/data/*.ts`**, not a CMS or database. Every
  fact on the site (projects, experience, leadership, skills) is a typed
  TypeScript object. To update the site, edit these files — no migrations,
  no admin panel.
- **IBM Plex Serif / Sans / Mono** via `next/font`, self-hosted at build
  time (no runtime font-loading flash, no external font CDN calls).
- **No contact form / no analytics** — deliberately. A form would need a
  backend to handle submissions securely; analytics wasn't added just
  because portfolios usually have it. Contact is direct: email, LinkedIn,
  GitHub.

## Project structure

```
src/
  app/                 Routes (App Router)
    page.tsx           Home
    projects/          Project list + [slug] detail pages
    experience/         Work experience
    leadership/          Leadership, community, hackathons
    about/               Skills (with evidence), education, certifications
    privacy/, terms/     Legal
    sitemap.ts, robots.ts, icon.tsx, opengraph-image.tsx
  components/           Reusable UI (Nav, Footer, ProjectCard, etc.)
  lib/
    data/                All site content — edit these to update the site
    types.ts             Shared content types
    nav.ts               Nav link config
```

## Updating content

| To change... | Edit |
|---|---|
| Projects / case studies | `src/lib/data/projects.ts` |
| Work experience | `src/lib/data/experience.ts` |
| Leadership, hackathons, community | `src/lib/data/leadership.ts` |
| Skills + evidence links | `src/lib/data/skills.ts` |
| Education, certifications | `src/lib/data/education.ts` |
| Name, email, links, resume toggle | `src/lib/data/site.ts` |

## Adding your résumé

A résumé file didn't exist yet at build time, so the "Download résumé"
button is hidden site-wide rather than link to a 404. To activate it:

1. Drop your PDF at `public/resume.pdf`.
2. In `src/lib/data/site.ts`, set `resumeAvailable: true`.

The button will then appear in the contact section automatically — no
other code changes needed. To use a different filename, also update
`resumeUrl` in the same file.

## Adding a custom domain

The site is currently domain-agnostic (see `src/lib/data/site.ts`,
`domain: ""`). Once you have a domain:

1. Set `domain` in `src/lib/data/site.ts` to `"https://yourdomain.com"`
   (used for canonical URLs, sitemap, and Open Graph tags).
2. In your hosting provider (see Deployment below), add the domain and
   follow its DNS instructions.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & checks

```bash
npm run build   # production build — also runs the TypeScript check
npm run lint    # ESLint
```

## Deployment

The project has no environment variables and no server runtime — any
static-friendly host works. Recommended: **Vercel** (built by the makers
of Next.js, zero-config for this project).

1. Push this repository to GitHub (already connected to
   `github.com/uthrahh/my_portfolio`).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import
   this repository.
3. Leave all settings at their defaults (Vercel auto-detects Next.js) and
   click Deploy.
4. You'll get a free `*.vercel.app` URL immediately. Add a custom domain
   later from the project's Settings → Domains tab once you have one.

Netlify and GitHub Pages both work too, but need `output: "export"` added
to `next.config.ts` since they don't run the Next.js server Vercel
provides natively.
