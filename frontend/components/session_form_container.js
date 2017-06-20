import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return {
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
