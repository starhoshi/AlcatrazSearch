import * as React from 'react';

import TodoTextInput from './TodoTextInput';

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
      <header className="header">
        <h1>Alcatraz Search</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave.bind(this)}
          placeholder="Input Xcode Package Name."/>
      </header>
    );
  }
}

export default Header;
