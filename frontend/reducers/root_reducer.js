import session from './sessions_reducer';
import users from './user_reducer';
import teams from './team_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session,
  users,
  teams,
});
