import React from 'react';
import { connect } from 'react-redux';
import GroupEditDevicesInput from '../groupParts/GroupEditDevicesInput';
import { groupActions, groupEditFormActions } from '../../actions';

class GroupEdit extends React.Component {
  state = {
    id: null
  };

  componentDidMount() {
    if (this.props.match.params) {
      this.setState(() => ({
        id: this.props.match.params
      }));

      const group = this.props.groups.find(group => group._id)
      if(group){
        this.props.
      }else {
        //redirect to dashboard
      }
    }


  }

  render() {
    console.log('param', this.props.match.params);
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
            <button className="btn cyan darken-2">Cancel</button>
            <button
              className="btn right"
              onClick={() => this.props.createGroup(this.props.groupEditForm)}
            >
              Save
            </button>
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
