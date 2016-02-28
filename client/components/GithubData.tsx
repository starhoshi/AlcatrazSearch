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
  static renderGithubData(orderByType, data) {
    const icon = ORDER_BY_ICONS[orderByType];
    const label = ORDER_BY_TITLES[orderByType];
    const displayData = data === "-1" || data === -1 ? "No Data" : data;
    return (
      <div className="github-data" key={orderByType}>
        <Icon name={icon}/>
        <span>{label}</span>
        <br/>
        <span className="data-item">{displayData}</span>
      </div>
    );
  }


  render() {
    const { alcatraz } = this.props;
    const created_at = Moment.utc(alcatraz.created_at).fromNow();
    const updated_at = Moment.utc(alcatraz.updated_at).fromNow();
    return (
      <div className="github-data-container">
        {GithubData.renderGithubData(STARS, alcatraz[STARS])}
        {GithubData.renderGithubData(WATCHES, alcatraz[WATCHES])}
        {GithubData.renderGithubData(FORKS, alcatraz[FORKS])}
        {GithubData.renderGithubData(UPDATED, updated_at)}
        {GithubData.renderGithubData(CREATED, created_at)}
      </div>
    );
  }
}

export default GithubData;
