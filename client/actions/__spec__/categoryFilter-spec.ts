import chai = require('chai');

import * as CategoryFilterActions from '../categoryFilter';
import {SHOW_PLUGINS,SHOW_THEMES,SHOW_TEMPLATES} from '../../constants/CategoryFilters';

describe('CategoryFilterActions', () => {
  it('update CategoryFilter', () => {
    const { payload: categoryFilter } = CategoryFilterActions.updateFilter(SHOW_THEMES);

    chai.expect(categoryFilter.name).to.eql(SHOW_THEMES);
  });
});
