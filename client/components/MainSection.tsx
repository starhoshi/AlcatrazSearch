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
import * as ReactList from 'react-list';
import {Alcatraz} from "../models/alcatraz";


const PACKAGE_TYPES = {
  [SHOW_PLUGINS]: PLUGINS,
  [SHOW_TEMPLATES]: TEMPLATES,
  [SHOW_THEMES]: THEMES
};

interface MainSectionProps {
  api: Api;
  categoryFilter: CategoryFilter;
  orderBy: OrderBy;
  searchQuery: SearchQuery;
}

class MainSection extends React.Component<MainSectionProps, void> {
  sortedAlcatraz:Alcatraz[];

  matchedQueryPartially = (alcatraz:Alcatraz, queryText:string):boolean => {
    return _.lowerCase(alcatraz.name).indexOf(queryText) !== -1
      || _.lowerCase(alcatraz.description).indexOf(queryText) !== -1;
  };

  renderPanelHeader = (alcatraz:Alcatraz) => {
    const { searchQuery } = this.props;
    return (
      <h2>
        <a href={alcatraz.url}>
          <Highlighter search={searchQuery.text}>
            {alcatraz.name}
          </Highlighter>
        </a>
      </h2>
    );
  };

  filterSortResult = ():Alcatraz[] => {
    const { api, categoryFilter, orderBy, searchQuery } = this.props;
    if (api.result) {
      const filteredAlcatraz:Array<Alcatraz> = api.result[PACKAGE_TYPES[categoryFilter.name]];
      const queryFilteredAlcatraz:Array<Alcatraz> = filteredAlcatraz.filter(
        alcatraz => this.matchedQueryPartially(alcatraz, _.lowerCase(searchQuery.text)));
      return _.orderBy(queryFilteredAlcatraz, orderBy.name, ['desc']);
    }
    return [];
  };

  renderPanel = (index, key) => {
    const { searchQuery } = this.props;
    return (
      <Panel key={key}>
        <p>{index + 1}</p>
        {this.renderPanelHeader(this.sortedAlcatraz[index])}
        <Highlighter search={searchQuery.text}>
          {this.sortedAlcatraz[index].description}
        </Highlighter>
        <p>{this.sortedAlcatraz[index].stargazers_count}</p>
        <a href={this.sortedAlcatraz[index].url}>{this.sortedAlcatraz[index].name}</a>
        <img src={this.sortedAlcatraz[index].screenshot}/>
      </Panel>
    )
  };

  render() {
    const { api, categoryFilter, orderBy, searchQuery } = this.props;
    this.sortedAlcatraz = this.filterSortResult();

    return (
      <div>
        {api.loading ? <Spinner spinnerName='wave'/> : null}
        <ReactList
          length={this.sortedAlcatraz.length}
          itemRenderer={this.renderPanel}
          updateWhenThisValueChanges={categoryFilter.name + orderBy.name + searchQuery.text}
        />
      </div>
    );
  }
}

export default MainSection;
