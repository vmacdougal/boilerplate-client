var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        'babel-loader?' + JSON.stringify({
          presets: ['es2015', 'react']
        })
      ]
    },
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.scss$/, loader: 'style!css!sass' },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ['file-loader'] }]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'src',
      'node_modules'
    ]
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
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
