const path = require("path");
const { injectBabelPlugin } = require("react-app-rewired");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = function override(config, env) {
  // 配置 alias
  config.resolve.alias = {
    "@": resolve("src")
  };
  // 配置装饰器的支持
  config = injectBabelPlugin(["@babel/plugin-proposal-decorators", { "legacy": true }], config);
  // 配置 ant-design 按需加载
  config = injectBabelPlugin(["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }], config);
  // 配置 webpack 包分析工具
  config.plugins = config.plugins.concat([
    new BundleAnalyzerPlugin()
  ]);

  return config;
};
