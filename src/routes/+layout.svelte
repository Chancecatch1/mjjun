<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	export let data;

	$: {
		if (browser) {
			// Update document title based on current route
			if ($page.url.pathname === '/') {
				document.title = 'Home';
			} else if ($page.url.pathname === '/work') {
				document.title = 'My Works';
			} else if ($page.url.pathname.startsWith('/work/')) {
				const slug = $page.url.pathname.split('/').pop();
				if (slug.startsWith('category')) {
					const category = decodeURIComponent($page.url.pathname.split('/').pop());
					document.title = category;
				} else {
					document.title = `Project ${slug}`;
				}
			}
		}
	}
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	{#key data.currentRoute}
		<main
			class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>

<style>
	@font-face {
		font-family: 'Inter';
		src:
			url('/fonts/Inter-Regular.woff2') format('woff2'),
			url('/fonts/Inter-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Inter';
		src:
			url('/fonts/Inter-Medium.woff2') format('woff2'),
			url('/fonts/Inter-Medium.woff') format('woff');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}
</style>
