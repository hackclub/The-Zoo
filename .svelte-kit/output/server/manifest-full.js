export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","boba/bobaD1.png","boba/bobaD2.png","boba/bobaD3.png","boba/bobaD4.png","boba/bobaD5.png","boba/bobaV1.png","boba/bobaV2.png","boba/bobaV3.png","boba/bobaV4.png","boba/bobaV5.png","bobaD.png","bobaV.png","favicon.svg","flag.png","logo.png","monde.png","mynt.png","octo.png","pig.png","whale.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CUIqnMxv.js",app:"_app/immutable/entry/app.DUOwRuXa.js",imports:["_app/immutable/entry/start.CUIqnMxv.js","_app/immutable/chunks/rCFslpgi.js","_app/immutable/chunks/iQylqzqa.js","_app/immutable/chunks/Bq6IOLdl.js","_app/immutable/entry/app.DUOwRuXa.js","_app/immutable/chunks/Bq6IOLdl.js","_app/immutable/chunks/iQylqzqa.js","_app/immutable/chunks/CWj6FrbW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
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
				id: "/alternative",
				pattern: /^\/alternative\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/clubs",
				pattern: /^\/clubs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/fraud",
				pattern: /^\/fraud\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/mynts",
				pattern: /^\/mynts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/requirements",
				pattern: /^\/requirements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
