import { RECEIVE_USER, RECEIVE_TEAMS} from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user: null,
  teams: null,
});

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, _nullUser, {user});
    case RECEIVE_TEAMS:
      const teams = action.teams;
      return merge({}, state, {teams});
    default:
      return state;
  }
};

export default UserReducer;
