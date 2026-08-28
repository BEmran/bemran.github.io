# Academic Research Website Starter

A low-maintenance Astro 6-compatible starter for a faculty/research-group website using structured Markdown content, Pages CMS, GitHub, and GitHub Pages.

## What is already implemented

- Hybrid "Precision Academic + Robotics Lab" visual theme
- Responsive homepage
- Research areas, projects, graduate researchers, publications, news, courses
- Relationships stored once using stable file IDs
- Automatic homepage counts
- Pages CMS configuration (`.pages.yml`)
- GitHub Pages deployment workflow
- Placeholder local research graphics that can be replaced through the CMS

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

## Content-maintenance rule

Maintain relationships on the source record only. For example, a publication stores its related research areas/projects; research pages should reverse-query those records rather than maintaining duplicate publication lists.

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
