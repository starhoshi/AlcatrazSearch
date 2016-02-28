import * as React from 'react';
import * as classNames from 'classnames';
import {Nav,NavItem} from 'react-bootstrap';
import * as Icon from 'react-fa';
import {STARS,UPDATED,CREATED,WATCHES,FORKS,NAME, ORDER_BY_ICONS, ORDER_BY_TITLES} from "../constants/OrderByTypes";
import {OrderBy} from "../models/orderBy";

interface SortButtonToolbarProps {
  lastUpdate: string;
  orderBy: OrderBy;
  onClick: Function;
}

class SortButtonToolbar extends React.Component<SortButtonToolbarProps, void> {
  renderOrderByNavItems() {
    return [STARS, WATCHES, FORKS, UPDATED, CREATED, NAME].map(orderBy => {
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
        <label className="order-by">ORDER BY:</label>
        <Nav bsStyle="pills">
          {this.renderOrderByNavItems()}
        </Nav>
        <span className="last-update">data last-update: {lastUpdate}</span>
      </div>
    );
  }
}

export default SortButtonToolbar;
