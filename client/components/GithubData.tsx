import * as React from 'react';
import * as classNames from 'classnames';
import {Alcatraz} from "../models/alcatraz";
import * as Highlighter from "react-highlighter";
import {STARS,UPDATED,CREATED,WATCHES,FORKS, ORDER_BY_ICONS, ORDER_BY_TITLES} from "../constants/OrderByTypes";
import * as Icon from 'react-fa';
import * as Moment from "moment";

interface GithubDataProps {
  alcatraz: Alcatraz;
}

class GithubData extends React.Component<GithubDataProps, void> {
  renderGithubData() {
    const { alcatraz } = this.props;
    //const created_at = Moment.utc(alcatraz.created_at).fromNow();
    //const updated_at = Moment.utc(alcatraz.updated_at).fromNow();

    return [STARS, WATCHES, FORKS, UPDATED, CREATED].map(orderBy => {
      const icon = ORDER_BY_ICONS[orderBy];
      const label = ORDER_BY_TITLES[orderBy];
      return (
        <div className="github-data" key={orderBy}>
          <Icon name={icon}/>
          <span>{label}:&nbsp;</span>
          <br/>
          <span className="data-item">{alcatraz[orderBy]}</span>
        </div>
      );
    });
  }


  render() {
    return (
      <div className="github-data-container">
        {this.renderGithubData()}
      </div>
    );
  }
}

export default GithubData;
