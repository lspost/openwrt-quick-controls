import React from 'react';

export default ({ accessAllowed, onAccessChange }) => {
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
          <span className="lever" onClick={onAccessChange}></span>
          On
        </label>
      </div>
    </div>
  );
};
