import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    guestLogIn: () => dispatch(login({
      email: "sedulity@appacademy.io",
      password: "starward",
    })),
    logout: () => dispatch(logout()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
