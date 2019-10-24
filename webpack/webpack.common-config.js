/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.BASE_URL || 'http://localhost';

const client = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: {
      '/api': `${BASE_URL}:${PORT}`
    }
  },
  entry: ['babel-polyfill', './src/client/index.js'],
  globals: {
    'process.env.BASE_URL': JSON.stringify(BASE_URL)
  },
  modules: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              camelCase: true,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: ['> 1%', 'last 2 versions']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.tsx', '.json']
  }
};

module.exports = client;
