import { handleActions, Action } from 'redux-actions';
import { CategoryFilter } from '../models/categoryFilter';
import { SHOW_PLUGINS } from '../constants/CategoryFilters';
import { UPDATE_FILTER } from '../constants/ActionTypes';

const initialState =
  <CategoryFilter>{
    name: SHOW_PLUGINS,
  };

export default handleActions<CategoryFilter>({
  [UPDATE_FILTER]: (state:CategoryFilter, action:Action):CategoryFilter => {
    return {name: action.payload.name};
  }
}, initialState);
