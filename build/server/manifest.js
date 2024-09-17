const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["arrow.svg","favicon.png","logo_mj.png","resume_mj.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.DzEnb0TO.js","app":"_app/immutable/entry/app.DxOhTALb.js","imports":["_app/immutable/entry/start.DzEnb0TO.js","_app/immutable/chunks/entry.DlH8fFA_.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.DxOhTALb.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CXdeHXkC.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DWydL30C.js')),
			__memo(() => import('./chunks/1-BttnhZMU.js')),
			__memo(() => import('./chunks/2-8GdDI8tW.js')),
			__memo(() => import('./chunks/3-BkqgvzGI.js')),
			__memo(() => import('./chunks/4-d8f11VE-.js'))
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
