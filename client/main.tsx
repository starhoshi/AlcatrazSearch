/// <reference path='../typings/browser.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Action } from 'redux-actions';
import App from './containers/App';
import { rootReducer } from './reducers/rootReducer';
import { applyMiddleware } from 'redux';
import createLogger = require('redux-logger');

import {
  Store,
  compose,
  createStore,
  bindActionCreators,
  combineReducers
} from 'redux';

import {
  connect,
  Provider
} from 'react-redux';

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
