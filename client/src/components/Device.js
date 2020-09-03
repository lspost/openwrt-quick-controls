import React from 'react';

export default ({ name, address }) => {
  return (
    <div>
      <span className="device-info">
        {name} - {address}
      </span>
    </div>
  );
};
