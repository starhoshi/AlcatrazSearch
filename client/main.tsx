/// <reference path='../typings/browser.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Action } from 'redux-actions';
import App from './containers/App';
import { rootReducer } from './reducers/rootReducer';

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

const store:Store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
