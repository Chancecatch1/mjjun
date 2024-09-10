

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.xMHLIK-x.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B9evkK4s.js"];
export const stylesheets = ["_app/immutable/assets/0.C1T9Sbu3.css"];
export const fonts = [];
