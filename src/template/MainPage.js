import React from 'react';
import Menu from './Menu';
import Journey from './../journey/Journey';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';


class MainPage extends React.Component {
  render () {
    return (
      <div id="outer-container" style={{ height: '100%' }}>
        <Menu />
        <main id="page-wrap">
        <Journey/>

        <FormattedMessage id="app.learn-react-link"
                      defaultMessage="Learn React"
                      description="Link on react page"/>
        </main>
      </div>
    );
  }
}

export default MainPage;
