<!-- usr/local/var/www/mjjun/src/lib/components/header.svelte -->

<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
</script>

<header class="courier-font w-full bg-white shadow-sm">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between py-4">
			<div class="flex items-center">
				<a href="/" class="flex items-center text-xl font-bold text-gray-800">
					<img src="/logo_mj.png" alt="Logo" class="h-8" />
				</a>

				<nav class="ml-6">
					<a href="/work" class="text-gray-800 hover:text-gray-600 transition-colors duration-200">
						my works
					</a>
				</nav>
			</div>
		</div>
	</div>
</header>

<style>
	.courier-font {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
