module.exports = {
  appId: 'wx819cc5ff0014948e',
  app: 'src/app',
  compileType: 'miniprogram',
  plugins: ["@mpflow/plugin-babel", "@mpflow/plugin-typescript", "@mpflow/plugin-css"],
  settings: {
		urlCheck: true,
		es6: false,
		enhance: false,
		postcss: false,
		preloadBackgroundData: false,
		minified: false,
		newFeature: false,
		coverView: true,
		nodeModules: false,
		autoAudits: false,
		showShadowRootInWxmlPanel: true,
		scopeDataCheck: false,
		uglifyFileName: false,
		checkInvalidKey: true,
		checkSiteMap: true,
		uploadWithSourceMap: true,
		compileHotReLoad: false,
		babelSetting: {
			ignore: [],
			disablePlugins: [],
			outputPath: "",
		},
		useIsolateContext: true,
		useCompilerModule: false,
		userConfirmedUseCompilerModuleSwitch: false,
	},
}
