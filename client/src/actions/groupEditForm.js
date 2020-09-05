import {
  RESET_GROUP_EDIT_FORM,
  GROUP_EDIT_FORM_ADD_DEVICE,
  GROUP_EDIT_FORM_REMOVE_DEVICE,
  GROUP_EDIT_FORM_UPDATE_DEVICE,
  GROUP_EDIT_FORM_UPDATE_NAME
} from './types';

export const resetGroupEditForm = data => dispatch => {
  dispatch({ type: RESET_GROUP_EDIT_FORM });
};

export const groupEditFormAddDevice = () => dispatch => {
  dispatch({ type: GROUP_EDIT_FORM_ADD_DEVICE });
};

export const groupEditFormRemoveDevice = deviceIndex => dispatch => {
  dispatch({ type: GROUP_EDIT_FORM_REMOVE_DEVICE, payload: deviceIndex });
};

export const groupEditFormUpdateDevice = (field, value, index) => dispatch => {
  dispatch({
    type: GROUP_EDIT_FORM_UPDATE_DEVICE,
    payload: { field, value, index }
  });
};

export const groupEditFormUpdateName = name => dispatch => {
  dispatch({ type: GROUP_EDIT_FORM_UPDATE_NAME, payload: name });
};
