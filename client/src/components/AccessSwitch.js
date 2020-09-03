import React from 'react';

export default ({ accessAllowed, onAccessChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      {!accessAllowed ? (
        <p
          className="badge red"
          style={{ borderRadius: '4px', padding: '2px 10px' }}
        >
          Blocked
        </p>
      ) : (
        <p
          className="badge green"
          style={{
            borderRadius: '4px',
            padding: '2px 10px'
          }}
        >
          Allowed
        </p>
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
