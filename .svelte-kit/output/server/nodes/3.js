

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playground/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BLwsTM8S.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B70SjxT4.js"];
export const stylesheets = [];
export const fonts = [];
