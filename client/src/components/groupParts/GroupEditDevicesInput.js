import React from 'react';
import { connect } from 'react-redux';
import { groupEditFormActions } from '../../actions';

class GroupEditDevicesInput extends React.Component {
  fieldNames = { name: 'Name', address: 'Address' };

  render = () => {
    return this.props.groupEditForm.devices.map(({ name, address }, index) =>
      this.renderInputsGroup(name, address, index)
    );
  };

  renderInput = (field, value, index) => (
    <div className="col s12 m6">
      <label>{this.fieldNames[field]}</label>
      <input
        type="text"
        name={field}
        value={value}
        onChange={e => {
          this.props.groupEditFormUpdateDevice(field, e.target.value, index);
        }}
      />
    </div>
  );

  renderInputsGroup = (name, address, index) => {
    return (
      <div key={index} className="row group-edit-input-container">
        {this.renderInput('name', name, index)}
        {this.renderInput('address', address, index)}
        <div className="col s12 m1">
          <div className="group-edit-input-buttons-container">
            {this.props.groupEditForm.devices.length !== 1 && (
              <i
                className="material-icons group-edit-input-button"
                onClick={() => this.props.groupEditFormRemoveDevice(index)}
              >
                delete
              </i>
            )}
            {index === this.props.groupEditForm.devices.length - 1 && (
              <i
                className="material-icons group-edit-input-button"
                onClick={this.props.groupEditFormAddDevice}
              >
                add_box
              </i>
            )}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ groupEditForm }) => ({ groupEditForm });

export default connect(
  mapStateToProps,
  groupEditFormActions
)(GroupEditDevicesInput);
