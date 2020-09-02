import axios from 'axios';
import { GET_GROUPS, CREATE_GROUP } from './types';

export const getGroups = () => async dispatch => {
  const res = await axios.get('/api/groups');
  dispatch({ type: GET_GROUPS, payload: res.data });
};

export const createGroup = group => async dispatch => {
  const res = await axios.post('/api/groups');
  dispatch({ type: CREATE_GROUP, payload: res.data });
};
