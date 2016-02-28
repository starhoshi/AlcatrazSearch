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
import RankNumber from "./RankNumber";
import PanelTitle from "./PanelTitle";

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
        <div className="package-title">
          <RankNumber rank={index}/>
          <PanelTitle searchQuery={searchQuery}
                      alcatraz={this.sortedAlcatraz[index]}/>
        </div>
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
      <section className="main-section">
        {api.loading ? <Spinner spinnerName='wave'/> : null}
        <ReactList
          length={this.sortedAlcatraz.length}
          itemRenderer={this.renderPanel}
          updateWhenThisValueChanges={categoryFilter.name + orderBy.name + searchQuery.text}
        />
      </section>
    );
  }
}

export default MainSection;
