import chai = require('chai');
import { Api } from '../../models/api';
import api from '../api';
import * as Moment from "moment";

import {
  FETCH_ALCATRAZ,RECEIVE_ALCATRAZ,RECEIVE_ERROR
} from '../../constants/ActionTypes';
import {AlcatrazPackages} from "../../models/alcatrazPackages";

describe('api reducer', () => {
  it('handles FETCH_ALCATRAZ', () => {
    let state:Api = {loading: false, error: true, result: null};

    state = api(state, {
      type: FETCH_ALCATRAZ,
      payload: {loading: true, error: false, result: null}
    });

    chai.expect(state).to.eql(
      {loading: true, error: false, result: null}
    );
  });

  it('handles RECEIVE_ERROR', () => {
    let state:Api = {loading: true, error: false, result: null};

    state = api(state, {
      type: RECEIVE_ERROR,
      payload: {loading: false, error: true, result: null}
    });

    chai.expect(state).to.eql(
      {loading: false, error: true, result: null}
    );
  });

  it('handles RECEIVE_ALCATRAZ', () => {
    let state:Api = {loading: true, error: false, result: null};

    state = api(state, {
      type: RECEIVE_ALCATRAZ,
      payload: payload
    });

    chai.expect(state.loading).to.eql(
      actualResult.loading
    );
    chai.expect(state.error).to.eql(
      actualResult.error
    );
    chai.expect(state.result.created_at).to.eql(
      actualResult.result.created_at
    );
    chai.expect(state.result.plugins).to.deep.equal(
      actualResult.result.plugins
    );
    chai.expect(state.result.color_schemes).to.deep.equal(
      actualResult.result.color_schemes
    );
    chai.expect(state.result.templates).to.deep.equal(
      actualResult.result.templates
    );
  });
});


const updated_at = Moment.utc().add('days', -10).format();
const created_at = Moment.utc().add('days', -10).format();
const pushed_at = Moment.utc().add('days', -10).format();
const payload = {
  loading: true,
  error: false,
  result: {
    "created_at": Moment.utc().add('days', -5).format(),
    "plugins": [{
      "open_issues_count": 0,
      "stargazers_count": 1,
      "forks_count": 2,
      "subscribers_count": 2,
      "updated_at": updated_at,
      "created_at": created_at,
      "pushed_at": pushed_at,
      "name": "SimulatorBuild",
      "url": "https://github.com/Minal91/SimulatorBuild",
      "description": "Create simulator build application for Facebook approval etc.",
      "screenshot": "https://github.com/Minal91/SimulatorBuild/blob/master/CreateSimulatorBuild.gif"
    }],
    "color_schemes": [{
      "open_issues_count": null,
      "stargazers_count": null,
      "forks_count": null,
      "subscribers_count": null,
      "updated_at": null,
      "created_at": null,
      "pushed_at": null,
      "name": "SortXcodeSelection-Plugin",
      "url": "https://github.com/dayitv89/SortXcodeSelection",
      "description": "SortXcodeSelection-Plugin is a xcode plugin for sort xcode editor selected area alphabetic.",
      "screenshot": null
    }],
    "templates": []
  }
};

const actualResult = {
  loading: false,
  error: false,
  result: {
    "color_schemes": [
      {
        "created_at": "-1",
        "description": "SortXcodeSelection-Plugin is a xcode plugin for sort xcode editor selected area alphabetic.",
        "forks_count": -1,
        "name": "SortXcodeSelection-Plugin",
        "open_issues_count": null,
        "pushed_at": "-1",
        "screenshot": null,
        "stargazers_count": -1,
        "subscribers_count": -1,
        "updated_at": null,
        "url": "https://github.com/dayitv89/SortXcodeSelection",
      }
    ],
    "created_at": "5 days ago",
    "plugins": [
      {
        "updated_at": updated_at,
        "created_at": created_at,
        "pushed_at": pushed_at,
        "description": "Create simulator build application for Facebook approval etc.",
        "forks_count": 2,
        "name": "SimulatorBuild",
        "open_issues_count": 0,
        "screenshot": "https://github.com/Minal91/SimulatorBuild/blob/master/CreateSimulatorBuild.gif",
        "stargazers_count": 1,
        "subscribers_count": 2,
        "url": "https://github.com/Minal91/SimulatorBuild"
      }
    ],
    "templates": []
  }
};
