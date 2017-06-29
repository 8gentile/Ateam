import {
  RECEIVE_POSTS,
  RECEIVE_POST
} from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      newState = merge({}, state);
      delete newState[action.post.id]
      const newPost = {[action.post.id]: action.post};
      return merge(newState, newPost);
    default:
      return state;
  }
};

export default postsReducer;