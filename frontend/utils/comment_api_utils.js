export const createPostComment = ({ body, userId, parentId }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: {
      comment: {
        body,
        user_id: userId,
        post_id: parentId,
      }
    }
  });
};

export const createTodoComment = ({ body, userId, parentId }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: {
      comment: {
        body,
        user_id: userId,
        todo_id: parentId,
      }
    }
  });
};

export const destroyComment = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`,
  });
};