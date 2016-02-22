import { handleActions, Action } from 'redux-actions';
import { FETCH_ALCATRAZ,RECEIVE_ALCATRAZ,RECEIVE_ERROR} from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";
import {Api} from "../models/api";

const initialState = {loading: true, error: false, result: []};

export default handleActions<any>({
  [FETCH_ALCATRAZ]: (state:any, action:Action):Api => {
    return {loading: true, error: false, result: []};
  },
  [RECEIVE_ERROR]: (state:any, action:Action):Api => {
    return {loading: false, error: true, result: []};
  },
  [RECEIVE_ALCATRAZ]: (state:any, action:Action):Api => {
    return {loading: false, error: false, result: action.payload.result};
  }
}, initialState);
