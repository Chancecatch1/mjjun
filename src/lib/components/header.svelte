<!-- usr/local/var/www/mjjun/src/lib/components/header.svelte -->

<div
	class="w-full max-w-[1120px] h-[35px] pt-2.5 pb-0.5 mx-auto flex justify-between items-end mt-4"
>
	<!-- 왼쪽 로고 공간 -->
	<div class="flex items-center">
		<a href="/">
			<img src="/logo_mj.png" alt="Logo" class="h-8" />
		</a>
	</div>

	<!-- 네비게이션 링크 -->
	<div class="flex space-x-8">
		<div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed">
			<a href="/work">work</a>
		</div>
		<div class="text-[#181717] text-[21px] font-medium font-['DM Sans'] leading-relaxed">
			<a href="/playground">playground</a>
		</div>
	</div>
</div>
