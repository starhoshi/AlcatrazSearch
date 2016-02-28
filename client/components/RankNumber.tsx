import * as React from 'react';

interface RankNumberProps {
  rank: number;
}

class RankNumber extends React.Component<RankNumberProps, void> {
  render() {
    const {rank} = this.props;
    return (
      <div>
        <span>{rank}</span>
      </div>
    );
  }
}

export default RankNumber;
