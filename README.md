# Pavithra Uthrah, Portfolio

Personal portfolio site. Single page, built with Next.js (App Router),
TypeScript, and Tailwind CSS v4. Mostly static, with one small server
route (Substack feed) and no database or auth.

## Why this stack

- **Single page, section-based**: Home, Projects, Experience, About, and
  Contact are sections (`#home`, `#projects`, ...) on one route, not
  separate pages. Project case studies open in an in-page modal
  (`ProjectDetailModal`) rather than navigating away, so a visitor never
  leaves the portfolio to go deep on a project.
- **Content lives in `src/lib/data/*.ts`**, not a CMS or database. Every
  fact on the site (projects, experience, leadership, skills) is a typed
  TypeScript object. To update the site, edit these files, no migrations,
  no admin panel.
- **IBM Plex Serif / Sans / Mono** via `next/font`, self-hosted at build
  time (no runtime font-loading flash, no external font CDN calls).
- **Substack via a server route** (`src/app/api/substack/route.ts`):
  fetches and parses the RSS feed server-side (avoids CORS, keeps
  parsing off the client bundle), cached for an hour, and degrades to an
  empty state if Substack is unreachable or nothing's been published yet.
- **No contact form / no analytics**, deliberately. A form would need a
  backend to handle submissions securely; analytics wasn't added just
  because portfolios usually have it. Contact is direct: email (copies to
  clipboard), LinkedIn, GitHub, Substack.

## Project structure

```
src/
  app/
    page.tsx               The entire site (composes the five sections)
    api/substack/route.ts  Server-side RSS fetch + parse for the Writing section
    privacy/, terms/       Standalone legal pages (not part of the single-page flow)
    sitemap.ts, robots.ts, icon.tsx, opengraph-image.tsx
  components/
    sections/               HomeSection, ProjectsSection, ExperienceSection, AboutSection
    FloatingNav.tsx          Left rail (desktop) / bottom bar (mobile), active-section tracking
    ScrollToTop.tsx
    ProjectDetailModal.tsx + ProjectModalProvider.tsx   In-page project case studies
    MediaFrame.tsx           Renders real media, or a labeled placeholder if the file isn't there yet
    AwardBadge.tsx           Achievement ribbon (card) and award block (case study)
    SubstackSection.tsx
  lib/
    data/                    All site content, edit these to update the site
    types.ts                 Shared content types
    nav.ts                   Section anchors shown in the nav
```

## Updating content

| To change... | Edit |
|---|---|
| Projects / case studies | `src/lib/data/projects.ts` |
| Work experience | `src/lib/data/experience.ts` |
| Leadership, hackathons, activities, community | `src/lib/data/leadership.ts` |
| Skills | `src/lib/data/skills.ts` |
| Education, certifications | `src/lib/data/education.ts` |
| Interests, languages | `src/lib/data/profile.ts` |
| Name, email, links, résumé toggle | `src/lib/data/site.ts` |

## Media

See [`MEDIA_CHECKLIST.md`](./MEDIA_CHECKLIST.md) for the full list of
placeholder media, exactly where each real file should go, and the
expected aspect ratio. Short version: drop the file under `public/media/...`
at the path listed, add `src: "<that path>"` to the matching entry in
`projects.ts` or `experience.ts`, done. No other code changes needed;
`MediaFrame` falls back to the placeholder automatically if a file is
ever missing or fails to load.

## Résumé

A generated placeholder résumé (built from the same verified data as the
site, no fabricated content) lives at `public/resume.pdf` and is already
wired up (`resumeAvailable: true` in `site.ts`). Replace that file with
your real résumé whenever it's ready, same filename, no code change
needed.

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
npm run build   # production build, also runs the TypeScript check
npm run lint    # ESLint
```

## Deployment

The project needs no environment variables. The Substack route is a
standard Next.js route handler, so **Vercel** (zero-config for this
project) is the simplest target:

1. Push this repository to GitHub (already connected to
   `github.com/uthrahh/my_portfolio`).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import
   this repository.
3. Leave all settings at their defaults and click Deploy.
4. You'll get a free `*.vercel.app` URL immediately. Add a custom domain
   later from the project's Settings, Domains tab once you have one.

Netlify works too. GitHub Pages does not, since it can't run the
Substack API route (static export only).
