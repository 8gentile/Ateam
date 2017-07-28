export const createComment = ({ body, userId, type, typeId }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: {
      comment: {
        body,
        user_id: userId,
        commentable_type: type,
        commentable_id: typeId,
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