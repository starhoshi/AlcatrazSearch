import * as React from 'react';
import * as classNames from 'classnames';

interface SearchTextInputProps {
  text?: string;
  placeholder?: string;
}

interface SearchTextInputState {
  text: string;
}

class SearchTextInput extends React.Component<SearchTextInputProps, SearchTextInputState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}


export default SearchTextInput;
