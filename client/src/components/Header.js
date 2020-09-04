import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';

class Header extends React.Component {
  render() {
    return (
      <div className="navbar-fixed header">
        <nav>
          <div className="nav-wrapper cyan lighten-1">
            <a href="#" className="brand-logo navbar-logo">
              OQC
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <button
                  onClick={this.props.logOut}
                  className="btn login-button"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(null, authActions)(Header);
