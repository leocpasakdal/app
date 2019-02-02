const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const client = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  entry: ['babel-polyfill', './src/client/index.js'],
  globals: {
    'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL || 'localhost'),
    'process.env.PORT': JSON.stringify(process.env.PORT || 8080)
  },
  modules: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
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
    alias: {
      '#': path.resolve(__dirname, '../src/client')
    }
  }
};

module.exports = client;
