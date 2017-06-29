import * as APIUtil from '../utils/post_api_utils';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const fetchPosts = teamId =>  dispatch => {
	return APIUtil.fetchPosts(teamId)
    .then( posts => dispatch(receivePosts(posts)));
};

export const fetchPost = postId =>  dispatch => {
  return APIUtil.fetchPost(postId)
    .then( post => dispatch(receivePost(post)));
};

export const createPost = post => dispatch => {
  return APIUtil.createPost(post)
    .then( post => dispatch(receivePost(post)))
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
