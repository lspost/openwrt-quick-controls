import {
  RESET_GROUP_EDIT_FORM,
  SET_GROUP_EDIT_FORM,
  GROUP_EDIT_FORM_ADD_DEVICE,
  GROUP_EDIT_FORM_REMOVE_DEVICE,
  GROUP_EDIT_FORM_UPDATE_DEVICE,
  GROUP_EDIT_FORM_UPDATE_DEVICE_ERROR,
  GROUP_EDIT_FORM_UPDATE_NAME,
  GROUP_EDIT_FORM_UPDATE_ERROR
} from './types';

export const resetGroupEditForm = () => dispatch => {
  dispatch({ type: RESET_GROUP_EDIT_FORM });
};

export const setGroupEditForm = groupInfo => dispatch => {
  dispatch({ type: SET_GROUP_EDIT_FORM, payload: groupInfo });
};

export const groupEditFormAddDevice = () => dispatch => {
  dispatch({ type: GROUP_EDIT_FORM_ADD_DEVICE });
};

export const groupEditFormRemoveDevice = deviceIndex => dispatch => {
  dispatch({ type: GROUP_EDIT_FORM_REMOVE_DEVICE, payload: deviceIndex });
};

export const groupEditFormUpdateDevice = (field, value, index) => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: GROUP_EDIT_FORM_UPDATE_DEVICE,
      payload: { field, value, index }
    });

    resolve();
  });
};
export const groupEditFormUpdateDeviceError = (
  field,
  error,
  index
) => dispatch => {
  dispatch({
    type: GROUP_EDIT_FORM_UPDATE_DEVICE_ERROR,
    payload: { field, error, index }
  });
};

export const groupEditFormUpdateName = name => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({ type: GROUP_EDIT_FORM_UPDATE_NAME, payload: name });
    resolve();
  });
};

export const groupEditFormUpdateError = error => dispatch => {
  dispatch({ type: GROUP_EDIT_FORM_UPDATE_ERROR, payload: error });
};
