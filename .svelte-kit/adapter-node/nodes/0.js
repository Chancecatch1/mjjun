import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C8aOduVM.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/chunks/index.B3cozpm8.js","_app/immutable/chunks/entry.Bkov54j_.js","_app/immutable/chunks/stores.5nChSysP.js"];
export const stylesheets = ["_app/immutable/assets/0.D2xFQ8Wq.css"];
export const fonts = [];
