import * as React from 'react';
import * as classNames from 'classnames';
import {Panel} from 'react-bootstrap';

interface MainResultProps {
}

class MainResult extends React.Component<MainResultProps, any> {
  render() {
    return (
      <div>
        <Panel header="Panel heading without title">
          Panel content
        </Panel>
      </div>
    );
  }
}

export default MainResult;
