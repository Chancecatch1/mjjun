

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BVcshdNy.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B70SjxT4.js"];
export const stylesheets = [];
export const fonts = [];
