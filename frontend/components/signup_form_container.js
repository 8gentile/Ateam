import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, clearErrors } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
