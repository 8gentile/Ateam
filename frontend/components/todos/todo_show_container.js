import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoShow from './todo_show';
import {
  requestTodo,
  destroyTodo,
} from '../../actions/todo_actions';
import {
  updateItem,
  destroyItem,
} from '../../actions/item_actions';

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
    updateItem: item => dispatch(updateItem(item)),
    destroyItem: itemId => dispatch(destroyItem(itemId)),
    destroyTodo: todoId => dispatch(destroyTodo(todoId)),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow));
