import { c as create_ssr_component, k as subscribe, l as escape } from './exports-j_9WzN4S.js';
import { p as page } from './stores-CfXW_kjZ.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-D2_pHjxH.js.map
