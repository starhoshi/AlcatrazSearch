import chai = require('chai');

import * as OrderByActions from '../orderBy';
import {CREATED} from '../../constants/OrderByTypes';

describe('CategoryFilterActions', () => {
  it('update CategoryFilter', () => {
    const {payload: orderBy} = OrderByActions.updateOrderBy(CREATED);

    chai.expect(orderBy.name).to.eql(CREATED);
  });
});
