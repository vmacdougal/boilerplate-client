import React from 'react';
import Heading from './Heading.jsx';
import StateUpdate from './StateUpdate.jsx';

const App = function app() {
  return (
    <div className="wrapper">
      <Heading txt="Hello React World!!" />
      <StateUpdate />
    </div>
  );
};

export default App;
