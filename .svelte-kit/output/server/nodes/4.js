import * as universal from '../entries/pages/work/_slug_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/work/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/4.DG39Xr5T.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/chunks/index.B3cozpm8.js"];
export const stylesheets = [];
export const fonts = [];
