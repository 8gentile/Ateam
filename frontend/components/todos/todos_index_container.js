import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodosIndex from './todos_index';
import { requestTodos, createTodo, updateTodo, destroyTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = ({ teams, todos }, { match }) => ({
  todos: allTodos(todos),
  team: teams.entities[match.params.teamId],
  teamId: match.params.teamId,
});

const mapDispatchToProps = dispatch => ({
  requestTodos: team_id => dispatch(requestTodos(team_id)),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosIndex));
