import { combineReducers } from 'redux';

import todos from './todos';
import alcatraz from './alcatraz';
import orderBy from './orderBy';
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  todos: todos,
  alcatraz: alcatraz,
  categoryFilter: categoryFilter,
  orderBy: orderBy
});

export { rootReducer };
