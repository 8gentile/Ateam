
export const fetchUser = (user_id) => {
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

export const fetchTeams = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id
  });
};

export const createTeam = ({ name, manager_id }) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teams',
    data: {team: {name, manager_id}}
  });
};
