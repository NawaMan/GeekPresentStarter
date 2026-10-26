import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';
import { geekpresentConfig } from '@geekpresent/core/vite';
import site from './geekpresent.config';

// In-browser tests (jsdom). geekpresentConfig() gives the settings without the dev-server
// endpoints; anything that renders <SlideDeck> needs them.
export default defineConfig({
	plugins: [geekpresentConfig(site), sveltekit(), svelteTesting()],
	test: {
		name: 'dom',
		environment: 'jsdom',
		include: ['tests/**/*.test.ts'],
		exclude: ['tests/**/*.ssr.test.ts']
	}
});
