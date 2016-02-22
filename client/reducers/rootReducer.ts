import { combineReducers } from 'redux';

import orderBy from './orderBy';
import categoryFilter from './categoryFilter';
import searchQuery from './searchQuery';
import api from './api';

const rootReducer = combineReducers({
  categoryFilter: categoryFilter,
  orderBy: orderBy,
  searchQuery: searchQuery,
  api: api
});

export { rootReducer };
