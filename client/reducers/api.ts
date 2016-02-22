import { handleActions, Action } from 'redux-actions';
import { FETCH_ALCATRAZ,RECEIVE_ALCATRAZ} from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";
import {Api} from "../models/api";

const initialState = {};

export default handleActions<any>({
  [FETCH_ALCATRAZ]: (state : any, action : Action) : Api => {
    return {loading: true, result: []};
  },
  [RECEIVE_ALCATRAZ]: (state : any, action : Action) : Api => {
    return {loading: false, result: action.payload.result};
  }
}, initialState);
