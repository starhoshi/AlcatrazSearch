import { createAction } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";
import 'isomorphic-fetch';


const requestAlcatraz = createAction<void>(
  types.FETCH_ALCATRAZ
);

const receiveAlcatraz = createAction<Alcatraz[]>(
  types.RECEIVE_ALCATRAZ,
  (alcatraz:Alcatraz[]) => alcatraz
);

const loadAlcatraz = () => {
  return (dispatch:Redux.Dispatch) => {
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
