import * as React from 'react';
import * as classNames from 'classnames';
import {Panel} from 'react-bootstrap';
import {Alcatraz} from "../models/alcatraz";
import {STARS} from "../constants/OrderByTypes";
import {CategoryFilter} from "../models/categoryFilter";
import {OrderBy} from "../models/orderBy";
import {SHOW_PLUGINS, SHOW_TEMPLATES, SHOW_THEMES} from "../constants/CategoryFilters";
import {PLUGIN, TEMPLATE, THEME} from "../constants/PackageTypes";
import _ = require('lodash');
import {SearchQuery} from "../models/searchQuery";

const PACKAGE_FILTERS = {
  [SHOW_PLUGINS]: alcatraz => alcatraz.package_type === PLUGIN,
  [SHOW_TEMPLATES]: alcatraz => alcatraz.package_type === TEMPLATE,
  [SHOW_THEMES]: alcatraz => alcatraz.package_type === THEME
};


interface MainResultProps {
  alcatraz: Alcatraz[];
  categoryFilter: CategoryFilter;
  orderBy: OrderBy;
  searchQuery: SearchQuery;
}

class MainResult extends React.Component<MainResultProps, void> {
  matchedQueryPartially = (alcatraz:Alcatraz, queryText:string):boolean => {
    return alcatraz.name.indexOf(queryText) !== -1 || alcatraz.description.indexOf(queryText) !== -1
  };


  render() {
    const { alcatraz, categoryFilter, orderBy, searchQuery } = this.props;
    const filteredAlcatraz = alcatraz.filter(PACKAGE_FILTERS[categoryFilter.name]);
    const queryFilteredAlcatraz = filteredAlcatraz.filter(
      alcatraz => this.matchedQueryPartially(alcatraz,searchQuery.text));
    const sortedAlcatraz = _.orderBy(queryFilteredAlcatraz, orderBy.name, ['desc']);

    return (
      <div>
        {sortedAlcatraz.map((al,i)=>
        <Panel key={i} header={al.name}>
          <p>{i + 1}</p>
          <p>{al.description}</p>
          <p>{al.stargazers_count}</p>
          <a href={al.url}>{al.name}</a>
          <img src={al.screenshot}/>
        </Panel>
          )}
      </div>
    );
  }
}

export default MainResult;
