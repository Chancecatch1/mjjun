<!-- usr/local/var/www/mjjun/src/routes/+page.svelte -->

<script>
	import { onMount } from 'svelte';

	let imageLoaded = false;
	let imgElement;

	onMount(() => {
		if (imgElement && imgElement.complete) {
			imageLoaded = true;
		}
	});

	function handleImageLoad() {
		imageLoaded = true;
	}
</script>

<main
	class="courier-font container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between items-start gap-12"
>
	<div class="w-full lg:w-1/2 xl:w-3/5">
		<section class="mb-8">
			<h1 class="text-gray-900 text-2xl sm:text-3xl font-medium leading-snug mb-4">
				00 / hello, i'm mj, a machine learning engineer and data analyst
			</h1>
			<p class="text-gray-600 text-lg font-normal leading-relaxed">
				i live in calgary, canada. I started learning ai because i want to create useful services
				for people. i've worked on some projects, but i'm still figuring out which area to focus on.
				i used to make art projects before, but now i'm studying computer science to change my
				career
			</p>
			<div class="mt-4">
				<a href="/resume_mj.pdf" class="text-blue-600 hover:text-blue-800 underline" target="_blank">
					View my resume
				</a>
			</div>
		</section>
	</div>

	<div class="w-full lg:w-1/2 xl:w-2/5 flex justify-center items-start">
		<div class="w-full max-w-[400px] aspect-square relative overflow-hidden rounded-lg shadow-lg {imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300">
			<img
				bind:this={imgElement}
				class="absolute inset-0 w-full h-full object-cover"
				src="/favicon.png"
				alt="profile image"
				on:load={handleImageLoad}
			/>
		</div>
	</div>
</main>

<style>
	.courier-font {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
