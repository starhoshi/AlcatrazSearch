import * as React from 'react';

interface RankNumberProps {
  rank: number;
}

class RankNumber extends React.Component<RankNumberProps, void> {
  render() {
    const {rank} = this.props;
    return (
      <div>
        <span>{rank + 1}</span>
      </div>
    );
  }
}

export default RankNumber;
