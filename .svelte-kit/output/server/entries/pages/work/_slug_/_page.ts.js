const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../1.md": () => import("../../../../chunks/1.js"), "../2.md": () => import("../../../../chunks/2.js"), "../3.md": () => import("../../../../chunks/3.js"), "../4.md": () => import("../../../../chunks/4.js") }), `../${params.slug}.md`, 2);
  const { title, date } = post.metadata;
  const Content = post.default;
  return {
    Content,
    title,
    date
  };
}
export {
  load
};
