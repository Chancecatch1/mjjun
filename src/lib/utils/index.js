// usr/local/var/www/mjjun/src/lib/utils/index.js

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/work/*.md');

	const allPosts = await Promise.all(
		Object.entries(allPostFiles).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
