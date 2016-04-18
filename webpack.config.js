var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'app', 'src', 'application')
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
      loaders: [
        'react-hot',
        'babel-loader?{"presets":["es2015","react"]}'
      ]
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
      title: 'ClientBoilerplate',
      template: 'app/src/index.ejs' // Load a custom template
    })
  ]
};
