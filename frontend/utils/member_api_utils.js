export const addMember = (email, team_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/memberships`,
    dataType: "json",
    data: {
      email,
      team_id,
    },
  });
};

export const removeMember = (user_id, team_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${user_id}?team_id=${team_id}`,
  });
};
