import { connect } from 'react-redux';
import UserEdit from './user_edit';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';


const mapStateToProps = ({ user, session }) => {
  return {
    user,
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      processForm: (formData, id) => dispatch(updateUser(formData, id)),
      fetchUser: (user_id) => dispatch(fetchUser(user_id)),
      clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);
