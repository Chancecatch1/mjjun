<script>
	export let data;
	const { uniqueCategories } = data;
	console.log(uniqueCategories);
</script>

<div>
	<h1>All blog categories</h1>

	<ul>
		{#each uniqueCategories as category}
			<li>
				<a href="/work/category/{category.title}">{category.title}</a>
			</li>
			({category.count})
		{/each}
	</ul>
</div>
