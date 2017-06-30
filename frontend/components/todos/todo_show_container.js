import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoShow from './todo_show';
import { fetchUsers } from '../../actions/user_actions';
import {
  requestTodo,
  destroyTodo,
  newTodoComment,
  destroyTodoComment
} from '../../actions/todo_actions';
import {
  updateItem,
  destroyItem,
} from '../../actions/item_actions';
import allUsers from '../../reducers/selectors';

const mapStateToProps = ({ todos, teams, users, session }, { match }) => {
  return {
    todo: todos[match.params.todoId],
    userId: session.currentUser.id,
    currentUser: session.currentUser,
    todoId: match.params.todoId,
    teamId: match.params.teamId,
    team: teams.entities[match.params.teamId],
    users: allUsers(users),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestTodo: todo_id => dispatch(requestTodo(todo_id)),
    updateItem: item => dispatch(updateItem(item)),
    destroyItem: itemId => dispatch(destroyItem(itemId)),
    destroyTodo: todoId => dispatch(destroyTodo(todoId)),
    createComment: comment => dispatch(newTodoComment(comment)),
    fetchUsers: userId => dispatch(fetchUsers(userId)),
    destroyComment: commentId => dispatch(destroyTodoComment(commentId))
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow));
