import React from 'react';
import { connect } from 'react-redux';

const DevicesList = ({ groupId, groups }) => {
  const { devices } = groups.find(group => groupId === group._id);

  const renderedDevices = devices.map((device, index) => (
    <div key={index}>
      <span className="device-info">
        <span>{device.name}</span>{' '}
        <span className="group-card-device-address">( {device.address} )</span>
      </span>
    </div>
  ));

  return <div className="devices-list grey lighten-5">{renderedDevices}</div>;
};

const mapStateToProps = ({ groups }) => ({ groups });

export default connect(mapStateToProps)(DevicesList);
