export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
