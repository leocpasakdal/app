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
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      __DEVELOPMENT: false,
      __TEST__: true
    })
  ]
};
