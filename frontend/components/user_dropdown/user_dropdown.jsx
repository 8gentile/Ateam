import React from 'react';
import { Link, hashHistory } from 'react-router';


export default class UserDropDown extends React.Component {
  constructor (props){
    super(props);

    // this.redirectToProfile = this.redirectToProfile.bind(this);
    // this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  render() {
    return (
      <div className="user-drop-down">
        <ul>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }

}

// implement later
// <li onClick={this.redirectToProfile}>My Profile</li>

// redirectToProfile () {
//   hashHistory.push('/users/' + this.props.currentUser.id);
// }
//
// redirectToEdit () {
//   hashHistory.push('/users/' + this.props.currentUser.id + '/edit');
// }
