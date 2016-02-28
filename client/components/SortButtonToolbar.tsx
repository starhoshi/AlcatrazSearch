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
  [WATCHES]: 'Watchers',
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
  lastUpdate: string;
  orderBy: OrderBy;
  onClick: Function;
}

class SortButtonToolbar extends React.Component<SortButtonToolbarProps, void> {
  renderOrderByNavItems() {
    return [STARS, UPDATED, CREATED, WATCHES, FORKS, NAME].map(orderBy => {
      const { orderBy: selectedOrderBy, onClick } = this.props;
      const title = ORDER_BY_TITLES[orderBy];
      const icon = ORDER_BY_ICONS[orderBy];
      return (
        <NavItem
          key={orderBy}
          active={orderBy === selectedOrderBy.name}
          onClick={() => onClick(orderBy)}>
          <Icon name={icon}/>
          {title}
        </NavItem>
      );
    });
  }

  render() {
    const { lastUpdate } = this.props;
    return (
      <div className="order-by-nav">
        <label className="last-update">data last-update: {lastUpdate}</label>
        <label className="order-by">ORDER BY:</label>
        <Nav bsStyle="pills">
          {this.renderOrderByNavItems()}
        </Nav>
      </div>
    );
  }
}

export default SortButtonToolbar;
