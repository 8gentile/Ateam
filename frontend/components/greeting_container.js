import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';

const mapStateToProps = ({ session }) => {
  const currentUserId = Object.keys(session.currentUser);
  return {
    currentUser: session.currentUser[currentUserId]
  };
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
