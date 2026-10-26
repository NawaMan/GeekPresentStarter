import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { geekpresent } from '@geekpresent/core/vite';
import site from './geekpresent.config';

export default defineConfig({
	// geekpresent() goes BEFORE sveltekit(): it stamps slide sources for ADJUST's SAVE,
	// which must see the .svelte file, not the compiled JS.
	plugins: [geekpresent(site), sveltekit()],
	server: { host: '0.0.0.0' }
});
