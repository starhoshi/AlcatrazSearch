import * as React from 'react';

import {Jumbotron} from 'react-bootstrap';
import SearchTextInput from './../components/SearchTextInput';
import SearchCategorySwitch from './../components/SearchCategorySwitch';

import {SHOW_PLUGINS,SHOW_THEMES,SHOW_TEMPLATES} from '../constants/CategoryFilters';
import {connect} from "react-redux";
import {CategoryFilter} from "../models/categoryFilter";
import * as CategoryFilterActions from '../actions/categoryFilter';
import * as SearchQueryActions from '../actions/searchQuery';
import { bindActionCreators, Dispatch } from 'redux';
import {SearchQuery} from "../models/searchQuery";

interface HeaderProps {
  categoryFilter?: CategoryFilter;
  searchQuery?: SearchQuery;
  dispatch?: Dispatch;
}

@connect(state => ({
  categoryFilter: state.categoryFilter,
  searchQuery: state.searchQuery
}))
class Header extends React.Component<HeaderProps, void> {
  constructor(props, context) {
    super(props, context);
  }

  handleClick(categoryFilter) {
    const actions = bindActionCreators(CategoryFilterActions, this.props.dispatch);
    actions.updateFilter(categoryFilter);
  }

  handleSearchQuery(searchQuery) {
    const actions = bindActionCreators(SearchQueryActions, this.props.dispatch);
    actions.updateSearchQuery(searchQuery);
  }

  render() {
    const {categoryFilter, searchQuery} = this.props;

    return (
      <Jumbotron>
        <div className="container">
          <h1>Alcatraz Search</h1>
          <p>
            Search&nbsp;
            <a href="http://alcatraz.io/">Alcatraz</a>
            &nbsp;more better.
          </p>
          <SearchTextInput
            searchQuery={searchQuery}
            onChange={this.handleSearchQuery.bind(this)}
            placeholder="Search Alcatraz Packages"/>
          <SearchCategorySwitch
            filter={categoryFilter}
            onClick={this.handleClick.bind(this)}/>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;
