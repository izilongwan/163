const { join } = require('path');
const resolve = dir => join(__dirname, dir);

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
  }
};
