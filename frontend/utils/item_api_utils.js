export const fetchItems = (teamId, todoId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}/todos/${todoId}/items`
  });
};

export const createItem = (item) => {
  console.log(item);
  return $.ajax({
    method: 'POST',
    url: `/api/items`,
    data: {item} 
  });
};

export const updateItem = (item) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/teams/${item.teamId}/todos/${item.todoId}/items/${item.id}`,
    data: { item }
  });
};

export const destroyItem = (itemId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/items/${itemId}`
  });
};