import * as React from 'react';
import * as classNames from 'classnames';
import {Alcatraz} from "../models/alcatraz";

interface ScreenshotProps {
  alcatraz: Alcatraz;
}

class Screenshot extends React.Component<ScreenshotProps, void> {
  render() {
    const { alcatraz } = this.props;
    return (
      <div>
        {alcatraz.screenshot ? <img src={alcatraz.screenshot}
                                    alt={alcatraz.name + "screenshot"}/>
          : <span>No Image.</span> }
      </div>
    );
  };
}

export default Screenshot;
