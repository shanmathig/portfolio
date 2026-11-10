// @ts-check
import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';
import { site } from './src/config/site.mjs';
import { caseStudies } from './src/data/caseStudies.mjs';

const paths = ['/', ...caseStudies.map(({ slug }) => `/work/${slug}/`)];

const portfolioPublishing = {
	name: 'portfolio-publishing',
	hooks: {
		'astro:build:done': async ({ dir }) => {
			if (!site.productionUrl) return;

			const origin = new URL(site.productionUrl);
			const entries = paths
				.map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
				.join('\n');
			const sitemap = [
				'<?xml version="1.0" encoding="UTF-8"?>',
				'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
				entries,
				'</urlset>',
				'',
			].join('\n');
			await writeFile(new URL('sitemap.xml', dir), sitemap, 'utf8');
			await writeFile(
				new URL('robots.txt', dir),
				`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', origin).href}\n`,
				'utf8',
			);
		},
	},
};

export default defineConfig({
	site: site.productionUrl || undefined,
	integrations: [portfolioPublishing],
});
