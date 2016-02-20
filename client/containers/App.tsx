import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from './Header';
import SortButtonToolbar from '../components/SortButtonToolbar';
import MainResult from '../components/MainResult';
import PageFooter from '../components/PageFooter';
import * as OrderByActions from '../actions/orderBy';
import {Alcatraz} from '../models/alcatraz';
import {OrderBy} from "../models/orderBy";
import {CategoryFilter} from "../models/categoryFilter";

interface AppProps {
  alcatraz?: Alcatraz[];
  categoryFilter?: CategoryFilter;
  orderBy?: OrderBy;
  dispatch?: Dispatch;
}

@connect(state => ({
  alcatraz: state.alcatraz,
  categoryFilter: state.categoryFilter,
  orderBy: state.orderBy
}))
class App extends React.Component<AppProps, void> {
  handleClick(orderBy) {
    const { dispatch } = this.props;
    const actions = bindActionCreators(OrderByActions, dispatch);
    actions.updateOrderBy(orderBy);
  }

  render() {
    const { alcatraz, categoryFilter, orderBy } = this.props;

    return (
      <div className="alcatrazapp">
        <Header/>
        <SortButtonToolbar
          orderBy={orderBy}
          onClick={this.handleClick.bind(this)}/>
        <MainResult
          alcatraz={alcatraz}
          orderBy={orderBy}
          categoryFilter={categoryFilter}/>
        <PageFooter/>
      </div>
    );
  }
}

export default App;
