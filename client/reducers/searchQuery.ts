import { handleActions, Action } from 'redux-actions';
import { SearchQuery } from '../models/searchQuery';
import {UPDATE_SEARCH_QUERY} from "../constants/ActionTypes";

const initialState =
  <SearchQuery>{
    text: "",
  };

export default handleActions<SearchQuery>({
  [UPDATE_SEARCH_QUERY]: (state:SearchQuery, action:Action):SearchQuery => {
    return {text: action.payload.text};
  }
}, initialState);
