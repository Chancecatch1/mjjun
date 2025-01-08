

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.TdOIfhuV.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/chunks/index.B3cozpm8.js"];
export const stylesheets = ["_app/immutable/assets/2._5pQgz8x.css"];
export const fonts = [];
