import React from 'react';
import ReactDOM from 'react-dom';

import {
  CallToBlog
} from './components';

function App() {
  return (
    <section className="app">
      <CallToBlog />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))