import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <HashRouter>
    <Provider store={ store }>
      <App />
      </Provider>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
