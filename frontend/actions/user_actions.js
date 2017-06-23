import * as APIUtil from '../utils/user_api_utils';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const fetchUsers = user_id => dispatch => (
  APIUtil.fetchUsers(user_id)
    .then(users => dispatch(receiveUsers(users)))
);

export const updateUser = (formData, id) => dispatch => (
  APIUtil.updateUser(formData, id)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});
