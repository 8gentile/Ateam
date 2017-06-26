import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUsers = {};

const UsersReducer = (state = _nullUsers, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, _nullUsers, { users });
    default:
      return state;
  }
};

export default UsersReducer;
// action.users = { users }
