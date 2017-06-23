import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  users: null,
});

const UsersReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      const users = action.users;
      return merge({}, _nullUser, {users});
    default:
      return state;
  }
};

export default UsersReducer;
