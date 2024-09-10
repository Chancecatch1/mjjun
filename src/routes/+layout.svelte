<!-- +layout.svelte -->

<script>
	import Header from '$lib/components/header.svelte';
	import Footer from "$lib/components/footer.svelte";
	import '../app.css'; // Tailwind CSS 스타일을 import합니다. 경로는 프로젝트 구조에 따라 다를 수 있습니다.
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
