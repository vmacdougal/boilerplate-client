#### Webpack

Webpack Packages Common Js modules for the browser.
Allows you to split your codebase into multiple bundles, which can be loaded on demand.
Support loaders to preprocess files, i.e. json, jade, coffee, css, less, and more.

We will be using webpack to ease our front-end development workflow together with its development server (webpack-dev-server).

To install both modules
```
npm install webpack webpack-dev-server --save-dev
```

We will now add script entries for weback to our package.json
```
"scripts": {
    "build": "./node_modules/.bin/webpack",
    "dev": "./node_modules/.bin/webpack-dev-server"
},
```

It’s time to start configuring Webpack. To do so, we need to create the file webpack.config.js at the root of the project.
This way Webpack and its development server will be able to find it by convention.

Make sure that the paths fit our previously chosen folder structure. Notice also, that webpack expects absolute paths.
```
module.exports = {
  entry: [
    __dirname + '/app/src/application.js'
  ],
  output: {
    path: __dirname + '/app/build',
    publicPath: '/',
    filename: 'application.js'
  },
  devServer: {
    contentBase: __dirname + '/app/build'
  }
};
```

We have basically defined that app/src/application.js is our entry point and that we want our app to be built into app/build/application.js.
The file name must match the name we gave it in the script tag when we defined our index.html.
We are also defining that the build directory should be used as the base of the development server.

To run webpack to generate our application.js:
```
npm run build
```
application.js should now be present inside /build/ and the code of our src/application.js is at the very bottom.

if we ran the web server at this point we would not get the expected results. we first need to copy src/index.html to build/index.html

We can now run the webpack dev server
```
npm run dev
```
Verify it’s working by pointing your web browser to http://localhost:8080/
The logging statement from the application.js appears in the browser java console.
Hello World


#### Html-webpack-plugin: Making it nicely
Our Webpack config works, but entails a couple of annoying problems.
If we manually create our index.html inside the build folder, then we need to change the gitignore file in order not to ignore it.

Why don’t we just get webpack to create the base index.html for us? Html-webpack-plugin will help us to generate an entry point to our application, creating links to all the assets like the js bundle and the minified css.

Let’s install it:
```
npm install html-webpack-plugin --save
```

We will also resolve paths so that the config is more robust as well, modify webpack.config.js to look like:
```
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
```


If you now run webpack on the command line
```
npm run build
```

You will see that webpack generates both, the index.html and the bundle.js!
In the future we will also configure it to minify our css.

ensure our dev server is running
```
npm run dev
```


#### Create a component
create our first component: app/src/components/boilerplate.js
```
module.exports = function () {  
  var element = document.createElement('h1');

  element.innerHTML = 'Hello Client Application!';

  return element;
};
```

and require it in our entry point: app/src/application.js
```
//console.log('Hello World');

var component = require('./components/boilerplate');  
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());  
```

You should notice that the browser automatically refreshes!!
Notice that we didn’t restart the server.
Now any further changes in the boilerplate component we just defined instantly update in the browser.
