## Babel

A few words about Babel and why will we be using it.

Some ES6 features are natively supported by Node.js 4.1.0 but some aren’t.
Babel will allow us to use more features of ES6 in our code and provide a painless mechanism to convert unsupported code into a format that Node natively understands.

Note: While ES6 provides syntax for import/export (ES6 Modules), it currently does nothing, anywhere, because the loader spec is not finished.
ES6 Modules are not yet a thing; they do not yet exist.
Babel simply transpiles import/export to require.

To install babel
```
npm install babel-loader babel-core -save
```

#### Adding babel to the webpack config
We now need to configure webpack to use babel to transpile our ES6 into ES5 for us.
To do so we define which file extensions we want to be transpiled (.jsx, .js),
also we exclude the folders we don’t want to transpile:

```
module.exports = {  
  ...
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
  ...
};
```

The resolve block helps us make sure that whenever we use the ES6 import it will work independently of the file extension.
However, it would be wise to define a code style that forces us to always use the same file extension.
In our case, we defined it to .jsx.


#### Configuring Babel
We could create a config file .babelrc for Babel in the root of our project if we wanted to.
There are several [advanced options](http://babeljs.io/docs/usage/options/).

We want to start our development server with a few improvements, so we set them up in the webpack.config.js file:
```
module.exports = {  
  ...
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app', 'build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  ...
};
```
We have enabled Hot Module Replacement and HTML5 History fallback, to improve the UX in our app by allowing the History API routes to work.
The inline setting embeds the webpack-dev-server runtime into the generated bundle easing the set up of the Hot Module Replacement by not having to set up a bunch of entry paths.

We can now run the webpack dev server to verify our changes
```
npm run dev
```

Point your web browser to http://localhost:8080/
we will see in the console that the Hot Module Replacement is now enabled:
[WDS] Hot Module Replacement enabled.

We could also run the application from localhost:8080/webpack-dev-server/bundle . This way we get information about the status of the rebundling process.

There are several [configuration options](https://webpack.github.io/docs/webpack-dev-server.html#api) like enabling lazy loading or changing the default port 8080 to anything else passing the port parameter to devServer, i.e “port: 4000”.
