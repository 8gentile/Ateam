import {
  RECEIVE_EVENTS,
  // RECEIVE_POST,
  // REMOVE_POST
} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    // case RECEIVE_POST:
    //   newState = merge({}, state);
    //   delete newState[action.post.id]
    //   const newPost = {[action.post.id]: action.post};
    //   return merge(newState, newPost);
    // case REMOVE_POST:
    //   newState = merge({}, state);
    //   delete newState[action.post.id]
    //   return newState
    default:
      return state;
  }
};

export default eventReducer;