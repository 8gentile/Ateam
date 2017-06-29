import {
  RECEIVE_POSTS
} from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    default:
      return state;
  }
};

export default postsReducer;