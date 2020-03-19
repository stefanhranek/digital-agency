import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
      zIndex: '1000000000000'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#FDF3E5',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#273555',
      padding: '0.8em',
      marginTop:'60px',
    },
    bmItem: {
      display: 'inline-block',
      color: '#273555',
      fontWeight: 'bold',
      fontSize: '18px',
      listStyle:'none'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export default class HamburgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();

  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right styles={ styles }>
        <ul className="bmItemList">
          <li className="bmItem">About</li>
          <li className="bmItem">Service</li>
          <li className="bmItem">Work</li>
          <li className="bmItem">Blog</li>
          <li className="bmItem">Contact</li>
        </ul>
      </Menu>
    );
  }
}
