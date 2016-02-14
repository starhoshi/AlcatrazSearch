import * as React from 'react';
import * as classNames from 'classnames';
import {ButtonGroup,Button} from 'react-bootstrap';

interface SearchCategorySwitchProps {
}

class SearchCategorySwitch extends React.Component<SearchCategorySwitchProps, any> {
  render() {
    return (
      <ButtonGroup>
        <Button active>Plugins</Button>
        <Button>Themes</Button>
        <Button>Templates</Button>
      </ButtonGroup>
    );
  }
}

export default SearchCategorySwitch;
