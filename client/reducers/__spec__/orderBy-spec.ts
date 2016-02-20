import chai = require('chai');
import { OrderBy } from '../../models/orderBy';
import orderBy from '../orderBy';
import {CREATED, FORKS} from '../../constants/OrderByTypes';

import {
  UPDATE_ORDER_BY
} from '../../constants/ActionTypes';

describe('orderBy reducer', () => {
  it('handles update orderBy', () => {
    let state:OrderBy = {name: CREATED};

    state = orderBy(state, {
      type: UPDATE_ORDER_BY,
      payload: {name: FORKS}
    });

    chai.expect(state).to.eql(
      {name: FORKS}
    );
  });
});
