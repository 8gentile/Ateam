import * as APIUtils from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtils.login(user.email, user.password)
      .then( user => {
        return dispatch(receiveCurrentUser(user) );
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      });
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtils.logout()
      .then( () => dispatch(receiveCurrentUser(null)));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtils.signup(user.email, user.password)
      .then( user => dispatch(receiveCurrentUser(user),
        errors => {
          dispatch(receiveErrors(errors.responseJSON));
        }));
  };
};
