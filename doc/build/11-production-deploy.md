## Creating the production ready files to deploy

It’s time to configure Webpack to help us when it's time to deploy our application.
To generate the necessary files for the production ready application we have to add a new script to our package.json file:
```
"scripts": {  
  ...
  "deploy": "NODE_ENV=production webpack -p --config webpack.production.config.js"
}
```
We use the “production” environment variable to allow our required modules to do their optimizations (minimification, uglify, etc).


we will also add a script to clean our app/dist and app/build directories
```
"scripts": {  
  ...
  "clean": "rm -rf app/dist app/build"
}
```

We will create a separate webpack config for production.
For now the only difference will be that production will send its file to app/dist rather than app/build
```
cp webpack.config.js webpack.production.config.js
```

now change the output block to reflect the following
```
output: {
  path: path.resolve(ROOT_PATH, 'app', 'dist'),
  publicPath: 'http://burnerdev.github.io/boilerplate-client/',
  filename: 'application.js',
},
```

We will also changed the line where we enable source-maps, so that we only generate the source-maps for the development environment!
When running npm run build, we should have application.map.js in our app/build/ folder, on the other hand, when we run npm run deploy, we shouldn’t have a application.map.js in our app/dist/ folder.
We should get our production ready files inside the app/dist/ folder in the root.
```
module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map' ,
}
```

We will also allow webpack to read the NODE_ENV var from the process by adding the following to the plugins block of our webpack config
```
plugins: [
  ...
  new webpack.EnvironmentPlugin([
    'NODE_ENV'
  ])
]
```
next, we will add the new app/dist/ folder to .eslintignore, we don’t want the linter to apply its rules here.
The content of .eslintignore should now be
```
app/build  
app/dist
```


If we now run
```
npm run deploy
```


deploy to github pages
```
git checkout -b release
npm run clean && npm run deploy
git add app/dist
git commit -m 'deploy'
git push github --delete gh-pages
git subtree push  --prefix app/dist github gh-pages
```

git push github `git subtree split --prefix app/dist release`:gh-pages --force
