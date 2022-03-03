const path = require("path");
const fs = require("fs");
const entryJsList = {};
const dirPath = "./src/cloudfunctions";
const AssetsAppendWebpackPlugin = require("assets-append-webpack-plugin");

var nodeModules = {};
fs.readdirSync(dirPath).forEach((dirName) => {
  const subDirPath = path.join(__dirname, dirPath, dirName);
  if (fs.statSync(subDirPath).isDirectory()) {
    const entryJs = `${subDirPath}/index.ts`;
    if (fs.existsSync(entryJs)) {
      entryJsList[`${dirName}/index`] = [entryJs];
    }
    // 不把node模块merge进去
    if (fs.existsSync(`${subDirPath}/../node_modules`)) {
      fs.readdirSync(`${subDirPath}/../node_modules`)
        .filter(function (x) {
          return [".bin"].indexOf(x) === -1;
        })
        .forEach(function (mod) {
          nodeModules[mod] = "commonjs " + mod;
        });
    }
  }
});
// console.log('nodemodules', entryJsList, path.resolve('./dist/cloudfunctions'))
module.exports = {
  entry: entryJsList,
  target: "node",
  context: __dirname,
  node: {
    __filename: false,
    __dirname: false,
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|business/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    libraryTarget: "umd",
    path: path.resolve("./dist/cloudfunctions"),
  },
  plugins: [
    new AssetsAppendWebpackPlugin({
      header: "exports.main = ",
      footer: "",
    }),
  ],
  externals: nodeModules,
};
