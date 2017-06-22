import * as APIUtil from '../utils/user_api_utils';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_TEAMS = "RECEIVE_TEAMS";

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

export const receiveTeams = (teams) => ({
  type: RECEIVE_TEAMS,
  teams
});

export const fetchTeams = user_id => dispatch => (
  APIUtil.fetchTeams(user_id)
    .then(teams => dispatch(receiveTeams(teams)))
);

// export const updateUser = (user) => {
//   return (dispatch) => {
//     return APIUtils.updateUser(user.email, user.fname, user.lname, user.password)
//       .then( user => dispatch(receiveCurrentUser(user)),
//         errors => {
//           dispatch(receiveErrors(errors.responseJSON));
//         });
//   };
// };
