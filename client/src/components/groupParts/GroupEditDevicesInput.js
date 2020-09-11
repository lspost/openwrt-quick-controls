import React from 'react';
import { connect } from 'react-redux';
import { groupEditFormActions } from '../../actions';
import MacAddressInput from './MacAddressInput';

class GroupEditDevicesInput extends React.Component {
  fieldNames = { name: 'Name', address: 'Address' };

  render = () => {
    return this.props.groupEditForm.devices.map(
      ({ name, address, errors }, index) =>
        this.renderInputsGroup(name, address, errors, index)
    );
  };

  renderInput = (field, value, error, index) => (
    <div className="col s12 m6">
      <label>{this.fieldNames[field]}</label>
      <input
        type="text"
        name={field}
        value={value}
        onChange={async e => {
          await this.props.groupEditFormUpdateDevice(
            field,
            e.target.value,
            index
          );
          if (error) {
            this.props.nameValidation(index);
          }
        }}
        onBlur={() => this.props.nameValidation(index)}
      />
      {error && <p className="form-error">{error}</p>}
    </div>
  );

  renderInputsGroup = (name, address, errors, index) => {
    return (
      <div key={index} className="row group-edit-input-container">
        {this.renderInput('name', name, errors.name, index)}
        <MacAddressInput
          index={index}
          value={address}
          error={errors.address}
          handleOnChange={this.props.groupEditFormUpdateDevice}
          validation={this.props.addressValidation}
        />
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
