<!-- usr/local/var/www/mjjun/src/routes/work/category/[category]/+page.svelte -->

<script>
	export let data;
	console.log(data);
	const { category, posts } = data;
</script>

<h1>Blog category: {category}</h1>

{#if category.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each posts as post}
				<li>
					<a href={post.path}>
						{post.path}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
