import React from 'react';
import { Link, hashHistory } from 'react-router-dom';


export default class UserDropDown extends React.Component {
  constructor (props){
    super(props);
  }


  render() {
    return (
      <div className="user-dropdown">
        <ul>
          <li className="dropdown-header"><p><span>PERSONAL SETTINGS</span></p></li>
          <li>
            <Link to={`/users/${this.props.currentUser.id}/edit`}>My profile (avatar, name, email, etc)</Link>
          </li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }

}

// implement later
// <li onClick={this.redirectToProfile}>My Profile</li>
// <li>
//   <Link to="/useredit">User Settings</Link>
// </li>
// for user edit page


// redirectToProfile () {
//   hashHistory.push('/users/' + this.props.currentUser.id);
// }
//
