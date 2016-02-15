import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from '../components/Header';
//import MainSection from '../components/MainSection';
import SortButtonToolbar from '../components/SortButtonToolbar';
import MainResult from '../components/MainResult';
import PageFooter from '../components/PageFooter';
import * as TodoActions from '../actions/todos';

// It would be nice to specify an AppProps interface for this component, but it
// does not play nicely with the {() => <App/>} usage in main.
class App extends React.Component<any, any> {
  render() {
    const { todos, dispatch } = this.props;
    const { alcatraz } = this.props;
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

const mapStateToProps = state => ({
  todos: state.todos,
  alcatraz: state.alcatraz
});
console.log(mapStateToProps);

export default connect(mapStateToProps)(App);
