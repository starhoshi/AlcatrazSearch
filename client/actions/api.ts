import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";
import {Api} from "../models/api";
import 'isomorphic-fetch';


const requestAlcatraz = createAction<Api>(
  types.FETCH_ALCATRAZ,
  () => <Api>{loading: true, result: []}
);

const receiveAlcatraz = createAction<Api>(
  types.RECEIVE_ALCATRAZ,
  (alcatraz : Alcatraz[]) => <Api>{loading: false, result: alcatraz}
);

// TODO: redux-logger action name is undefined...
const loadAlcatraz = () => {
  return (dispatch : Redux.Dispatch) => {
    dispatch(requestAlcatraz());
    fetch("http://json-schema.org/draft-04/schema")
      .then(response => response.json())
      .then(json => dispatch(receiveAlcatraz(json))
      );
  };
};

export {
  requestAlcatraz,
  receiveAlcatraz,
  loadAlcatraz
}
