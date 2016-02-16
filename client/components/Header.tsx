import * as React from 'react';

import {Jumbotron} from 'react-bootstrap';
import SearchTextInput from './SearchTextInput';
import SearchCategorySwitch from './SearchCategorySwitch';

import {SHOW_PLUGINS,SHOW_THEMES,SHOW_TEMPLATES} from '../constants/CategoryFilters';
import {PLUGIN,THEME,TEMPLATE} from "../constants/PackageTypes";

const CATEGORY_FILTERS = {
  [SHOW_PLUGINS]: alcatraz => alcatraz.package_type === PLUGIN,
  [SHOW_THEMES]: alcatraz => alcatraz.package_type === TEMPLATE,
  [SHOW_TEMPLATES]: alcatraz => alcatraz.package_type === THEME
};

interface HeaderProps {
}

class Header extends React.Component<HeaderProps, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {filter: SHOW_PLUGINS};
  }

  handleShow(filter) {
    this.setState({filter});
  }

  render() {
    const { filter } = this.state;

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
