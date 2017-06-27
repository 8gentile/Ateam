import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoShow from './todo_show';
import {
  requestTodo
} from '../../actions/todo_actions';

const mapStateToProps = ({ todos, teams, session }, { match }) => {
  return {
    todo: todos[match.params.todoId],
    currentUser: session.currentUser,
    todoId: match.params.todoId,
    team: teams.entities[match.params.teamId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestTodo: todo_id => dispatch(requestTodo(todo_id)),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow));
