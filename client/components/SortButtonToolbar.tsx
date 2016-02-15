import * as React from 'react';
import * as classNames from 'classnames';
import {Nav,NavItem} from 'react-bootstrap';

interface SortButtonToolbarProps {
}

class SortButtonToolbar extends React.Component<SortButtonToolbarProps, any> {
  render() {
    return (
      <Nav bsStyle="pills" activeKey={1}>
        <NavItem eventKey={1}>Stars</NavItem>
        <NavItem eventKey={2}>Last Commit</NavItem>
        <NavItem eventKey={3}>Watches</NavItem>
        <NavItem eventKey={4}>Forks</NavItem>
      </Nav>
    );
  }
}

export default SortButtonToolbar;
