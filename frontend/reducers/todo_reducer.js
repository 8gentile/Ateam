import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO,
         TODO_ERROR 
       } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_TODOS:
      return merge({}, action.todos);
    case RECEIVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id]
      const newTodo = {[action.todo.id]: action.todo};
      return merge(newState, newTodo);
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    // case TODO_ERROR:
    //   alert(action.error);
    default:
      return state;
  }
};

export default todosReducer;
