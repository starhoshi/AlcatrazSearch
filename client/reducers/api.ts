import { handleActions, Action } from 'redux-actions';
//import { CategoryFilter } from '../models/categoryFilter';
//import { SHOW_PLUGINS } from '../constants/CategoryFilters';
import { FETCH_ALCATRAZ,RECEIVE_ALCATRAZ} from '../constants/ActionTypes';
import {Alcatraz} from "../models/alcatraz";

const initialState = {};

export default handleActions<any>({
  [FETCH_ALCATRAZ]: (state:any, action:Action):any => {
    console.log(state, action);
    return {isFetching: true};
  },
  [RECEIVE_ALCATRAZ]: (state:any, action:Action):any => {
    console.log(state, action);
    return {isFetching: false};
  }
}, initialState);
