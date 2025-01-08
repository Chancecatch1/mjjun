import { c as create_ssr_component, f as each, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { uniqueCategories } = data;
  console.log(uniqueCategories);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div><h1 data-svelte-h="svelte-rta2rj">All blog categories</h1> <ul>${each(uniqueCategories, (category) => {
    return `<li><a href="${"/work/category/" + escape(category.title, true)}">${escape(category.title)}</a></li>
			(${escape(category.count)})`;
  })}</ul></div>`;
});
export {
  Page as default
};
