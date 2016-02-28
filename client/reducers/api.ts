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
    result.created_at = Moment.utc(createdAtUtc).fromNow();
    result.plugins = initializeData(action.payload.result.plugins);
    result.color_schemes = initializeData(action.payload.result.color_schemes);
    result.file_templates = initializeData(action.payload.result.file_templates);
    return {loading: false, error: false, result: result};
  }
}, initialState);

const initializeData = (alcatraz:Alcatraz[]) => {
  return alcatraz.map((al:Alcatraz) => {
    al.created_at = al.created_at === null ? "-1" : al.created_at;
    al.updated_at = al.updated_at === null ? "-1" : al.updated_at;
    al.stargazers_count = al.stargazers_count === null ? -1 : al.stargazers_count;
    al.subscribers_count = al.subscribers_count === null ? -1 : al.subscribers_count;
    al.forks_count = al.forks_count === null ? -1 : al.forks_count;
    return al;
  });
};
