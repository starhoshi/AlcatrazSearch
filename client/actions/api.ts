import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";
import {Api} from "../models/api";
import 'isomorphic-fetch';
import 'es6-promise';


const requestAlcatraz = createAction<Api>(
  types.FETCH_ALCATRAZ,
  () => <Api>{loading: true, error: false, result: []}
);

const receiveAlcatraz = createAction<Api>(
  types.RECEIVE_ALCATRAZ,
  (alcatraz:Alcatraz[]) => <Api>{loading: false, error: false, result: alcatraz}
);

const receiveError = createAction<Api>(
  types.RECEIVE_ERROR,
  (error) => <Api>{loading: false, error: true, result: []}
);

// TODO: redux-logger action name is undefined...
const loadAlcatraz = () => {
  return (dispatch:Redux.Dispatch) => {
    dispatch(requestAlcatraz());
    fetch("https://dl.dropboxusercontent.com/u/43623483/alcatraz.json")
      .then(response => response.json())
      .then(json => dispatch(receiveAlcatraz(json)))
      .catch(error => dispatch(receiveError(error)))
  };
};

export {
  requestAlcatraz,
  receiveAlcatraz,
  receiveError,
  loadAlcatraz
}
