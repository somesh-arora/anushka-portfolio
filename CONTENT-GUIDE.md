# Anushka Kanoongo — Portfolio Website

A fast, modern, static portfolio built with [Astro](https://astro.build). Dark‑first
“Teal & Emerald” theme with a light mode, glass cards, subtle motion, full SEO
(Open Graph, Twitter cards, JSON‑LD), and an accessible, responsive layout.

> **The site is populated with Anushka's real details** — experience, case studies, skills,
> education, headshot, and an auto-generated résumé. Only a few optional setup items remain
> (see **§2**). **By design, no email or phone number appears anywhere on the site**; contact
> happens through LinkedIn and the contact form.

---

## 1. Run it locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:4321
```

Other commands:

```bash
npm run build    # production build into ./dist
npm run preview  # preview the production build
npm run check    # type-check the project
```

You need **Node 18+** (Node 22 recommended).

---

## 2. Remaining setup (optional but recommended)

The content is done. To fully go live, complete these:

1. **Contact form** — create a free [Formspree](https://formspree.io) form and paste its ID into
   `FORMSPREE_ENDPOINT` in `src/pages/contact.astro` (replaces `YOUR_FORM_ID`). Until then the
   form won't deliver, but LinkedIn still works.
2. **Domain** — set the real domain in `astro.config.mjs` (`site`) and `public/robots.txt`
   (`Sitemap:`), and add `public/CNAME` (just the domain) for a custom domain on GitHub Pages.
3. **Verify education years** — the MBA (2016–2018) and MS (2021–2023) years in
   `src/pages/about.astro` were inferred from context; confirm and adjust if needed.
4. **Résumé (optional)** — `public/Anushka_Kanoongo_Resume.pdf` is auto-generated from the résumé
   text with **no phone or email** (per your privacy preference). Swap it anytime — keep the
   filename or update the link in `src/pages/about.astro`.

> **Privacy:** email and phone are intentionally omitted site-wide. Contact routes through
> LinkedIn and the Formspree form (which emails Anushka privately without publishing her address).

### Editing reference — where each piece lives

Here's the full map if you want to tweak wording or add items:

### Identity & contact
| What | File |
|------|------|
| LinkedIn URL (set to linkedin.com/in/anushkakanoongo) | `Footer.astro`, `contact.astro`, `BaseLayout.astro` |
| Location (Chicago, IL) | `src/pages/contact.astro` |
| Contact form endpoint (Formspree ID) | `src/pages/contact.astro` |

### Home page — `src/pages/index.astro`
- `impactStats` — the four headline numbers (Records Analyzed, etc.)
- `tools` — the scrolling skills marquee
- Hero `headline` / `description` if you want to reword the tagline

### About page — `src/pages/about.astro`
- The **bio** paragraphs (The Journey)
- `skills` — the six skill categories and their tags
- `education` — schools, degrees, GPAs, and years
- `impactNumbers` — the six stat cards

### Experience — `src/content/experience/*.md`
Each `.md` file is one role. Edit the frontmatter:
```yaml
company: "Acme Health"          # employer name
role: "Senior Healthcare Data Analyst"
location: "Chicago, IL"
startDate: 2023-01-01           # YYYY-MM-DD
endDate: 2024-06-01             # omit this line entirely for a current role
sortOrder: 1                    # lower = shown first (most recent)
highlights:
  - "Bullet point with a metric"
```
> Tip: two files with the **same `company`** are automatically grouped into one
> timeline (great for promotions). Add/remove files freely.

### Case studies — `src/content/work/*.md`
Each `.md` is one case study. Frontmatter fields:
```yaml
title: "Reducing 30-Day Readmissions"
summary: "One-sentence hook shown on cards."
role: "Healthcare Data Analyst"
company: "Acme Health"          # optional
date: 2024-03-01
featured: true                  # true = also shown on the home page
sortOrder: 1                    # ordering
tags: ["Predictive Modeling", "Python", "SQL"]   # shown as chips
tools: ["SQL", "Python", "Tableau"]              # shown in the detail header
dataScope: "2M+ patient encounters"              # optional
impact:                                          # bullet list of outcomes
  - "Reduced readmissions by 18%"
problem: "What was broken / the business question."
approach: "How you solved it, at a glance."
links:                                           # all optional
  dashboard: "https://..."
  report: "https://..."
  github: "https://..."
  live: "https://..."
```
Everything **below** the frontmatter (`---`) is the long-form write-up in Markdown
(`## Headings`, bullet lists, etc.). Delete the `<!-- PLACEHOLDER -->` note when done.

### Images & files (in `public/`)
| File | Notes |
|------|-------|
| `public/images/profile/anushka-kanoongo.jpg` | Anushka's headshot (set). Swap anytime — keep the filename or update the `src` in `src/pages/about.astro`. |
| `public/Anushka_Kanoongo_Resume.pdf` | Auto-generated résumé, no phone/email. Replace with a preferred version anytime. |
| `public/images/og-default.png` | Social-share preview image (1200×630). |
| `public/favicon.svg`, `public/favicon-32x32.png`, `public/apple-touch-icon.png` | The “AK” monogram favicon. |

---

## 3. Contact form (Formspree)

The form posts to [Formspree](https://formspree.io) so there's **no backend to run**.

1. Create a free account and a new form at formspree.io.
2. Copy the form's endpoint (looks like `https://formspree.io/f/abcwxyz`).
3. Paste the ID into `FORMSPREE_ENDPOINT` in `src/pages/contact.astro`.

(Prefer no form? Delete the `<form>` and just keep the email/LinkedIn links.)

---

## 4. Domain & SEO

1. Set your real domain in **two** places:
   - `astro.config.mjs` → `site: "https://your-domain.com"`
   - `public/robots.txt` → the `Sitemap:` URL
2. For a custom domain on GitHub Pages, add a file `public/CNAME` containing just your
   domain (e.g. `anushkakanoongo.com`).
3. The name, job title, and social links used for rich search results live in the
   `JSON-LD` block in `src/layouts/BaseLayout.astro`.

---

## 5. Deploy

### Option A — GitHub Pages (workflow included)
1. Create a GitHub repo and push this project to it.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main` (or `master`). The workflow in `.github/workflows/deploy.yml`
   builds and deploys automatically.

### Option B — Netlify / Vercel / Cloudflare Pages
Import the repo and use:
- **Build command:** `npm run build`
- **Output directory:** `dist`

---

## 6. Change the color theme (optional)

All colors are CSS variables in `src/styles/tokens.css` — dark mode at the top,
light mode in the `@media (prefers-color-scheme: light)` block. Swap the teal/emerald
accents (`#14b8a6` / `#10b981`) and you've rebranded the whole site.

---

## Project structure

```
src/
  layouts/BaseLayout.astro     # <head>, SEO, fonts, shared shell
  components/                  # Header, Footer, Hero, cards
  pages/
    index.astro                # Home
    about.astro                # About
    contact.astro              # Contact
    work/index.astro           # Case studies list
    work/[slug].astro          # Case study detail (auto-generated per .md)
  content/
    work/*.md                  # Case studies
    experience/*.md            # Roles
  styles/tokens.css            # Design tokens (colors, spacing, type)
  styles/global.css            # Base + component styles
public/                        # Images, favicon, resume, scripts
```

Built with ♥ using Astro.
