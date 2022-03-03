const path = require("path");
const fs = require("fs");
class MergeProjectConfigPlugin {
  static defaultOptions = {
    projectConfigPath: path.join(process.cwd(), "./project.config.json"),
  };

  // 需要传入自定义插件构造函数的任意选项
  //（这是自定义插件的公开API）
  constructor(options = {}) {
    // 在应用默认选项前，先应用用户指定选项
    // 合并后的选项暴露给插件方法
    // 记得在这里校验所有选项
    this.options = { ...MergeProjectConfigPlugin.defaultOptions, ...options };
  }

  apply(compiler) {
    const pluginName = MergeProjectConfigPlugin.name;

    compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
      // console.log(`filelist`, Object.keys(compilation.assets));
      const key = Object.keys(compilation.assets).find((item) =>
        item.includes("project.config.json")
      );
      // console.log(`project.config.json content`, compilation.assets[key]);

      // https://www.npmjs.com/package/webpack-sources
      // compilation.assets[key] 为一个RawSource对象
      try {
        const originProjectCfg = JSON.parse(compilation.assets[key].source());

        // console.log(`originProjectCfg`, originProjectCfg);

        const projectCfg = JSON.parse(
          fs.readFileSync(this.options.projectConfigPath, "utf8")
        );
        const newCfg = Object.assign(originProjectCfg, projectCfg);

        // 修改或添加资源
        compilation.assets[key] = {
          source() {
            return JSON.stringify(newCfg);
          },
          size() {
            return this.source().length;
          },
        };
        // // 删除资源
        // delete compilation.assets[key]

        callback();
      } catch (err) {
        console.error(e);
        callback(e);
      }
    });
  }
}

module.exports = MergeProjectConfigPlugin;
