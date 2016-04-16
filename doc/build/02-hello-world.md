# hello world

Our application will require an HTML index page.  
This is the static entry point for the application.

```
mkdir -p app/src
touch app/src/index.html
```

modify app/src/index.html
```
<!DOCTYPE html>  
<html>
<body>   
  <div id="app"></div>   
  <script src="application.js"></script>
</body>
</html>
```

In this document we basically define two things.
First, we create the <div> with id app where we will render our app.
Second, we define the .js file that will contain all the js of our app, minified: application.js.
This file will be automatically generated by webpack as explained later on under the webpack configuration.

For now, let’s just create the javascript applications entry point file with some dummy code under src/:
```
touch app/src/application.js
```

modify application.js to include the following content
```
console.log('Hello World');
```

open your application in the browser
```
open app/src/index.html
```