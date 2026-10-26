// The sample slides render on the server with the package's components — the same render
// that prerendering does.
import { render } from 'svelte/server';
import { readable } from 'svelte/store';
import { expect, it, vi } from 'vitest';

// A slide's nav bar reads SvelteKit's `page` store, which only exists inside a request.
// Outside SvelteKit, hand it a page at the slide's own URL.
vi.mock('$app/stores', () => ({
	page: readable({ url: new URL('https://example.test/slides/content.html'), params: {} })
}));
import Title from '../src/routes/slides/title.html/+page.svelte';
import Content from '../src/routes/slides/content.html/+page.svelte';
import { pages } from '../src/routes/slides/pages';

it('renders the title slide', () => {
	expect(render(Title).body).toContain('My Deck');
});

it('renders the content slide', () => {
	expect(render(Content).body).toContain('A slide is a Svelte component');
});

it('lists every slide folder in pages.ts', () => {
	expect(pages.map((p) => p.path)).toEqual(['title.html', 'content.html']);
});
