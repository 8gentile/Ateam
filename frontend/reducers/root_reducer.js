import session from './sessions_reducer';
import user from './user_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session,
  user,
});
