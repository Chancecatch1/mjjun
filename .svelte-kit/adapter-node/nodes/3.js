import * as universal from '../entries/pages/work/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/work/+page.js";
export const imports = ["_app/immutable/nodes/3.D57X5Lme.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/chunks/index.B3cozpm8.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.Cpd5kR4m.css"];
export const fonts = [];
