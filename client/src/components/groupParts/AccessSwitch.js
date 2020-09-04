import React from 'react';
import { connect } from 'react-redux';
import { groupActions } from '../../actions';

const AccessSwitch = ({ groupId, groups, editGroup }) => {
  const group = groups.find(group => groupId === group._id);
  const { accessAllowed } = group;

  return (
    <div className="access-switch">
      {!accessAllowed ? (
        <span className="red access-badge">Blocked</span>
      ) : (
        <span className="green access-badge">Allowed</span>
      )}
      <div className="switch">
        <label>
          Off
          <input checked={accessAllowed} type="checkbox" />
          <span
            className="lever"
            onClick={() =>
              editGroup(groupId, { accessAllowed: !accessAllowed })
            }
          ></span>
          On
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = ({ groups }) => ({ groups });

export default connect(mapStateToProps, groupActions)(AccessSwitch);
