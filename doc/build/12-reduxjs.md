
### Redux
Redux is a minimal implementation of the Flux architecture.
Redux holds the application state in one place, and defines a minimal way of interacting with that state.
You can read the official explanation [here](https://rackt.github.io/redux/docs/introduction/ThreePrinciples.html).

Everything that happens in your app is an “action”.
These actions can be caused by users, browser events, or server events. Doesn’t matter. Everything that changes something in your app does it via an “action”.
You have one giant state object that represents all the state in your app.
These are not special Models, or Collections, just objects, arrays, and primitives.
You write “reducers” for everything that changes state using the reduce() method of an array.
A reduce function gets a starting state, the current value and returns the new state.
That’s exactly what we want to do in response to actions.
We get the starting state, the current action, and we return the new state.

Together with Redux, we will need to install the official React bindings for Redux, react-redux.
We will also install redux-thunk a thunk middleware for Redux.
A thunk is a function that wraps an expression to delay its evaluation.
Basically, we will use redux-thunk to be able to connect redux synchronous action creators together with network requests.

Finally, we also need to install isomorphic-fetch a library to use the new fetch API.
This API is used to make network requests replacing the traditional XMLHttpRequest, in other words we will use it for the AJAX calls. We need to use the isomorphic-fetch library because most browsers don’t yet support this API natively.

```
npm install redux react-redux redux-thunk isomorphic-fetch --save
```



#### Redux dev tools
To improve the DX (Developer Experience) with Redux, you can also install the [Redux Developer Tools](https://github.com/gaearon/redux-devtools) which comes with a set of features to develop and debug with the Redux Store in a more appropriate way.
In the [demo video](https://www.youtube.com/watch?v=xsSnOQynTHs) you can see an early version of the dev-tools in action.
Because of the Redux Store containing the state at each change in the application, we can go back and forth between the application states.

To add it to the project just:
```
npm install redux-devtools --save-dev
```
Once you start creating Redux objects you can fully integrate it following [the instructions](https://github.com/gaearon/redux-devtools#installation).
