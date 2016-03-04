import chai = require('chai');

import * as ApiActions from '../api';
import {Api} from "../../models/api";
import {AlcatrazPackages} from "../../models/alcatrazPackages";

describe('ApiActions', () => {
  it('call requestAlcatraz', () => {
    const { payload: requestAlcatraz} = ApiActions.requestAlcatraz();

    chai.expect(requestAlcatraz).to.eql(
      <Api>{loading: true, error: false, result: null}
    );
  });

  it('call receiveAlcatraz', () => {
    const { payload: receiveAlcatraz} = ApiActions.receiveAlcatraz(result);

    chai.expect(receiveAlcatraz).to.eql(
      <Api>{loading: false, error: false, result: result}
    );
  });

  it('call receiveError', () => {
    const { payload: receiveError} = ApiActions.receiveError();

    chai.expect(receiveError).to.eql(
      <Api>{loading: false, error: true, result: null}
    );
  });

  it('call loadAlcatraz', () => {
    //const { payload: receiveError} = ApiActions.loadAlcatraz();
    //console.log(ApiActions.loadAlcatraz());

    //chai.expect(receiveError).to.eql(
    //  <Api>{loading: false, error: true, result: null}
    //);
  });

});

const result = <AlcatrazPackages>{
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
