import chai = require('chai');
import sinon = require('sinon');
import * as ApiActions from '../api';
import {Api} from "../../models/api";
import {AlcatrazPackages} from "../../models/alcatrazPackages";
import 'isomorphic-fetch';
import 'es6-promise';

describe('ApiActions', () => {
  it('call requestAlcatraz', () => {
    const { payload: requestAlcatraz} = ApiActions.requestAlcatraz();

    chai.expect(requestAlcatraz).to.eql(
      <Api>{loading: true, error: false, result: null}
    );
  });

  it('call receiveAlcatraz', () => {
    const { payload: receiveAlcatraz} = ApiActions.receiveAlcatraz(ApiTestResult);

    chai.expect(receiveAlcatraz).to.eql(
      <Api>{loading: false, error: false, result: ApiTestResult}
    );
  });

  it('call receiveError', () => {
    const { payload: receiveError} = ApiActions.receiveError();

    chai.expect(receiveError).to.eql(
      <Api>{loading: false, error: true, result: null}
    );
  });

  // TODO: Test fetch action.
  //it('call loadAlcatraz', () => {
  //  fetch.then = sinon.stub().returns(Promise.resolve(result));
  //  const dispatch = sinon.spy();
  //  const action = ApiActions.loadAlcatraz();
  //  action(dispatch)
  //    .then((response) => {
  //      chai.expect(dispatch.called).to.eql(
  //        true
  //      )
  //    });
  //});

});

export const ApiTestResult = <AlcatrazPackages>{
  "created_at": "2016-02-29 12:03:41 UTC",
  "plugins": [{
    "open_issues_count": 0,
    "stargazers_count": 1,
    "forks_count": 2,
    "subscribers_count": 2,
    "updated_at": "2016-02-22 12:03:45 UTC",
    "created_at": "2016-02-19 11:32:07 UTC",
    "pushed_at": "2016-02-23 07:26:51 UTC",
    "name": "SimulatorBuild",
    "url": "https://github.com/Minal91/SimulatorBuild",
    "description": "Create simulator build application for Facebook approval etc.",
    "screenshot": "https://github.com/Minal91/SimulatorBuild/blob/master/CreateSimulatorBuild.gif"
  }],
  "color_schemes": [{
    "open_issues_count": 0,
    "stargazers_count": 4,
    "forks_count": 3,
    "subscribers_count": 2,
    "updated_at": "2016-02-19 18:43:37 UTC",
    "created_at": "2016-02-18 16:53:52 UTC",
    "pushed_at": "2016-02-19 17:12:10 UTC",
    "name": "SortXcodeSelection-Plugin",
    "url": "https://github.com/dayitv89/SortXcodeSelection",
    "description": "SortXcodeSelection-Plugin is a xcode plugin for sort xcode editor selected area alphabetic.",
    "screenshot": "https://raw.githubusercontent.com/dayitv89/SortXcodeSelection/master/screenshot.gif"
  }],
  "templates": []
};
