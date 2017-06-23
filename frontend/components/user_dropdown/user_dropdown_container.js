import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserDropDown from './user_dropdown';

const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropDown);
