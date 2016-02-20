import { createAction } from 'redux-actions';
import { OrderBy } from '../models/orderBy';
import * as types from '../constants/ActionTypes';

const updateOrderBy = createAction<OrderBy>(
  types.UPDATE_ORDER_BY,
  OrderBy => OrderBy
);

export {
  updateOrderBy
}
