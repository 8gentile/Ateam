export const fetchUsers = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id,
  });
};

export const updateUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  });
};
