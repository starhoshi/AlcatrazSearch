import * as React from 'react';

import TodoTextInput from './TodoTextInput';
import {PageHeader} from 'react-bootstrap';

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
      <PageHeader>
        <TodoTextInput
          newTodo
          onSave={this.handleSave.bind(this)}
          placeholder="Input Xcode Package Name."/>
      </PageHeader>
    );
  }
}

export default Header;
