import { handleActions, Action } from 'redux-actions';
import { FETCH_ALCATRAZ,RECEIVE_ALCATRAZ,RECEIVE_ERROR} from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";
import {Api} from "../models/api";
import * as Moment from "moment";

const initialState = {loading: true, error: false, result: []};

export default handleActions<any>({
  [FETCH_ALCATRAZ]: (state:any, action:Action):Api => {
    return {loading: true, error: false, result: null};
  },
  [RECEIVE_ERROR]: (state:any, action:Action):Api => {
    return {loading: false, error: true, result: null};
  },
  [RECEIVE_ALCATRAZ]: (state:any, action:Action):Api => {
    const createdAtUtc = action.payload.result.created_at;
    const result = action.payload.result;
    result.created_at = Moment(createdAtUtc).fromNow();
    return {loading: false, error: false, result: result};
  }
}, initialState);
