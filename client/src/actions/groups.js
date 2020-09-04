import axios from 'axios';
import { GET_GROUPS, CREATE_GROUP, EDIT_GROUP } from './types';

export const getGroups = () => async dispatch => {
  const res = await axios.get('/api/groups');
  dispatch({ type: GET_GROUPS, payload: res.data });
};

export const createGroup = group => async dispatch => {
  console.log(group);
  const res = await axios.post('/api/groups', group);
  dispatch({ type: CREATE_GROUP, payload: res.data });
};

export const editGroup = (groupId, updates) => dispatch => {
  dispatch({ type: EDIT_GROUP, payload: { id: groupId, updates } });
};
