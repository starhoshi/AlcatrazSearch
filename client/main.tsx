/// <reference path='../typings/browser.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Action } from 'redux-actions';
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware } from 'redux';
import createLogger = require('redux-logger');
import { rootReducer } from './reducers/rootReducer';
import App from './containers/App';

const initialState = {};

const loggerMiddleware = (createLogger as any)();
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);
const store:Store = createStoreWithMiddleware(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
