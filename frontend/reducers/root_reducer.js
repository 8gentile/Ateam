import session from './sessions_reducer';
import users from './user_reducer';
import teams from './team_reducer';
import todos from './todo_reducer';
import posts from './posts_reducer';
import events from './event_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session,
  users,
  teams,
  todos,
  posts,
  events,
});
