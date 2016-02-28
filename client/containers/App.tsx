import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from './Header';
import SortButtonToolbar from '../components/SortButtonToolbar';
import MainSection from '../components/MainSection';
import PageFooter from '../components/PageFooter';
import * as OrderByActions from '../actions/orderBy';
import {Api} from '../models/api';
import {OrderBy} from "../models/orderBy";
import {CategoryFilter} from "../models/categoryFilter";
import {SearchQuery} from "../models/searchQuery";
import GithubCorner from 'react-github-corner';

interface AppProps {
  api?: Api;
  categoryFilter?: CategoryFilter;
  orderBy?: OrderBy;
  searchQuery?: SearchQuery;
  dispatch?: Dispatch;
}

@connect(state => ({
  api: state.api,
  categoryFilter: state.categoryFilter,
  orderBy: state.orderBy,
  searchQuery: state.searchQuery
}))
class App extends React.Component<AppProps, void> {
  handleClick(orderBy) {
    const { dispatch } = this.props;
    const actions = bindActionCreators(OrderByActions, dispatch);
    actions.updateOrderBy(orderBy);
  }

  render() {
    const { api, categoryFilter, orderBy, searchQuery } = this.props;

    return (
      <div className="alcatrazapp">
        <Header/>
        <div className="container">
          <SortButtonToolbar
            orderBy={orderBy}
            onClick={this.handleClick.bind(this)}/>
          <MainSection
            api={api}
            orderBy={orderBy}
            searchQuery={searchQuery}
            categoryFilter={categoryFilter}/>
          <PageFooter/>
        </div>
        <GithubCorner
          href="https://github.com/starhoshi/AlcatrazSearch"
          octoColor="#DEDEDE"
        />
      </div>
    );
  }
}

export default App;
