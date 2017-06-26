import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { createTodo, updateTodo } from '../../actions/todo_actions';


const mapStateToProps = ({ session }) => {
  return {
    user_id: session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (todo) => dispatch(createTodo({todo})),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
