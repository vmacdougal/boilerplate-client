var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'app', 'src', 'application'),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'app', 'build'),
    publicPath: '/',
    filename: 'application.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app', 'build')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'ClientBoilerplate'
    })
  ]
};
