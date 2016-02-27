import * as React from 'react';
import * as classNames from 'classnames';
import {SearchQuery} from "../models/searchQuery";
import {Col, Grid} from 'react-bootstrap';

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
      <Grid>
        <Col xs={3} xsOffset={3}>
          <input
            type="text"
            placeholder={placeholder}
            autoFocus={true}
            value={searchQuery.text}
            onChange={this.handleChange.bind(this)}
          />
        </Col>
      </Grid>
    );
  }
}


export default SearchTextInput;
