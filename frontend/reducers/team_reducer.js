import { RECEIVE_TEAMS, RECEIVE_TEAM, REMOVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullTeams = Object.freeze({
  entities: {},
});

const TeamReducer = ( state = _nullTeams, action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TEAMS:
      return merge({}, _nullTeams, { entities: action.teams });
    case RECEIVE_TEAM:
      return merge({}, state, { entities: action.team });
    case REMOVE_TEAM:
      newState = merge({}, state);
      debugger
      delete newState.entities[action.team.id];
      return newState;
    default:
      return state;
  }
};

export default TeamReducer;
