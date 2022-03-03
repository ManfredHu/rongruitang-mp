const webpack = require("webpack");
const packageJson = require("./package.json");
const fs = require('fs')
const MergeProjectConfigPlugin = require('./build/MergeProjectConfigPlugin')
const version = packageJson.version;
const NODE_ENV = process.env.NODE_ENV;

const envMap = {
  dev: '"dev"',
  prod: '"prod"',
};
const HostMap = {
  dev: '"https://dev.com"',
  prod: '"https://prod.com"',
};

module.exports = {
  appId: "wx94687d0c59c97070",
  app: "src/miniprogram/app",
  compileType: "miniprogram",
  outputDir: "dist/miniprogram",
  miniprogramRoot: "miniprogram",
  sourceMap: (mode) => (mode !== "production" ? true : false),
  plugins: [
    "@mpflow/plugin-babel",
    "@mpflow/plugin-typescript",
    "@mpflow/plugin-css",
  ],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // 编译环境
        env: envMap[NODE_ENV],
        host: HostMap[NODE_ENV],
        __VERSION__: JSON.stringify(version),
      }),
      new MergeProjectConfigPlugin(), // 合并覆盖mpflow输出的文件 project.config.json
    ],
  },
  configureWebpackChain: (config) => {
    // 别名设置, require.resolve
    config.resolve.alias.set("@base", "src/miniprogram/base");
    config.resolve.alias.set("@utils", "src/miniprogram/utils");
    config.resolve.alias.set("@config", "src/miniprogram/config");
    config.resolve.alias.set("@image", "src/miniprogram/image");

    // diy定义其他流程
    // config.plugin('mpflow').tap(([mpflowConfig]) => {
    //   console.log(`mpflowConfig`, mpflowConfig.program);
    //   return [mpflowConfig];
    // })
    // fs.writeFileSync("./webpack-output.json", config.toString());
  },
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
  useExtendedLib: {
    // 使用扩展库，和 app.json 中的 useExtendedLib 相同即可
    weui: true,
  },
};
