import chai = require('chai');
import { CategoryFilter } from '../../models/categoryFilter';
import categoryFilter from '../categoryFilter';
import {SHOW_PLUGINS,SHOW_THEMES,SHOW_TEMPLATES} from '../../constants/CategoryFilters';

import {
  UPDATE_FILTER
} from '../../constants/ActionTypes';

describe('categoryFilter reducer', () => {
  it('handles update filter', () => {
    let state:CategoryFilter = {name: SHOW_PLUGINS};

    state = categoryFilter(state, {
      type: UPDATE_FILTER,
      payload: {name: SHOW_THEMES}
    });

    chai.expect(state).to.eql(
      {name: SHOW_THEMES}
    );
  });
});
