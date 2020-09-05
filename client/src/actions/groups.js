import axios from 'axios';
import { GET_GROUPS, CREATE_GROUP, EDIT_GROUP, DELETE_GROUP } from './types';

export const getGroups = () => async dispatch => {
  const res = await axios.get('/api/groups');
  dispatch({ type: GET_GROUPS, payload: res.data });
};

export const createGroup = group => async dispatch => {
  const res = await axios.post('/api/groups', group);
  dispatch({ type: CREATE_GROUP, payload: res.data });
};

export const editGroup = (groupId, updates) => async dispatch => {
  const res = await axios.put(`/api/groups/${groupId}`, updates);
  dispatch({ type: EDIT_GROUP, payload: res.data });
};

export const deleteGroup = groupId => async dispatch => {
  const res = await axios.delete(`/api/groups/${groupId}`);
  dispatch({ type: DELETE_GROUP, payload: groupId });
};
