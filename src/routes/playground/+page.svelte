<!-- usr/local/var/www/mjjun/src/routes/playground/+page.svelte -->

<script>
	// 필요한 경우 여기에 로직을 추가할 수 있습니다.
</script>

<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
		<div class="lg:order-2 lg:w-7/12">
			<div class="bg-white rounded-lg shadow border-2 border-black p-6 max-w-sm mx-auto">
				<div class="flex flex-col items-center gap-4">
					<img
						class="w-full h-40 object-cover rounded border-2 border-black"
						src="/favicon.png"
						alt="Favicon"
					/>
					<div class="flex items-center justify-between w-full">
						<div class="flex items-center gap-3">
							<div
								class="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center"
							>
								<!-- Placeholder for icon -->
							</div>
							<span class="text-black text-base font-bold">Figma</span>
						</div>
						<div class="flex gap-2">
							<!-- Placeholder for additional icons -->
							<div class="w-8 h-8 bg-gray-200 rounded-full"></div>
							<div class="w-8 h-8 bg-gray-200 rounded-full"></div>
							<div class="w-8 h-8 bg-gray-200 rounded-full"></div>
						</div>
					</div>
					<p class="text-black text-base font-medium leading-normal text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col justify-between lg:order-1 lg:w-5/12">
			<div>
				<h2 class="text-lg font-medium text-[#181717] mb-4">PLAYGROUND CARD</h2>
				<p class="text-lg text-[#181717] mb-6">
					This card component demonstrates a responsive design with a favicon image and flexible
					layout.
				</p>
				<p class="text-sm text-[#606060] mb-6">
					The card adjusts its size and positioning based on screen size, ensuring a great user
					experience on both mobile and desktop devices.
				</p>
			</div>
			<a href="#" class="text-lg font-medium text-[#181717] underline">
				More playground examples ↗
			</a>
		</div>
	</div>

	<div class="mt-12 border-t border-[#181717]"></div>
</section>
