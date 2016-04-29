
before we write tests for our react components we will need to install a test runner.
we will install mocha
```
npm install --save-dev mocha
```

we will also need to write assertions for our tests
so we will install the expect library
```
npm install --save-dev expect
```

finally we will install react test utils package which makes it easier to test react components
```
npm install --save-dev react-addons-test-utils
```

Additionally, we will install Chai, an assertion/expectation library that is
very handy to define what you are expecting your code outputs to be.

Also, we install the chai-immutable library which extends Chai to support also Immutable data structures.
```
npm install chai chai-immutable --save-dev
```

in order for our tests run to successfully we will need to add a config block to package.json
```
"babel": {
  "presets": [
    "es2015",
    "react"
  ]
},
```

now we will create an npm script to run our tests
```
{
  "scripts": {
    "test:watch": "npm run test -- --watch"
  }
}
```

To keep improving our development workflow let’s add another script called “test:watch” that will launch a process to look after changes in our code and automatically run the tests for us as files are changed
```
{
  "scripts": {
    "test": "mocha './app/src/**/*_spec.js' --compilers js:babel-core/register"
  }
}
```

now we will create an example test (app/src/application_spec.js)
```
import expect from 'expect';

describe('example', ()=>{
  it('should do something', ()=>{
    expect(true).toEqual(true);
  });
});
```

now when we run our test scripts
```
npm run test
```
we should see that our test passes


Given that we also want to test React, we will need a DOM.
Instead of running the test in an actual web browser with a library like Karma, we will use jsdom, a DOM implementation that runs in Node.js.
This is a good blogpost on how to test React using jsdom.

We just install it like any other package for development:
```
npm install jsdom --save-dev
```

To be able to use jsdom to test React we will need to do a little bit of setup.
First, we need to create the jsdom versions of the document and window objects browsers provide.
We then need to put this objects into node’s global namespace object to make them accessible to React.
We can set up a test helper file inside our tests folder for this purpose:

app/test_helper.js
```
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');  
const win = doc.defaultView;

global.document = doc;  
global.window = win;  
```

Once we’ve done this, we also need to expose all the jsdom window object properties, such as navigator, putting them into the node’s global namespace object so that the properties provided by window can be used without the window. prefix, mimicking the environment we would have with a real browser, and enabling React code to hook up properly.

The app/test_helper.js should look like
```
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');  
const win = doc.defaultView;  

global.document = doc;  
global.window = win;  

Object.keys(window).forEach((key) => {  
  if (!(key in global)) {     
    global[key] = window[key];   
  }
});
```

Finally, we should remember to import and use the chai and chai-immutable libraries we previously installed for the tests that may need them.

The app/test_helper.js should finally look like
```
import jsdom from 'jsdom';  
import chai from 'chai';  
import chaiImmutable from 'chai-immutable';  

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');  
const win = doc.defaultView;  

global.document = doc;  
global.window = win;  

Object.keys(window).forEach((key) => {  
  if (!(key in global)) {     
    global[key] = window[key];   
  }
});  

chai.use(chaiImmutable);
```

Finally, we can update our package.json test script so that we can run the tests:
```
"test": "mocha './app/src/**/*_spec.js' --require ./app/test_helper.js --compilers js:babel-core/register",
```

We still run tests with
```
npm run test
```

However, in the future, when we get several test files testing the several components in might come in handy to know how to run tests on a specific file. If we had an hypothetic core_spec.js file full of tests, we would call
```
npm run test -- test/core_spec.js
```
