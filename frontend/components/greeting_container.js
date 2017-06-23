import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
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
