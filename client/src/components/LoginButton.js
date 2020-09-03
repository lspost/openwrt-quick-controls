import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';

const LoginButton = ({ auth, logOut }) => {
  switch (auth) {
    case null:
      return <></>;
    case false:
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    default:
      return (
        <li>
          <button
            onClick={logOut}
            className="btn"
            style={{ marginRight: '10px' }}
          >
            Logout
          </button>
        </li>
      );
  }
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, authActions)(LoginButton);
