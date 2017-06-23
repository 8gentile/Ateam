import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { updateUser, fetchUsers } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';


const mapStateToProps = ({ users, session }) => {
  const currentUserId = Object.keys(session.currentUser);
  return {
    users,
    currentUser: session.currentUser[currentUserId],
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      processForm: (formData, id) => dispatch(updateUser(formData, id)),
      fetchUsers: (user_id) => dispatch(fetchUsers(user_id)),
      clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);
