import { GET_GROUPS, EDIT_GROUP, DELETE_GROUP } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_GROUPS:
      return action.payload;
    case EDIT_GROUP:
      return state.map(group =>
        group._id === action.payload._id ? action.payload : group
      );
    case DELETE_GROUP:
      return state.filter(group => group._id !== action.payload);
    default:
      return state;
  }
};
