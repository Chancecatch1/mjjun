const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/work/1.md": () => import("./1.js"), "/src/routes/work/2.md": () => import("./2.js"), "/src/routes/work/3.md": () => import("./3.js"), "/src/routes/work/4.md": () => import("./4.js") });
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
export {
  fetchMarkdownPosts as f
};
