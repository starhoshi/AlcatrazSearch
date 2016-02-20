import chai = require('chai');
import { SearchQuery } from '../../models/searchQuery';
import searchQuery from '../searchQuery';

import {
  UPDATE_SEARCH_QUERY
} from '../../constants/ActionTypes';

describe('searchQuery reducer', () => {
  it('handles update searchQuery', () => {
    let state:SearchQuery = {text: ""};

    state = searchQuery(state, {
      type: UPDATE_SEARCH_QUERY,
      payload: {text: "aaa"}
    });

    chai.expect(state).to.eql(
      {text: "aaa"}
    );
  });
});
