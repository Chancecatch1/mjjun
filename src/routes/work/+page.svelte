<!-- usr/local/var/www/mjjun/src/routes/work/+page.svelte -->

<script>
	import { onMount } from 'svelte';
	let ArrowSvg;

	onMount(async () => {
		const response = await fetch('/arrow.svg');
		let svgText = await response.text();

		svgText = svgText.replace('<svg', '<svg width="24" height="24"');

		ArrowSvg = svgText;
	});
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="mb-8">
		{@html ArrowSvg}
	</div>

	<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-24">
		<div class="lg:order-2 lg:w-7/12">
			<div class="bg-[#606060] w-full aspect-[16/9]"></div>
		</div>

		<div class="flex flex-col justify-between lg:order-1 lg:w-5/12">
			<div>
				<h2 class="text-lg font-medium text-[#181717] mb-4">01 / PROJECT NAME</h2>
				<p class="text-lg text-[#181717] mb-8">
					Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and
					look development.
				</p>
				<p class="text-sm text-[#606060] mb-8">
					Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using
					Arnold.
				</p>
			</div>
			<a href="#" class="text-lg font-medium text-[#181717] underline">
				More shots from this project ↗
			</a>
		</div>
	</div>

	<div class="mt-12 border-t border-[#181717]"></div>
</section>
