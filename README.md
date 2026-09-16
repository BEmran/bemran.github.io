# Academic Research Website Starter

A low-maintenance Astro 6-compatible starter for a faculty/research-group website using structured Markdown content, Pages CMS, GitHub, and GitHub Pages.

## Current design (v0.5.0)

- Compact hybrid **Precision Academic + Robotics Lab** visual theme
- Restrained `1160px` desktop content width
- Shorter homepage designed to reduce unnecessary scrolling
- Compact hero, 4 research-area tiles, 3 featured projects, 3 selected papers, and 4 news items
- No homepage statistics strip, conference-talk counter, or current-graduate-researcher cards
- Icon-supported affiliation, email, and location metadata
- Redesigned About page with profile photo, biography, research interests, appointments, education, awards, and professional service
- Icon/profile cards for LinkedIn, Google Scholar, ORCID, Scopus, and AUS profile
- No Download CV button on the About page or footer
- Dedicated **Opportunities** page plus a compact homepage callout
- Opportunities are CMS-managed records with `open`, `coming-soon`, and `closed` states
- Graduate researchers remain individual content records; undergraduate students remain inside projects/teams
- Responsive mobile layout: 2x2 research-area grid and compact horizontal project cards

## What is already implemented

- Hybrid "Precision Academic + Robotics Lab" visual theme
- Responsive homepage
- Research areas, projects, graduate researchers, publications, news, courses
- Relationships stored once using stable file IDs
- Automatic homepage counts
- Pages CMS configuration (`.pages.yml`)
- GitHub Pages deployment workflow
- Placeholder local research graphics that can be replaced through the CMS

## Editing content

Routine content is stored under `src/content/` and can be edited through Pages CMS after the GitHub repository is connected:

- `research/` - research areas
- `projects/` - research and student projects
- `people/` - graduate researchers and alumni
- `publications/` - papers
- `news/` - news and updates
- `courses/` - teaching
- `opportunities/` - open/closed research opportunities
- `site/home.md` - homepage identity and hero
- `site/about.md` - profile, links, appointments, education, awards, and service

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro.

> This environment could not download npm packages, so the project files were generated without running the Astro compiler here. The content-collection syntax and Pages CMS field/reference syntax were checked against the current official documentation. The included `preview/` folder is a dependency-free static visual preview.

## Before deployment

1. Replace `https://example.com` in `astro.config.mjs` with the final domain.
2. Replace placeholder name, department, university, email, and links.
3. Upload actual project/lab images through Pages CMS.
4. Create a GitHub repository and push the project.
5. Enable GitHub Pages with GitHub Actions as the source.
6. Connect the repository to Pages CMS.

## University profile logo

`public/media/aus-profile-mark.svg` is a small placeholder used to reserve the AUS-profile icon slot in the design. Replace it with the official AUS brand asset you are authorized to use, without modifying the official mark.

## Content-maintenance rule

Enter information once and reuse it through relationships. For example, publications store their related research areas/projects; research pages reverse-query publications instead of maintaining duplicate paper lists.

## Publication import

The publication collection currently includes records imported from `citations.bib`. The original supplied BibTeX file is preserved at `public/data/citations-original.bib`, and each publication has an individual BibTeX download under `public/bib/`. See `BIBTEX_IMPORT_NOTES.md` for duplicate/incomplete entries intentionally excluded from the website.

## v0.5.0 real-content update

The placeholder academic content has been replaced with Bara Emran's current profile, research program, selected projects, graduate researchers with verified full names, teaching areas, and publication-to-research relationships. Placeholder news items were removed. Research and project relationships remain editable through Pages CMS.

## Site content and layout

```bash
src/
   content/
      site/
         home.md
         about.md

      research/
      projects/
      people/
      publications/
      news/
      courses/

   pages/              ← actual website pages
   components/         ← reusable visual components
   styles/
      global.css       ← theme/colors/layout

public/
   media/              ← images and media

.pages.yml             ← Pages CMS configuration

astro.config.mjs       ← Astro/site configuration
```
