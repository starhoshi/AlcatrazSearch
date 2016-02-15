import * as React from 'react';
import * as classNames from 'classnames';
import {Panel} from 'react-bootstrap';
import {Alcatraz} from "../models/alcatraz";
import {STARS} from "../constants/SortFilters";

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
        {alcatraz.map( al=>
        <Panel key={al.name} header={al.name}>
          <p>{al.description}</p>
        </Panel>
          )}
      </div>
    );
  }
}

export default MainResult;
