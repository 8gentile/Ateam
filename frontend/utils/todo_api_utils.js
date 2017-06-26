export const fetchTodos = team_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${team_id}/todos`,
  });
};

export const fetchTodo = (id, success) => {
  return $.ajax({
    method: 'GET',
    url: `/api/todos/${id}`,
    success
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

export const destroyTodo = (todo, success) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/todos/${todo.id}`,
    success
  });
};
