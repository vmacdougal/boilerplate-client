### React
React can be associated to the V of the MVC pattern.
Reacts primarily purpose is to deal with the task of defining interfaces.
React makes re-rendering the DOM inexpensive.

Install react
```
npm install react react-dom --save
```

#### Configure Babel
```
npm install babel-preset-react babel-preset-es2015 --save
```

modify webpack.config.js to include the react and es2015 presets
```
...
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel-loader?{"presets":["es2015","react"]}',
      ],
    }],
  },
...
```

#### React Example View
We will create a small react example to verify our configuration.
First remove our earlier sample app.
We won’t be needing it anymore.

remove previous sample app files
```
rm app/src/components/boilerplate.js
rm app/src/application.js
rm app/src/index.html
```

create our base App component: app/src/components/App.jsx
```
import React from 'react';

class App extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

export default App;
```

Finally, create app/src/application.jsx
```
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

main();
function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDom.render(<App />, app);
}
```


Note that we changed the extension of the file from .js to .jsx because the file now contains JSX content.
The rendering logic will first create the DOM element into which it will later render our React application.

http://localhost:8080/ should now show

Build my boilerplate
Nothing very exciting so far other than the fact that now it is React who is rendering the displayed message.



### React-hot-loader
If we change the Todo component, we will see that the browser automatically refreshes for us. That’s what we configured it to do when we configured the Hot Module Replacement (HMR) plugin. However, refreshing the page means also loosing our current application state. This can be very annoying while developing, just imagine having to do the same steps to get to the desired application state every time we want to check a change in the code. This is where react-hot-loader comes into place to improve our development workflow. It will automatically swap our React components code as we develop without forcing a browser refresh and thus, without losing the application’s current state. Let’s see it in action.

As we only want this package for the development environment we will install it with the --save-dev flag as follows:
```
npm install react-hot-loader --save-dev
```

Now we need to adjust our webpack config
```
...
module.exports = {  
  ...
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: [
      'react-hot',
      'babel-loader?' + JSON.stringify({
        presets:['es2015', 'react']
      })
    ]
  }]
  ...
};
```



### Source maps
Let’s talk a little bit about source maps and how can they improve our workflow. You may have realized that now, the code we have access to from the development tools, i.e our bundle.js is quite different to the code we initially wrote to the editor. In other words, the code in the development environment and the production environment isn’t very similar to our human eyes. Well, that has an explanation, we have run it through compilation, minification, concatenation, and other kinds of optimizations. This makes it quite unreadable for us when on Firebug or Chrome Dev Tools.

Source maps help us by pointing in our production code to its exact mapping in the original code.

To enable this functionality we just change the webpack.config.js to:
```
...
module.exports = {  
  devtool: 'source-map',
  ...
};
```

When we now run
```
npm run build
```

We should see a application.map.js inside our build/ folder. Those are our new helpful source maps!


### React developer tools
You might want to check the [React developer tools](https://github.com/facebook/react-devtools).
