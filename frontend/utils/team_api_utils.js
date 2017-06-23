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
