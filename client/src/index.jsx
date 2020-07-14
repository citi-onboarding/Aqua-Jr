import React from 'react';
import ReactDOM from 'react-dom';

import {
  CallToBlog,
  Example,
  ExpertiseArea
} from './components';

function App() {
  return (
    <section className="app">
      <CallToBlog />
      {/* <Example /> */}
      <ExpertiseArea />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))