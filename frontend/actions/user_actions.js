import * as APIUtil from '../utils/user_api_utils';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = user_id => dispatch => (
  APIUtil.fetchUser(user_id)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = (formData, id) => dispatch => (
  APIUtil.updateUser(formData, id)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
