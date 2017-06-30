export const fetchTeams = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/' + user_id + '/teams'
  });
};

export const fetchTeam = (team_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams/' + team_id
  });
};


export const createTeam = ({ name, manager_id }) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teams',
    data: {team: { name, manager_id }}
  });
};

export const destroyTeam = ( teamId ) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/teams/${teamId}`
  });
};
