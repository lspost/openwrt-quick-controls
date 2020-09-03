import React from 'react';
import { connect } from 'react-redux';
import { groupActions } from '../actions';
import AccessSwitch from './AccessSwitch';
import Device from './Device';

class GroupCard extends React.Component {
  state = {
    accessAllowed: this.props.accessAllowed
  };
  toggleAccess = () => {
    this.setState(prevState => ({ accessAllowed: !prevState.accessAllowed }));
  };
  renderDevicesList = () => {
    return this.props.devices.map(device => <Device {...device} />);
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
                <div className="col s12 m8">
                  <div className="device-list">{this.renderDevicesList()}</div>
                </div>
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
