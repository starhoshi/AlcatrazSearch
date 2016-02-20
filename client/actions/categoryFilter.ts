import { createAction } from 'redux-actions';
import { CategoryFilter } from '../models/categoryFilter';
import * as types from '../constants/ActionTypes';

const updateFilter = createAction<CategoryFilter>(
  types.UPDATE_FILTER,
  name => <CategoryFilter>{name: name}
);

export {
  updateFilter
}
