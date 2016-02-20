import { handleActions, Action } from 'redux-actions';
import { OrderBy } from '../models/orderBy';
import { STARS } from '../constants/OrderByTypes';
import { UPDATE_ORDER_BY } from "../constants/ActionTypes";

const initialState =
  <OrderBy>{
    name: STARS,
  };

export default handleActions<OrderBy>({
  [UPDATE_ORDER_BY]: (state:OrderBy, action:Action):OrderBy => {
    return {name: action.payload};
  }
}, initialState);
