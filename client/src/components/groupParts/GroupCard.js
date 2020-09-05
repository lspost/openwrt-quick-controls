import React from 'react';
import { Link } from 'react-router-dom';
import AccessSwitch from '../groupParts/AccessSwitch';
import DevicesList from './DevicesList';

export default ({ id, name }) => (
  <div key={id} className="row group-card">
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            {name}{' '}
            <Link
              to={`/group/edit/${id}`}
              className="material-icons right group-edit-icon"
            >
              edit
            </Link>
          </span>
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
