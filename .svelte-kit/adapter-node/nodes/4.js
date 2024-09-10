

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CB8tsDMz.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B9evkK4s.js"];
export const stylesheets = [];
export const fonts = [];
