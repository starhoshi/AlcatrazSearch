import * as React from 'react';
import * as classNames from 'classnames';

interface RankNumberProps {
  rank: number;
}

class RankNumber extends React.Component<RankNumberProps, void> {
  render() {
    const {rank} = this.props;
    return (
      <div className="rank-number">
        <span>{rank + 1}</span>
      </div>
    );
  }
}

export default RankNumber;
