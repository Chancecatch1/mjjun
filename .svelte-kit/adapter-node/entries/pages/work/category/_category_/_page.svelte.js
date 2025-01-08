import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "../../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  const { category, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `  <h1>Blog category: ${escape(category)}</h1> ${category.length ? `<aside><h2 data-svelte-h="svelte-18w0g4i">Posted in:</h2> <ul>${each(posts, (post) => {
    return `<li><a${add_attribute("href", post.path, 0)}>${escape(post.path)}</a> </li>`;
  })}</ul></aside>` : ``}`;
});
export {
  Page as default
};
