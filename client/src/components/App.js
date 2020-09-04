import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import Loader from './general/Loader';
import LandingPage from './pages/LandingPage';
import MainRouter from './MainRouter';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    switch (this.props.auth) {
      case null:
        return <Loader />;
      case false:
        return <LandingPage />;
      default:
        return <MainRouter />;
    }
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, authActions)(App);
