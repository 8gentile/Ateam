export const fetchTodos = team_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${team_id}/todos`,
  });
};

export const fetchTodo = (todo_id, team_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${team_id}/todos/${todo_id}`,
  });
};

export const createTodo = (todo, success, error) => {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo,
    success,
    error
  });
};

export const updateTodo = (todo, success) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: { todo },
    success
  });
};

export const destroyTodo = (todoId, success) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/todos/${todoId}`,
  });
};
