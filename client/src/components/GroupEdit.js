import React from 'react';
import { connect } from 'react-redux';
import { groupActions } from '../actions';

class GroupEdit extends React.Component {
  state = {
    groupName: '',
    device1Name: '',
    device1Address: '',
    device2Name: '',
    device2Address: ''
  };

  updateField(field, value) {
    const updateState = {};
    updateState[field] = value;
    this.setState(() => updateState);
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h5>Edit Group</h5>
            <div>
              <label>Group Name</label>
              <input
                type="text"
                name="groupName"
                value={this.state.groupName}
                onChange={e => {
                  this.updateField('groupName', e.target.value);
                }}
              />
              <label>Device1 Name</label>
              <input
                type="text"
                name="device1Name"
                value={this.state.device1Name}
                onChange={e => {
                  this.updateField('device1Name', e.target.value);
                }}
              />
              <label>Device1 Address</label>
              <input
                type="text"
                name="device1Address"
                value={this.state.device1Address}
                onChange={e => {
                  this.updateField('device1Address', e.target.value);
                }}
              />
              <label>Device2 Name</label>
              <input
                type="text"
                name="device2Name"
                value={this.state.device2Name}
                onChange={e => {
                  this.updateField('device2Name', e.target.value);
                }}
              />
              <label>Device2 Address</label>
              <input
                type="text"
                name="device2Address"
                value={this.state.device2Address}
                onChange={e => {
                  this.updateField('device2Address', e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="card-action"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <button className="btn">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ groups }) => ({ groups });

export default connect(mapStateToProps, groupActions)(GroupEdit);
