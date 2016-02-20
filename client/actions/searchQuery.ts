import { createAction } from 'redux-actions';
import { SearchQuery } from '../models/searchQuery';
import * as types from '../constants/ActionTypes';

const updateSearchQuery = createAction<SearchQuery>(
  types.UPDATE_SEARCH_QUERY,
  text => <SearchQuery>{text: text}
);

export {
  updateSearchQuery
}
