export const fetchUser = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id,
  });
};

export const updateUser = (email, fname, lname, password) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/user',
    data: {user: { email, fname, lname, password }}
  });
};

export const fetchTeams = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id + '/teams'
  });
};
