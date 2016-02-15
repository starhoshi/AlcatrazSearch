import * as React from 'react';
import * as classNames from 'classnames';
import {Nav,NavItem} from 'react-bootstrap';
import * as Icon from 'react-fa';

interface SortButtonToolbarProps {
}

class SortButtonToolbar extends React.Component<SortButtonToolbarProps, any> {
  render() {
    return (
      <div>
        <span>ORDER BY:</span>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem eventKey={1}>
            <Icon name="star"/>
            Stars
          </NavItem>
          <NavItem eventKey={2}>
            <Icon name="clock-o"/>
            Last Commit
          </NavItem>
          <NavItem eventKey={3}>
            <Icon name="eye"/>
            Watches
          </NavItem>
          <NavItem eventKey={4}>
            <Icon name="code-fork"/>
            Forks
          </NavItem>
          <NavItem eventKey={5}>
            <Icon name="sort-alpha-asc"/>
            Name
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default SortButtonToolbar;
