import React from 'react';
import LoginButton from './LoginButton';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan lighten-1">
          <a href="#" className="brand-logo" style={{ marginLeft: '8px' }}>
            OpenWrt-Quick-Controls
          </a>
          <ul id="nav-mobile" className="right">
            <LoginButton />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
