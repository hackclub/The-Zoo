

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DO-77oK1.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BjgciwUQ.js","_app/immutable/chunks/2ERZKe_q.js"];
export const stylesheets = [];
export const fonts = [];
