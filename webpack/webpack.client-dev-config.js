/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

const {
  devServer,
  entry,
  globals,
  modules,
  output,
  plugins,
  resolve
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
      __PORT__: JSON.stringify(process.env.PORT || 8080),
      __DEVELOPMENT__: true,
      __TEST__: false
    })
  ]
};
