import { RECEIVE_TEAMS, RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullTeams = Object.freeze({
  entities: {},
});

const TeamReducer = ( state = _nullTeams, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAMS:
      return merge({}, _nullTeams, { entities: action.teams });
    case RECEIVE_TEAM:
      return merge({}, state, { entities: action.team });
    default:
      return state;
  }
};

export default TeamReducer;
