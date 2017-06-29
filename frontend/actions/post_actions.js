import * as APIUtil from '../utils/post_api_utils';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const fetchPosts = teamId =>  dispatch => {
	return APIUtil.fetchPosts(teamId)
    .then(posts => dispatch(receivePosts(posts)));
};
 
//POJO ACTIONS

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});