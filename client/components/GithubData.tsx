import * as React from 'react';
import * as classNames from 'classnames';
import {Alcatraz} from "../models/alcatraz";
import * as Highlighter from "react-highlighter";

interface GithubDataProps {
  alcatraz: Alcatraz;
}

class GithubData extends React.Component<GithubDataProps, void> {
  render() {
    const { alcatraz } = this.props;
    return (
      <div className="github-data">
        <p>{alcatraz.stargazers_count}</p>
        <p>{alcatraz.subscribers_count}</p>
        <p>{alcatraz.forks_count}</p>
        <p>{alcatraz.updated_at}</p>
        <p>{alcatraz.created_at}</p>
      </div>
    );
  }
}

export default GithubData;
