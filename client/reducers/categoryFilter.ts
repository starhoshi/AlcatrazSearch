import _ = require('lodash');

import { handleActions, Action } from 'redux-actions';

import { CategoryFilter } from '../models/categoryFilter';
import { SHOW_PLUGINS } from '../constants/CategoryFilters';

const initialState =
  <CategoryFilter>{
    name: SHOW_PLUGINS,
  };

export default handleActions<CategoryFilter>({}, initialState);
