import * as React from 'react';
import * as classNames from 'classnames';
import {Panel} from 'react-bootstrap';
import {Alcatraz} from "../models/alcatraz";
import {STARS} from "../constants/SortTypes";

interface MainResultProps {
  alcatraz: Alcatraz[];
}

class MainResult extends React.Component<MainResultProps, any> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { alcatraz } = this.props;
    return (
      <div>
        {alcatraz.map((al,i)=>
        <Panel key={i} header={al.name}>
          <p>{i + 1}</p>
          <p>{al.description}</p>
          <p>{al.stargazers_count}</p>
          <a href={al.url}>{al.name}</a>
          <img src={al.screenshot}/>
        </Panel>
          )}
      </div>
    );
  }
}

export default MainResult;
