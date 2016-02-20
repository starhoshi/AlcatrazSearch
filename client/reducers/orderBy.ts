import _ = require('lodash');

import { handleActions, Action } from 'redux-actions';

import { OrderBy } from '../models/orderBy';
import { STARS } from '../constants/OrderByTypes';

const initialState =
  <OrderBy>{
    name: STARS,
  };

export default handleActions<OrderBy>({}, initialState);
