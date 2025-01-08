<!-- usr/local/var/www/mjjun/src/routes/work/+page.svelte -->

<script>
	export let data;

	const workItems = [
		{ title: 'service development using kopis bigdata' },
		{ title: 'heartsignal Project' },
		{ title: 'face detection smart door' },
		{ title: 'prototype of smart farm' }
	];
</script>

<div class="dos-container">
	<ul class="dos-list">
		{#each workItems as work, index}
			<li class="dos-item">
				<a href={data.posts[index].path} class="dos-link">
					{(index + 1).toString().padStart(2, '0')}. {work.title}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.dos-container {
		font-family: 'Courier New', Courier, monospace;
		background-color: #fff;
		color: #000;
		padding: 2rem;
		min-height: 100vh;
	}
	.dos-list {
		list-style-type: none;
		padding: 0;
	}
	.dos-item {
		padding: 0.5rem 0;
	}
	.dos-link {
		color: #000;
		text-decoration: none;
	}
	.dos-link:hover {
		background-color: #000;
		color: #fff;
	}
</style>
