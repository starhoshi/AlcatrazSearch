import _ = require('lodash');

import { handleActions, Action } from 'redux-actions';

import { Alcatraz } from '../models/alcatraz';

const initialState = [
  <Alcatraz>{
    name: "HKSnippet",
    url: "https://github.com/hunk3000/HKSnippet",
    description: "HKSnippet is a xcode plug-in for typing code snippet with triggers strings. It can minimize input for often used code snippet.",
    screenshot: "https://raw.githubusercontent.com/hunk3000/HKSnippet/master/Images/demo1.gif",
    open_issues_count: 100,
    stargazers_count: 100,
    forks_count: 100,
    watchers_count: 100,
    contributors_count: 100,
    package_type: "PLUGIN",
    updated_at: "2011-01-26T19:14:43Z",
    created_at: "2011-01-26T19:14:43Z",
    pushed_at: "2011-01-26T19:14:43Z"
  },
  <Alcatraz>{
    name: "aaa1",
    url: "https://github.com/hunk3000/HKSnippet",
    description: "2",
    screenshot: null,
    open_issues_count: 10,
    stargazers_count: 10,
    forks_count: 10,
    watchers_count: 10,
    contributors_count: 10,
    package_type: "PLUGIN",
    updated_at: "2011-01-27T19:14:43Z",
    created_at: "2011-01-27T19:14:43Z",
    pushed_at: "2011-01-27T19:14:43Z"
  },
  <Alcatraz>{
    name: "aaa",
    url: "url",
    description: "desc",
    screenshot: null,
    open_issues_count: 10,
    stargazers_count: 10,
    forks_count: 10,
    watchers_count: 10,
    contributors_count: 10,
    package_type: "THEME",
    updated_at: "2011-01-27T19:14:43Z",
    created_at: "2011-01-27T19:14:43Z",
    pushed_at: "2011-01-27T19:14:43Z"
  }
];

export default handleActions<Alcatraz[]>({}, initialState);
