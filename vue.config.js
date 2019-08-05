const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  devServer: {
        proxy: 'http://localhost:8080/',
    },

    publicPath: '',

  //   configureWebpack: {
  //   plugins: [
  //     new ImageminPlugin()
  //   ]
  // }

}