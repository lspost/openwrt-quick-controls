import React from 'react';
import { connect } from 'react-redux';
import { groupActions } from '../../actions';

const emptyDevice = { name: '', address: '' };

class GroupEdit extends React.Component {
  state = {
    name: '',
    devices: [{ ...emptyDevice }]
  };

  addDevice = () => {
    this.setState(prevState => ({
      devices: [...prevState.devices, { ...emptyDevice }]
    }));
  };

  removeDevice = deviceIndex => {
    this.setState(prevState => ({
      devices: prevState.devices.filter(
        (device, index) => deviceIndex !== index
      )
    }));
  };

  updateGroupName = value => {
    this.setState(() => ({ name: value }));
  };

  renderGroupInputs = () =>
    this.state.devices.map(({ name, address }, index) =>
      this.renderInput(name, address, index)
    );

  updateDevice = (field, value, index) => {
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.devices[index][field] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div>
            <h5>Group Name</h5>
            <input
              type="text"
              onChange={e => {
                this.updateGroupName(e.target.value);
              }}
            />
          </div>
          <div>
            <h5>Devices</h5>
            {this.renderGroupInputs()}
          </div>
          <div>
            <button className="btn cyan darken-2">Cancel</button>
            <button
              className="btn right"
              onClick={() => this.props.createGroup(this.state)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderInput = (name, address, index) => {
    return (
      <div key={index} className="row group-edit-input-container">
        <div className="col s12 m6">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => {
              this.updateDevice('name', e.target.value, index);
            }}
          />
        </div>
        <div className="col s12 m5">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={e => {
              this.updateDevice('address', e.target.value, index);
            }}
          />
        </div>
        <div className="col s12 m1">
          <div className="group-edit-input-buttons-container">
            {this.state.devices.length !== 1 && (
              <i
                className="material-icons group-edit-input-button"
                onClick={() => this.removeDevice(index)}
              >
                delete
              </i>
            )}
            {index === this.state.devices.length - 1 && (
              <i
                className="material-icons group-edit-input-button"
                onClick={this.addDevice}
              >
                add_box
              </i>
            )}
          </div>
        </div>
      </div>
    );
  };
}

export default connect(null, groupActions)(GroupEdit);
