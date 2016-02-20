import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from '../components/Header';
import SortButtonToolbar from '../components/SortButtonToolbar';
import MainResult from '../components/MainResult';
import PageFooter from '../components/PageFooter';
import * as TodoActions from '../actions/todos';
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
  render() {
    const { alcatraz, categoryFilter, orderBy, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div className="alcatrazapp">
        <Header/>
        <SortButtonToolbar
          orderBy={orderBy}
          actions={actions}/>
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
