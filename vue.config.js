const { join } = require('path');
const resolve = dir => join(__dirname, dir);
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  assetsDir: 'static',

  devServer: {
    hotOnly: true
  },

  lintOnSave: true,

  chainWebpack: config => {

    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('images', resolve('src/assets/images'))
      .set('styles', resolve('src/assets/styles'))
      .set('data', resolve('src/assets/data'))
      .set('js', resolve('src/assets/js'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'));

    return config;
  },

  configureWebpack: config => {
    if (IS_PROD) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }

    // 公共代码抽离
    config.optimization = {
      // 分割代码块
      splitChunks: {
        cacheGroups: {
          //公用模块抽离
          common: {
            chunks: 'initial',
            minSize: 0, //大于0个字节
            minChunks: 2, //抽离公共代码时，这个代码块最小被引用的次数
          },
          //第三方库抽离
          vendor: {
            priority: 1, //权重
            test: /node_modules/,
            chunks: 'initial',
            minSize: 0, //大于0个字节
            minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
          },
        },
      },
    };
  }
};
