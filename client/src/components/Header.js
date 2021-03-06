import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../actions';

class Header extends React.Component {
  render() {
    return (
      <div className="navbar-fixed header">
        <nav>
          <div className="nav-wrapper cyan lighten-1">
            <Link to="/" className="brand-logo navbar-logo">
              OQC
            </Link>
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
