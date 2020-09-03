import { GET_GROUPS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_GROUPS:
      return action.payload;
    default:
      return state;
  }
};
