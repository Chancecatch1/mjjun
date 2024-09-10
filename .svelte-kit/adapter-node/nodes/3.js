

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playground/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CB8tsDMz.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B9evkK4s.js"];
export const stylesheets = [];
export const fonts = [];
