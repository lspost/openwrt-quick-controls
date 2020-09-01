import axios from 'axios';
import { FETCH_USER, LOG_OUT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logOut = () => async dispatch => {
  const res = await axios.post('/auth/logout');
  dispatch({ type: LOG_OUT });
};
