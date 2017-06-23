import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, defaultState, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, defaultState, { errors: action.errors });
    case CLEAR_ERRORS:
      return merge({}, {currentUser: state.currentUser, errors: [] });
    default:
      return state;
  }
};

export default sessionReducer;
