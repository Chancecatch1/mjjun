import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".dos-container.svelte-n6fopl{font-family:'Courier New', Courier, monospace;background-color:#fff;color:#000;padding:2rem;min-height:100vh}.dos-list.svelte-n6fopl{list-style-type:none;padding:0}.dos-item.svelte-n6fopl{padding:0.5rem 0}.dos-link.svelte-n6fopl{color:#000;text-decoration:none}.dos-link.svelte-n6fopl:hover{background-color:#000;color:#fff}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<!-- usr/local/var/www/mjjun/src/routes/work/+page.svelte -->\\n\\n<script>\\n\\texport let data;\\n\\n\\tconst workItems = [\\n\\t\\t{ title: 'service development using kopis bigdata' },\\n\\t\\t{ title: 'heartsignal Project' },\\n\\t\\t{ title: 'face detection smart door' },\\n\\t\\t{ title: 'prototype of smart farm' }\\n\\t];\\n<\/script>\\n\\n<div class=\\"dos-container\\">\\n\\t<ul class=\\"dos-list\\">\\n\\t\\t{#each workItems as work, index}\\n\\t\\t\\t<li class=\\"dos-item\\">\\n\\t\\t\\t\\t<a href={data.posts[index].path} class=\\"dos-link\\">\\n\\t\\t\\t\\t\\t{(index + 1).toString().padStart(2, '0')}. {work.title}\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</li>\\n\\t\\t{/each}\\n\\t</ul>\\n</div>\\n\\n<style>\\n\\t.dos-container {\\n\\t\\tfont-family: 'Courier New', Courier, monospace;\\n\\t\\tbackground-color: #fff;\\n\\t\\tcolor: #000;\\n\\t\\tpadding: 2rem;\\n\\t\\tmin-height: 100vh;\\n\\t}\\n\\t.dos-list {\\n\\t\\tlist-style-type: none;\\n\\t\\tpadding: 0;\\n\\t}\\n\\t.dos-item {\\n\\t\\tpadding: 0.5rem 0;\\n\\t}\\n\\t.dos-link {\\n\\t\\tcolor: #000;\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\t.dos-link:hover {\\n\\t\\tbackground-color: #000;\\n\\t\\tcolor: #fff;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0BC,4BAAe,CACd,WAAW,CAAE,aAAa,CAAC,CAAC,OAAO,CAAC,CAAC,SAAS,CAC9C,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KACb,CACA,uBAAU,CACT,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CACV,CACA,uBAAU,CACT,OAAO,CAAE,MAAM,CAAC,CACjB,CACA,uBAAU,CACT,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,IAClB,CACA,uBAAS,MAAO,CACf,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,IACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const workItems = [
    {
      title: "service development using kopis bigdata"
    },
    { title: "heartsignal Project" },
    { title: "face detection smart door" },
    { title: "prototype of smart farm" }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `  <div class="dos-container svelte-n6fopl"><ul class="dos-list svelte-n6fopl">${each(workItems, (work, index) => {
    return `<li class="dos-item svelte-n6fopl"><a${add_attribute("href", data.posts[index].path, 0)} class="dos-link svelte-n6fopl">${escape((index + 1).toString().padStart(2, "0"))}. ${escape(work.title)}</a> </li>`;
  })}</ul> </div>`;
});
export {
  Page as default
};
