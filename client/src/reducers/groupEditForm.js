import _ from 'lodash';
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

export default (state = _.cloneDeep(defaultState), action) => {
  switch (action.type) {
    case RESET_GROUP_EDIT_FORM:
      return _.cloneDeep(defaultState);

    case SET_GROUP_EDIT_FORM:
      return action.payload;

    case GROUP_EDIT_FORM_ADD_DEVICE: {
      const tempState = _.cloneDeep(state);
      tempState.devices.push(_.cloneDeep(emptyDevice));
      return tempState;
    }

    case GROUP_EDIT_FORM_REMOVE_DEVICE: {
      const tempState = _.cloneDeep(state);
      tempState.devices = tempState.devices.filter(
        (device, index) => index !== action.payload
      );
      return tempState;
    }

    case GROUP_EDIT_FORM_UPDATE_DEVICE: {
      const tempState = _.cloneDeep(state);
      const { index, field, value } = action.payload;
      tempState.devices[index][field] = value;
      return tempState;
    }

    case GROUP_EDIT_FORM_UPDATE_NAME:
      const tempState = _.cloneDeep(state);
      tempState.name = action.payload;
      return tempState;

    default:
      return state;
  }
};
