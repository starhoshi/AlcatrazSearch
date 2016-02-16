import * as React from 'react';
import * as classNames from 'classnames';
import {Nav,NavItem} from 'react-bootstrap';
import * as Icon from 'react-fa';
import {STARS,LAST_COMMIT,WATCHES,FORKS,NAME} from "../constants/OrderByTypes";

const ORDER_BY_TITLES = {
  [STARS]: 'Stars',
  [LAST_COMMIT]: 'Last Commit',
  [WATCHES]: 'Watches',
  [FORKS]: 'Forks',
  [NAME]: 'Name',
};
const ORDER_BY_ICONS = {
  [STARS]: 'star',
  [LAST_COMMIT]: 'clock-o',
  [WATCHES]: 'eye',
  [FORKS]: 'code-fork',
  [NAME]: 'sort-alpha-asc',
};

interface SortButtonToolbarProps {
}

class SortButtonToolbar extends React.Component<SortButtonToolbarProps, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {orderBy: STARS};
  }

  handleShow(orderBy) {
    this.setState({orderBy});
  }

  renderOrderByNavItems() {
    return [STARS, LAST_COMMIT, WATCHES, FORKS, NAME].map(orderBy => {
      const title = ORDER_BY_TITLES[orderBy];
      const icon = ORDER_BY_ICONS[orderBy];
      return (
        <NavItem
          key={orderBy}
          active={orderBy === this.state.orderBy}
          onClick={() => this.handleShow(orderBy)}>
          <Icon name={icon}/>
          {title}
        </NavItem>
      );
    });
  }

  render() {
    return (
      <div>
        <span>ORDER BY:</span>
        <Nav bsStyle="pills">
          {this.renderOrderByNavItems()}
        </Nav>
      </div>
    );
  }
}

export default SortButtonToolbar;
