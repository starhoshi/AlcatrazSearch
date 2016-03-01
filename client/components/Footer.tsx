import * as React from 'react';
import * as classNames from 'classnames';

interface FooterProps {
}

class Footer extends React.Component<FooterProps, void> {
  render() {
    return (
      <footer>
        <div className="container">
          <ul className="social-buttons">
            <li>
              <iframe className="github-btn"
                      src="https://ghbtns.com/github-btn.html?user=starhoshi&repo=AlcatrazSearch&type=star&count=true"
                      width={100}
                      height={20}
                      title="Star on GitHub"></iframe>
            </li>
            <li>
              <iframe
                src="https://platform.twitter.com/widgets/follow_button.html?screen_name=star__hoshi&show_screen_name=true"
                width={230}
                height={20}
                allowTransparency={true}
                frameBorder="0"
                scrolling="no">
              </iframe>
            </li>
          </ul>
          <img className="ga-beacon" src="https://ga-beacon.appspot.com/UA-44007234-10/AlcatrazSearch?pixel"/>
          <p>Code licensed under MIT.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
