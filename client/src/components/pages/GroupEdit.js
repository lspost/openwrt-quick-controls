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
              onChange={e => {
                this.props.groupEditFormUpdateName(e.target.value);
              }}
            />
          </div>
          <div>
            <h5>Devices</h5>
            <GroupEditDevicesInput />
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
