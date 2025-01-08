// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['mdsvex']
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
