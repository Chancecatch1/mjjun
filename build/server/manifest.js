const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CBNCWzuU.js","app":"_app/immutable/entry/app.CZMXlLP2.js","imports":["_app/immutable/entry/start.CBNCWzuU.js","_app/immutable/chunks/entry.CJRtMT2B.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CZMXlLP2.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.xZp2ekXT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C9SmnTht.js')),
			__memo(() => import('./chunks/1-CsQvSFOe.js')),
			__memo(() => import('./chunks/2-cc5t6ksx.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
