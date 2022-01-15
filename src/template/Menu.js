import React from 'react';
import { slide as Menu$ } from 'react-burger-menu';
import MenuWrap from './MenuWrap';

class Menu extends React.Component {
  showSettings (event) {
    event.preventDefault();//TODO what does it mean?
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <MenuWrap wait={20}>
        <Menu$ width={ '30%' } outerContainerId={'outer-container'} pageWrapId={'page-wrap'} >
          <a key="0" id="home" className="menu-item" href="/">Home</a>
          <a key="1" id="about" className="menu-item" href="/about">About</a>
          <a key="2" id="contact" className="menu-item" href="/contact">Contact</a>
          <a key="3" onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu$>
      </MenuWrap>
    );
  }
}

export default Menu;
