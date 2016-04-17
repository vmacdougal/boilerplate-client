## Linting our code with ESLint
Linting is the process of running a program that will analyze the code for potential errors.
It is a way to find syntax errors and standardize with a set of rules the way code is written, which is especially interesting when the code is developed and maintained by multiple coders.

As [Juho explains in his chapter dedicated to linting in his book SurviveJS](http://survivejs.com/webpack_react/linting_in_webpack/), linting can considerably improve our workflow by detecting errors in our code before they become actual problems.

Douglas Crockford made [JSLint](http://www.jslint.com/), the first linter for JavaScript, which was highly opinionated. Later, as an alternative that allowed for much more customization [JSHint](http://jshint.com/) appeared. Finally, [ESLint](http://eslint.org/) is an evolution of the previous linters that not allows you to create new rules but you can also hook it up with custom parsers and reporters, so that you can use it also with Babel and JSX syntax. You can also control the degree of severity for each rule.

Additionally, we find a specific linter for code style, [JSCS](http://jscs.info/), even though ESLint already covers most of its features.

We will be installing ESLint, it allows for enough flexibility while already introducing basic code style linting.

install eslint
```
npm install eslint --save-dev
```

install modules to allow linting babel and react code,
```
npm install babel-eslint eslint-plugin-react --save-dev
```

To simplify our eslint configuration we shall stand on the shoulders of giants by adopting the estlint config of Air BnB
```
npm install eslint-plugin-import eslint-config-airbnb-base --save-dev
```

We can now create a script to be able to call for linting from the command line, the scripts in the package.json should now look like:
```
"scripts": {  
    ...
    "lint": "./node_modules/.bin/eslint . --ext .js --ext .jsx"
}
```

This script would trigger ESLint against all the .js and .jsx files of our project.
Because of that not being necessary, we will restrict which folders we actually want to be linted by defining which ones don’t need to be, for example our production folder.
To do so we just need to create a .eslintignore file in the root of our project with the following content:

```
build/*.*
```

add .eslintrc
```
{
  "extends": "airbnb-base/legacy"
}
```

run eslint
```
npm run lint
```

Finally, we need to connect ESLint with webpack to automatize the whole process.
First we need to install the eslint loader:
```
npm install eslint-loader --save-dev
```

And configure it in the webpack.config.js by adding the following block
```
...
module.exports = {  
  ...
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      include: path.resolve(ROOT_PATH, 'app')
    }],
    ...
  },
  ...
};
```

Note that we defined it inside the preLoaders section of the configuration, which gets executed before loaders.

If linting fails, we don’t need to go further.

If we npm start now, linting will already be working under the hood.

It is important to know that there’s much more to linting.
For example, you could define different levels of linting depending on the environment.
Some environments have conventions of their own.

We also need to activate babel-eslint for ESLint to lint our Babel code too.
The same applies to the react specific rules we previously installed, we need to activate them too.
To do so we just create an eslint configuration file in the root of our project called .eslintrc with the following content:
```
{
  ...
  "parser": "babel-eslint",
  ...
  "plugins": [
    "react"
  ],
  ...
  "rules": {
    "react/jsx-boolean-value": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-quotes": 0,
    "jsx-quotes": [2, "prefer-single"],
  }
}
```
