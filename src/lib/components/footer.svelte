<!-- /usr/local/var/www/mjjun/src/lib/components/footer.svelte -->

<!-- /usr/local/var/www/mjjun/src/lib/components/footer.svelte -->

<style>
	.courier-font {
		font-family: 'Courier New', Courier, monospace;
	}
</style>

<footer class="courier-font bg-white border-t">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div
			class="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"
		>
			<a
				href="https://www.instagram.com/chancecatch/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
			>
				instagram
			</a>
			<a
				href="https://www.youtube.com/@chancecatch"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
			>
				youtube
			</a>
			<a
				href="https://brunch.co.kr/@c50aecc70e5f490"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
			>
				brunch
			</a>
			<a
				href="https://www.linkedin.com/in/mlmj"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
			>
				linkedin
			</a>
			<a
				href="mailto:myungjun1026@gmail.com"
				class="text-sm text-gray-800 hover:text-gray-600 transition-colors duration-200"
			>
				email
			</a>
			<a
				href="/resume_mj.pdf"
				class="text-sm text-gray-800 hover:text-gray-600 transition-colors duration-200"
			>
				resume
			</a>
			<p class="text-sm text-gray-600">
				myungjunlee, copyright@{new Date().getFullYear()}
			</p>
		</div>
	</div>
</footer>