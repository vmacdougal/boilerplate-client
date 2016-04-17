module.exports = function helloWorld() {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello Client Application!';

  return element;
};
