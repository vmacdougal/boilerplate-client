### Immutable
We will use [Immutable.js](https://facebook.github.io/immutable-js/) data structures to hold the application state.
This library works wonderfully with the philosophy of Redux.

A Redux application's state is an immutable data structure in the form of a tree. That means that as long as it exists, the tree representing the state will never change. It will keep representing the same state forever. To move to the next state, Redux produces another tree that reflects the changes we make to the state, thus, representing the new state. This means any two successive states of the application are stored in two separate and independent trees.
You might want to follow [Tero’s much more complete explanation](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#designing-the-application-state-tree).

Anyhow, at this point it is obvious that Immutable.js is a useful library for us, so that we make sure we don’t mess up any of the Redux’s principles.

To install it:
```
npm install immutable --save
```
