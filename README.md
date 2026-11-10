# Shanmathi Gunasekaran — Portfolio

A static, editorial-style software engineering portfolio built with Astro. The site has a homepage and three static case studies; it uses no database, server functions, or client-side framework.

## Local development

Requires Node.js `>=22.23.4`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

The production build is written to `dist/`.

## Updating the site

- **Profile and publishing settings:** Edit `src/config/site.mjs`. Add the final production origin to `productionUrl` only after the domain is registered and configured. Leave it empty while the domain is pending; canonical URLs, absolute Open Graph URLs, a sitemap, and the sitemap entry in `robots.txt` are then omitted. Set it to the origin only, such as `https://example.com`, not a path.
- **Résumé:** The source résumé in the project root is private and git-ignored. Do not publish it. Before adding a résumé, prepare and review a public-safe PDF with private details removed, place that copy at `public/resume.pdf`, then set `resumePath: '/resume.pdf'` in `src/config/site.mjs`. The link will appear in the navigation.
- **Case studies:** Edit the entries in `src/data/caseStudies.mjs`. Each entry supplies its route slug, role, dates, summary, conceptual diagram, and section copy. The static route at `src/pages/work/[slug].astro` renders the shared case-study layout. Keep internal identifiers, company data, and unapproved metrics out of public copy.
- **Homepage:** Edit `src/pages/index.astro` for the introduction, selected projects, experience, and education.
- **Contact links:** Update the centralized URLs in `src/config/site.mjs`.

The `astro:build:done` hook in `astro.config.mjs` generates `dist/sitemap.xml` and adds its URL to the generated `robots.txt` only when `productionUrl` is configured.

## Deploying with Vercel

1. Push the repository to GitHub when you are ready to publish.
2. In Vercel, import the repository and keep the detected Astro framework settings.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Configure the domain in Vercel, then set the verified production origin in `src/config/site.mjs` and deploy again.

No deployment or domain changes are performed by this project.
