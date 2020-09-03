import React from 'react';
import { connect } from 'react-redux';
import { groupActions } from '../actions';
import AccessSwitch from './AccessSwitch';

class GroupCard extends React.Component {
  state = {
    accessAllowed: this.props.accessAllowed
  };
  toggleAccess = () => {
    this.setState(prevState => ({ accessAllowed: !prevState.accessAllowed }));
  };
  render() {
    return (
      <div key={this.props.id} className="row" style={{ padding: '14px' }}>
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{this.props.name}</span>
              <div className="row">
                <div className="col s12 m4">
                  <AccessSwitch
                    accessAllowed={this.state.accessAllowed}
                    onAccessChange={this.toggleAccess}
                  />
                </div>
                <div className="col s12 m8 blue"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ groups }) => ({ groups });

export default connect(mapStateToProps, groupActions)(GroupCard);
