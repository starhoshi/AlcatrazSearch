import * as React from 'react';
import * as classNames from 'classnames';
import {ButtonGroup,Button} from 'react-bootstrap';

interface SearchCategorySwitchProps {
}

class SearchCategorySwitch extends React.Component<SearchCategorySwitchProps, any> {
  render() {
    return (
      <ButtonGroup>
        <Button bsStyle="primary" active>Plugins</Button>
        <Button bsStyle="primary">Themes</Button>
        <Button bsStyle="primary">Templates</Button>
      </ButtonGroup>
    );
  }
}

export default SearchCategorySwitch;
