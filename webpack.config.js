const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// postCSS
const autoprefixer = require('autoprefixer');
const lost = require('lost');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.join(__dirname, 'app')
  ],
  resolve: {extensions: ['', '.js', '.jsx', '.scss']},
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        include: path.join(__dirname, 'app')
      },
    ]
  },
  postcss: function() {
    return [autoprefixer, lost];
  },

  sassLoader: {
    includePaths: [path.join(__dirname, 'scss')]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    historyApiFallback: true,
    hot: true,
    progress: true,
    stats: 'errors-only',
    port: 3000
  }
}
