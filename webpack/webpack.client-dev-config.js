const webpack = require('webpack');

const {
  entry,
  output,
  resolve,
  modules,
  devServer,
  plugins
} = require('./webpack.common-config');

module.exports = {
  entry,
  output,
  resolve,
  module: modules,
  devServer,
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(
        process.env.BASE_URL || 'localhost'
      ),
      'process.env.PORT': JSON.stringify(process.env.PORT || 8080),
      __DEVELOPMENT__: true,
      __TEST__: false
    })
  ]
};
