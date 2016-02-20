import * as React from 'react';

import {Jumbotron} from 'react-bootstrap';
import SearchTextInput from './../components/SearchTextInput';
import SearchCategorySwitch from './../components/SearchCategorySwitch';

import {SHOW_PLUGINS,SHOW_THEMES,SHOW_TEMPLATES} from '../constants/CategoryFilters';
import {PLUGIN,THEME,TEMPLATE} from "../constants/PackageTypes";
import {connect} from "react-redux";
import {CategoryFilter} from "../models/categoryFilter";
import * as CategoryFilterActions from '../actions/categoryFilter';
import { bindActionCreators, Dispatch } from 'redux';

const CATEGORY_FILTERS = {
  [SHOW_PLUGINS]: alcatraz => alcatraz.package_type === PLUGIN,
  [SHOW_THEMES]: alcatraz => alcatraz.package_type === TEMPLATE,
  [SHOW_TEMPLATES]: alcatraz => alcatraz.package_type === THEME
};

interface HeaderProps {
  categoryFilter?: CategoryFilter;
  dispatch?: Dispatch;
}

@connect(state => ({
  alcatraz: state.alcatraz,
  categoryFilter: state.categoryFilter
}))
class Header extends React.Component<HeaderProps, void> {
  constructor(props, context) {
    super(props, context);
  }

  handleShow(filter) {
    const actions = bindActionCreators(CategoryFilterActions, this.props.dispatch);
    actions.updateFilter({name: filter});
  }

  render() {
    const filter = this.props.categoryFilter.name;

    return (
      <Jumbotron>
        <h1>Alcatraz Search</h1>
        <p>Search Alcatraz more better.</p>
        <SearchTextInput placeholder="Input Alcatraz Package Name."/>
        <SearchCategorySwitch
          filter={filter}
          onShow={this.handleShow.bind(this)}/>
      </Jumbotron>
    );
  }
}

export default Header;