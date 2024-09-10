const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo_mj.png","resume_mj.pdf"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.B9vvGhGE.js","app":"_app/immutable/entry/app.Dg5vico8.js","imports":["_app/immutable/entry/start.B9vvGhGE.js","_app/immutable/chunks/entry.BbqVzteH.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.Dg5vico8.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.B9evkK4s.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-K0ron93A.js')),
			__memo(() => import('./chunks/1-B4QdnYKK.js')),
			__memo(() => import('./chunks/2-DSXxdOIp.js')),
			__memo(() => import('./chunks/3-BTuoHEAG.js')),
			__memo(() => import('./chunks/4-BganfTax.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/playground",
				pattern: /^\/playground\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
