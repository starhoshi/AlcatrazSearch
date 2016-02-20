import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from '../components/Header';
import SortButtonToolbar from '../components/SortButtonToolbar';
import MainResult from '../components/MainResult';
import PageFooter from '../components/PageFooter';
import * as TodoActions from '../actions/todos';
import {Alcatraz} from '../models/alcatraz';

interface AppProps {
  alcatraz?: Alcatraz[];
  categoryFilter?: string;
  dispatch?: Dispatch;
}

@connect(state => ({
  alcatraz: state.alcatraz,
  categoryFilter: state.categoryFilter
}))
class App extends React.Component<AppProps, void> {
  render() {
    const { alcatraz,dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div className="alcatrazapp">
        <Header/>
        <SortButtonToolbar/>
        <MainResult alcatraz={alcatraz}/>
        <PageFooter/>
      </div>
    );
  }
}

export default App;
