/*eslint linebreak-style: ["error", "windows"]*/
/*eslint no-mixed-spaces-and-tabs: "error"*/
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';







ReactDom.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
