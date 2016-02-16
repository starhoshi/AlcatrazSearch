import * as React from 'react';

class PageFooter extends React.Component<any, any> {
  render() {
    return (
      <footer>
        <iframe src="https://ghbtns.com/github-btn.html?user=starhoshi&repo=AlcatrazSearch&type=star&count=true"
                frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=starhoshi&repo=AlcatrazSearch&type=fork&count=true"
                frameBorder="0"
                scrolling="0" width="170px" height="20px"></iframe>
      </footer>
    );
  }
}

export default PageFooter;
