import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GroupEditDevicesInput from '../groupParts/GroupEditDevicesInput';
import { groupActions, groupEditFormActions } from '../../actions';

class GroupEdit extends React.Component {
  state = {
    id: null
  };

  fillFormData = (id, callback) => {
    const group = this.props.groups.find(group => group._id === id);

    if (group) {
      this.props.setGroupEditForm(group);
    } else {
      callback();
    }
  };

  validateAll = () => {
    let valid = true;

    if (!this.validateGroupName()) {
      valid = false;
    }

    this.props.groupEditForm.devices.forEach((device, index) => {
      if (!this.validateDeviceName(index)) {
        valid = false;
      }

      if (!this.validateDeviceAddress(index)) {
        valid = false;
      }
    });

    return valid;
  };

  validateGroupName = () => {
    const name = this.props.groupEditForm.name;
    const re = /^[a-zA-Z0-9 ]+$/g;
    if (name && re.test(name)) {
      this.props.groupEditFormUpdateError('');
      return true;
    } else {
      this.props.groupEditFormUpdateError(
        'You must enter a group name. Cannot include special characters'
      );
      return false;
    }
  };

  validateDeviceName = index => {
    const name = this.props.groupEditForm.devices[index].name;
    const re = /^[a-zA-Z0-9 ]+$/g;
    if (name && re.test(name)) {
      this.props.groupEditFormUpdateDeviceError('name', '', index);
      return true;
    } else {
      this.props.groupEditFormUpdateDeviceError(
        'name',
        'You must enter a group name. Cannot include special characters',
        index
      );
      return false;
    }
  };

  validateDeviceAddress = index => {
    const address = this.props.groupEditForm.devices[index].address;
    const re = /^[a-f0-9]{2}:[a-f0-9]{2}:[a-f0-9]{2}:[a-f0-9]{2}:[a-f0-9]{2}:[a-f0-9]{2}$/g;

    if (address && re.test(address)) {
      this.props.groupEditFormUpdateDeviceError('address', '', index);
      return true;
    } else {
      this.props.groupEditFormUpdateDeviceError(
        'address',
        'You must enter a valid MAC address',
        index
      );
      return false;
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.setState(() => ({ id }));

      this.fillFormData(id, () => {
        this.props.getGroups();
      });
    } else {
      this.props.resetGroupEditForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.id &&
      prevProps.groups.length === 0 &&
      this.props.groups.length > 0
    ) {
      this.fillFormData(this.state.id, () => {
        this.props.history.push('/');
      });
    }
  }

  saveGroup = () => {
    console.log('hello');
    if (!this.validateAll()) {
      return;
    }

    if (this.state.id) {
      this.props.editGroup(this.state.id, this.props.groupEditForm);
      //call update group
    } else {
      this.props.createGroup(this.props.groupEditForm);
    }
    this.props.history.push('/');
  };

  deleteGroup = () => {
    this.props.deleteGroup(this.state.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div>
            <h5>Group Name</h5>
            <input
              type="text"
              value={this.props.groupEditForm.name}
              onChange={async e => {
                await this.props.groupEditFormUpdateName(e.target.value);
                if (this.props.groupEditForm.errors.name) {
                  this.validateGroupName();
                }
              }}
              onBlur={this.validateGroupName}
            />
            {this.props.groupEditForm.errors.name && (
              <p className="form-error">
                {this.props.groupEditForm.errors.name}
              </p>
            )}
          </div>
          <div>
            <h5>Devices</h5>
            <GroupEditDevicesInput
              nameValidation={this.validateDeviceName}
              addressValidation={this.validateDeviceAddress}
            />
          </div>
          <div>
            <Link to="/" className="btn cyan darken-2">
              Cancel
            </Link>
            <button className="btn right" onClick={this.saveGroup}>
              Save
            </button>
            {this.state.id && (
              <button
                className="btn right red group-edit-delete-button"
                onClick={this.deleteGroup}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ groups, groupEditForm }) => ({
  groups,
  groupEditForm
});

export default connect(mapStateToProps, {
  ...groupActions,
  ...groupEditFormActions
})(GroupEdit);
