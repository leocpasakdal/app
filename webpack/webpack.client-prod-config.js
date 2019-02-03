const webpack = require('webpack');

const {
  entry,
  output,
  globals,
  resolve,
  modules,
  devServer,
  plugins
} = require('./webpack.common-config');

module.exports = {
  devServer,
  entry,
  output,
  resolve,

  module: modules,
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      ...globals,
      __PORT__: JSON.stringify(''),
      __DEVELOPMENT__: false,
      __TEST__: true
    })
  ]
};
