import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'rsuite/dist/styles/rsuite-default.css';
import LocaleContext from './LocaleContext';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);