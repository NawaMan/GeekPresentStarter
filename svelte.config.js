import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Where the static site is written.
const outDir = process.env.GEEKPRESENT_OUT || 'build';

// The path the site is served under. '' is the domain root (every local build). A GitHub
// project page lives at /<repo>/, and the Pages workflow sets GEEKPRESENT_BASE_PATH to that.
// SvelteKit wants a leading slash and no trailing one.
const basePath = (process.env.GEEKPRESENT_BASE_PATH || '').trim().replace(/^\/*/, '/').replace(/\/+$/, '');

export default {
	preprocess: vitePreprocess(),
	kit: {
		// 404.html: GitHub Pages serves it for any unknown path, so a mistyped URL lands
		// on the site's own error page.
		adapter: adapter({ pages: outDir, assets: outDir, fallback: '404.html' }),
		// Asset URLs are root-absolute (/_app/...), which a handout page needs; so under a
		// subpath the base above is REQUIRED, or every page loads blank.
		paths: { base: basePath, relative: false },
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path === '/favicon.png') return;
				throw new Error(message);
			}
		}
	}
};
