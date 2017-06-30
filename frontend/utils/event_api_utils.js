export const fetchEvents = teamId => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}/events`,
  })
};

// export const fetchPost = (teamId, postId) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/teams/${teamId}/posts/${postId}`,
//   })
// };

// export const createPost = post => {
//   return $.ajax({
//     method: 'POST',
//     url: `/api/posts/`,
//     data: {post},
//   })
// };

// export const destroyPost = postId => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/posts/${postId}`,
//   })
// };

// export const updatePost = post => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/teams/${post.team_id}/posts/${post.id}`,
//     data: {post},
//   })
// };