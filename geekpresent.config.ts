// This site's settings. Every field is optional; what you leave out takes a default.
// The full list is in node_modules/@geekpresent/core/src/config/siteConfigCore.ts.
import type { GeekPresentConfig } from '@geekpresent/core/vite';

export default {
	// The deployed site's address — only the tags that must be absolute (og:url, og:image,
	// canonical, the sitemap) use it. '' leaves those tags out. The Pages workflow sets
	// GEEKPRESENT_SITE_URL to https://<owner>.github.io/<repo>, which wins over this.
	siteUrl: '',
	siteName: 'My Talks',
	siteDescription: 'Presentations built with GeekPresent.',
	ogImageAlt: 'My Talks',
	copyright: { name: 'Me', url: '' },
	// Standalone (non-deck) pages, for the sitemap. Decks are found by their pages.ts.
	textRoutes: ['/']
} satisfies GeekPresentConfig;
