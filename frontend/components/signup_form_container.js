import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
