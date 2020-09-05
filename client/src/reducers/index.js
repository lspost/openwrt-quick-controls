import { combineReducers } from 'redux';
import authReducer from './auth';
import groupReducer from './groups';
import groupEditFormReducer from './groupEditForm';

export default combineReducers({
  auth: authReducer,
  groups: groupReducer,
  groupEditForm: groupEditFormReducer
});
