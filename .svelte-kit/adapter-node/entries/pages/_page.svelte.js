import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "html{background-color:#f3f4f6}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<h1 class=\\"text-3xl font-bold underline\\">Hello world!</h1>\\n\\n<style lang=\\"postcss\\">\\n\\t:global(html) {\\n\\t\\tbackground-color: #f3f4f6;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAGS,IAAM,CACb,gBAAgB,CAAE,OACnB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="text-3xl font-bold underline" data-svelte-h="svelte-bk5epg">Hello world!</h1>`;
});
export {
  Page as default
};
