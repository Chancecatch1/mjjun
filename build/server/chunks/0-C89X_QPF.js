const prerender = true;
const load = ({ url }) => ({
  currentRoute: url.pathname
});

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-8aZVhU3A.js')).default;
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/nodes/0.C8aOduVM.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/chunks/index.B3cozpm8.js","_app/immutable/chunks/entry.Bkov54j_.js","_app/immutable/chunks/stores.5nChSysP.js"];
const stylesheets = ["_app/immutable/assets/0.D2xFQ8Wq.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-C89X_QPF.js.map
