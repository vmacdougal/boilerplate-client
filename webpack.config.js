var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'app', 'src', 'application'),
  ],
  preLoaders: [{
    test: /\.jsx?$/,
    loaders: ['eslint'],
    include: path.resolve(ROOT_PATH)
  }],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'app', 'build'),
    publicPath: '/',
    filename: 'application.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app', 'build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'ClientBoilerplate'
    })
  ]
};
