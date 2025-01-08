import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, date, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `  ${$$result.head += `<!-- HEAD_svelte-zpk4mc_START -->${$$result.title = `<title>My blog - ${escape(title)}</title>`, ""}<meta property="og:title"${add_attribute("content", title, 0)}><!-- HEAD_svelte-zpk4mc_END -->`, ""} <article><h1>${escape(title)}</h1> <p>Published: ${escape(date)}</p> ${validate_component(Content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
