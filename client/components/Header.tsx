import * as React from 'react';

import TodoTextInput from './TodoTextInput';
import {Jumbotron} from 'react-bootstrap';
import SearchCategorySwitch from './SearchCategorySwitch';

interface HeaderProps {
  addTodo: Function;
}

class Header extends React.Component<HeaderProps, any> {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <Jumbotron>
        <h1>Alcatraz Search</h1>
        <p>Search Alcatraz more better.</p>
        <TodoTextInput
          newTodo
          onSave={this.handleSave.bind(this)}
          placeholder="Input Xcode Package Name."/>
        <SearchCategorySwitch/>
      </Jumbotron>
    );
  }
}

export default Header;
