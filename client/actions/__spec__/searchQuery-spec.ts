import chai = require('chai');

import * as SearchQueryActions from '../searchQuery';

describe('CategoryFilterActions', () => {
  it('update CategoryFilter', () => {
    const {payload: searchQuery} = SearchQueryActions.updateSearchQuery("aaa");

    chai.expect(searchQuery.text).to.eql("aaa");
  });
});
