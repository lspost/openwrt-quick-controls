import React from 'react';
import { connect } from 'react-redux';

const DevicesList = ({ groupId, groups }) => {
  const { devices } = groups.find(group => groupId === group._id);

  const renderedDevices = devices.map((device, index) => (
    <div key={index}>
      <span className="device-info">
        {device.name} - {device.address}
      </span>
    </div>
  ));

  return <div className="device-list">{renderedDevices}</div>;
};

const mapStateToProps = ({ groups }) => ({ groups });

export default connect(mapStateToProps)(DevicesList);
