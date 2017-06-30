import * as APIUtil from '../utils/event_api_utils';
// import { createEventComment, destroyComment } from '../utils/comment_api_utils';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
// export const RECEIVE_POST = 'RECEIVE_POST';
// export const REMOVE_POST = 'REMOVE_POST';

export const fetchEvents = teamId =>  dispatch => {
  return APIUtil.fetchEvents(teamId)
    .then( events => dispatch(receiveEvents(events)));
};

// export const fetchPost = ( teamId, postId ) =>  dispatch => {
//   return APIUtil.fetchPost( teamId, postId)
//     .then( post => dispatch(receivePost(post)));
// };

// export const createPost = post => dispatch => {
//   return APIUtil.createPost(post)
//     .then( post => dispatch(receivePost(post)))
// };

// export const destroyPost = postId => dispatch => {
//   return APIUtil.destroyPost(postId)
//     .then( post => dispatch(removePost(post)));
// };

// export const updatePost = post => dispatch => {
//   return APIUtil.updatePost(post)
//     .then( post => dispatch(receivePost(post)));
// };

// export const newPostComment = comment => dispatch => {
//   return createPostComment(comment)
//     .then( post => dispatch(receivePost(post)));
// };

// export const destroyPostComment = commentId => {
//   return destroyComment(commentId)
//     .then( post => dispatch(receivePost(post)));
// };

// //POJO ACTIONS

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

// export const receivePost = post => ({
//   type: RECEIVE_POST,
//   post
// });

// const removePost = post => ({
//   type: REMOVE_POST,
//   post
// });
