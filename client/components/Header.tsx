import * as React from 'react';

import TodoTextInput from './TodoTextInput';
import {Jumbotron} from 'react-bootstrap';
import SearchTextInput from './SearchTextInput';
import SearchCategorySwitch from './SearchCategorySwitch';

interface HeaderProps {
  //addTodo: Function;
}

class Header extends React.Component<HeaderProps, any> {
  render() {
    return (
      <Jumbotron>
        <h1>Alcatraz Search</h1>
        <p>Search Alcatraz more better.</p>
        <SearchTextInput
          placeholder="Input Xcode Package Name."/>
        <SearchCategorySwitch/>
      </Jumbotron>
    );
  }
}

export default Header;
