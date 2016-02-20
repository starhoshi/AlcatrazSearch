import { createAction, Action } from 'redux-actions';
import _ = require('lodash');

import { CategoryFilter } from '../models/categoryFilter';
import * as types from '../constants/ActionTypes';

const updateFilter = createAction<CategoryFilter>(
  types.UPDATE_FILTER,
  (name:string) => <CategoryFilter>({name: name})
);

export {
  updateFilter
}
