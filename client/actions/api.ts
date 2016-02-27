import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import {AlcatrazPackages} from "../models/alcatrazPackages";
import {Api} from "../models/api";
import 'isomorphic-fetch';
import 'es6-promise';


const requestAlcatraz = createAction<Api>(
  types.FETCH_ALCATRAZ,
  () => <Api>{loading: true, error: false, result: null}
);

const receiveAlcatraz = createAction<Api>(
  types.RECEIVE_ALCATRAZ,
  (result : AlcatrazPackages) => <Api>{loading: false, error: false, result: result}
);

const receiveError = createAction<Api>(
  types.RECEIVE_ERROR,
  (error) => <Api>{loading: false, error: true, result: null}
);

// TODO: redux-logger action name is undefined...
const loadAlcatraz = () => {
  return (dispatch : Redux.Dispatch) => {
    dispatch(requestAlcatraz());
    fetch("https://raw.githubusercontent.com/starhoshi/AlcatrazSearch-packages/master/data/alcatraz.json")
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
