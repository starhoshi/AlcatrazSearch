import chai = require('chai');

import * as SearchQueryActions from '../searchQuery';

describe('SearchQueryActions', () => {
  it('update SearchQuery', () => {
    const {payload: searchQuery} = SearchQueryActions.updateSearchQuery("aaa");

    chai.expect(searchQuery.text).to.eql("aaa");
  });
});
