import * as React from 'react';
import * as classNames from 'classnames';
import {Nav,NavItem} from 'react-bootstrap';
import * as Icon from 'react-fa';
import {STARS,UPDATED,CREATED,WATCHES,FORKS,NAME} from "../constants/OrderByTypes";
import {OrderBy} from "../models/orderBy";

const ORDER_BY_TITLES = {
  [STARS]: 'Stars',
  [UPDATED]: 'Updated',
  [CREATED]: 'Created',
  [WATCHES]: 'Watches',
  [FORKS]: 'Forks',
  [NAME]: 'Name',
};
const ORDER_BY_ICONS = {
  [STARS]: 'star',
  [UPDATED]: 'clock-o',
  [CREATED]: 'calendar',
  [WATCHES]: 'eye',
  [FORKS]: 'code-fork',
  [NAME]: 'sort-alpha-asc',
};

interface SortButtonToolbarProps {
  orderBy: OrderBy;
  actions: any;
}

class SortButtonToolbar extends React.Component<SortButtonToolbarProps, any> {
  constructor(props, context) {
    super(props, context);
  }

  handleShow(orderBy) {
    this.setState({orderBy});
  }

  renderOrderByNavItems() {
    return [STARS, UPDATED, CREATED, WATCHES, FORKS, NAME].map(orderBy => {
      const title = ORDER_BY_TITLES[orderBy];
      const icon = ORDER_BY_ICONS[orderBy];
      return (
        <NavItem
          key={orderBy}
          active={orderBy === this.props.orderBy.name}
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
