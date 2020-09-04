import React from 'react';
import AccessSwitch from '../groupParts/AccessSwitch';
import DevicesList from './DevicesList';

export default ({ id, name }) => (
  <div key={id} className="row" style={{ padding: '14px' }}>
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{name}</span>
          <div className="row">
            <div className="col s12 m4">
              <AccessSwitch groupId={id} />
            </div>
            <div className="col s12 m8">
              <DevicesList groupId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
