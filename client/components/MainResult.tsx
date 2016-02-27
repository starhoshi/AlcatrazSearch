import * as React from 'react';
import * as classNames from 'classnames';
import {Panel} from 'react-bootstrap';
import {Api} from "../models/api";
import {STARS} from "../constants/OrderByTypes";
import {CategoryFilter} from "../models/categoryFilter";
import {OrderBy} from "../models/orderBy";
import {SHOW_PLUGINS, SHOW_TEMPLATES, SHOW_THEMES} from "../constants/CategoryFilters";
import {PLUGINS, TEMPLATES, THEMES} from "../constants/PackageTypes";
import _ = require('lodash');
import {SearchQuery} from "../models/searchQuery";
import * as Highlighter from "react-highlighter";
import * as Spinner from 'react-spinkit';
import {Alcatraz} from "../models/alcatraz";


const PACKAGE_TYPES = {
  [SHOW_PLUGINS]: PLUGINS,
  [SHOW_TEMPLATES]: TEMPLATES,
  [SHOW_THEMES]: THEMES
};

interface MainResultProps {
  api: Api;
  categoryFilter: CategoryFilter;
  orderBy: OrderBy;
  searchQuery: SearchQuery;
}

class MainResult extends React.Component<MainResultProps, void> {
  matchedQueryPartially = (alcatraz : Alcatraz, queryText : string) : boolean => {
    return alcatraz.name.indexOf(queryText) !== -1 || alcatraz.description.indexOf(queryText) !== -1
  };

  renderPanelHeader = (alcatraz : Alcatraz) => {
    const { searchQuery } = this.props;
    return (
      <Highlighter search={searchQuery.text}>
        {alcatraz.name}
      </Highlighter>
    );
  };

  filterSortResult = () : Alcatraz[] => {
    const { api, categoryFilter, orderBy, searchQuery } = this.props;
    if (api.result) {
      const filteredAlcatraz : Alcatraz[] = api.result[PACKAGE_TYPES[categoryFilter.name]];
      const queryFilteredAlcatraz : Alcatraz[] = filteredAlcatraz.filter(
        alcatraz => this.matchedQueryPartially(alcatraz, searchQuery.text));
      return _.orderBy(queryFilteredAlcatraz, orderBy.name, ['desc']);
    }
    return [];
  };

  render() {
    const { api, categoryFilter, orderBy, searchQuery } = this.props;
    const sortedAlcatraz = this.filterSortResult();

    return (
      <div>
        {api.loading ? <Spinner spinnerName='wave'/> : null}
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
