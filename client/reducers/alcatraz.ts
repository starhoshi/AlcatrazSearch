import _ = require('lodash');

import { handleActions, Action } from 'redux-actions';

import { Alcatraz } from '../models/alcatraz';

const initialState = [

];

export default handleActions<Alcatraz[]>({}, initialState);
