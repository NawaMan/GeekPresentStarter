import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { geekpresentConfig } from '@geekpresent/core/vite';
import site from './geekpresent.config';

// Server-render tests: what a slide prerenders to, through svelte/server.
export default defineConfig({
	plugins: [geekpresentConfig(site), sveltekit()],
	test: { name: 'ssr', environment: 'node', include: ['tests/**/*.ssr.test.ts'] }
});
