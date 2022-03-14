import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'

import App from './App';

// ReactDOM.hydrate(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

loadableReady(() => {
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})