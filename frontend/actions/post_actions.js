import * as APIUtil from '../utils/post_api_utils';
import { createPostComment, destroyComment } from '../utils/comment_api_utils';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = teamId =>  dispatch => {
	return APIUtil.fetchPosts(teamId)
    .then( posts => dispatch(receivePosts(posts)));
};

export const fetchPost = ( teamId, postId ) =>  dispatch => {
  return APIUtil.fetchPost(teamId, postId)
    .then( post => dispatch(receivePost(post)));
};

export const createPost = post => dispatch => {
  return APIUtil.createPost(post)
    .then( post => dispatch(receivePost(post)))
};

export const destroyPost = postId => dispatch => {
  return APIUtil.destroyPost(postId)
    .then( post => dispatch(removePost(post)));
};

export const updatePost = post => dispatch => {
  return APIUtil.updatePost(post)
    .then( post => dispatch(receivePost(post)));
};

export const newPostComment = comment => dispatch => {
  return createPostComment(comment)
    .then( post => dispatch(receivePost(post)));
};

export const destroyPostComment = commentId => {
  return destroyComment(commentId)
    .then( post => dispatch(receivePost(post)));
};

//POJO ACTIONS

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = post => ({
  type: REMOVE_POST,
  post
});
