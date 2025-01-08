export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.D2xi_q6P.js","app":"_app/immutable/entry/app.DfHgvEi5.js","imports":["_app/immutable/entry/start.D2xi_q6P.js","_app/immutable/chunks/entry.Bkov54j_.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/entry/app.DfHgvEi5.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.opo_pS0k.js","_app/immutable/chunks/index.B3cozpm8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
