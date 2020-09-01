import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import Header from './Header';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default connect(null, authActions)(App);
