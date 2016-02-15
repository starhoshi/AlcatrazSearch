import _ = require('lodash');

import { handleActions, Action } from 'redux-actions';

import { Alcatraz } from '../models/alcatraz';

const initialState = [<Alcatraz>{
  name: "HKSnippet",
  url: "https://github.com/hunk3000/HKSnippet",
  description: "HKSnippet is a xcode plug-in for typing code snippet with triggers strings. It can minimize input for often used code snippet.",
  screenshot: "https://raw.githubusercontent.com/hunk3000/HKSnippet/master/Images/demo.gif",
  open_issues_count: 100,
  stargazers_count: 100,
  forks_count: 100,
  watchers_count: 100,
  contributors_count: 100
}];

export default handleActions<Alcatraz[]>({}, initialState);
