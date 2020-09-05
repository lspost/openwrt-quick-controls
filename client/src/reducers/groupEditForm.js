import {
  RESET_GROUP_EDIT_FORM,
  SET_GROUP_EDIT_FORM,
  GROUP_EDIT_FORM_ADD_DEVICE,
  GROUP_EDIT_FORM_REMOVE_DEVICE,
  GROUP_EDIT_FORM_UPDATE_DEVICE,
  GROUP_EDIT_FORM_UPDATE_NAME
} from '../actions/types';

const emptyDevice = { name: '', address: '' };

const defaultState = {
  name: '',
  devices: [{ ...emptyDevice }]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESET_GROUP_EDIT_FORM:
      return defaultState;

    case GROUP_EDIT_FORM_ADD_DEVICE: {
      const tempState = { ...state };
      tempState.devices.push({ ...emptyDevice });
      return tempState;
    }

    case GROUP_EDIT_FORM_REMOVE_DEVICE: {
      const updatedDevices = { ...state }.devices.filter(
        (device, index) => index !== action.payload
      );
      return { ...state, devices: updatedDevices };
    }

    case GROUP_EDIT_FORM_UPDATE_DEVICE: {
      const tempState = { ...state };
      const { index, field, value } = action.payload;
      tempState.devices[index][field] = value;
      return tempState;
    }

    case GROUP_EDIT_FORM_UPDATE_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};
