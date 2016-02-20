import { combineReducers } from 'redux';

import todos from './todos';
import alcatraz from './alcatraz';
import orderBy from './orderBy';
import categoryFilter from './categoryFilter';
import searchQuery from './searchQuery';

const rootReducer = combineReducers({
  todos: todos,
  alcatraz: alcatraz,
  categoryFilter: categoryFilter,
  orderBy: orderBy,
  searchQuery: searchQuery
});

export { rootReducer };
