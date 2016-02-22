import * as React from 'react';
import * as classNames from 'classnames';
import {Panel} from 'react-bootstrap';
import {Api} from "../models/api";
import {STARS} from "../constants/OrderByTypes";
import {CategoryFilter} from "../models/categoryFilter";
import {OrderBy} from "../models/orderBy";
import {SHOW_PLUGINS, SHOW_TEMPLATES, SHOW_THEMES} from "../constants/CategoryFilters";
import {PLUGIN, TEMPLATE, THEME} from "../constants/PackageTypes";
import _ = require('lodash');
import {SearchQuery} from "../models/searchQuery";
import * as Highlighter from "react-highlighter";
import * as Spinner from 'react-spinkit';
import {Alcatraz} from "../models/alcatraz";


const PACKAGE_FILTERS = {
  [SHOW_PLUGINS]: alcatraz => alcatraz.package_type === PLUGIN,
  [SHOW_TEMPLATES]: alcatraz => alcatraz.package_type === TEMPLATE,
  [SHOW_THEMES]: alcatraz => alcatraz.package_type === THEME
};


interface MainResultProps {
  api: Api;
  categoryFilter: CategoryFilter;
  orderBy: OrderBy;
  searchQuery: SearchQuery;
}

class MainResult extends React.Component<MainResultProps, void> {
  matchedQueryPartially = (alcatraz:Alcatraz, queryText:string):boolean => {
    return alcatraz.name.indexOf(queryText) !== -1 || alcatraz.description.indexOf(queryText) !== -1
  };

  renderPanelHeader = (alcatraz:Alcatraz) => {
    const { searchQuery } = this.props;
    return (
      <Highlighter search={searchQuery.text}>
        {alcatraz.name}
      </Highlighter>
    );
  };

  render() {
    const { api, categoryFilter, orderBy, searchQuery } = this.props;
    const filteredAlcatraz = api.result.filter(PACKAGE_FILTERS[categoryFilter.name]);
    const queryFilteredAlcatraz = filteredAlcatraz.filter(
      alcatraz => this.matchedQueryPartially(alcatraz, searchQuery.text));
    const sortedAlcatraz = _.orderBy(queryFilteredAlcatraz, orderBy.name, ['desc']);

    return (
      <div>
        <Spinner spinnerName='wave'/>
        {sortedAlcatraz.map((alcatraz,i)=>
        <Panel key={i}
               header={this.renderPanelHeader(alcatraz)}>
          <p>{i + 1}</p>
          <Highlighter search={searchQuery.text}>
            {alcatraz.description}
          </Highlighter>
          <p>{alcatraz.stargazers_count}</p>
          <a href={alcatraz.url}>{alcatraz.name}</a>
          <img src={alcatraz.screenshot}/>
        </Panel>
          )}
      </div>
    );
  }
}

export default MainResult;
