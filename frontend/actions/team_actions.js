import * as APIUtil from '../utils/team_api_utils';

export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";

export const receiveTeams = (teams) => ({
  type: RECEIVE_TEAMS,
  teams
});

export const receiveTeam = ( team ) => ({
  type: RECEIVE_TEAM,
  team
});

export const fetchTeam = teamId => (
  APIUtil.fetchTeam(teamId)
    .then( team => dispatch(receiveTeam(team)))
);

export const fetchTeams = user_id => dispatch => (
  APIUtil.fetchTeams(user_id)
    .then(teams => dispatch(receiveTeams(teams)))
);

export const createTeam = (team) => dispatch (
  APIUtil.createTeam(team)
    .then( team => dispatch(receiveTeam(team)))
);
