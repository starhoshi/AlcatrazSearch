import * as React from 'react';
import * as classNames from 'classnames';
import {Alcatraz} from "../models/alcatraz";
import * as Highlighter from "react-highlighter";
import {SearchQuery} from "../models/searchQuery";

interface PanelTitleProps {
  searchQuery: SearchQuery;
  alcatraz: Alcatraz;
}

class PanelTitle extends React.Component<PanelTitleProps, void> {
  render() {
    const { searchQuery, alcatraz } = this.props;
    return (
      <h2>
        <a href={alcatraz.url}>
          <Highlighter search={searchQuery.text}>
            {alcatraz.name}
          </Highlighter>
        </a>
      </h2>
    );
  }
}

export default PanelTitle;
