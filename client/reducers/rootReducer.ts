import { combineReducers } from 'redux';

import todos from './todos';
import alcatraz from './alcatraz';

const rootReducer = combineReducers({
  todos: todos,
  alcatraz: alcatraz
});

export { rootReducer };
