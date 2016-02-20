import * as React from 'react';
import * as classNames from 'classnames';
import {SearchQuery} from "../models/searchQuery";

interface SearchTextInputProps {
  searchQuery: SearchQuery;
  onChange: Function;
  placeholder: string;
}

class SearchTextInput extends React.Component<SearchTextInputProps, void> {
  constructor(props, context) {
    super(props, context);
  }

  handleChange(e) {
    const {onChange} = this.props;
    onChange(e.target.value);
  }

  render() {
    const {placeholder, searchQuery} = this.props;

    return (
      <input
        type="text"
        placeholder={placeholder}
        autoFocus={true}
        value={searchQuery.text}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}


export default SearchTextInput;
